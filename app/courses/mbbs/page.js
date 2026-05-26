'use client';

import React from 'react';
import Image from 'next/image';
import styles from '../Courses.module.css';
import { FaDownload, FaWallet, FaFileSignature, FaArrowRight } from 'react-icons/fa6';

export default function MBBSPage() {
  return (
    <div className={styles.mainContainer}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="container">
          <span className={styles.heroBadge}>NMC Approved Program</span>
          <h1 className={styles.heroTitle}>Bachelor of Medicine and <span>Bachelor of Surgery</span></h1>
          <p className={styles.heroSubtitle}>
            Join our 200-seat MBBS program and train under world-class faculty in a 1,000-bed hospital. 
            Begin your journey toward becoming a confident and compassionate medical professional.
          </p>
        </div>
      </section>

      <div className="container">
        <div className={styles.contentWrapper}>
          <div className={styles.sectionHeader}>
            <h2>MBBS Seats Available in HIMS</h2>
            <div className={styles.titleUnderline}></div>
          </div>

          <div className={styles.tableContainer}>
            <table className={styles.courseTable}>
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th style={{ textAlign: 'center' }}>Total Seats</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>MBBS</strong> (Bachelor of Medicine and Bachelor of Surgery)</td>
                  <td style={{ textAlign: 'center' }}><span className={styles.seatHighlight}>200</span></td>
                </tr>
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
              <FaFileSignature size={30} color="#6d1020" />
              <span>Permission Letter</span>
              <a href="https://heritageims.com/wp-content/uploads/2025/08/ilovepdf_merged-2.pdf" target="_blank" rel="noreferrer" className={styles.actionBtn}>
                Download PDF <FaDownload />
              </a>
            </div>
          </div>

          <div className={styles.sectionHeader} style={{ marginTop: '60px' }}>
            <h2>Official Permission Letter</h2>
            <div className={styles.titleUnderline}></div>
          </div>

          <div className={styles.imageContainer}>
            <Image 
              src="/Images/Courses/MBBS/2136_copy-2-pdf-1-600x533.webp" 
              alt="MBBS Permission Letter" 
              width={800} 
              height={710} 
              className={styles.permissionImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
