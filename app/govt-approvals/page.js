'use client';

import { useState, useEffect } from 'react';
import styles from './GovtApprovals.module.css';
import { 
  FaFilePdf, FaDownload, FaEye, FaArrowRightLong, 
  FaBuildingColumns, FaStamp, FaChevronDown
} from 'react-icons/fa6';
import Link from 'next/link';

const APPROVALS_DATA = [
  { id: 1, title: 'PG Permission Letter', link: 'https://heritageims.com/wp-content/uploads/2025/07/PG-Permission-.pdf', hasLink: true },
  { id: 2, title: 'Radio-diagnosis', link: 'https://heritageims.com/wp-content/uploads/2024/04/Permission-letter-of-Radio-diagnosis.pdf', hasLink: true },
  { id: 3, title: 'Anatomy', link: 'https://heritageims.com/wp-content/uploads/2024/04/Permission-letter-of-Anatomy.pdf', hasLink: true },
  { id: 4, title: 'Microbiology', link: 'https://heritageims.com/wp-content/uploads/2024/04/Permission-letter-of-Microbiology.pdf', hasLink: true },
  { id: 5, title: 'Gen Medicine', link: 'https://heritageims.com/wp-content/uploads/2025/07/Gen-Med.pdf', hasLink: true },
  { id: 6, title: 'Pathology', link: 'https://heritageims.com/wp-content/uploads/2024/04/Pathology.pdf', hasLink: true },
  { id: 7, title: 'General Surgery', link: 'https://heritageims.com/wp-content/uploads/2025/07/PG-Gen-Surgery-.pdf', hasLink: true },
  { id: 8, title: 'Respiratory (TB Chest)', link: 'https://heritageims.com/wp-content/uploads/2024/04/TB-Chest.pdf', hasLink: true },
  { id: 9, title: 'Anaesthesiology', link: 'https://heritageims.com/wp-content/uploads/2025/07/PG-Anesthesia-.pdf', hasLink: true },
  { id: 10, title: 'Obstetrics & Gynaecology', link: 'https://heritageims.com/wp-content/uploads/2024/04/OBG.pdf', hasLink: true },
  { id: 11, title: 'Biochemistry', link: 'https://heritageims.com/wp-content/uploads/2024/04/Biochemistry.pdf', hasLink: true },
  { id: 12, title: 'Otorhinolaryngology (ENT)', link: 'https://heritageims.com/wp-content/uploads/2025/07/PG-ENT.pdf', hasLink: true },
  { id: 13, title: 'Pediatrics', link: 'https://heritageims.com/wp-content/uploads/2024/04/Paedia.pdf', hasLink: true },
  { id: 14, title: 'Ophthalmology', link: 'https://heritageims.com/wp-content/uploads/2025/07/PG-Ophathalmology.pdf', hasLink: true },
  { id: 15, title: 'Orthopaedics', link: 'https://heritageims.com/wp-content/uploads/2024/04/Ortho.pdf', hasLink: true },
  { id: 16, title: 'Pharmacology', link: 'https://heritageims.com/wp-content/uploads/2024/04/Pharmacology.pdf', hasLink: true },
];

export default function GovtApprovalsPage() {
  const [selectedDoc, setSelectedDoc] = useState(APPROVALS_DATA[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 992);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDocSelect = (doc) => {
    setSelectedDoc(doc);
    if (isMobile && doc.hasLink) {
      window.open(doc.link, '_blank');
    }
  };

  return (
    <div className={styles.mainContainer}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}><FaStamp /> Official Documents</span>
            <h1>Government <span>Approvals</span></h1>
            <p>Access our official permissions, affiliations, and regulatory approval documents.</p>
          </div>
        </div>
      </section>

      {/* DOCUMENT VIEWER SECTION */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className="row g-4">
            
            {/* SIDEBAR LIST */}
            <div className="col-lg-4">
              <div className={styles.sidebarHeader}>
                <h3>Available Documents</h3>
                <p>Select a department to view its permission letter</p>
              </div>
              <div className={styles.sidebarList}>
                {APPROVALS_DATA.map((doc) => (
                  <button 
                    key={doc.id} 
                    className={`${styles.docCard} ${selectedDoc.id === doc.id ? styles.active : ''} ${!doc.hasLink ? styles.disabled : ''}`}
                    onClick={() => doc.hasLink && handleDocSelect(doc)}
                    disabled={!doc.hasLink}
                  >
                    <div className={styles.cardIcon}>
                      <FaFilePdf />
                    </div>
                    <div className={styles.cardInfo}>
                      <h4>{doc.title}</h4>
                      <span className={styles.statusBadge}>
                        {doc.hasLink ? 'Available' : 'Pending'}
                      </span>
                    </div>
                    {doc.hasLink && <FaArrowRightLong className={styles.arrowIcon} />}
                  </button>
                ))}
              </div>
            </div>

            {/* VIEWER PORTAL */}
            <div className="col-lg-8 d-none d-lg-block">
              <div className={styles.viewerContainer}>
                <div className={styles.viewerHeader}>
                  <div className={styles.viewerTitleInfo}>
                    <FaBuildingColumns className={styles.viewerIcon} />
                    <div>
                      <h2>{selectedDoc.title}</h2>
                      <p>Official Permission Letter</p>
                    </div>
                  </div>
                  <div className={styles.viewerActions}>
                    <a href={selectedDoc.link} target="_blank" rel="noreferrer" className={styles.actionBtn}>
                      <FaEye /> Open in New Tab
                    </a>
                  </div>
                </div>
                
                <div className={styles.iframeWrapper}>
                  {selectedDoc.hasLink ? (
                    <iframe 
                      src={`https://docs.google.com/viewerng/viewer?url=${selectedDoc.link}&embedded=true`}
                      className={styles.pdfIframe}
                      title={selectedDoc.title}
                    />
                  ) : (
                    <div className={styles.noDocView}>
                      <FaFilePdf className={styles.noDocIcon} />
                      <h3>Document Not Available Yet</h3>
                      <p>The permission letter for {selectedDoc.title} is currently pending or being updated.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
