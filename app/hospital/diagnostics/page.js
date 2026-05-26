import Image from 'next/image';
import styles from './Diagnostics.module.css';

export default function Diagnostics() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="container">
          <h1 className={styles.heroTitle}>Advanced Diagnostics</h1>
          <p className={styles.heroSubtitle}>
            Precision testing and imaging services providing accurate insights for effective medical treatment.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className="row align-items-center flex-lg-row-reverse">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className={styles.contentTitle}>Comprehensive Testing</h2>
              <p className={styles.contentText}>
                HIMS features a central diagnostic laboratory and an advanced radiodiagnosis center equipped with cutting-edge technology. 
                Our team of experienced pathologists and radiologists ensures rapid and accurate diagnostic reporting to support critical clinical decision-making.
              </p>
              <ul className={styles.featureList}>
                <li>Advanced Radiology: MRI, CT Scan, Digital X-Ray, and USG</li>
                <li>Fully automated Pathology & Biochemistry analyzers</li>
                <li>NABL accredited protocols and stringent quality control</li>
                <li>24/7 diagnostic support for emergency and in-patients</li>
                <li>Microbiology and molecular testing facilities</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className={styles.imageWrapper}>
                <Image 
                  src="/Images/Hospital & Clinical Exposure images/Beds.webp" 
                  alt="Diagnostics Facilities" 
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
