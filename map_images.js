const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'app/faculty-research/teaching-faculty/data.js');
const imgDir = path.join(__dirname, 'public/Images/teaching-faculty');

let dataStr = fs.readFileSync(dataFilePath, 'utf8');

const imageFiles = fs.readdirSync(imgDir).filter(f => f.endsWith('.webp'));

const manualMap = {
  "Dr. Abhishek das": "Dr. Abhishek Das.webp",
  "Dr. Aditya Narayan Chaudhary": "Dr. Aditya Narayan Choudhary.webp",
  "Dr. Ajay Kumar": "Dr. Ajay Kumar Pandey.webp", // from Surgery
  "Dr. Alok Ojha": "Dr. Alok Ojha.webp",
  "Dr. Harendra Ojha": "Dr. Harendra Ojha.webp",
  "Dr. Haramohan Sahoo": "Dr. Harmohan Saho.webp",
  "Dr. Lavanya Anuranjani": "Dr. Lavanya Anuranjani.webp",
  "Dr. Neeraj Sharma": "Dr. Neeraj Sharma.webp",
  "Dr. Nilesh Rai": "Dr. Nilesh Kumar Rai.webp", // from Medicine
  "Dr. Rashmi Singhl": "Dr. Rashmi Singh.webp",
  "Dr. Ravi": "Dr. Ravi.webp",
  "Dr. Vibha Mishra": "Dr. Vibha Mishra.webp",
  "Dr. Yogesh Gaur": "Dr. Yogesh Kumar Gaur.webp",
  "Prof. G. N. Srivastava": "Prof (Dr.) G N Srivastava.webp",
  "Dr. O. P. S. Maurya": "Prof.(Dr) Om Prakash Maurya.webp",
  "Prof. Amit Rastogi": "Prof.(Dr.) Amit Rastogi.webp",
  "Dr. Garima Rai": "Prof.(Dr.) Garima Rai.webp",
  "Dr. M.S.I. Siddiqui": "Prof.(Dr.) M. S. I. Siddiqui.webp",
  "Dr. Madhu Jain": "Prof.(Dr.) Madhu Jain.webp",
  "Dr. Madhukar Rai": "Prof.(Dr.) Madhukar Rai.webp",
  "Dr. O. P. Mishra": "Prof.(Dr.) O. P. Mishra.webp",
  "Prof.(Dr.) S K Singh": "Prof.(Dr.) S K Singh.webp",
  "Prof. S. K. Saraf": "Prof.(Dr.) S. K. Saraf.webp",
  "Dr. Saurabh Agarwal": "Prof.(Dr.) Saurabh Agrawal.webp",
  "Dr. Shrawin Singh": "Prof.(Dr.) Shrawin Singh.webp",
  "Prof.(Dr.) V K Dixit": "Prof.(Dr.) V K Dixit.webp",
  "Dr. Vishal Singh": "Prof.(Dr.) Vishal Singh.webp",
};

let output = dataStr;

// We will use a regex to replace each `{ sno: ..., name: "X", designation: "Y" }` 
// with `{ sno: ..., name: "X", designation: "Y", image: "Z" }`

for (let name in manualMap) {
  const img = manualMap[name];
  const regex = new RegExp(`(name:\\s*"${name.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}"\\s*,\\s*designation:\\s*"[^"]+")`, 'g');
  output = output.replace(regex, `$1, image: "${img}"`);
}

fs.writeFileSync(dataFilePath, output);
console.log('Done mapping images.');
