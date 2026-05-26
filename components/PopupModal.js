'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FaTimes } from 'react-icons/fa';
import styles from './PopupModal.module.css';

export default function PopupModal() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Reset and show modal shortly after every route change or page load
    setShow(false);
    
    const timer = setTimeout(() => {
      setShow(true);
    }, 800); // reduced delay slightly for better UX on navigation
    
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!show) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={() => setShow(false)}>
          <FaTimes />
        </button>
        <img 
          src="/Images/ADMISSION OPEN/ADMISSION OPEN FOR 2026–27.webp" 
          alt="Admission Open"
          className={styles.modalImage}
        />
      </div>
    </div>
  );
}
