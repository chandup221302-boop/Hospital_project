'use client';

import React, { useState } from 'react';
import { facultyData } from './data';
import { topFacultyData } from './topData';
import styles from './TeachingFaculty.module.css';
import { FaFilePdf, FaChevronDown } from 'react-icons/fa6';

export default function TeachingFaculty() {
  const [openDept, setOpenDept] = useState(facultyData[0]?.department);

  const toggleDept = (dept) => {
    setOpenDept(openDept === dept ? null : dept);
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <h1 className={styles.pageTitle}>Teaching Faculty</h1>
          <p className={styles.pageSubtitle}>Our Dedicated and Experienced Medical Professionals</p>
          <a 
            href="/Downloads/Teaching-Faculty-List.pdf" 
            download="Teaching-Faculty-List.pdf"
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.downloadBtn}
          >
            <FaFilePdf className={styles.pdfIcon} /> Click here to download Teaching Faculty List
          </a>
        </div>
      </div>

      <div className={styles.contentSection}>
        {/* Top Faculty Grid (with Images) */}
        <div className={styles.topFacultyGrid}>
          {topFacultyData.map((faculty, idx) => (
            <div key={idx} className={styles.topCard}>
              <div className={styles.topCardImageContainer}>
                <img 
                  src={`/Images/teaching-faculty/${faculty.image}`} 
                  alt={faculty.name} 
                  className={styles.topImage}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/Images/Logo.webp';
                    e.target.style.objectFit = 'contain';
                  }}
                />
              </div>
              <div className={styles.topNameBox}>
                {faculty.name}
              </div>
              <div className={styles.topDesignation}>
                {faculty.designation}
              </div>
            </div>
          ))}
        </div>

        {/* Department Wise Text Data */}
        <div className={styles.otherDataSection}>
          <h2 className={styles.sectionHeader}>Department-wise Faculty Directory</h2>
          <div className={styles.accordionContainer}>
            {facultyData.map((deptData, index) => (
              <div key={index} className={styles.deptAccordion}>
                <button 
                  className={`${styles.accordionHeader} ${openDept === deptData.department ? styles.active : ''}`}
                  onClick={() => toggleDept(deptData.department)}
                >
                  <h2>{deptData.department}</h2>
                  <FaChevronDown className={`${styles.chevron} ${openDept === deptData.department ? styles.rotated : ''}`} />
                </button>
                
                <div className={`${styles.accordionContent} ${openDept === deptData.department ? styles.open : ''}`}>
                  <div className={styles.tableResponsive}>
                    <table className={styles.facultyTable}>
                      <thead>
                        <tr>
                          <th>S.No</th>
                          <th>Name</th>
                          <th>Designation</th>
                        </tr>
                      </thead>
                      <tbody>
                        {deptData.members.map((member, idx) => (
                          <tr key={idx}>
                            <td>{member.sno}</td>
                            <td>{member.name !== '-' ? member.name : 'TBA'}</td>
                            <td>{member.designation}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
