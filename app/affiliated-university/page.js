import styles from './AffiliatedUniversity.module.css';
import Image from 'next/image';
import { 
  FaLocationDot, FaEnvelope, FaPhone, FaGlobe, FaUserTie, 
  FaLink, FaBuildingColumns 
} from 'react-icons/fa6';
import Link from 'next/link';

export const metadata = {
  title: "Affiliated University | Heritage Institute of Medical Sciences",
  description: "Information about universities affiliated with HIMS Varanasi.",
};

export default function AffiliatedUniversity() {
  return (
    <div className={styles.mainContainer}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}><FaLink /> Affiliations</span>
            <h1>Affiliated <span>Universities</span></h1>
            <p>Heritage Institute of Medical Sciences is proudly affiliated with prestigious state universities to ensure the highest standards of medical education.</p>
          </div>
        </div>
      </section>

      {/* UNIVERSITY 1 */}
      <section className={styles.uniSection}>
        <div className="container">
          <div className={styles.uniCard}>
            <div className={styles.uniHeader}>
              <div className={styles.uniIconWrap}>
                <FaBuildingColumns />
              </div>
              <h2>Atal Bihari Vajpayee Medical University (U.P.)</h2>
            </div>
            
            <div className={styles.uniBody}>
              {/* Contact Info */}
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}><FaLocationDot /></div>
                  <div className={styles.infoText}>
                    <span>University Address</span>
                    <strong>Chak Ganjariya City, Sultanpur Road, Lucknow</strong>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}><FaPhone /></div>
                  <div className={styles.infoText}>
                    <span>Contact Numbers</span>
                    <strong>General: +91 9151024465</strong>
                    <strong>Affiliation: +91 9151024466</strong>
                    <strong>Counselling: +91 9151092123</strong>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}><FaEnvelope /></div>
                  <div className={styles.infoText}>
                    <span>Email Address</span>
                    <strong>vcabvmuup@gmail.com</strong>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}><FaGlobe /></div>
                  <div className={styles.infoText}>
                    <span>Official Website</span>
                    <strong><a href="https://www.abvmuup.edu.in" target="_blank" rel="noreferrer">www.abvmuup.edu.in</a></strong>
                  </div>
                </div>
              </div>

              {/* Leadership Profiles */}
              <div className={styles.leadershipSection}>
                <h3>University Leadership</h3>
                <div className={styles.profileGrid}>
                  
                  <div className={styles.profileCard}>
                    <div className={styles.profileImageWrap}>
                      <Image 
                        src="/Images/affiliated-university/Dr. Sanjeev Mishra.png" 
                        alt="Dr. Sanjeev Mishra" 
                        fill 
                        className={styles.profileImg} 
                      />
                    </div>
                    <div className={styles.profileInfo}>
                      <span className={styles.designation}>Vice Chancellor</span>
                      <h4>Dr. Sanjeev Mishra</h4>
                    </div>
                  </div>

                  <div className={styles.profileCard}>
                    <div className={styles.profileImageWrap}>
                      <Image 
                        src="/Images/affiliated-university/Mr. Sanjeev Kumar.png" 
                        alt="Mr. Sanjeev Kumar" 
                        fill 
                        className={styles.profileImg} 
                      />
                    </div>
                    <div className={styles.profileInfo}>
                      <span className={styles.designation}>Registrar</span>
                      <h4>Mr. Sanjeev Kumar</h4>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNIVERSITY 2 */}
      <section className={`${styles.uniSection} ${styles.altSection}`}>
        <div className="container">
          <div className={styles.uniCard}>
            <div className={styles.uniHeader}>
              <div className={styles.uniIconWrap}>
                <FaBuildingColumns />
              </div>
              <h2>Mahatma Gandhi Kashi Vidyapeeth</h2>
            </div>
            
            <div className={styles.uniBody}>
              {/* Contact Info */}
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}><FaLocationDot /></div>
                  <div className={styles.infoText}>
                    <span>University Address</span>
                    <strong>Vidyapeeth Road, Varanasi, Uttar Pradesh - 221002</strong>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}><FaPhone /></div>
                  <div className={styles.infoText}>
                    <span>Contact Number</span>
                    <strong>0542-222 2689</strong>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}><FaGlobe /></div>
                  <div className={styles.infoText}>
                    <span>Official Website</span>
                    <strong><a href="http://www.mgkvp.ac.in/" target="_blank" rel="noreferrer">www.mgkvp.ac.in</a></strong>
                  </div>
                </div>
              </div>

              {/* Leadership Profiles */}
              <div className={styles.leadershipSection}>
                <h3>University Leadership</h3>
                <div className={styles.profileGrid}>
                  
                  <div className={styles.profileCard}>
                    <div className={styles.profileImageWrap}>
                      <Image 
                        src="/Images/affiliated-university/Dr. Sanjeev Mishra.png" 
                        alt="Prof. Anand Kumar Tyagi" 
                        fill 
                        className={styles.profileImg} 
                      />
                    </div>
                    <div className={styles.profileInfo}>
                      <span className={styles.designation}>Vice Chancellor</span>
                      <h4>Prof. Anand Kumar Tyagi</h4>
                    </div>
                  </div>

                  <div className={styles.profileCard}>
                    <div className={styles.profileImageWrap}>
                      <Image 
                        src="/Images/affiliated-university/Mr. Sanjeev Kumar.png" 
                        alt="Dr. Sunita Pandey" 
                        fill 
                        className={styles.profileImg} 
                      />
                    </div>
                    <div className={styles.profileInfo}>
                      <span className={styles.designation}>Registrar</span>
                      <h4>Dr. Sunita Pandey</h4>
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
