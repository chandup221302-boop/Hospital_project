'use client';

import styles from './AboutInstitute.module.css';
import Image from 'next/image';
import { FaQuoteLeft, FaUserDoctor, FaEnvelope, FaPhone, FaPrint, FaArrowRightLong, FaMedal, FaHospital, FaGraduationCap } from 'react-icons/fa6';

export default function AboutInstitute() {
  return (
    <div className={styles.mainContainer}>
      {/* HERO BANNER */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>Academic Legacy</span>
            <h1>About Our <span>Institute</span></h1>
            <p>Empowering the next generation of medical professionals with cutting-edge technology and compassionate clinical wisdom.</p>
          </div>
        </div>
      </section>

      {/* QUICK HIGHLIGHTS */}
      <section className={styles.highlightsSection}>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className={styles.highlightCard}>
                <FaHospital />
                <h4>World-Class Infrastructure</h4>
                <p>1000+ Bedded multi-specialty hospital with advanced diagnostic facilities.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.highlightCard}>
                <FaGraduationCap />
                <h4>Excellence in Education</h4>
                <p>NMC approved MBBS and PG courses with distinguished faculty members.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.highlightCard}>
                <FaMedal />
                <h4>NABL Accredited</h4>
                <p>Providing high-accuracy diagnostic services with international standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VICE PRINCIPAL MESSAGE */}
      <section className={styles.vpSection}>
        <div className="container">
          <div className={styles.vpCard}>
            <div className="row g-0">
              <div className="col-lg-5">
                <div className={styles.vpImageCol}>
                  <Image 
                    src="/Images/Dr. (Prof.) Sandeep Kumar Gupta.webp" 
                    alt="Dr. (Prof.) Sandeep Kumar Gupta"
                    width={600}
                    height={700}
                    className={styles.vpImg}
                  />
                  <div className={styles.vpNameTag}>
                    <h3>Dr. (Prof.) Sandeep Kumar Gupta</h3>
                    <p>Vice Principal, HIMS Varanasi</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className={styles.vpContentCol}>
                  <div className={styles.sectionHeader}>
                    <span className={styles.subHeader}>Leadership Insight</span>
                    <h2>From the Vice Principal's <span>Desk</span></h2>
                  </div>
                  <div className={styles.vpMessage}>
                    <FaQuoteLeft className={styles.quoteIcon} />
                    <p>It is my pleasure to welcome you to the official website of the Heritage Institute of Medical Sciences — a premier institution dedicated to excellence in medical education, research, and patient care.</p>
                    <p>At Heritage IMS, we believe that medical education is not just about acquiring knowledge, but about developing a sense of responsibility, empathy, and professionalism. Our curriculum is designed to challenge students to think critically and to provide them with the skills they need to become lifelong learners and compassionate physicians.</p>
                  </div>
                  <div className={styles.vpSignature}>
                    <div className={styles.sigLine}></div>
                    <strong>Dr. (Prof.) Sandeep Kumar Gupta</strong>
                    <span>Vice Principal & MEU Coordinator</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEDICAL SUPERINTENDENT */}
      <section className={styles.msSection}>
        <div className="container">
          <div className="row align-items-center">
    <div className="col-lg-8 mx-auto">
              <div className={styles.msContent}>
                <span className={styles.msBadge}>Hospital Administration</span>
                <h2>Brig (Dr.) <span>Avtar Narayan</span></h2>
                <h4 className={styles.msDesignation}>MBBS, M.D. <br />Medical Superintendent, HIMS</h4>
                <p className={styles.msDescription}>
                  Leading the clinical and administrative excellence at HIMS, Brig (Dr.) Avtar Narayan ensures that patient care standards are met with military precision and compassionate wisdom.
                </p>
                
                <div className={styles.msContactList}>
                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}><FaEnvelope /></div>
                    <div className={styles.contactText}>
                      <label>Official Email</label>
                      <a href="mailto:ms.hims@heritageims.com">ms.hims@heritageims.com</a>
                    </div>
                  </div>
                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}><FaPhone /></div>
                    <div className={styles.contactText}>
                      <label>Direct Helpline</label>
                      <a href="tel:05427111071">0542-7111071 (Ext: 202)</a>
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
