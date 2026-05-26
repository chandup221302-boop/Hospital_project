const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const urls = [
  'https://heritageims.com/general-medicine/',
  'https://heritageims.com/comm-medicine/',
  'https://heritageims.com/ortho-2/',
  'https://heritageims.com/emergency-medicine/',
  'https://heritageims.com/radiology/',
  'https://heritageims.com/ent-2/',
  'https://heritageims.com/anaesthesiology/',
  'https://heritageims.com/anatomy/',
  'https://heritageims.com/tb-amp-chest/',
  'https://heritageims.com/derma/',
  'https://heritageims.com/surgery/',
  'https://heritageims.com/biochemistry-2/',
  'https://heritageims.com/forensic-medicine/',
  'https://heritageims.com/obstetrics-amp-gynecology/',
  'https://heritageims.com/pathology-2/',
  'https://heritageims.com/pediatrics/',
  'https://heritageims.com/physiology/',
  'https://heritageims.com/microbiology-2/',
  'https://heritageims.com/pharmacology-2/',
  'https://heritageims.com/psychiatry/',
  'https://heritageims.com/ophthalmology/',
  'https://heritageims.com/dental/'
];

function getCategory(slug) {
  const nonClinical = [
    'anatomy', 'physiology', 'pharmacology-2', 'pathology-2',
    'microbiology-2', 'forensic-medicine', 'biochemistry-2'
  ];
  return nonClinical.includes(slug) ? 'Non Clinical' : 'Clinical';
}

function getTitle(slug) {
  const map = {
    'general-medicine': 'General Medicine',
    'comm-medicine': 'Community Medicine',
    'ortho-2': 'Orthopedics',
    'emergency-medicine': 'Emergency Medicine',
    'radiology': 'Radiology',
    'ent-2': 'ENT',
    'anaesthesiology': 'Anaesthesiology',
    'anatomy': 'Anatomy',
    'tb-amp-chest': 'TB & Chest (Respiratory Medicine)',
    'derma': 'Dermatology',
    'surgery': 'General Surgery',
    'biochemistry-2': 'Biochemistry',
    'forensic-medicine': 'Forensic Medicine',
    'obstetrics-amp-gynecology': 'Obs & Gynac',
    'pathology-2': 'Pathology',
    'pediatrics': 'Pediatrics',
    'physiology': 'Physiology',
    'microbiology-2': 'Microbiology',
    'pharmacology-2': 'Pharmacology',
    'psychiatry': 'Psychiatry',
    'ophthalmology': 'Ophthalmology',
    'dental': 'Dentistry'
  };
  return map[slug] || slug;
}

// Function to find the matching image in local directory
function findMatchingImage(facultyName, category, departmentTitle) {
  const baseDir = path.join(__dirname, '..', 'public', 'Images', 'DEPARTMENTS', category);
  
  // Find the exact folder name because there might be slight variations
  if (!fs.existsSync(baseDir)) return null;
  const folders = fs.readdirSync(baseDir);
  let deptFolder = folders.find(f => f.toLowerCase() === departmentTitle.toLowerCase() || f.replace(/-/g, ' ') === departmentTitle);
  if (!deptFolder) {
      deptFolder = folders.find(f => f.toLowerCase().includes(departmentTitle.split(' ')[0].toLowerCase()));
  }
  
  if (!deptFolder) return null;
  
  const deptDirPath = path.join(baseDir, deptFolder);
  if (!fs.existsSync(deptDirPath)) return null;

  const images = fs.readdirSync(deptDirPath).filter(f => f.endsWith('.webp') || f.endsWith('.jpg') || f.endsWith('.png'));
  
  // Normalize names for comparison
  const normalize = (name) => name.replace(/Dr\.|Prof\.|/gi, '').replace(/[^a-zA-Z]/g, '').toLowerCase();
  const normalizedFacultyName = normalize(facultyName);

  for (let img of images) {
    if (normalize(path.parse(img).name) === normalizedFacultyName) {
      return `/Images/DEPARTMENTS/${category}/${deptFolder}/${img}`;
    }
  }
  return null;
}

async function scrape() {
  const results = [];
  
  for (const url of urls) {
    try {
      const slug = url.split('/').filter(Boolean).pop();
      const title = getTitle(slug);
      const category = getCategory(slug);
      console.log(`Scraping ${url}...`);
      
      const response = await fetch(url);
      const html = await response.text();
      const $ = cheerio.load(html);
      
      // Extract top description
      // Usually it's in a specific div or the first few paragraphs in the main content area
      // We'll look for the element-or-widget containing the text before the table
      let description = '';
      const paragraphs = [];
      $('div[data-widget_type="text-editor.default"] p').each((i, el) => {
          paragraphs.push($(el).text().trim());
      });
      if(paragraphs.length > 0) {
          description = paragraphs.join('\n\n');
      } else {
          description = $('p').first().text().trim();
      }

      // Extract table
      const faculty = [];
      $('table tr').each((i, el) => {
        if (i === 0) return; // skip header
        const cols = $(el).find('td');
        if (cols.length >= 5) {
          const name = $(cols[1]).text().trim();
          if (name) {
              const imagePath = findMatchingImage(name, category, title);
              faculty.push({
                sno: $(cols[0]).text().trim(),
                name: name,
                qualification: $(cols[2]).text().trim(),
                designation: $(cols[3]).text().trim(),
                registrationNo: $(cols[4]).text().trim(),
                image: imagePath || ''
              });
          }
        }
      });

      results.push({
        slug,
        title,
        category,
        description,
        faculty
      });
      
    } catch (error) {
      console.error(`Failed to scrape ${url}`, error);
    }
  }

  const dataPath = path.join(__dirname, '..', 'data');
  if (!fs.existsSync(dataPath)) {
      fs.mkdirSync(dataPath);
  }
  fs.writeFileSync(path.join(dataPath, 'departments.json'), JSON.stringify(results, null, 2));
  console.log('Scraping completed. Data saved to data/departments.json');
}

scrape();
