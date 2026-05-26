import styles from './TopBar.module.css';
import { FaPhoneVolume, FaPenToSquare, FaCreditCard, FaEnvelope, FaPhone } from 'react-icons/fa6';

export default function TopBar() {
  return (
    <>
      {/* MAIN TOP BAR */}
      <div id={styles.mainTopBar} className={styles.topBar}>
        <div id={styles.topbarContainer}>
          
          {/* LEFT SIDE */}
          <div id={styles.topbarLeft}>
            {/* HELPLINE */}
            <a href="tel:+919876543210" className={styles.topBtn}>
              <FaPhoneVolume />
              Admission Helpline
            </a>

            {/* APPLY */}
            <a href="#" className={styles.topBtn}>
              <FaPenToSquare />
              Apply Now
            </a>

            {/* PAYMENT */}
            <a href="#" className={styles.topBtn}>
              <FaCreditCard />
              Online Payment
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div id={styles.topbarRight}>
            {/* EMAIL */}
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=demo@example.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.topIconBtn}
              title="Send Email"
            >
              <FaEnvelope />
            </a>

            {/* CALL */}
            <a href="tel:+919876543210" className={styles.topIconBtn} title="Call Now">
              <FaPhone />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
