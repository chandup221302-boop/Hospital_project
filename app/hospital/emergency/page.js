import Image from 'next/image';
import styles from './Emergency.module.css';

export default function Emergency() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="container">
          <h1 className={styles.heroTitle}>24/7 Emergency & Trauma</h1>
          <p className={styles.heroSubtitle}>
            Rapid response and life-saving critical care round the clock. Our dedicated trauma team is always ready.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className="row align-items-center flex-lg-row-reverse">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className={styles.contentTitle}>Immediate Lifesaving Care</h2>
              <p className={styles.contentText}>
                The Emergency & Trauma Center at HIMS is a specialized unit equipped with the latest 
                resuscitation equipment and life-support systems. Functioning 24 hours a day, 7 days a week, 
                our rapid response team of experienced casualty medical officers, trauma surgeons, and 
                critical care nurses provides immediate intervention for severe injuries and acute illnesses.
              </p>
              <ul className={styles.featureList}>
                <li>24/7 Availability of senior specialists</li>
                <li>Dedicated minor OT and resuscitation bays</li>
                <li>Advanced Cardiac Life Support (ACLS) compliant ambulances</li>
                <li>Point-of-care rapid diagnostics</li>
                <li>Direct connectivity to critical care ICU and Blood Bank</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className={styles.imageWrapper}>
                <Image 
                  src="/Images/Hospital & Clinical Exposure images/Emergency.webp" 
                  alt="Emergency Services" 
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
