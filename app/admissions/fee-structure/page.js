'use client';

import React from 'react';
import Image from 'next/image';
import styles from './FeeStructure.module.css';
import { FaDownload, FaCircleInfo } from 'react-icons/fa6';

export default function FeeStructurePage() {
  return (
    <div className={styles.mainContainer}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="container">
          <span className={styles.heroBadge}>Transparent Policies</span>
          <h1 className={styles.heroTitle}>Institute <span>Fee Structure</span></h1>
        </div>
      </section>

      <div className="container">
        <div className={styles.contentWrapper}>
          <div className={styles.imageContainer}>
            <Image 
              src="/Images/Courses/Fee-Structure/2136_copy-2-pdf-600x533.webp" 
              alt="Fee Structure Notification" 
              width={800} 
              height={710} 
              className={styles.permissionImage}
            />
          </div>

          <div className={styles.feeGrid}>
            <div className={styles.feeCard}>
              <h3 style={{ color: '#6d1020' }}>UG - Course fee Structure</h3>
              <a href="/Images/Courses/Fee-Structure/fee-mbbs.pdf" download="UG_Fee_Structure.pdf" target="_blank" rel="noreferrer" className={styles.downloadBtn}>
                Download <FaDownload />
              </a>
            </div>
            
            <div className={styles.feeCard}>
              <h3 style={{ color: '#6d1020' }}>PG - Course fee Structure</h3>
              <a href="/Images/Courses/Fee-Structure/PG-Course fee Structure.webp" download="PG_Fee_Structure.webp" target="_blank" rel="noreferrer" className={styles.downloadBtn}>
                Download <FaDownload />
              </a>
            </div>
          </div>

          <div className={styles.noteSection}>
            <FaCircleInfo color="#c9922a" size={24} style={{ marginRight: '15px' }} />
            <span>Note- The Hostels for the new MBBS batch will be allotted on a first come first serve basis.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
