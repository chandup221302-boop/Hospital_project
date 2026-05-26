'use client';

import styles from './PrincipalMessage.module.css';
import Image from 'next/image';
import { FaQuoteLeft, FaGraduationCap, FaHospital, FaHeartPulse, FaSignature } from 'react-icons/fa6';

export default function PrincipalMessage() {
  return (
    <div className={styles.mainContainer}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>Institutional Leadership</span>
            <h1>Principal's <span>Message</span></h1>
            <p>A message of welcome, commitment, and academic excellence from the Principal cum CMS.</p>
          </div>
        </div>
      </section>

      {/* MESSAGE CONTENT */}
      <section className={styles.messageSection}>
        <div className="container">
          <div className={styles.messageCard}>
            <div className="row g-0">
              <div className="col-lg-5">
                <div className={styles.profileCol}>
                  <div className={styles.imageWrapper}>
                    <Image 
                      src="/Images/Col (Dr.) Bipin Kishore Prasad.webp" 
                      alt="Col (Dr.) Bipin Kishore Prasad"
                      width={600}
                      height={750}
                      className={styles.principalImg}
                    />
                    <div className={styles.nameOverlay}>
                      <h3>Col (Dr.) Bipin Kishore Prasad (Retd)</h3>
                      <p>MS, E.N.T. | Principal cum CMS</p>
                    </div>
                  </div>
                  
                  <div className={styles.quickPoints}>
                    <div className={styles.pointItem}>
                      <FaGraduationCap />
                      <span>Academic Excellence</span>
                    </div>
                    <div className={styles.pointItem}>
                      <FaHospital />
                      <span>Compassionate Care</span>
                    </div>
                    <div className={styles.pointItem}>
                      <FaHeartPulse />
                      <span>Student-Centric Approach</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-7">
                <div className={styles.contentCol}>
                  <div className={styles.sectionHeader}>
                    <h2>Message from <span>Principal cum CMS</span></h2>
                    <div className={styles.accentLine}></div>
                  </div>
                  
                  <div className={styles.messageBody}>
                    <FaQuoteLeft className={styles.quoteIcon} />
                    <p>It gives me great pleasure to welcome you to the website of Heritage Institute of Medical Sciences, Varanasi. As the Principal and Chief Medical Superintendent, I am proud to say that our college strives to create a positive academic environment through inclusiveness and encouragement. The students are given the support they require to realize their unique potential and develop themselves into the best Indian Medical Graduates.</p>
                    
                    <p>The stimulating learning environment in our college helps the students acquire the necessary knowledge, skills, attitudes, values, and responsiveness to function effectively as a physician. As the students go through the NMC mandated rigorous competency based medical curriculum in a span of four and half years of study and one year of compulsory rotating medical internship, our college promises to transform them into expert clinicians, shining leaders, good communicators, lifelong learners and accountable professionals.</p>
                    
                    <p>Our college boasts of a galaxy of qualified and dedicated teaching faculty who leave no stone unturned to impart the best undergraduate education to the students of MBBS and highly rated postgraduate education to the students MD and MS in various specialties. A great deal of emphasis is given to clinical exposure, hands-on training skills, research and innovation. Our college is also home to a highly committed student-friendly office staff which supports the students at every stage of their long journey in UG and PG courses.</p>
                    
                    <p>Our college campus is neat, clean, green and safe. It has adequate and appropriate hostels for boys and girls. There are excellent facilities for outdoor and indoor sports including squash. College Student Council takes the lead in organizing academic, social, cultural and sporting events and ‘The Sol’ – the college music band rocks the stage.</p>
                    
                    <p>On behalf of Heritage Institute of Medical Sciences, Varanasi, I extend a warm welcome to all the students.</p>
                  </div>

                  <div className={styles.closing}>
                    <div className={styles.signatureWrap}>
                       <FaSignature className={styles.sigIcon} />
                       <div className={styles.sigInfo}>
                          <strong>Warm Regards</strong>
                          <h4>Col (Dr) B.K. Prasad (Retd)</h4>
                          <span>Principal cum CMS, HIMS Varanasi</span>
                       </div>
                    </div>
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
