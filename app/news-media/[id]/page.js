import fs from 'fs/promises';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import styles from './NewsDetail.module.css';
import { FaArrowLeft, FaCalendarDays, FaImages } from 'react-icons/fa6';

export async function generateMetadata({ params }) {
  const { id } = await params;
  return {
    title: `News Event ${id} | HIMS Varanasi`,
  };
}

export default async function NewsDetail({ params }) {
  const { id } = await params;
  const folderPath = path.join(process.cwd(), 'public', 'Images', 'news-media', id);
  let images = [];
  let eventTitle = `News Update #${id}`;
  let eventDate = "2024";

  try {
    const files = await fs.readdir(folderPath);
    const validFiles = files.filter(file => /\.(jpe?g|png|webp|gif)$/i.test(file));
    
    // Find the main file with the title (longest filename or contains parenthesis)
    let mainFile = validFiles.find(f => f.includes('(')) || validFiles[0];
    
    // Extract title and date from filename
    // e.g. "हेरिटेज ... ( Jul 18, 2024 ).webp"
    const nameWithoutExt = mainFile.replace(/\.[^/.]+$/, "");
    const dateMatch = nameWithoutExt.match(/\(\s*([^)]+)\s*\)/);
    
    if (dateMatch) {
      eventDate = dateMatch[1];
      eventTitle = nameWithoutExt.replace(/\(\s*[^)]+\s*\)/, "").trim();
    } else if (nameWithoutExt.length > 15) {
      eventTitle = nameWithoutExt;
    }

    // Sort images so main file is first, or keep original order
    images = validFiles.map(file => `/Images/news-media/${id}/${file}`);
  } catch (error) {
    console.error(`Error reading news-media folder ${id}:`, error);
  }

  if (images.length === 0) {
    return (
      <div className={styles.mainContainer}>
        <div className="container py-5 text-center">
          <h2>News Event Not Found</h2>
          <Link href="/news-media" className="btn btn-primary mt-3">Back to News</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.mainContainer}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <Link href="/news-media" className={styles.backLink}>
              <FaArrowLeft /> Back to News & Media
            </Link>
            <h1>{eventTitle}</h1>
            <div className={styles.metaInfo}>
              <span><FaCalendarDays /> {eventDate}</span>
              <span><FaImages /> {images.length} Photos</span>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.masonryGrid}>
            {images.map((imgSrc, idx) => (
              <div key={idx} className={styles.masonryItem}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={imgSrc} 
                  alt={`Event ${id} image ${idx + 1}`} 
                  className={styles.masonryImg}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
