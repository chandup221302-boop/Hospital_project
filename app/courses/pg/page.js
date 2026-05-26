'use client';

import React from 'react';
import styles from '../Courses.module.css';
import { FaWallet, FaArrowRight, FaMoneyBillTrendUp, FaFileSignature } from 'react-icons/fa6';

export default function PGCoursesPage() {
  const pgCourses = [
    { name: 'M.D. Anaesthesiology', seats: 8 },
    { name: 'M.D. Biochemistry', seats: 3 },
    { name: 'M.D. Pediatrics', seats: 3 },
    { name: 'M.D. Respiratory Medicine', seats: 3 },
    { name: 'M.S. Ophthalmology', seats: 4 },
    { name: 'M.S. Orthopaedics', seats: 3 },
    { name: 'M.S. Obstetrics & Gynaecology', seats: 3 },
    { name: 'M.S. Otorhinolaryngology (ENT)', seats: 4 },
    { name: 'M.D. Pathology', seats: 6 },
    { name: 'M.S. General Surgery', seats: 6 },
    { name: 'M.D. Pharmacology', seats: 2 },
    { name: 'M.D. General Medicine', seats: 3 },
    { name: 'M.D. Anatomy', seats: 3 },
    { name: 'M.D. Microbiology', seats: 1 },
    { name: 'M.D. Radio-diagnosis', seats: 4 },
  ];

  const permissionLinks = [
    { label: "General PG Permission", url: "https://heritageims.com/wp-content/uploads/2025/07/PG-Permission-.pdf" },
    { label: "Radio-diagnosis", url: "https://heritageims.com/wp-content/uploads/2024/04/Permission-letter-of-Radio-diagnosis.pdf" },
    { label: "Anatomy", url: "https://heritageims.com/wp-content/uploads/2024/04/Permission-letter-of-Anatomy.pdf" },
    { label: "Microbiology", url: "https://heritageims.com/wp-content/uploads/2024/04/Permission-letter-of-Microbiology.pdf" },
    { label: "Gen Medicine", url: "https://heritageims.com/wp-content/uploads/2025/07/Gen-Me" },
    { label: "Pathology", url: "https://heritageims.com/wp-content/uploads/2024/04/Pathology.pdf" },
    { label: "General Surgery", url: "https://heritageims.com/wp-content/uploads/2025/07/PG-Gen-Surgery-.pdf" },
    { label: "Respiratory", url: "https://heritageims.com/wp-content/uploads/2024/04/TB-Chest.pdf" },
    { label: "Anaesthesiology", url: "https://heritageims.com/wp-content/uploads/2025/07/PG-Anesthesia-.pdf" },
    { label: "Obstetrics & Gynaecology", url: "https://heritageims.com/wp-content/uploads/2024/04/OBG.pdf" },
    { label: "Biochemistry", url: "https://heritageims.com/wp-content/uploads/2024/04/Biochemistry.pdf" },
    { label: "Otorhinolaryngology", url: "https://heritageims.com/wp-content/uploads/2025/07/PG-ENT.pdf" },
    { label: "Pediatrics", url: "https://heritageims.com/wp-content/uploads/2024/04/Paedia.pdf" },
    { label: "Ophthalmology", url: "https://heritageims.com/wp-content/uploads/2025/07/PG-Ophathalmology.pdf" },
    { label: "Orthopaedics", url: "https://heritageims.com/wp-content/uploads/2024/04/Ortho.pdf" },
    { label: "Pharmacology", url: "https://heritageims.com/wp-content/uploads/2024/04/Pharmacology.pdf" }
  ];

  return (
    <div className={styles.mainContainer}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="container">
          <span className={styles.heroBadge}>Specialization Programs</span>
          <h1 className={styles.heroTitle}>Post Graduate <span>(MD/MS) Courses</span></h1>
          <p className={styles.heroSubtitle}>
            HIMS offers comprehensive postgraduate training with high clinical exposure. Choose from our 56 available seats across 15+ specializations to advance your medical career.
          </p>
        </div>
      </section>

      <div className="container">
        <div className={styles.contentWrapper}>
          <div className={styles.sectionHeader}>
            <h2>P.G. (MD/MS) Seats Available in HIMS</h2>
            <div className={styles.titleUnderline}></div>
          </div>

          <div className={styles.tableContainer}>
            <table className={styles.courseTable}>
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th style={{ textAlign: 'center' }}>Available Seats</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: 'rgba(255, 210, 122, 0.15)' }}>
                  <td><strong>Total Post Graduate Seats</strong></td>
                  <td style={{ textAlign: 'center' }}><span className={styles.seatHighlight} style={{ backgroundColor: '#c9922a' }}>56</span></td>
                </tr>
                {pgCourses.map((course, index) => (
                  <tr key={index}>
                    <td><strong>{course.name}</strong></td>
                    <td style={{ textAlign: 'center' }}><span className={styles.seatHighlight}>{course.seats}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.linksSection}>
            <div className={styles.linkCard}>
              <FaWallet size={30} color="#6d1020" />
              <span>Fees Structure</span>
              <a href="#" className={styles.actionBtn}>
                View Fees <FaArrowRight />
              </a>
            </div>
            
            <div className={styles.linkCard}>
              <FaMoneyBillTrendUp size={30} color="#6d1020" />
              <span>PG Stipend Details</span>
              <a href="#" className={styles.actionBtn}>
                View Stipend <FaArrowRight />
              </a>
            </div>
          </div>

          <div className={styles.docLinksBox}>
            <div className={styles.docLinksTitle}>
              <FaFileSignature /> Permission Letters (NMC Approvals)
            </div>
            <div className={styles.docLinksGrid}>
              {permissionLinks.map((link, idx) => (
                <a key={idx} href={link.url} target="_blank" rel="noreferrer" className={styles.docLinkItem}>
                  <FaFileSignature color="#c9922a" /> {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
