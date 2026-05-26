'use client';

import styles from './CampusTour.module.css';
import Image from 'next/image';
import { FaPlay, FaMapLocationDot, FaBuildingShield, FaTree } from 'react-icons/fa6';

export default function CampusTour() {
  return (
    <div className={styles.mainContainer}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>Experience HIMS</span>
            <h1>Campus <span>Tour</span></h1>
            <p>Take a virtual walk through our magnificent campus, featuring state-of-the-art facilities and a lush green environment.</p>
          </div>
        </div>
      </section>

      {/* VIDEO TOUR SECTION */}
      <section className={styles.videoSection}>
        <div className="container">
          <div className={styles.videoCard}>
            <div className={styles.videoWrapper}>
              <Image 
                src="/Images/home page images/Magnificent Campus.webp" 
                alt="Campus Tour Video" 
                fill 
                className={styles.videoThumbnail} 
              />
              <div className={styles.playButtonWrap}>
                <button className={styles.playButton}>
                  <FaPlay />
                </button>
                <span>Watch Full Tour</span>
              </div>
            </div>
            <div className={styles.videoInfo}>
              <h2>Explore Our <span>200+ Acre</span> Campus</h2>
              <p>Experience the perfect blend of modern architecture and natural beauty. Our campus is designed to provide an ideal environment for learning, healing, and personal growth.</p>
              
              <div className={styles.featuresRow}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}><FaTree /></div>
                  <h4>Lush Greenery</h4>
                  <p>Eco-friendly campus with extensive plantation.</p>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}><FaMapLocationDot /></div>
                  <h4>Prime Location</h4>
                  <p>Easily accessible from all parts of Varanasi.</p>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}><FaBuildingShield /></div>
                  <h4>Safe & Secure</h4>
                  <p>24/7 security with CCTV surveillance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
