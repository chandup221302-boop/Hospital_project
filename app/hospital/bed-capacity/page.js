import Image from 'next/image';
import styles from './BedCapacity.module.css';

export default function BedCapacity() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="container">
          <h1 className={styles.heroTitle}>Bed Capacity & Wards</h1>
          <p className={styles.heroSubtitle}>
            A 1000+ bed facility designed to accommodate a high volume of patients while ensuring comfort and comprehensive care.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className={styles.contentTitle}>Spacious & Well-Equipped Wards</h2>
              <p className={styles.contentText}>
                HIMS boasts a massive infrastructural capacity with over 1000 teaching beds spread across various clinical departments. 
                Our wards are designed keeping patient comfort, hygiene, and clinical efficiency in mind, offering students unparalleled 
                exposure to diverse clinical cases.
              </p>
              <ul className={styles.featureList}>
                <li>Over 1000+ total in-patient beds</li>
                <li>Dedicated male and female wards for all major specialties</li>
                <li>Well-ventilated spaces with central oxygen supply</li>
                <li>Isolation wards for infectious diseases</li>
                <li>Clean and hygienic environment with dedicated housekeeping</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className={styles.imageWrapper}>
                <Image 
                  src="/Images/Hospital & Clinical Exposure images/Beds.webp" 
                  alt="Bed Capacity" 
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
