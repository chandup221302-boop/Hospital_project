import styles from './DepartmentDetail.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const dataPath = path.join(process.cwd(), 'data', 'departments.json');
  let department = null;
  if (fs.existsSync(dataPath)) {
    const departments = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    department = departments.find(d => d.slug === slug);
  }
  
  if (!department) {
    return { title: 'Department Not Found' };
  }

  return {
    title: `${department.title} | HIMS Varanasi`,
    description: department.description.substring(0, 150) + '...',
  };
}

export default async function DepartmentDetailPage({ params }) {
  const { slug } = await params;
  
  const dataPath = path.join(process.cwd(), 'data', 'departments.json');
  let department = null;
  if (fs.existsSync(dataPath)) {
    const departments = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    department = departments.find(d => d.slug === slug);
  }

  if (!department) {
    notFound();
  }

  // Filter out headers from faculty list, and bad concatenated rows
  const cleanFaculty = department.faculty.filter(f => {
    // Skip if it's a header
    if (f.sno === 'S.No' || f.name === 'Name') return false;
    // Skip if sno length is suspiciously long (indicates bad parsing of concatenated row)
    if (f.sno.length > 5 && !f.sno.match(/^[0-9]+$/)) return false;
    // Must have a valid name
    if (!f.name || f.name.length < 3) return false;
    
    return true;
  });

  return (
    <div className={styles.mainContainer}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>{department.category} Department</span>
            <h1>Department of <span>{department.title}</span></h1>
          </div>
        </div>
      </section>

      {/* DESCRIPTION SECTION */}
      <section className={styles.descSection}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className={styles.descCard}>
                <h3 className={styles.descTitle}>About the Department</h3>
                <div className={styles.descText}>
                  {department.description.split('\n\n').filter(p => p.length > 20).map((para, idx) => (
                    <p key={idx}>{para.trim()}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACULTY SECTION */}
      {cleanFaculty.length > 0 && (
        <section className={styles.facultySection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.subHeader}>Our Experts</span>
              <h2>Faculty <span>Members</span></h2>
            </div>
            
            <div className={styles.tableWrapper}>
              <table className={styles.facultyTable}>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Qualification</th>
                    <th>Designation</th>
                    <th>Registration No.</th>
                    <th>Photograph</th>
                  </tr>
                </thead>
                <tbody>
                  {cleanFaculty.map((member, index) => (
                    <tr key={index}>
                      <td data-label="S.No">{member.sno || index + 1}</td>
                      <td data-label="Name" className={styles.fwBold}>{member.name}</td>
                      <td data-label="Qualification">{member.qualification}</td>
                      <td data-label="Designation">{member.designation}</td>
                      <td data-label="Registration No.">{member.registrationNo}</td>
                      <td data-label="Photograph" className={styles.imgCell}>
                        {member.image ? (
                          <div className={styles.imgWrapper}>
                            <Image 
                              src={member.image} 
                              alt={member.name} 
                              width={80} 
                              height={90} 
                              className={styles.facultyImg} 
                            />
                          </div>
                        ) : (
                          <div className={styles.placeholderImg}>N/A</div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
