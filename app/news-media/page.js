import fs from 'fs/promises';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import styles from './NewsMedia.module.css';
import { FaCalendarDays, FaImages, FaArrowRightLong } from 'react-icons/fa6';

export const metadata = {
  title: "News & Media | Heritage Institute of Medical Sciences",
  description: "Explore the latest news, events, and media from HIMS Varanasi.",
};

export default async function NewsMedia() {
  const mediaDir = path.join(process.cwd(), 'public', 'Images', 'news-media');
  let albums = [];

  try {
    const entries = await fs.readdir(mediaDir, { withFileTypes: true });
    const folders = entries.filter(entry => entry.isDirectory()).map(entry => entry.name);
    
    // Process all folders concurrently
    const albumPromises = folders.map(async (folder) => {
      const folderPath = path.join(mediaDir, folder);
      const files = await fs.readdir(folderPath);
      
      // Filter for common image extensions
      const validFiles = files.filter(file => /\.(jpe?g|png|webp|gif)$/i.test(file));
      
      let eventTitle = `News Update #${folder}`;
      let eventDate = "2024";
      let mainImage = "";

      if (validFiles.length > 0) {
        const mainFile = validFiles.find(f => f.includes('(')) || validFiles[0];
        mainImage = `/Images/news-media/${folder}/${mainFile}`;
        
        const nameWithoutExt = mainFile.replace(/\.[^/.]+$/, "");
        const dateMatch = nameWithoutExt.match(/\(\s*([^)]+)\s*\)/);
        
        if (dateMatch) {
          eventDate = dateMatch[1];
          eventTitle = nameWithoutExt.replace(/\(\s*[^)]+\s*\)/, "").trim();
        } else if (nameWithoutExt.length > 15) {
          eventTitle = nameWithoutExt;
        }
      }
      
      return {
        id: folder,
        title: eventTitle,
        date: eventDate,
        images: validFiles.map(f => `/Images/news-media/${folder}/${f}`),
        mainImage: mainImage
      };
    });

    const results = await Promise.all(albumPromises);
    
    // Keep only albums that have images
    albums = results.filter(album => album.images.length > 0);
    
    // Sort albums numerically/alphabetically (01, 02, ..., 17)
    albums.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

  } catch (error) {
    console.error("Error reading news-media directory:", error);
  }

  return (
    <div className={styles.mainContainer}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>HIMS Updates</span>
            <h1>News & <span>Media</span></h1>
            <p>Catch up on the latest events, conferences, and celebrations happening at our campus.</p>
          </div>
        </div>
      </section>

      {/* NEWS GRID SECTION */}
      <section className={styles.albumsSection}>
        <div className="container">
          {albums.length === 0 ? (
            <div className={styles.noDataMessage}>
              <p>No media albums found.</p>
            </div>
          ) : (
            <div className={styles.albumGrid}>
              {albums.map((album) => (
                <div key={album.id} className={styles.albumCard}>
                  <Link href={`/news-media/${album.id}`} className={styles.cardLinkWrap}>
                    <div className={styles.albumCoverWrap}>
                      <Image 
                        src={album.mainImage || album.images[0]} 
                        alt={album.title} 
                        fill 
                        className={styles.albumCoverImg} 
                      />
                      <div className={styles.albumOverlay}>
                        <span className={styles.readMoreBadge}>View Gallery</span>
                      </div>
                    </div>
                  </Link>
                  <div className={styles.albumInfo}>
                    <div className={styles.newsMeta}>
                      <span><FaCalendarDays /> {album.date}</span>
                      <span><FaImages /> {album.images.length} Photos</span>
                    </div>
                    <h3>
                      <Link href={`/news-media/${album.id}`}>
                        {album.title}
                      </Link>
                    </h3>
                    <Link href={`/news-media/${album.id}`} className={styles.readMoreBtn}>
                      Read More <FaArrowRightLong />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
