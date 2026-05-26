'use client';

import styles from './Results.module.css';
import { FaFileShield, FaDownload, FaEye } from 'react-icons/fa6';

export default function ResultsPage() {
  return (
    <div className={styles.mainContainer}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}><FaFileShield /> Academic Performance</span>
            <h1>Examination <span>Results</span></h1>
            <p>View and download the latest academic results for Undergraduate (MBBS) and Postgraduate (MD/MS) examinations.</p>
          </div>
        </div>
      </section>

      {/* RESULTS CONTENT SECTION */}
      <section className={styles.resultsSection}>
        <div className="container">
          
          {/* Main Download Button */}
          <div className={styles.mainActionWrapper}>
            <a 
              href="https://heritageims.com/wp-content/uploads/2024/04/results-2022.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className={styles.mainActionBtn}
            >
              Result of all examinations of last year – Click here
            </a>
          </div>

          <div className="row g-4">
            {/* PG Result Viewer */}
            <div className="col-lg-6">
              <div className={styles.viewerCard}>
                <div className={styles.cardHeader}>
                  <h3>PG (MD/MS) Results</h3>
                  <div className={styles.actions}>
                    <a href="/Images/Results/PG-Result-last-one-year.pdf" target="_blank" rel="noreferrer" className={`${styles.actionBtn} ${styles.viewBtn}`}>
                      <FaEye /> View
                    </a>
                    <a href="/Images/Results/PG-Result-last-one-year.pdf" download className={`${styles.actionBtn} ${styles.downloadBtn}`}>
                      <FaDownload /> Download
                    </a>
                  </div>
                </div>
                <div className={styles.iframeWrapper}>
                  <iframe 
                    src="/Images/Results/PG-Result-last-one-year.pdf" 
                    className={styles.pdfIframe}
                    title="PG Results PDF"
                  />
                </div>
              </div>
            </div>

            {/* UG Result Viewer */}
            <div className="col-lg-6">
              <div className={styles.viewerCard}>
                <div className={styles.cardHeader}>
                  <h3>UG (MBBS) Results</h3>
                  <div className={styles.actions}>
                    <a href="/Images/Results/MBBS-Result-Last-one-year-.pdf" target="_blank" rel="noreferrer" className={`${styles.actionBtn} ${styles.viewBtn}`}>
                      <FaEye /> View
                    </a>
                    <a href="/Images/Results/MBBS-Result-Last-one-year-.pdf" download className={`${styles.actionBtn} ${styles.downloadBtn}`}>
                      <FaDownload /> Download
                    </a>
                  </div>
                </div>
                <div className={styles.iframeWrapper}>
                  <iframe 
                    src="/Images/Results/MBBS-Result-Last-one-year-.pdf" 
                    className={styles.pdfIframe}
                    title="UG Results PDF"
                  />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
