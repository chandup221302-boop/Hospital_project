'use client';

import styles from './ContactUs.module.css';
import { 
  FaLocationDot, FaPhone, FaEnvelope, FaPaperPlane, 
  FaPhoneVolume, FaClock, FaGlobe, FaArrowRightLong 
} from 'react-icons/fa6';

export default function ContactUs() {
  return (
    <div className={styles.mainContainer}>
      {/* CONTACT HERO */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>Get In Touch</span>
            <h1>Contact <span>Heritage Institute</span></h1>
            <p>Your gateway to world-class medical education and compassionate healthcare starts here.</p>
          </div>
        </div>
      </section>

      {/* QUICK CONTACT CARDS */}
      <section className={styles.infoSection}>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className={styles.infoCard}>
                <div className={styles.cardIcon}><FaLocationDot /></div>
                <h3>Our Location</h3>
                <p>N.H.-2 (G.T. ROAD, Bypass), Bhadwar, MohanSarai Varanasi – 221311 U.P. (India)</p>
                <a href="https://goo.gl/maps/..." target="_blank" className={styles.cardLink}>Get Directions <FaArrowRightLong /></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.infoCard}>
                <div className={styles.cardIcon}><FaPhoneVolume /></div>
                <h3>Admission Cell</h3>
                <p>For all admission related queries and guidance:</p>
                <div className={styles.cardDetail}>
                  <a href="tel:07408702222">07408702222</a>
                  <a href="tel:09450530506">09450530506</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className={styles.infoCard}>
                <div className={styles.cardIcon}><FaEnvelope /></div>
                <h3>General Support</h3>
                <p>Drop us a message for general inquiries or collaboration:</p>
                <div className={styles.cardDetail}>
                  <a href="mailto:principal@heritageims.com">principal@heritageims.com</a>
                  <a href="mailto:info@heritageims.com">info@heritageims.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM & DETAILS SECTION */}
      <section className={styles.formSection}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className={styles.formWrapper}>
                <div className={styles.formHeader}>
                  <h2>Request A <span>Callback</span></h2>
                  <p>Please fill out the form below and our team will get back to you within 24 hours.</p>
                </div>
                <form className={styles.contactForm}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className={styles.inputGroup}>
                        <label>Full Name</label>
                        <input type="text" placeholder="e.g. John Doe" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={styles.inputGroup}>
                        <label>Email Address</label>
                        <input type="email" placeholder="e.g. john@example.com" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={styles.inputGroup}>
                        <label>Phone Number</label>
                        <input type="tel" placeholder="e.g. +91 99999 99999" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={styles.inputGroup}>
                        <label>Subject</label>
                        <select required>
                          <option value="">Select a subject</option>
                          <option value="admission">Admissions</option>
                          <option value="hospital">Hospital Query</option>
                          <option value="research">Research Publication</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className={styles.inputGroup}>
                        <label>Your Message</label>
                        <textarea placeholder="How can we help you?" rows="5" required></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className={styles.submitBtn}>
                        Send Message <FaPaperPlane className="ms-2" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-5">
              <div className={styles.detailsColumn}>
                <div className={styles.detailBox}>
                  <div className={styles.detailItem}>
                    <FaClock />
                    <div>
                      <h4>Visiting Hours</h4>
                      <p>9:00 AM - 5:00 PM (Monday to Saturday)</p>
                    </div>
                  </div>
                  <div className={styles.detailItem}>
                    <FaGlobe />
                    <div>
                      <h4>Official Website</h4>
                      <p>www.heritageims.com</p>
                    </div>
                  </div>
                </div>

                <div className={styles.emergencyBox}>
                  <h4><FaPhone className="me-2" /> Emergency 24/7</h4>
                  <p>In case of any medical emergency, please call:</p>
                  <h3>+91-542-7111071</h3>
                </div>

                <div className={styles.mapThumb}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.728987309995!2d82.90696951501103!3d25.279679183858066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e32386da65849%3A0xc47e335f60f60759!2sHeritage%20Institute%20of%20Medical%20Sciences!5e0!3m2!1sen!2sin!4v1683884841793!5m2!1sen!2sin" 
                    width="100%"
                    height="250"
                    style={{ border: 0, borderRadius: '15px' }}
                    allowFullScreen="" 
                    loading="lazy" 
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
