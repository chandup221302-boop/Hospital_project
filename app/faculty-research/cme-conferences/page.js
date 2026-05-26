'use client';

import styles from './Cme.module.css';
import Image from 'next/image';

const cmeData = [
  { type: 'CME', text: '” Post hysterectomy vault prolapse”' },
  { type: 'WorkShop', text: '“ Invision Program for Upgradation Ophthalmic Paramedical Staff”' },
  { type: 'CME', text: '” Preterm Birth” By the Department Of Paediatrics & Gynaecology.' },
  { type: 'CME', text: '” Endometriosis” By Dr. K. K. Kaul (Professor) Head Of dept OBG & Gynae.' },
  { type: 'CME', text: '“Foley catheterization versus Oral misoprostol for induction of labor in hypertensive women in India(INFORM): a multicentre, open-label, randomized controlled trial”' },
  { type: 'CME', text: '“Evidence-based guidelines of PCOS” By Dr Garima OBG & Gynae.-' },
  { type: 'CME', text: '“FOGSI GCPR Screening & Management Of Preinvasive Lessons Of Cervix and HPV Vaccination”' },
  { type: 'Seminar', text: 'Recent ERAS recommendation in the antenatal preoperative and postoperative period,' },
  { type: 'CME', text: '“Evidence-based Guidelines for Management Of Abnormally Invasive Placenta”,' },
  { type: 'CME', text: '“Hyponatremia and use of Vaptans Management and approach”,' },
  { type: 'CME', text: '“Diagnosis and Management Of Gestational Diabetes Mellitus – FOGSL Guidelines”,' },
  { type: 'CME', text: '“Management of hyperuricemia and associated conditions,' },
  { type: 'CME', text: '“Anaemia in pregnancy”,' },
  { type: 'CME', text: 'UPDATES ON URTICARIA,' },
  { type: 'CME', text: 'Strategy to END TB BY 2025,' },
  { type: 'Workshop', text: 'Infirmary Health Wellness Program,' },
  { type: 'CME', text: 'ACOG Guidelines of Management of Fetal Growth Restriction,' },
  { type: 'CME', text: 'Fetal Reduction in Multifetal pregnancy,' },
  { type: 'CME', text: 'USG and Biomarkers for adverse pregnancy Outcome,' },
  { type: 'CME', text: 'Basic Principles of Gynecologic Endoscopic Surgery,' },
  { type: 'CME', text: 'Intrauterine fetal demise,.' },
  { type: 'CME', text: 'Continuing Medical Education Programme,' },
  { type: 'Workshop', text: 'ECG Basics & Interpretations,' },
  { type: 'Workshop', text: 'Global Handwashing Day,' }
];

const galleryImages = [
  '/Images/cme-confrences/ONE.webp',
  '/Images/cme-confrences/TWO.webp',
  '/Images/cme-confrences/THREE.webp',
  '/Images/cme-confrences/FOUR.webp',
  '/Images/cme-confrences/FIVE.webp',
  '/Images/cme-confrences/SIX.webp'
];

export default function CmeConferences() {
  return (
    <div className={styles.mainContainer}>
      {/* HERO BANNER */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>Faculty & Research</span>
            <h1>CME & <span>Conferences</span></h1>
            <p>Exploring medical advancements through continuous learning, comprehensive workshops, and specialized seminars.</p>
          </div>
        </div>
      </section>

      <div className={`${styles.contentOverlap} container`}>
        {/* GALLERY SECTION (IMAGES AT TOP) */}
        <section className={styles.gallerySection}>
          <div className={styles.sectionHeader}>
            <span className={styles.subHeader}>Event Gallery</span>
            <h2>Our Recent <span>Activities</span></h2>
          </div>
          
          <div className={styles.galleryGrid}>
            {galleryImages.map((img, index) => (
              <div key={index} className={styles.imageWrapper}>
                <Image 
                  src={img}
                  alt={`CME Event ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>

        {/* CONTENT SECTION (LIST AT BOTTOM) */}
        <section className={styles.contentSection}>
          <h2 className={styles.contentTitle}>Details of CMEs/Workshop organized by the college held in the past one year:</h2>
          <h3 className={styles.contentSubtitle}>CME & WorkShops –</h3>
          
          <div className={styles.listWrapper}>
            <ul className={styles.list}>
              {cmeData.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <strong>{item.type}</strong> – {item.text}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
