'use client';

import styles from './IntakeCapacity.module.css';
import { FaUsersLine, FaFilePdf, FaCircleCheck, FaUserDoctor, FaGraduationCap } from 'react-icons/fa6';

const INTAKE_DATA = [
  {
    id: 1,
    course: 'MBBS',
    icon: <FaUserDoctor />,
    capacity: 200,
    status: 'Recognized',
    approvalText: 'Government Approval',
    pdfLink: 'https://heritageims.com/storage/2024/04/Document-400.pdf',
    color: '#3498db'
  },
  {
    id: 2,
    course: 'PG Course (MD/MS)',
    icon: <FaGraduationCap />,
    capacity: 56,
    status: 'Recognized',
    approvalText: 'Government Approval',
    pdfLink: 'https://heritageims.com/wp-content/uploads/2025/07/PG-Permission-.pdf',
    color: '#e67e22'
  }
];

export default function IntakeCapacity() {
  return (
    <div className={styles.mainContainer}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}><FaUsersLine /> Academic Information</span>
            <h1>Intake <span>Capacity</span></h1>
            <p>Official sanctioned intake capacities and government recognitions for our medical programs.</p>
          </div>
        </div>
      </section>

      {/* DATA SECTION */}
      <section className={styles.tableSection}>
        <div className="container">
          <div className={styles.tableWrapper}>
            
            {/* Desktop Table View */}
            <div className={`table-responsive d-none d-lg-block ${styles.customTableWrap}`}>
              <table className={`table ${styles.customTable}`}>
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Sanctioned Intake Capacity</th>
                    <th>Permitted / Recognised</th>
                    <th>Letter of permission / Recognition</th>
                  </tr>
                </thead>
                <tbody>
                  {INTAKE_DATA.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className={styles.courseCell}>
                          <div className={styles.courseIcon} style={{ color: item.color, backgroundColor: `${item.color}15` }}>
                            {item.icon}
                          </div>
                          <strong>{item.course}</strong>
                        </div>
                      </td>
                      <td>
                        <span className={styles.capacityBadge}>{item.capacity}</span>
                      </td>
                      <td>
                        <div className={styles.statusCell}>
                          <FaCircleCheck className={styles.checkIcon} />
                          <span>{item.status}</span>
                        </div>
                      </td>
                      <td>
                        <a href={item.pdfLink} target="_blank" rel="noreferrer" className={styles.pdfBtn}>
                          <FaFilePdf /> {item.approvalText}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="d-lg-none">
              <div className={styles.mobileGrid}>
                {INTAKE_DATA.map((item) => (
                  <div key={item.id} className={styles.mobileCard}>
                    <div className={styles.mobileCardHeader}>
                      <div className={styles.courseIcon} style={{ color: item.color, backgroundColor: `${item.color}15` }}>
                        {item.icon}
                      </div>
                      <h3>{item.course}</h3>
                    </div>
                    
                    <div className={styles.mobileCardBody}>
                      <div className={styles.mobileRow}>
                        <span className={styles.mobileLabel}>Intake Capacity</span>
                        <span className={styles.capacityBadge}>{item.capacity}</span>
                      </div>
                      
                      <div className={styles.mobileRow}>
                        <span className={styles.mobileLabel}>Status</span>
                        <div className={styles.statusCell}>
                          <FaCircleCheck className={styles.checkIcon} />
                          <span>{item.status}</span>
                        </div>
                      </div>
                      
                      <div className={styles.mobileRowAlt}>
                        <span className={styles.mobileLabel}>Letter of Permission</span>
                        <a href={item.pdfLink} target="_blank" rel="noreferrer" className={styles.pdfBtn}>
                          <FaFilePdf /> {item.approvalText}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
