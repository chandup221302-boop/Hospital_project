'use client';

import styles from '../../Research.module.css';
import { FaFileLines, FaUserGraduate } from 'react-icons/fa6';

const studentData = [
  { title: "Comparative evaluation of nalbuphine vs fentanyl as an adjuvant to ketofol for deep sedation during ERCP – A randomized controlled trial.", investigator: "Dr Dhruv Pandey" },
  { title: "Comparative evaluation of dexmedetomidine vs ketamine with dexmedetomidine on hemodynamic stability and analgesic efficiency in dorso-lumbar spine surgery under general anesthesia. A double blinded randomised control trial.", investigator: "Dr Rishabh kumar singh" },
  { title: "Comparison of efficacy of adding varying doses of nalbuphine to bupivacaine for brachial plexus block for upper limb surgeries.A randomized control trial.", investigator: "Dr Shubham Jaiswal" },
  { title: "Comparison of two different dosage of oxytocin to assess uterine contractility and hemodynamic changes in elective cesareansection.An observational study.", investigator: "Dr Mohit Drall" },
  { title: "Effects of nebulized dexmedetomidine before propofol induction on the quality of I-GEL insertion and intra operative hemodynamics. A prospective double blind randomized control study.", investigator: "Dr Priyanka Kaushik" },
  { title: "Comparative efficacy of pre-operative nebulisation of dexmedetomidine and lignocaine on stress response prior to laryngoscopy and intubation. A randomised control trial.", investigator: "Dr Shwetapadma Mishra" },
  { title: "Validity of blood urea nitrogen to serum albumin ratio as an independent biomarker to predict severity and mortality in septic shock patients.", investigator: "Dr Akansha Mishra" },
  { title: "Evaluation of efficacy of incision location on orthogonality of cornea following phacoemulsification surgery.", investigator: "Dr Abhayjeet Singh Saini" },
  { title: "Diagnostic efficacy of GCL thickness and RNFL thickness in diagnosing pre perimetric glaucoma.", investigator: "Dr Isha Arora" },
  { title: "Study epidemiological characteristics , microbiological profile and treatment outcome of microbial corneal ulcer.", investigator: "Dr Smiriti Tiwari" },
  { title: "Analysis of central macular thickness, retinal nerve fibre layer thickness and intraocular pressure in type 2 diabetes mellitus on various treatment regimens.", investigator: "Dr Vishakha Gautam" },
  { title: "Bacteriological surveillance and resistance trends of pathogens isolated from hospital environment and medical devices.", investigator: "Dr Shivam Singh" },
  { title: "Study on impact of FESS on patients with chronic rhinosinusitis with nasal polyps.", investigator: "Dr Pranay Reddy Madadi" },
  { title: "A Comparative study on clinical presentations diagnostic and therapeutic challenges of tuberculosis cervical lymphadenitis.", investigator: "Dr Vipul Anand" },
  { title: "To study the predictive value of tympanic membrane perforation and audiometric thresholds on ossicular status in cases of mucosal chronic otitis media.", investigator: "Dr Aarzoo" },
  { title: "Comprehensive analysis of outcome of stapedotomy in otosclerosis and the factors affecting its outcome.", investigator: "Dr Pragya Singh" },
  { title: "MRI based mapping of endometriosis using #Enzian classification and its correlation with intra-operative and histopathological finding.", investigator: "Dr Aaryan Amit Heda" },
  { title: "Efficacy of computed tomography in evaluation of sinonasal masses with histopathological correlation.", investigator: "Dr Abhishek Kakkar" },
  { title: "Role of B mode ultrasonography in evaluation of ocular pathologies.", investigator: "Dr Manisha Suri" },
  { title: "Role of imaging in evaluation of oral cancers and its histopathological correlation.", investigator: "Dr Harsh Gupta" },
  { title: "Complete blood picture and morphological changes in peripheral blood smear in CKD patients.", investigator: "Dr Tanveer Chandrakar" },
  { title: "Comparative study of enhanced recovery after surgery (ERAS) protocol and conventional care on functional recovery in women undergoing elective caesarean delivery.", investigator: "Dr Abhineet Yadav" },
  { title: "Comparative analysis of therapeutic effectiveness and fetomaternal outcome in cases of pregnancy with anemia.Role of oral therapeutic iron versus injectable ferric carboxymaltose.", investigator: "Dr Aditi Rai" },
  { title: "Association of anti-mullerian hormone and cardiometabolic health in women with polycystic ovarian syndrome.", investigator: "Dr Apurva" },
  { title: "An epidemiological study of road traffic accidents presenting to tertiary care hospital.", investigator: "Miss Mukta Garad" },
  { title: "Distribution pattern of recurrent laryngeal nerve and thyroid artery: A cadaveric study.", investigator: "Dr Ashish Rai" },
  { title: "A study on tumor budding in invasive breast carcinoma and its relationship with histopathological prognostic factors.", investigator: "Dr Shradha Singh" },
  { title: "Clinicopathological spectrum of ovarian lesions.", investigator: "Dr Mavara Elahi" },
  { title: "A comparative study of fine needle aspiration cytology and ultrasound finding of thyroid lesions.", investigator: "Dr Amrita Singh" },
  { title: "Microbiolocal and radiological profile of patients with bronchiectasis.", investigator: "Dr Yadav Ajit Amritlal" },
  { title: "Dianostic yield of pleural fluid analysis and CT guided pleural biopsy in tertiary health care centre.", investigator: "Dr Raj Rajeshwar Mishra" },
  { title: "Prevalance of metabolic syndrome in COPD patients and its association with severity of disease.", investigator: "Dr Rajat" },
  { title: "Histopathological study on detection of Helicobacter pylori in gastric biopsy specimens at a tertiary care centre using Giemsa stain and rapid H. pylori staining kit with the comparison of two methods.", investigator: "Dr Ritesh Pandey" },
  { title: "Endometrial blood vessel morphometry and histopathological spectrum of endometrial lesions in women with atypical uterine bleeding.", investigator: "Dr Soumya Singh" },
  { title: "Assessment of ambulatory blood pressure monitoring in patients of chronic kidney disease.", investigator: "Dr Abhijeet Bhaskar Tripathi" },
  { title: "Correlation between lactate clearance APACHE II score and SOFA score and their prognostic value in determining overall prognosis in patients with sepsis.", investigator: "Dr Lokesh Dudani" },
  { title: "Steatotic liver as a marker of metabolic syndrome in healthy individual.A tertiary care centre based observational study.", investigator: "Dr Adityaraj Maindarge" },
  { title: "Correlation of clinico-radiological, cytopathological and histopathological findings in case of fibroadenoma of breast.", investigator: "Dr Siddharth Chand Patel" },
  { title: "Outcome of wound of anterior abdominal wall incisions by using cutting diathermy vs scalpel.A comparative study.", investigator: "Dr Saurabh Sanjay Sirmanwar" },
  { title: "A study on association between cholelithiasis and type 2 diabetes mellitus at a tertiary care centre.", investigator: "Dr Nikhil Chauhan" },
  { title: "Comparative study of laser treatment and other conventional methods in the treatment of fistula-in-ano.", investigator: "Dr Ankur Tripathi" },
  { title: "Metabolic evaluation in patients with renal stone disease and its correlation with risk factor.", investigator: "Dr Ashish Gupta" },
  { title: "Validation of 5F`s mnemonic for cholelithiasis at a tertiary care centre.", investigator: "Dr Salunkhe Mayuri Prakash" },
  { title: "Efficacy of IV ibuprofen vs IV low dose ketamine as pre-emptive analgesia in laproscopic cholecystectomy: prospective randomised single blind study.", investigator: "Dr Lata Dangi" },
  { title: "Functional outcome in intertrochanteric fracture of femur managed with proximal femoral nail vs Halifax nailing.", investigator: "Dr Aditya Shirsath" },
  { title: "Outcome of lateral parapatellar approach for intramedullary nailing in shaft of tibia fractures.", investigator: "Dr Chirayu Mehta" },
  { title: "Current status and trends of antimicrobial resistance among clinical isolates in tertiary care units.", investigator: "Miss Shreya Jha" },
  { title: "Evaluation of 5A`s of human papilloma vaccination awareness, attitude, apprehension, action and acceptability among healthcare professionals and general public a tertiary care centre.", investigator: "Dr Prachi" },
  { title: "Knowledge, attitude and practice of artificial intelligence among doctors and medical students: A cross sectional study.", investigator: "Dr Patel Mit Alpesh kumar" },
  { title: "Long term outcomes of children with idiopathic nephrology syndrome.", investigator: "Dr Kiran Basantani" },
  { title: "Screening for inborn errors of metabolism in newborns.", investigator: "Dr Akash Kathole" },
  { title: "Clinical profile and outcome in patients admitted in PICU at a tertiary care centre. An observational study.", investigator: "Dr Archana Lachuriya" },
  { title: "Burden of internet addiction, Binge watching, Social anxiety and Depression among Undergraduate Medical students, Varanasi", investigator: "Dr Garima Singh" },
  { title: "Functioning of Ayushman Bharat (PMJAY) in a tertiary care hospital:An analysis of utilization trends.", investigator: "Dr Harshita Rai" },
  { title: "Knowledge, Attitude and Practice Towards Palliative Care Among Nurses in a tertiary care hospital: An assessment of influencing factors", investigator: "Ms Aditi Agarwal" }
];

export default function StudentsResearchPage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.hero}>
        <div className="container">
          <span className={styles.heroBadge}>Academic Excellence</span>
          <h1>Students <span>Research</span></h1>
          <p>Highlighting the innovative research and clinical studies conducted by our dedicated medical students.</p>
        </div>
      </div>

      <div className={styles.contentSection}>
        <div className="container">
          <div className={styles.statsBar}>
            <div className={styles.statItem}>
              <span className={styles.statVal}>{studentData.length}+</span>
              <span className={styles.statLbl}>Student Researches</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>Active</span>
              <span className={styles.statLbl}>Research Programs</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>100%</span>
              <span className={styles.statLbl}>Faculty Support</span>
            </div>
          </div>

          <h2 className={styles.sectionHeader}>List Of Research & Publications</h2>
          <div className={styles.pubList}>
            {studentData.map((item, idx) => (
              <div key={idx} className={styles.pubCard}>
                <div className={styles.pubIcon}>
                  <FaUserGraduate />
                </div>
                <div className={styles.pubInfo}>
                  <h3 className={styles.pubTitle}>{item.title}</h3>
                  <div className={styles.pubAuthors}>
                    <strong>Investigator:</strong> &nbsp;{item.investigator}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
