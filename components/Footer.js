'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaFileContract, FaMicroscope, FaShieldHalved, FaAddressCard, 
  FaBullhorn, FaLocationDot, FaPhone, FaEnvelope,
  FaFacebookF, FaInstagram, FaXTwitter, FaYoutube, FaLinkedinIn,
  FaAngleRight, FaCopyright, FaChevronUp, FaStethoscope, FaHospital
} from 'react-icons/fa6';

const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let startTime = null;
    let animationFrame = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(end * percentage));
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startTime = null;
          if (animationFrame) cancelAnimationFrame(animationFrame);
          animationFrame = requestAnimationFrame(animate);
        } else {
          if (animationFrame) cancelAnimationFrame(animationFrame);
          setCount(0);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* BRANDING TOP */}
        <div className={styles.footerBrandSection}>
          <div className={styles.brandLeft}>
            <Image 
              src="/Images/Logo.webp" 
              alt="HIMS Varanasi Logo" 
              width={220} 
              height={180} 
              className={styles.footerLogo} 
            />
            <div className={styles.brandName}>
              <h2>Heritage Institute</h2>
              <h3>of Medical Sciences</h3>
              <p>Varanasi</p>
            </div>
          </div>
          <div className={styles.brandRight}>
            <h2 className={styles.destTitle}>Destination of Excellence</h2>
            <p className={styles.destDesc}>
              HIMS is a leading medical college of Uttar Pradesh, with a vast expanse of hi-tech campus and cream faculty for students. Built by the visionary team behind the renowned Heritage Hospital (Varanasi), HIMS is pushing the envelope of medical training and healthcare.
            </p>
            <div className={styles.statsGrid}>
              <div className={styles.statBox}>
                <span className={styles.statNum}><Counter end={500} />+</span>
                <span className={styles.statLab}>STUDENTS</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNum}><Counter end={50} />+</span>
                <span className={styles.statLab}>FACULTY</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNum}><Counter end={22} />+</span>
                <span className={styles.statLab}>DEPARTMENTS</span>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className={styles.footerGrid}>
          {/* DISCLOSURES */}
          <div className={styles.footerCol}>
            <h4 className={styles.colHeader}><FaFileContract /> Mandatory Disclosures</h4>
            <ul className={styles.linksList}>
              <li><Link href="/marb-information"><FaAngleRight /> MARB Information</Link></li>
              <li><Link href="/govt-approvals"><FaAngleRight /> Govt. Approvals</Link></li>
              <li><Link href="/affiliated-university"><FaAngleRight /> Affiliated University</Link></li>
              <li><Link href="/intake-capacity"><FaAngleRight /> Intake Capacity – UG & PG</Link></li>
              <li><Link href="/admissions/admission-process"><FaAngleRight /> Admitted Students – All Years</Link></li>
              <li><Link href="/results"><FaAngleRight /> Results</Link></li>
              <li><Link href="/faculty-research/teaching-faculty"><FaAngleRight /> Teaching Faculty List</Link></li>
            </ul>
          </div>

          {/* RESEARCH */}
          <div className={styles.footerCol}>
            <h4 className={styles.colHeader}><FaMicroscope /> Research & Achievements</h4>
            <ul className={styles.linksList}>
              <li><Link href="/faculty-research/research-work/faculty"><FaAngleRight /> Faculty Research</Link></li>
              <li><Link href="/faculty-research/research-work/students"><FaAngleRight /> Students Research</Link></li>
              <li><Link href="/faculty-research/publications"><FaAngleRight /> Research Publications</Link></li>
              <li><Link href="/faculty-research/awards-achievements"><FaAngleRight /> Awards & Achievements</Link></li>
              <li><Link href="/faculty-research/cme-conferences"><FaAngleRight /> CME & Conferences</Link></li>
              <li><Link href="/faculty-research/non-teaching-staff"><FaAngleRight /> Non Teaching Staff</Link></li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className={styles.footerCol}>
            <h4 className={styles.colHeader}><FaShieldHalved /> Quick Links</h4>
            <ul className={styles.linksList}>
              <li><Link href="/about-institute"><FaAngleRight /> About Institute</Link></li>
              <li><Link href="/vision-mission"><FaAngleRight /> Vision & Mission</Link></li>
              <li><Link href="/principal-message"><FaAngleRight /> Principal Message</Link></li>
              <li><Link href="/infrastructure"><FaAngleRight /> Infrastructure</Link></li>
              <li><Link href="/campus-tour"><FaAngleRight /> Campus Tour</Link></li>
              <li><Link href="/photo-gallery"><FaAngleRight /> Photo Gallery</Link></li>
              <li><Link href="/courses/mbbs"><FaAngleRight /> MBBS Course</Link></li>
              <li><Link href="/courses/pg"><FaAngleRight /> PG Courses</Link></li>
            </ul>
          </div>

          {/* HOSPITAL SERVICES */}
          <div className={styles.footerCol}>
            <h4 className={styles.colHeader}><FaHospital /> Hospital Services</h4>
            <ul className={styles.linksList}>
              <li><Link href="https://www.heritageimshospital.com/" target="_blank"><FaAngleRight /> Hospital Overview</Link></li>
              <li><Link href="/hospital/emergency"><FaAngleRight /> Emergency 24/7</Link></li>
              <li><Link href="/hospital/opd-services"><FaAngleRight /> OPD Services</Link></li>
              <li><Link href="/hospital/icu"><FaAngleRight /> ICU & Critical Care</Link></li>
              <li><Link href="/hospital/diagnostics"><FaAngleRight /> Diagnostics</Link></li>
              <li><Link href="/hospital/bed-capacity"><FaAngleRight /> Bed Capacity</Link></li>
              <li><Link href="/hospital/clinical-facilities"><FaAngleRight /> Clinical Facilities</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className={styles.footerCol}>
            <h4 className={styles.colHeader}><FaAddressCard /> Contact Info</h4>
            <div className={styles.contactCard}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}><FaLocationDot /></div>
                <div>
                  <strong>Address:</strong>
                  <p>NH2, GT Road Bypass, Bhadwar, Varanasi, UP – 221311.</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}><FaPhone /></div>
                <div>
                  <strong>Phone:</strong>
                  <p>07408702222</p>
                  <p>09450530506</p>
                  <p>0542-7111071</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}><FaEnvelope /></div>
                <div>
                  <strong>Email:</strong>
                  <p>info@heritageims.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DEPARTMENTS STRIP */}
        <div className={styles.noticesBar} style={{ marginBottom: '20px' }}>
          <div className={styles.noticeHeader}>
            <FaStethoscope /> Departments
          </div>
          <div className={styles.noticeLinks}>
            <Link href="/departments/general-medicine">General Medicine</Link>
            <Link href="/departments/comm-medicine">Community Medicine</Link>
            <Link href="/departments/ortho-2">Orthopedics</Link>
            <Link href="/departments/emergency-medicine">Emergency Medicine</Link>
            <Link href="/departments/radiology">Radiology</Link>
            <Link href="/departments/ent-2">ENT</Link>
            <Link href="/departments/anaesthesiology">Anaesthesiology</Link>
            <Link href="/departments/tb-amp-chest">TB & Chest</Link>
            <Link href="/departments/derma">Dermatology</Link>
            <Link href="/departments/surgery">General Surgery</Link>
            <Link href="/departments/obstetrics-amp-gynecology">Obs & Gynac</Link>
            <Link href="/departments/pediatrics">Pediatrics</Link>
            <Link href="/departments/psychiatry">Psychiatry</Link>
            <Link href="/departments/ophthalmology">Ophthalmology</Link>
            <Link href="/departments/dental">Dentistry</Link>
            <Link href="/departments/anatomy">Anatomy</Link>
            <Link href="/departments/biochemistry-2">Biochemistry</Link>
            <Link href="/departments/forensic-medicine">Forensic Medicine</Link>
            <Link href="/departments/pathology-2">Pathology</Link>
            <Link href="/departments/physiology">Physiology</Link>
            <Link href="/departments/microbiology-2">Microbiology</Link>
            <Link href="/departments/pharmacology-2">Pharmacology</Link>
            <Link href="/departments">View All Departments...</Link>
          </div>
        </div>

        {/* NOTICES STRIP */}
        <div className={styles.noticesBar}>
          <div className={styles.noticeHeader}>
            <FaBullhorn /> Public Notices
          </div>
          <div className={styles.noticeLinks}>
            <Link href="/faculty-research/non-teaching-staff">Non-Teaching Staff List</Link>
            <Link href="/admissions/fee-structure">Fee Structure</Link>
            <Link href="/admissions/admission-process">Admission Process</Link>
            <Link href="/academic-resources/time-tables">Time Tables</Link>
            <Link href="/academic-resources/internship-schedule">Internship Schedule</Link>
            <Link href="/news-media">News & Media</Link>
            <Link href="/tenders">Tenders</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact-us">Contact Us</Link>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className={styles.footerBottom}>
          <div className={styles.copyText}>
            <FaCopyright /> 2025 Heritage Institute of Medical Sciences, Varanasi. All Rights Reserved.
          </div>
          <div className={styles.socials}>
            <Link href="#" className={styles.socialBtn} aria-label="Facebook"><FaFacebookF /></Link>
            <Link href="#" className={styles.socialBtn} aria-label="Instagram"><FaInstagram /></Link>
            <Link href="#" className={styles.socialBtn} aria-label="Twitter"><FaXTwitter /></Link>
            <Link href="#" className={styles.socialBtn} aria-label="YouTube"><FaYoutube /></Link>
            <Link href="#" className={styles.socialBtn} aria-label="LinkedIn"><FaLinkedinIn /></Link>
          </div>
        </div>
      </div>

      {isVisible && (
        <button className={styles.backToTop} onClick={scrollToTop} aria-label="Back to top">
          <FaChevronUp />
        </button>
      )}
    </footer>
  );
}
