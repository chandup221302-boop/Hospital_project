'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Careers.module.css';
import { 
  FaEnvelope, FaBriefcase, FaFilePdf, FaDownload, 
  FaXmark, FaEye, FaShareNodes, FaCalendarDays,
  FaFileLines, FaMagnifyingGlassPlus
} from 'react-icons/fa6';

const images = [
  // RED BACKGROUND POSTS AT THE TOP
  "WhatsApp-Image-2025-07-12-at-11.52.38.webp",
  "WhatsApp-Image-2025-07-17-at-09.42.49.webp",
  "WhatsApp-Image-2025-12-26-at-6.13.00-PM.webp",
  "a1.webp",
  "a2.webp",
  // REGULAR POSTS
  "19mar-1455x2048.webp",
  "20250224_162021-scaled.webp",
  "Adv-of-various-post-NTS-emp_page-0001.webp",
  "Adv-of-various-post-NTS-emp_page-0002.webp",
  "Advertisement-01-1449x2048.webp",
  "Advertisement-02-scaled.webp",
  "Digital-Marketing_page-0001-scaled.webp",
  "EMOsad_pages-to-jpg-0001.webp",
  "IMG_20250227_160026-1486x2048.webp",
  "May-Rac-1-1583x2048.webp",
  "May-Rac-2-scaled.webp",
  "NTS-1-1583x2048.webp",
  "NTS-2-scaled.webp",
  "OT-Technician_page-0001-scaled.webp",
  "Prof-1-scaled (1).webp",
  "Prof-1-scaled.webp",
  "Rec-18-1451x2048.webp",
  "driver-1-1583x2048.webp",
  "reqmt-2_page-0001.webp",
  "vacancy-mar-2024-pdf-791x1024-1.webp",
  "world-ozone-day-1300-×-1300-px-2024-04-30T155842.554.webp",
  "world-ozone-day-1300-×-1300-px-90.webp"
];

const pdfs = [
  { id: 1, file: "Add-20-Sep-2025.pdf", title: "Advertisement 20 Sep 2025" },
  { id: 2, file: "DocScanner-Jan-9-2026-11-44-AM.pdf", title: "Requirement Doc 1 (Jan 2026)" },
  { id: 3, file: "DocScanner-Jan-9-2026-11-45-AM.pdf", title: "Requirement Doc 2 (Jan 2026)" }
];

export default function CareersPage() {
  const [modalImage, setModalImage] = useState(null);
  const [selectedPdf, setSelectedPdf] = useState(pdfs[0]);
  const [isLoadingPdf, setIsLoadingPdf] = useState(true);

  const openModal = (img) => setModalImage(img);
  const closeModal = () => setModalImage(null);

  const handleShare = async (img) => {
    const url = `${window.location.origin}/Images/careers/${img}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'HIMS Career Opportunity',
          text: 'Check out this career opportunity at Heritage Institute of Medical Sciences!',
          url: url,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className={styles.mainContainer}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}><FaBriefcase /> Join Our Team</div>
            <h1>Careers at <span>HIMS</span></h1>
            <p>Shape the future of healthcare and education with us. Discover our latest openings and join a premier medical institution.</p>
          </div>
        </div>
      </section>

      {/* CONTACT INFO SECTION */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.contactInfoBox}>
            <div className="row align-items-center">
              <div className="col-lg-12">
                <h3 className={styles.contactIntroHeading}>Applications are invited for the following Posts</h3>
                <p className={styles.contactIntroText}>
                  Interested candidates are requested to submit their complete resumes to our HR department. We look forward to reviewing your application and potentially welcoming you to our organization.
                </p>
                <div className={styles.contactDetails}>
                  <div className={styles.contactItem}>
                    <FaEnvelope /> <span>career@heritageims.com</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaEnvelope /> <span>dyms@heritageims.com</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaEnvelope /> <span>hr@heritageims.com</span>
                  </div>
                </div>
                <p className={styles.thankYouText}>Thank you for considering HIMS Varanasi as your next professional destination.</p>
              </div>
            </div>
          </div>

          {/* PDF VIEWER SECTION (TOP) */}
          <div className={styles.sectionHeadingBox}>
            <h2 className={styles.sectionTitle}>Important <span>Documents</span></h2>
            <p className={styles.sectionSubtitle}>View and download our detailed requirement documents</p>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-lg-4">
              <div className={styles.sidebarList}>
                {pdfs.map((pdf) => (
                  <div 
                    key={pdf.id} 
                    className={`${styles.tenderCard} ${selectedPdf.id === pdf.id ? styles.active : ''}`}
                    onClick={() => {
                      if (selectedPdf.id !== pdf.id) {
                        setIsLoadingPdf(true);
                        setSelectedPdf(pdf);
                      }
                    }}
                  >
                    <div className={styles.cardIcon}><FaFilePdf /></div>
                    <div className={styles.cardInfo}>
                      <h3>{pdf.title}</h3>
                      <div className={styles.cardMeta}><span>Official Notice</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-8">
              <div className={styles.viewerContainer}>
                <div className={styles.viewerHeader}>
                  <div className={styles.viewerTitleInfo}>
                    <h2>{selectedPdf.title}</h2>
                  </div>
                  <div className={styles.viewerActions}>
                    <a href={`/Images/careers/${selectedPdf.file}`} target="_blank" rel="noopener noreferrer" className={`${styles.actionBtn} ${styles.viewBtn}`}><FaEye /> View</a>
                    <a href={`/Images/careers/${selectedPdf.file}`} download className={`${styles.actionBtn} ${styles.downloadBtn}`}><FaDownload /> Download</a>
                  </div>
                </div>

                <div className={styles.pdfWrapper}>
                  {isLoadingPdf && (
                    <div className={styles.pdfLoader}>
                      <div className="spinner-border text-danger" role="status" style={{width: '3rem', height: '3rem', marginBottom: '15px'}}></div>
                      <div>Loading PDF...</div>
                    </div>
                  )}
                  {/* Native browser PDF viewer allows zoom, download, print directly */}
                  <iframe 
                    src={`/Images/careers/${selectedPdf.file}`} 
                    className={styles.pdfIframe} 
                    title={selectedPdf.title} 
                    onLoad={() => setIsLoadingPdf(false)}
                    style={{ opacity: isLoadingPdf ? 0 : 1, transition: 'opacity 0.5s ease' }}
                  />
                </div>
                
                <div className={styles.viewerFooter}>
                  <FaMagnifyingGlassPlus />
                  <span>Use viewer controls to zoom (+/-) or print.</span>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE GALLERY SECTION */}
          <div className={styles.sectionHeadingBox} style={{marginTop: '80px'}}>
            <h2 className={styles.sectionTitle}>Current <span>Openings</span></h2>
            <p className={styles.sectionSubtitle}>Browse our latest hiring flyers and job descriptions</p>
          </div>

          <div className={styles.imageGrid}>
            {images.map((img, idx) => (
              <div key={idx} className={styles.imageCard}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={`/Images/careers/${img}`} 
                    alt={`Job Posting ${idx + 1}`} 
                    fill 
                    className={styles.postImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                  />
                </div>
                <div className={styles.imageActionsBox}>
                  <button onClick={() => openModal(img)} className={styles.imgActionBtn}><FaEye /> View</button>
                  <a href={`/Images/careers/${img}`} download className={styles.imgActionBtn}><FaDownload /> Download</a>
                  <button onClick={() => handleShare(img)} className={styles.imgActionBtn}><FaShareNodes /> Share</button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Image Modal */}
      {modalImage && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <button className={styles.modalCloseBtn} onClick={closeModal}>
            <FaXmark />
          </button>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <Image 
              src={`/Images/careers/${modalImage}`} 
              alt="Full view" 
              width={1200}
              height={1600}
              className={styles.modalImage}
              unoptimized
            />
          </div>
        </div>
      )}
    </div>
  );
}
