import Image from 'next/image';
import styles from './ClinicalFacilities.module.css';

export default function ClinicalFacilities() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="container">
          <h1 className={styles.heroTitle}>Clinical Facilities</h1>
          <p className={styles.heroSubtitle}>
            A comprehensive ecosystem of clinical departments, operation theaters, and specialized services supporting robust medical education.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className="row align-items-center flex-lg-row-reverse">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className={styles.contentTitle}>Hands-On Clinical Training</h2>
              <p className={styles.contentText}>
                Our hospital is equipped with state-of-the-art modular operation theaters, labor rooms, and specialized clinical departments 
                that cater to all modern healthcare needs. This setup provides our medical students with an invaluable opportunity to observe, 
                learn, and eventually participate in advanced clinical procedures under the guidance of senior faculty.
              </p>
              <ul className={styles.featureList}>
                <li>Multiple major and minor Operation Theaters</li>
                <li>Fully equipped modern Labor Room and Maternity Wing</li>
                <li>In-house Blood Bank and Pharmacy</li>
                <li>Super-specialty outpatient clinics</li>
                <li>Simulation labs for pre-clinical skills training</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className={styles.imageWrapper}>
                <Image 
                  src="/Images/Hospital & Clinical Exposure images/Clinical Training.webp" 
                  alt="Clinical Facilities" 
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
