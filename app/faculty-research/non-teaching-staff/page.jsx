'use client';

import React from 'react';
import styles from './NonTeachingStaff.module.css';
import { FaFilePdf, FaDownload } from 'react-icons/fa6';

export default function NonTeachingStaff() {
  const pdfUrl = "https://heritageims.com/wp-content/uploads/2024/03/NTS_staff_list.pdf";

  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <h1 className={styles.pageTitle}>Non-Teaching Staff</h1>
          <p className={styles.pageSubtitle}>Our Support Pillars</p>
          <a 
            href="/Downloads/NTS_staff_list.pdf" 
            download="NTS_staff_list.pdf"
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.downloadBtn}
          >
            <FaDownload className={styles.pdfIcon} /> Download Staff List PDF
          </a>
        </div>
      </div>

      <div className={styles.contentSection}>
        <div className={styles.pdfViewerContainer}>
          <div className={styles.pdfHeader}>
            <h3><FaFilePdf style={{color: '#ff3c00', marginRight: '10px'}}/> Non-Teaching Staff Directory</h3>
          </div>
          <iframe 
            src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`} 
            className={styles.pdfIframe}
            title="Non-Teaching Staff List PDF"
          >
            <p>Your browser does not support PDFs. <a href={pdfUrl}>Download the PDF</a>.</p>
          </iframe>
        </div>
      </div>
    </div>
  );
}
