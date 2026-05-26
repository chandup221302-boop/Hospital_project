'use client';

import styles from './MarbInformation.module.css';
import { FaFileContract, FaDownload, FaEye, FaRegFilePdf, FaArrowRightLong } from 'react-icons/fa6';

export default function MarbInformation() {
  return (
    <div className={styles.mainContainer}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}><FaFileContract /> Regulatory Disclosure</span>
            <h1>MARB <span>Information</span></h1>
            <p>Access our official Medical Assessment and Rating Board (MARB) Proforma and Faculty Publications data securely.</p>
          </div>
        </div>
      </section>

      {/* DOCUMENT PORTAL SECTION */}
      <section className={styles.viewerSection}>
        <div className="container">
          <div className="row g-4 justify-content-center">
            
            {/* PROFORMA DOCUMENT CARD */}
            <div className="col-lg-5 col-md-6">
              <div className={styles.docCard}>
                <div className={styles.docGraphic}>
                  <FaRegFilePdf className={styles.pdfIconLarge} />
                  <div className={styles.docDecoration}></div>
                </div>
                
                <div className={styles.docContent}>
                  <span className={styles.docCategory}>Official Document</span>
                  <h3>MARB PROFORMA</h3>
                  <p>Comprehensive regulatory proforma document submitted to the Medical Assessment and Rating Board.</p>
                  
                  <div className={styles.docActions}>
                    <a 
                      href="https://hims.moinifabrics.com/wp-content/uploads/2024/03/MARB-PROFORMA-WEBSITE-1.pdf" 
                      target="_blank" 
                      rel="noreferrer" 
                      className={`${styles.actionBtn} ${styles.viewBtn}`}
                    >
                      <FaEye /> View Document
                    </a>
                    <a 
                      href="https://hims.moinifabrics.com/wp-content/uploads/2024/03/MARB-PROFORMA-WEBSITE-1.pdf" 
                      download 
                      className={`${styles.actionBtn} ${styles.downloadBtn}`}
                    >
                      <FaDownload /> Download
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* PUBLICATIONS DOCUMENT CARD */}
            <div className="col-lg-5 col-md-6">
              <div className={styles.docCard}>
                <div className={styles.docGraphic}>
                  <FaRegFilePdf className={styles.pdfIconLarge} />
                  <div className={styles.docDecoration}></div>
                </div>
                
                <div className={styles.docContent}>
                  <span className={styles.docCategory}>Official Document</span>
                  <h3>MARB Publications</h3>
                  <p>Detailed record of faculty research publications and academic contributions recognized by MARB.</p>
                  
                  <div className={styles.docActions}>
                    <a 
                      href="https://hims.moinifabrics.com/wp-content/uploads/2024/03/MARB-Publications.pdf" 
                      target="_blank" 
                      rel="noreferrer" 
                      className={`${styles.actionBtn} ${styles.viewBtn}`}
                    >
                      <FaEye /> View Document
                    </a>
                    <a 
                      href="https://hims.moinifabrics.com/wp-content/uploads/2024/03/MARB-Publications.pdf" 
                      download 
                      className={`${styles.actionBtn} ${styles.downloadBtn}`}
                    >
                      <FaDownload /> Download
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
