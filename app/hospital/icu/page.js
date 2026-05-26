import Image from 'next/image';
import styles from './Icu.module.css';

export default function Icu() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="container">
          <h1 className={styles.heroTitle}>Intensive Care Units (ICU)</h1>
          <p className={styles.heroSubtitle}>
            State-of-the-art critical care facilities ensuring continuous monitoring and life support for severely ill patients.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className={styles.contentTitle}>Advanced Critical Care</h2>
              <p className={styles.contentText}>
                Our Intensive Care Units are designed to provide the highest level of care for critically ill patients. 
                With dedicated sub-specialty units including Medical ICU (MICU), Surgical ICU (SICU), Neonatal ICU (NICU), 
                and Pediatric ICU (PICU), we ensure highly specialized, round-the-clock monitoring and treatment.
              </p>
              <ul className={styles.featureList}>
                <li>Centralized monitoring systems for vitals</li>
                <li>Advanced mechanical ventilators and defibrillators</li>
                <li>1:1 nurse-to-patient ratio for critical cases</li>
                <li>Stringent infection control protocols</li>
                <li>Dedicated counseling rooms for patient families</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className={styles.imageWrapper}>
                <Image 
                  src="/Images/Hospital & Clinical Exposure images/ICU Beds.webp" 
                  alt="ICU Facilities" 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
