'use client';

import styles from './VisionMission.module.css';
import { FaEye, FaBullseye, FaQuestion, FaGear, FaAward, FaQuoteLeft, FaArrowRightLong } from 'react-icons/fa6';

export default function VisionMission() {
  return (
    <div className={styles.mainContainer}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>Our Purpose & Philosophy</span>
            <h1>Vision & <span>Mission</span></h1>
            <p>Guided by a singular commitment to humanity, healthcare, and excellence in education.</p>
          </div>
        </div>
      </section>

      {/* VISION & MISSION CORE */}
      <section className={styles.coreSection}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className={styles.visionCard}>
                <div className={styles.iconBox}><FaEye /></div>
                <div className={styles.cardHeader}>
                  <span>Our Vision</span>
                  <h2>Leadership in <span>Healthcare</span></h2>
                </div>
                <div className={styles.cardContent}>
                  <FaQuoteLeft className={styles.quoteIcon} />
                  <p className={styles.visionText}>
                    "To be a leader in health care, positive clinical outcomes, research & health education."
                  </p>
                  <p className={styles.visionDescription}>
                    Our vision is to transform HIMS into a globally recognized medical hub where innovation meets tradition. We aspire to produce medical graduates who are not just skilled clinicians but also empathetic leaders, capable of pushing the boundaries of medical science through research and ethical practice.
                  </p>
                  <p className={styles.visionDescription}>
                    We envision a future where high-quality healthcare is not a privilege but a standard, making Varanasi a destination for medical excellence for both domestic and international seekers of healing.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.missionCard}>
                <div className={styles.iconBox}><FaBullseye /></div>
                <div className={styles.cardHeader}>
                  <span>Our Mission</span>
                  <h2>Committed to <span>Humanity</span></h2>
                </div>
                <div className={styles.cardContent}>
                  <p className={styles.missionText}>
                    "Our mission is to improve the quality of life through continuous health education and delivery of healthcare by committed medical professionals aided by the latest state-of-the-art technology and bringing affordability of quality care by maintaining excellence in positive clinical outcomes and patient-oriented research for the benefit of the Humanity."
                  </p>
                  <p className={styles.missionQuote}>
                    “Each of us is sculpting a stone, erecting a column, or cutting to size a sheet of stained glass in giving shape to an idea, which is larger than life. The upcoming 1000-bed Heritage Institute of Medical Sciences is under construction, a conceptual structure, the like of which has never been seen before in this part of the country."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY HOW WHAT - PHILOSOPHY */}
      <section className={styles.philosophySection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.subHeader}>The Framework</span>
            <h2>The HIMS <span>Philosophy</span></h2>
          </div>

          <div className={styles.philosophyGrid}>
            {/* WHY */}
            <div className={styles.philRow}>
              <div className={styles.philIconCol}>
                <div className={styles.philIcon}><FaQuestion /></div>
                <div className={styles.philLine}></div>
              </div>
              <div className={styles.philContentCol}>
                <h3>Why? <span>The Founding Dream</span></h3>
                <p>
                  The dream child of <strong>Dr. Siddharth Rai</strong>, nurtured within his being for years with his yearning to serve the sick and ailing populace of Uttar Pradesh, is the primary source for giving birth to his vision into a practical reality. 
                </p>
                <p>
                  The vision of imparting quality healthcare is the need of the hour for the healthcare-impoverished state of the Uttar Pradesh region. India is a vital hub of international and domestic medical tourism and Uttar Pradesh in particular, and this is where Heritage Hospitals comes in with its traditional culture and heritage, touching and enriching the lives of the populace.
                </p>
                <div className={styles.statBox}>
                  <strong>1000+ Bedded</strong>
                  <span>Future Expansion Goal</span>
                </div>
              </div>
            </div>

            {/* HOW */}
            <div className={styles.philRow}>
              <div className={styles.philIconCol}>
                <div className={styles.philIcon}><FaGear /></div>
                <div className={styles.philLine}></div>
              </div>
              <div className={styles.philContentCol}>
                <h3>How? <span>Integrated Delivery</span></h3>
                <p>
                  The Heritage Hospitals Group is the pioneer of integrated health care delivery in Varanasi, Uttar Pradesh. This vision led the group to earmark time and resources to strengthen each vital cog in the process of health care delivery, positive clinical outcomes, education, and research through their dream project.
                </p>
                <p>
                  To enhance performance and service to their patients, the <strong>Heritage Hospital</strong> group is also planning various services including telemedicine services, clinical trials, education, training programs & research services, and a host of other health-related projects.
                </p>
              </div>
            </div>

            {/* WHAT */}
            <div className={styles.philRow}>
              <div className={styles.philIconCol}>
                <div className={styles.philIcon}><FaAward /></div>
              </div>
              <div className={styles.philContentCol}>
                <h3>What? <span>Standards of Excellence</span></h3>
                <p>
                  Our prestigious project is driven by a single-minded pursuit: to provide the best standards of patient care with the passion that would lead to the development of a unique center of excellence across medical disciplines.
                </p>
                <p>
                  True to its founding principles, the group has made quality healthcare accessible to the people of Varanasi and even overseas. It has become an institution of trust, and a beacon of hope for many souls.
                </p>
                <div className={styles.pillarRow}>
                  <span>Experience</span>
                  <span>Excellence</span>
                  <span>Expertise</span>
                  <span>Research</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
