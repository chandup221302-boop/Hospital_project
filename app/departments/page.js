import styles from './Departments.module.css';
import Link from 'next/link';
import { FaStethoscope, FaFlask, FaArrowRight } from 'react-icons/fa6';
import fs from 'fs';
import path from 'path';

export const metadata = {
  title: 'Departments | HIMS Varanasi',
  description: 'Explore all Clinical and Non-Clinical Departments at Heritage Institute of Medical Sciences.',
};

export default function DepartmentsPage() {
  // Read departments JSON
  const dataPath = path.join(process.cwd(), 'data', 'departments.json');
  let departments = [];
  if (fs.existsSync(dataPath)) {
    departments = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  }

  const clinical = departments.filter(d => d.category === 'Clinical');
  const nonClinical = departments.filter(d => d.category === 'Non Clinical');

  return (
    <div className={styles.mainContainer}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>Excellence in Medical Sciences</span>
            <h1>Our <span>Departments</span></h1>
            <p>Discover our wide array of Clinical and Non-Clinical departments, equipped with state-of-the-art facilities and led by highly experienced faculty members dedicated to medical education, research, and patient care.</p>
          </div>
        </div>
      </section>

      {/* CLINICAL DEPARTMENTS */}
      <section className={styles.categorySection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.iconBox}><FaStethoscope /></div>
            <h2>Clinical <span>Departments</span></h2>
          </div>
          
          <div className="row g-4 mt-3">
            {clinical.map((dept, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                <Link href={`/departments/${dept.slug}`} className={styles.deptCard}>
                  <div className={styles.cardIcon}><FaStethoscope /></div>
                  <h3 className={styles.cardTitle}>{dept.title}</h3>
                  <div className={styles.cardAction}>
                    <span>View Details</span>
                    <FaArrowRight className={styles.actionIcon} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NON-CLINICAL DEPARTMENTS */}
      <section className={`${styles.categorySection} ${styles.altBg}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.iconBox}><FaFlask /></div>
            <h2>Non Clinical <span>Departments</span></h2>
          </div>
          
          <div className="row g-4 mt-3">
            {nonClinical.map((dept, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                <Link href={`/departments/${dept.slug}`} className={styles.deptCard}>
                  <div className={styles.cardIcon}><FaFlask /></div>
                  <h3 className={styles.cardTitle}>{dept.title}</h3>
                  <div className={styles.cardAction}>
                    <span>View Details</span>
                    <FaArrowRight className={styles.actionIcon} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
