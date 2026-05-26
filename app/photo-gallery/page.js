'use client';

import styles from './PhotoGallery.module.css';
import Image from 'next/image';

const galleryImages = [
  { src: '/Images/home page images/Magnificent Campus.webp', alt: 'HIMS Campus View', category: 'Campus' },
  { src: '/Images/Life at HIMS/Advanced Labs.webp', alt: 'Advanced Laboratories', category: 'Infrastructure' },
  { src: '/Images/Life at HIMS/Modern Library.webp', alt: 'Central Library', category: 'Infrastructure' },
  { src: '/Images/home page images/Integrated Learning.webp', alt: 'Integrated Learning', category: 'Academics' },
  { src: '/Images/home page images/Experienced Faculty.webp', alt: 'Experienced Faculty', category: 'Academics' },
  { src: '/Images/home page images/Best Facilities.webp', alt: 'Best Facilities', category: 'Campus' },
];

export default function PhotoGallery() {
  return (
    <div className={styles.mainContainer}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>Visual Journey</span>
            <h1>Photo <span>Gallery</span></h1>
            <p>Explore the vibrant life, state-of-the-art infrastructure, and academic excellence at Heritage Institute of Medical Sciences.</p>
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.galleryGrid}>
            {galleryImages.map((img, index) => (
              <div key={index} className={styles.galleryItem}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={img.src} 
                    alt={img.alt} 
                    fill 
                    className={styles.galleryImg} 
                  />
                  <div className={styles.imageOverlay}>
                    <span className={styles.categoryBadge}>{img.category}</span>
                    <h3>{img.alt}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
