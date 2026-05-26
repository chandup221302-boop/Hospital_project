'use client';

import React, { useState } from 'react';
import styles from './TimeTables.module.css';
import { FaCalendarDays, FaDownload, FaEye, FaRegFilePdf } from 'react-icons/fa6';

const timeTablesData = [
  {
    title: "Time table of II Professional MBBS 2023–24",
    link: "https://heritageims.com/wp-content/uploads/2024/10/Time-table-of-II-Professional-MBBS-2023-24.pdf"
  },
  {
    title: "Time-Table of I Professional MBBS– 2024–25–Batch",
    link: "https://heritageims.com/wp-content/uploads/2024/10/Time-table-of-I-Prof-MBBS-2024-25-Batch.pdf"
  },
  {
    title: "Time Table 3rd MBBS Part 2 Batch 2020",
    link: "https://heritageims.com/wp-content/uploads/2024/06/Timetable_3rd_MBBS_Part_2_Btach_2020-pdf.pdf"
  },
  {
    title: "Time Table 3rd MBBS Part 1 Batch 2021–22",
    link: "https://heritageims.com/wp-content/uploads/2024/06/Timetable_3rd_MBBS_Part_1_2021_Batch_150424.pdf"
  },
  {
    title: "2nd Professional Time Table 2022–23",
    link: "https://heritageims.com/wp-content/uploads/2024/06/2nd_Prof_Timetable_2022-23-11.pdf"
  },
  {
    title: "Time Table Batch 2023",
    link: "https://heritageims.com/wp-content/uploads/2024/06/phase__I_curriculum_2023-24_New1.pdf"
  },
  {
    title: "2022 MBBS Batch Merged Time Table",
    link: "https://heritageims.com/wp-content/uploads/2024/03/2022-MBBS-Batch-Merged-Time-table-2022.pdf"
  },
  {
    title: "Clinical Posting Time Table Phase II–2020 Batch",
    link: "https://heritageims.com/wp-content/uploads/2024/03/print-Clinical-posting-timetable-2020batch1.pdf"
  },
  {
    title: "Foundation & Curriculum Time table MBBS 2020–2021",
    link: null
  }
];

export default function TimeTablesPage() {
  const [activePdf, setActivePdf] = useState(timeTablesData[0]);

  const handleDownload = (e, item) => {
    e.stopPropagation();
    if (!item.link) {
      e.preventDefault();
      window.location.href = '/academic-resources/time-tables';
      return;
    }
    window.location.href = `/api/download?url=${encodeURIComponent(item.link)}`;
  };

  const handleView = (e, item) => {
    e.stopPropagation();
    if (!item.link) {
      e.preventDefault();
      window.location.href = '/academic-resources/time-tables';
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
          <h1 className={styles.heroTitle}>Institute <span>Time Tables</span></h1>
        </div>
      </section>

      <div className={styles.layoutWrapper}>
        {/* Left Sidebar: List of Time Tables */}
        <div className={styles.sidebar}>
          {timeTablesData.map((item, index) => (
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
              <p>Please select a timetable from the list to view its contents.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
