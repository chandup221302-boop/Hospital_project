'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import { 
  FaBars, FaHouse, FaChevronDown, FaBuildingColumns, FaEye, 
  FaMessage, FaCity, FaRoute, FaImages, FaBookOpen, 
  FaCircleDot, FaUserGraduate, FaStethoscope, FaFlask,
  FaCircleInfo, FaUserDoctor, FaTruckMedical, FaBedPulse,
  FaMicroscope, FaBed, FaBuilding, FaChalkboardUser,
  FaUsers, FaFileLines, FaFlaskVial, FaCalendarCheck,
  FaTrophy, FaHouseChimney, FaShieldHalved, FaCommentDots,
  FaClipboardList, FaMusic, FaFutbol, FaFileShield,
  FaStamp, FaLink, FaUsersLine, FaListCheck, FaNewspaper,
  FaCalendarDays, FaFileContract, FaBriefcase, FaBullhorn,
  FaEnvelope, FaChevronRight, FaCircle, FaGraduationCap, FaChalkboardTeacher, FaFileAlt, FaCalendarAlt, FaComments, FaCertificate,
  FaHospital, FaAngleRight, FaArrowRightLong
} from 'react-icons/fa6';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePanel, setActivePanel] = useState(null);
  const [activeSubPanel, setActiveSubPanel] = useState(null);
  const [hideMega, setHideMega] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  const handleMegaClick = () => {
    setHideMega(true);
    setTimeout(() => setHideMega(false), 300);
    closeNav();
  };

  const togglePanel = (panelId) => {
    setActivePanel(activePanel === panelId ? null : panelId);
  };

  const toggleSubPanel = (e, subPanelId) => {
    e.stopPropagation();
    setActiveSubPanel(activeSubPanel === subPanelId ? null : subPanelId);
  };

  return (
    <>
      <nav className={styles.himsNav}>
        <div className={styles.himsNavInner}>
          <Link className={styles.himsLogo} href="/">
            <Image src="/Images/Logo.webp" alt="HIMS Varanasi Logo" width={240} height={60} priority />
          </Link>
          <button className={styles.himsToggler} onClick={toggleNav} aria-label="Toggle navigation">
            <FaBars />
          </button>

          {/* DESKTOP LINKS */}
          <ul className={`${styles.himsNavLinks} d-none d-lg-flex`}>
            <li className={pathname === '/' ? styles.active : ''}>
              <Link href="/"><FaHouse style={{ fontSize: '0.7rem' }} /> Home</Link>
            </li>

            <li className={pathname === '/about-institute' ? styles.active : ''}>
              <Link href="#">About HIMS <FaChevronDown className={styles.navCaret} /></Link>
              <div className={styles.ddSimple}>
                <Link href="/about-institute"><FaBuildingColumns /> About Institute</Link>
                <Link href="/vision-mission"><FaEye /> Vision & Mission</Link>
                <Link href="/principal-message"><FaMessage /> Principal Message</Link>
                <Link href="/infrastructure"><FaCity /> Infrastructure</Link>
                <Link href="/campus-tour"><FaRoute /> Campus Tour</Link>
                <Link href="/photo-gallery"><FaImages /> Photo Gallery</Link>
              </div>
            </li>

            <li>
              <Link href="#">Academics <FaChevronDown className={styles.navCaret} /></Link>
              <div className={styles.ddSimple}>
                <div className={styles.ddSub}>
                  <Link href="#"><FaBookOpen /> Courses <FaChevronRight className={styles.ddCaret} /></Link>
                  <div className={styles.ddSubDropdown}>
                    <Link href="/courses/mbbs"><FaCircleDot /> MBBS</Link>
                    <Link href="/courses/pg"><FaCircleDot /> PG Courses</Link>
                  </div>
                </div>
                <div className={styles.ddSub}>
                  <Link href="#"><FaUserGraduate /> Admissions <FaChevronRight className={styles.ddCaret} /></Link>
                  <div className={styles.ddSubDropdown}>
                    <Link href="/admissions/fee-structure"><FaCircleDot /> Fee Structure</Link>
                    <Link href="/admissions/admission-process"><FaCircleDot /> Admission Process</Link>
                  </div>
                </div>
                <div className={styles.ddSub}>
                  <Link href="#"><FaListCheck /> Academic Resources <FaChevronRight className={styles.ddCaret} /></Link>
                  <div className={styles.ddSubDropdown}>
                    <Link href="/academic-resources/time-tables"><FaCircleDot /> Time Tables</Link>
                    <Link href="/academic-resources/internship-schedule"><FaCircleDot /> Internship Schedule</Link>
                  </div>
                </div>
              </div>
            </li>

            <li className={`${pathname.startsWith('/departments') ? styles.active : ''} ${hideMega ? styles.hideMega : ''}`}>
              <Link href="/departments" onClick={handleMegaClick}>Departments <FaChevronDown className={styles.navCaret} /></Link>
              <div className={styles.ddMega}>
                <div className={styles.megaColumns}>
                  <div className={styles.megaCol}>
                    <h4 className={styles.megaTitle}><FaStethoscope /> Clinical</h4>
                    <Link href="/departments/general-medicine" onClick={handleMegaClick}><FaCircleDot /> General Medicine</Link>
                    <Link href="/departments/surgery" onClick={handleMegaClick}><FaCircleDot /> General Surgery</Link>
                    <Link href="/departments/pediatrics" onClick={handleMegaClick}><FaCircleDot /> Pediatrics</Link>
                    <Link href="/departments/ortho-2" onClick={handleMegaClick}><FaCircleDot /> Orthopedics</Link>
                    <Link href="/departments/ent-2" onClick={handleMegaClick}><FaCircleDot /> ENT</Link>
                    <Link href="/departments/derma" onClick={handleMegaClick}><FaCircleDot /> Dermatology</Link>
                    <Link href="/departments/psychiatry" onClick={handleMegaClick}><FaCircleDot /> Psychiatry</Link>
                    <Link href="/departments/obstetrics-amp-gynecology" onClick={handleMegaClick}><FaCircleDot /> Obs & Gynac</Link>
                  </div>
                  <div className={styles.megaCol}>
                    <h4 className={styles.megaTitle}><FaStethoscope /> Clinical (Cont.)</h4>
                    <Link href="/departments/radiology" onClick={handleMegaClick}><FaCircleDot /> Radiology</Link>
                    <Link href="/departments/anaesthesiology" onClick={handleMegaClick}><FaCircleDot /> Anaesthesiology</Link>
                    <Link href="/departments/tb-amp-chest" onClick={handleMegaClick}><FaCircleDot /> TB & Chest</Link>
                    <Link href="/departments/emergency-medicine" onClick={handleMegaClick}><FaCircleDot /> Emergency Med.</Link>
                    <Link href="/departments/ophthalmology" onClick={handleMegaClick}><FaCircleDot /> Ophthalmology</Link>
                    <Link href="/departments/dental" onClick={handleMegaClick}><FaCircleDot /> Dentistry</Link>
                    <Link href="/departments/comm-medicine" onClick={handleMegaClick}><FaCircleDot /> Community Med.</Link>
                  </div>
                  <div className={styles.megaCol}>
                    <h4 className={styles.megaTitle}><FaFlask /> Non Clinical</h4>
                    <Link href="/departments/anatomy" onClick={handleMegaClick}><FaCircleDot /> Anatomy</Link>
                    <Link href="/departments/physiology" onClick={handleMegaClick}><FaCircleDot /> Physiology</Link>
                    <Link href="/departments/pharmacology-2" onClick={handleMegaClick}><FaCircleDot /> Pharmacology</Link>
                    <Link href="/departments/pathology-2" onClick={handleMegaClick}><FaCircleDot /> Pathology</Link>
                    <Link href="/departments/microbiology-2" onClick={handleMegaClick}><FaCircleDot /> Microbiology</Link>
                    <Link href="/departments/forensic-medicine" onClick={handleMegaClick}><FaCircleDot /> Forensic Medicine</Link>
                    <Link href="/departments/biochemistry-2" onClick={handleMegaClick}><FaCircleDot /> Biochemistry</Link>
                  </div>
                </div>
                <div className={styles.megaFooter}>
                  <Link href="/departments" className={styles.viewAllBtn} onClick={handleMegaClick}>
                    View All Departments <FaArrowRightLong className="ms-2" />
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <Link href="#">Hospital <FaChevronDown className={styles.navCaret} /></Link>
              <div className={styles.ddSimple}>
                <Link href="https://www.heritageimshospital.com/" target="_blank"><FaCircleInfo /> Hospital Overview</Link>
                <Link href="/hospital/opd-services"><FaUserDoctor /> OPD Services</Link>
                <Link href="/hospital/emergency"><FaTruckMedical /> Emergency</Link>
                <Link href="/hospital/icu"><FaBedPulse /> ICU</Link>
                <Link href="/hospital/diagnostics"><FaMicroscope /> Diagnostics</Link>
                <Link href="/hospital/bed-capacity"><FaBed /> Bed Capacity</Link>
                <Link href="/hospital/clinical-facilities"><FaHospital /> Clinical Facilities</Link>
              </div>
            </li>

            <li>
              <Link href="#">Faculty & Research <FaChevronDown className={styles.navCaret} /></Link>
              <div className={`${styles.ddSimple} ${styles.ddRight}`}>
                <Link href="/faculty-research/teaching-faculty"><FaChalkboardUser /> Teaching Faculty</Link>
                <Link href="/faculty-research/non-teaching-staff"><FaUsers /> Non Teaching Staff</Link>
                <Link href="/faculty-research/publications"><FaFileLines /> Research Publications</Link>
                <div className={styles.ddSub}>
                  <Link href="#"><FaFlaskVial /> Research Work <FaChevronRight className={styles.ddCaret} /></Link>
                  <div className={styles.ddSubDropdown}>
                    <Link href="/faculty-research/research-work/faculty"><FaCircleDot /> Faculty Research</Link>
                    <Link href="/faculty-research/research-work/students"><FaCircleDot /> Students Research</Link>
                  </div>
                </div>
                <Link href="/faculty-research/cme-conferences"><FaCalendarDays /> CME & Conferences</Link>
                <Link href="/faculty-research/awards-achievements"><FaTrophy /> Awards & Achievements</Link>
              </div>
            </li>

            {/* <li>
              <Link href="#">Student Life <FaChevronDown className={styles.navCaret} /></Link>
              <div className={`${styles.ddSimple} ${styles.ddRight}`}>
                <Link href="#"><FaHouseChimney /> Hostel</Link>
                <Link href="#"><FaShieldHalved /> Anti Ragging</Link>
                <Link href="#"><FaCommentDots /> Student Grievance</Link>
                <Link href="#"><FaClipboardList /> Campus Rules</Link>
                <Link href="#"><FaMusic /> Cultural Activities</Link>
                <Link href="#"><FaFutbol /> Sports</Link>
              </div>
            </li> */}

            <li>
              <Link href="#">Disclosure <FaChevronDown className={styles.navCaret} /></Link>
              <div className={`${styles.ddSimple} ${styles.ddRight}`}>
                <Link href="/marb-information"><FaFileContract /> MARB Information</Link>
                <Link href="/govt-approvals"><FaStamp /> Govt Approvals</Link>
                <Link href="/affiliated-university"><FaLink /> Affiliated University</Link>
                <Link href="/intake-capacity"><FaUsersLine /> Intake Capacity</Link>
                <Link href="/results"><FaFileShield /> Results</Link>
              </div>
            </li>

            <li>
              <Link href="#">Notices <FaChevronDown className={styles.navCaret} /></Link>
              <div className={`${styles.ddSimple} ${styles.ddRight}`}>
                <Link href="/news-media"><FaNewspaper /> News & Media</Link>
                <Link href="/tenders"><FaFileLines /> Tenders</Link>
                <Link href="/careers"><FaBriefcase /> Careers</Link>
              </div>
            </li>

            <li className={pathname === '/contact-us' ? styles.active : ''}>
              <Link href="/contact-us"><FaEnvelope style={{ fontSize: '0.7rem' }} /> Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* MOBILE NAV */}
        <div className={`${styles.himsMobileNav} ${isOpen ? styles.open : ''}`}>
          <div className={styles.mobItem}>
            <Link href="/" className={`${styles.mobLink} ${styles.mobSimpleLink}`} onClick={toggleNav}>
              <FaHouse /> Home
            </Link>
          </div>

          <div className={styles.mobItem}>
            <button className={`${styles.mobLink} ${activePanel === 'about' ? styles.open : ''}`} onClick={() => togglePanel('about')}>
              <span>About HIMS</span> <FaChevronDown className={styles.mobCaret} />
            </button>
            <div className={`${styles.mobPanel} ${activePanel === 'about' ? styles.open : ''}`}>
              <Link href="/about-institute" onClick={toggleNav}><FaBuildingColumns /> About Institute</Link>
              <Link href="/vision-mission" onClick={toggleNav}><FaEye /> Vision & Mission</Link>
              <Link href="/principal-message" onClick={toggleNav}><FaMessage /> Principal Message</Link>
              <Link href="/infrastructure" onClick={toggleNav}><FaCity /> Infrastructure</Link>
              <Link href="/campus-tour" onClick={toggleNav}><FaRoute /> Campus Tour</Link>
              <Link href="/photo-gallery" onClick={toggleNav}><FaImages /> Photo Gallery</Link>
            </div>
          </div>

          <div className={styles.mobItem}>
            <button className={`${styles.mobLink} ${activePanel === 'academics' ? styles.open : ''}`} onClick={() => togglePanel('academics')}>
              <span>Academics</span> <FaChevronDown className={styles.mobCaret} />
            </button>
            <div className={`${styles.mobPanel} ${activePanel === 'academics' ? styles.open : ''}`}>
              <button className={`${styles.mobSubHeader} ${activeSubPanel === 'courses' ? styles.open : ''}`} onClick={(e) => toggleSubPanel(e, 'courses')}>
                <span><FaBookOpen className="me-2" /> Courses</span>
                <FaChevronDown className={styles.subCaret} />
              </button>
              <div className={`${styles.mobSubPanel} ${activeSubPanel !== 'courses' ? styles.collapsed : ''}`}>
                <Link href="/courses/mbbs" onClick={toggleNav}><FaCircleDot className="me-2" /> MBBS</Link>
                <Link href="/courses/pg" onClick={toggleNav}><FaCircleDot className="me-2" /> PG Courses</Link>
              </div>

              <button className={`${styles.mobSubHeader} ${activeSubPanel === 'admissions' ? styles.open : ''}`} onClick={(e) => toggleSubPanel(e, 'admissions')}>
                <span><FaUserGraduate className="me-2" /> Admissions</span>
                <FaChevronDown className={styles.subCaret} />
              </button>
              <div className={`${styles.mobSubPanel} ${activeSubPanel !== 'admissions' ? styles.collapsed : ''}`}>
                <Link href="/admissions/fee-structure" onClick={toggleNav}><FaCircleDot className="me-2" /> Fee Structure</Link>
                <Link href="/admissions/admission-process" onClick={toggleNav}><FaCircleDot className="me-2" /> Admission Process</Link>
              </div>

              <button className={`${styles.mobSubHeader} ${activeSubPanel === 'resources' ? styles.open : ''}`} onClick={(e) => toggleSubPanel(e, 'resources')}>
                <span><FaListCheck className="me-2" /> Academic Resources</span>
                <FaChevronDown className={styles.subCaret} />
              </button>
              <div className={`${styles.mobSubPanel} ${activeSubPanel !== 'resources' ? styles.collapsed : ''}`}>
                <Link href="/academic-resources/time-tables" onClick={toggleNav}><FaCircleDot className="me-2" /> Time Tables</Link>
                <Link href="/academic-resources/internship-schedule" onClick={toggleNav}><FaCircleDot className="me-2" /> Internship Schedule</Link>
              </div>
            </div>
          </div>

          <div className={styles.mobItem}>
            <button className={`${styles.mobLink} ${activePanel === 'departments' ? styles.open : ''}`} onClick={() => togglePanel('departments')}>
              <span>Departments</span> <FaChevronDown className={styles.mobCaret} />
            </button>
            <div className={`${styles.mobPanel} ${activePanel === 'departments' ? styles.open : ''}`}>
              <button className={`${styles.mobSubHeader} ${activeSubPanel === 'clinical' ? styles.open : ''}`} onClick={(e) => toggleSubPanel(e, 'clinical')}>
                <span><FaStethoscope className="me-2" /> Clinical</span>
                <FaChevronDown className={styles.subCaret} />
              </button>
              <div className={`${styles.mobSubPanel} ${activeSubPanel !== 'clinical' ? styles.collapsed : ''}`}>
                <Link href="/departments/general-medicine" onClick={toggleNav}><FaCircleDot className="me-2" /> General Medicine</Link>
                <Link href="/departments/surgery" onClick={toggleNav}><FaCircleDot className="me-2" /> General Surgery</Link>
                <Link href="/departments/pediatrics" onClick={toggleNav}><FaCircleDot className="me-2" /> Pediatrics</Link>
                <Link href="/departments/ortho-2" onClick={toggleNav}><FaCircleDot className="me-2" /> Orthopedics</Link>
                <Link href="/departments/ent-2" onClick={toggleNav}><FaCircleDot className="me-2" /> ENT</Link>
                <Link href="/departments/derma" onClick={toggleNav}><FaCircleDot className="me-2" /> Dermatology</Link>
                <Link href="/departments/psychiatry" onClick={toggleNav}><FaCircleDot className="me-2" /> Psychiatry</Link>
                <Link href="/departments/obstetrics-amp-gynecology" onClick={toggleNav}><FaCircleDot className="me-2" /> Obs & Gynac</Link>
                <Link href="/departments/radiology" onClick={toggleNav}><FaCircleDot className="me-2" /> Radiology</Link>
                <Link href="/departments/anaesthesiology" onClick={toggleNav}><FaCircleDot className="me-2" /> Anaesthesiology</Link>
                <Link href="/departments/tb-amp-chest" onClick={toggleNav}><FaCircleDot className="me-2" /> TB & Chest</Link>
                <Link href="/departments/emergency-medicine" onClick={toggleNav}><FaCircleDot className="me-2" /> Emergency Med.</Link>
                <Link href="/departments/ophthalmology" onClick={toggleNav}><FaCircleDot className="me-2" /> Ophthalmology</Link>
                <Link href="/departments/dental" onClick={toggleNav}><FaCircleDot className="me-2" /> Dentistry</Link>
                <Link href="/departments/comm-medicine" onClick={toggleNav}><FaCircleDot className="me-2" /> Community Med.</Link>
              </div>

              <button className={`${styles.mobSubHeader} ${activeSubPanel === 'nonclinical' ? styles.open : ''}`} onClick={(e) => toggleSubPanel(e, 'nonclinical')}>
                <span><FaFlask className="me-2" /> Non Clinical</span>
                <FaChevronDown className={styles.subCaret} />
              </button>
              <div className={`${styles.mobSubPanel} ${activeSubPanel !== 'nonclinical' ? styles.collapsed : ''}`}>
                <Link href="/departments/anatomy" onClick={toggleNav}><FaCircleDot className="me-2" /> Anatomy</Link>
                <Link href="/departments/physiology" onClick={toggleNav}><FaCircleDot className="me-2" /> Physiology</Link>
                <Link href="/departments/pharmacology-2" onClick={toggleNav}><FaCircleDot className="me-2" /> Pharmacology</Link>
                <Link href="/departments/pathology-2" onClick={toggleNav}><FaCircleDot className="me-2" /> Pathology</Link>
                <Link href="/departments/microbiology-2" onClick={toggleNav}><FaCircleDot className="me-2" /> Microbiology</Link>
                <Link href="/departments/forensic-medicine" onClick={toggleNav}><FaCircleDot className="me-2" /> Forensic Medicine</Link>
                <Link href="/departments/biochemistry-2" onClick={toggleNav}><FaCircleDot className="me-2" /> Biochemistry</Link>
              </div>
              <Link href="/departments" className={styles.mobViewAll} onClick={toggleNav}>
                <FaArrowRightLong className="me-2" /> View All Departments
              </Link>
            </div>
          </div>

          <div className={styles.mobItem}>
            <button className={`${styles.mobLink} ${activePanel === 'hospital' ? styles.open : ''}`} onClick={() => togglePanel('hospital')}>
              <span>Hospital</span> <FaChevronDown className={styles.mobCaret} />
            </button>
            <div className={`${styles.mobPanel} ${activePanel === 'hospital' ? styles.open : ''}`}>
              <Link href="https://www.heritageimshospital.com/" target="_blank" onClick={toggleNav}><FaCircleInfo /> Hospital Overview</Link>
              <Link href="/hospital/opd-services" onClick={toggleNav}><FaUserDoctor /> OPD Services</Link>
              <Link href="/hospital/emergency" onClick={toggleNav}><FaTruckMedical /> Emergency</Link>
              <Link href="/hospital/icu" onClick={toggleNav}><FaBedPulse /> ICU</Link>
              <Link href="/hospital/diagnostics" onClick={toggleNav}><FaMicroscope /> Diagnostics</Link>
              <Link href="/hospital/bed-capacity" onClick={toggleNav}><FaBed /> Bed Capacity</Link>
              <Link href="/hospital/clinical-facilities" onClick={toggleNav}><FaHospital /> Clinical Facilities</Link>
            </div>
          </div>

          <div className={styles.mobItem}>
            <button className={`${styles.mobLink} ${activePanel === 'faculty' ? styles.open : ''}`} onClick={() => togglePanel('faculty')}>
              <span>Faculty & Research</span> <FaChevronDown className={styles.mobCaret} />
            </button>
            <div className={`${styles.mobPanel} ${activePanel === 'faculty' ? styles.open : ''}`}>
              <Link href="/faculty-research/teaching-faculty" onClick={toggleNav}><FaChalkboardUser /> Teaching Faculty</Link>
              <Link href="/faculty-research/non-teaching-staff" onClick={toggleNav}><FaUsers /> Non Teaching Staff</Link>
              <Link href="/faculty-research/publications" onClick={toggleNav}><FaFileLines /> Research Publications</Link>
              <button className={`${styles.mobSubHeader} ${activeSubPanel === 'research' ? styles.open : ''}`} onClick={(e) => toggleSubPanel(e, 'research')}>
                <span><FaFlaskVial className="me-2" /> Research Work</span>
                <FaChevronDown className={styles.subCaret} />
              </button>
              <div className={`${styles.mobSubPanel} ${activeSubPanel !== 'research' ? styles.collapsed : ''}`}>
                <Link href="/faculty-research/research-work/faculty" onClick={toggleNav}><FaCircleDot className="me-2" /> Faculty Research</Link>
                <Link href="/faculty-research/research-work/students" onClick={toggleNav}><FaCircleDot className="me-2" /> Students Research</Link>
              </div>
              <Link href="/faculty-research/cme-conferences" onClick={toggleNav}><FaCalendarDays /> CME & Conferences</Link>
              <Link href="/faculty-research/awards-achievements" onClick={toggleNav}><FaTrophy /> Awards & Achievements</Link>
            </div>
          </div>

          {/* <div className={styles.mobItem}>
            <button className={`${styles.mobLink} ${activePanel === 'student' ? styles.open : ''}`} onClick={() => togglePanel('student')}>
              <span>Student Life</span> <FaChevronDown className={styles.mobCaret} />
            </button>
            <div className={`${styles.mobPanel} ${activePanel === 'student' ? styles.open : ''}`}>
              <Link href="#" onClick={toggleNav}><FaHouseChimney /> Hostel</Link>
              <Link href="#" onClick={toggleNav}><FaShieldHalved /> Anti Ragging</Link>
              <Link href="#" onClick={toggleNav}><FaCommentDots /> Student Grievance</Link>
              <Link href="#" onClick={toggleNav}><FaClipboardList /> Campus Rules</Link>
              <Link href="#" onClick={toggleNav}><FaMusic /> Cultural Activities</Link>
              <Link href="#" onClick={toggleNav}><FaFutbol /> Sports</Link>
            </div>
          </div> */}

          <div className={styles.mobItem}>
            <button className={`${styles.mobLink} ${activePanel === 'disclosure' ? styles.open : ''}`} onClick={() => togglePanel('disclosure')}>
              <span>Disclosure</span> <FaChevronDown className={styles.mobCaret} />
            </button>
            <div className={`${styles.mobPanel} ${activePanel === 'disclosure' ? styles.open : ''}`}>
              <Link href="/marb-information" onClick={toggleNav}><FaFileContract /> MARB Information</Link>
              <Link href="/govt-approvals" onClick={toggleNav}><FaStamp /> Govt Approvals</Link>
              <Link href="/affiliated-university" onClick={toggleNav}><FaLink /> Affiliated University</Link>
              <Link href="/intake-capacity" onClick={toggleNav}><FaUsersLine /> Intake Capacity</Link>
              <Link href="/results" onClick={toggleNav}><FaFileShield /> Results</Link>
            </div>
          </div>

          <div className={styles.mobItem}>
            <button className={`${styles.mobLink} ${activePanel === 'notices' ? styles.open : ''}`} onClick={() => togglePanel('notices')}>
              <span>Notices</span> <FaChevronDown className={styles.mobCaret} />
            </button>
            <div className={`${styles.mobPanel} ${activePanel === 'notices' ? styles.open : ''}`}>
              <Link href="/news-media" onClick={toggleNav}><FaNewspaper /> News & Media</Link>
              <Link href="/tenders" onClick={toggleNav}><FaFileLines /> Tenders</Link>
              <Link href="/careers" onClick={toggleNav}><FaBriefcase /> Careers</Link>
            </div>
          </div>

          <div className={styles.mobItem}>
            <Link href="/contact-us" className={`${styles.mobLink} ${styles.mobSimpleLink}`} onClick={toggleNav}>
              <FaEnvelope /> Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
