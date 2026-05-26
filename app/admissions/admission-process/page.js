'use client';

import React from 'react';
import styles from './AdmissionProcess.module.css';
import { 
  FaUserDoctor, FaLaptopFile, FaListCheck, FaRegAddressCard, 
  FaHospitalUser, FaFileLines, FaGraduationCap, FaIdBadge,
  FaFileImage, FaNotesMedical, FaBuildingColumns, FaCheckDouble
} from 'react-icons/fa6';

export default function AdmissionProcessPage() {
  const processSteps = [
    {
      icon: <FaUserDoctor />,
      title: "Qualify NEET Exam",
      desc: "All admissions to MBBS/MD/MS courses are strictly based on merit in the National Eligibility cum Entrance Test (NEET). Candidates must secure the qualifying percentile."
    },
    {
      icon: <FaLaptopFile />,
      title: "State/Central Counseling",
      desc: "Register online for the UP State Centralized Counseling conducted by the Directorate General of Medical Education and Training (UPDGME) at upneet.gov.in."
    },
    {
      icon: <FaListCheck />,
      title: "Choice Filling & Locking",
      desc: "During the online counseling process, candidates must select and lock 'Heritage Institute of Medical Sciences (HIMS)' as their preferred choice of institution."
    },
    {
      icon: <FaRegAddressCard />,
      title: "Seat Allotment",
      desc: "Upon successful allotment of a seat at HIMS by the counseling authority, download the provisional allotment letter from the official portal."
    },
    {
      icon: <FaHospitalUser />,
      title: "Reporting to Institute",
      desc: "Report physically to the HIMS campus within the stipulated time frame specified in the allotment letter to complete the admission formalities."
    },
    {
      icon: <FaCheckDouble />,
      title: "Document Verification",
      desc: "Submit all original academic and personal documents for verification, complete the medical fitness test, and pay the requisite transparent fees as per State Government Policy."
    }
  ];

  const documentsRequired = [
    { text: "NEET UG / PG Admit Card", icon: <FaFileLines /> },
    { text: "NEET UG / PG Score Card / Rank Letter", icon: <FaFileLines /> },
    { text: "UP NEET Provisional Allotment Letter", icon: <FaBuildingColumns /> },
    { text: "10th Marksheet & Passing Certificate", icon: <FaGraduationCap /> },
    { text: "12th Marksheet & Passing Certificate", icon: <FaGraduationCap /> },
    { text: "MBBS Marksheets & Degree (For PG Admissions)", icon: <FaUserDoctor /> },
    { text: "Transfer Certificate (TC) / Migration Certificate", icon: <FaFileLines /> },
    { text: "Character Certificate from last attended institute", icon: <FaIdBadge /> },
    { text: "Domicile Certificate (If applicable)", icon: <FaFileLines /> },
    { text: "Category / Caste Certificate (If applicable)", icon: <FaFileLines /> },
    { text: "Aadhar Card (Student & Parents)", icon: <FaRegAddressCard /> },
    { text: "8-10 Recent Passport Size Photographs", icon: <FaFileImage /> },
    { text: "Medical Fitness Certificate", icon: <FaNotesMedical /> }
  ];

  return (
    <div className={styles.mainContainer}>
      <section className={styles.heroSection}>
        <span className={styles.heroBadge}>Join Excellence</span>
        <h1 className={styles.heroTitle}>Admission <span>Process</span></h1>
        <p className={styles.heroSubtitle}>
          Heritage Institute of Medical Sciences (HIMS)<br/>
          Simple, transparent, and strictly merit-based admission guidelines.
        </p>
      </section>

      <div className={styles.contentWrapper}>
        <div className={styles.introCard}>
          <p className={styles.introText}>
            HIMS offers an <strong>NMC-approved</strong> curriculum affiliated with <strong>MGKVP & ABVM University</strong>. 
            We pride ourselves on the transparency of our fee structure, with <strong>no hidden costs</strong>. 
            Every stipulation is in accordance with the <strong>State Government Policy</strong>. 
            What you see is what you pay — full transparency, no surprises.
          </p>
          <div className={styles.highlightBox}>
            <FaBuildingColumns size={24} />
            <span>Admissions are strictly based on NEET Merit & UPDGME Counseling</span>
          </div>
        </div>

        <h2 className={styles.sectionHeading}>Step-by-Step <span>Process</span></h2>
        
        <div className={styles.processGrid}>
          {processSteps.map((step, index) => (
            <div key={index} className={styles.processCard}>
              <div className={styles.stepNumber}>{index + 1}</div>
              <div className={styles.processIcon}>{step.icon}</div>
              <h3 className={styles.processTitle}>{step.title}</h3>
              <p className={styles.processDesc}>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.docsSection}>
          <h2 className={styles.sectionHeading}>Important <span>Documents Required</span></h2>
          <p className="text-center text-muted mb-4">Please bring the original documents along with 2 sets of photocopies at the time of reporting.</p>
          
          <div className={styles.docsGrid}>
            {documentsRequired.map((doc, index) => (
              <div key={index} className={styles.docItem}>
                <div className={styles.docIcon}>{doc.icon}</div>
                <p className={styles.docText}>{doc.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
