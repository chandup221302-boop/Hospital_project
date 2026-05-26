import Image from 'next/image';
import styles from './OpdServices.module.css';

export default function OpdServices() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="container">
          <h1 className={styles.heroTitle}>OPD Services</h1>
          <p className={styles.heroSubtitle}>
            Comprehensive outpatient care providing expert consultations and advanced diagnostics with minimal wait times.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className={styles.contentTitle}>Dedicated Outpatient Care</h2>
              <p className={styles.contentText}>
                Our Outpatient Department (OPD) is designed to provide seamless and efficient care. 
                Equipped with specialized consulting rooms for all major clinical departments, our OPD 
                cater to hundreds of patients daily, ensuring each individual receives dedicated medical 
                attention without the need for admission.
              </p>
              <ul className={styles.featureList}>
                <li>Expert consultations across 15+ specialities</li>
                <li>Digital records and quick registration process</li>
                <li>In-house pharmacy and diagnostic center</li>
                <li>Spacious waiting areas with patient amenities</li>
                <li>Dedicated help desks and patient navigators</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className={styles.imageWrapper}>
                <Image 
                  src="/Images/Hospital & Clinical Exposure images/Daily OPD.png" 
                  alt="Daily OPD Services" 
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
