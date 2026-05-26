'use client';

import React, { useState } from 'react';
import styles from '../time-tables/TimeTables.module.css';
import { FaCalendarDays, FaDownload, FaEye, FaRegFilePdf } from 'react-icons/fa6';

const scheduleData = [
  {
    title: "Internship Schedule Batch 2019",
    link: "https://heritageims.com/wp-content/uploads/2024/06/Internship-schedule-2019-batch.pdf"
  }
];

export default function InternshipSchedulePage() {
  const [activePdf, setActivePdf] = useState(scheduleData[0]);

  const handleDownload = (e, item) => {
    e.stopPropagation();
    if (!item.link) {
      e.preventDefault();
      window.location.href = '/academic-resources/internship-schedule';
      return;
    }
    window.location.href = `/api/download?url=${encodeURIComponent(item.link)}`;
  };

  const handleView = (e, item) => {
    e.stopPropagation();
    if (!item.link) {
      e.preventDefault();
      window.location.href = '/academic-resources/internship-schedule';
      return;
    }
    setActivePdf(item);
    
    if (typeof window !== 'undefined' && window.innerWidth <= 992) {
      const viewer = document.getElementById('pdfViewer');
      if (viewer) {
        viewer.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={styles.mainContainer}>
      <section className={styles.heroSection}>
        <div className="container">
          <span className={styles.heroBadge}>Academic Resources</span>
          <h1 className={styles.heroTitle}>Institute <span>Internship Schedule</span></h1>
        </div>
      </section>

      <div className={styles.layoutWrapper}>
        {/* Left Sidebar: List of Schedules */}
        <div className={styles.sidebar}>
          {scheduleData.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.card} ${activePdf?.title === item.title ? styles.active : ''}`}
              onClick={(e) => handleView(e, item)}
            >
              <div className={styles.cardContent}>
                <div className={styles.iconBox}>
                  <FaCalendarDays />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
              <div className={styles.actionButtons}>
                <button 
                  onClick={(e) => handleView(e, item)}
                  className={styles.btnAction}
                >
                  <FaEye /> View
                </button>
                <button 
                  onClick={(e) => handleDownload(e, item)}
                  className={`${styles.btnAction} ${styles.primary}`}
                >
                  <FaDownload /> Download
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: PDF Viewer */}
        <div className={styles.viewerContainer} id="pdfViewer">
          {activePdf && activePdf.link ? (
            <>
              <div className={styles.viewerHeader}>
                <h3 className={styles.viewerTitle}>{activePdf.title}</h3>
                <button 
                  onClick={(e) => handleDownload(e, activePdf)}
                  className={`${styles.btnAction} ${styles.primary}`}
                >
                  <FaDownload /> Download PDF
                </button>
              </div>
              <div className={styles.iframeWrapper}>
                <iframe 
                  src={`${activePdf.link}#toolbar=0`} 
                  className={styles.iframeContent} 
                  title={activePdf.title}
                />
              </div>
            </>
          ) : (
            <div className={styles.emptyState}>
              <FaRegFilePdf className={styles.emptyStateIcon} />
              <h3>No PDF Selected or Available</h3>
              <p>Please select a schedule from the list to view its contents.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
