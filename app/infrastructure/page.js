'use client';

import styles from './Infrastructure.module.css';
import Image from 'next/image';

export default function Infrastructure() {
  return (
    <div className={styles.mainContainer}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>World-Class Campus</span>
            <h1>Campus <span>Infrastructure</span></h1>
            <p>Providing a stimulating environment with state-of-the-art facilities for modern medical education.</p>
          </div>
        </div>
      </section>

      {/* CORE FACILITIES */}
      <section className={styles.facilitiesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.subHeader}>Academic Facilities</span>
            <h2>Core Learning <span>Spaces</span></h2>
          </div>

          <div className="row g-4">
            {/* LECTURE THEATERS */}
            <div className="col-lg-6">
              <div className={styles.facilityCard}>
                <div className={styles.cardImageWrapper}>
                  <Image src="/Images/home page images/Integrated Learning.webp" alt="Lecture Theaters" width={100} height={100} className={styles.cardRealImg} />
                </div>
                <div className={styles.cardContent}>
                  <h3>Lecture Theaters</h3>
                  <p>Four fully air-conditioned lecture theaters, gallery type with 180/200 seating capacity complete with audiovisual aids and facility for E-conferencing.</p>
                  <div className={styles.cardTags}>
                    <span>AC</span> <span>200 Seats</span> <span>E-Conferencing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* DEMO ROOMS */}
            <div className="col-lg-6">
              <div className={styles.facilityCard}>
                <div className={styles.cardImageWrapper}>
                  <Image src="/Images/Life at HIMS/Advanced Labs.webp" alt="Demo Rooms" width={100} height={100} className={styles.cardRealImg} />
                </div>
                <div className={styles.cardContent}>
                  <h3>Demo Rooms</h3>
                  <p>All the preclinical and paraclinical departments have been provided with two demo rooms each with 80-90 seating capacity and audiovisual aids.</p>
                  <div className={styles.cardTags}>
                    <span>AV Aids</span> <span>90 Seats</span> <span>Multi-Department</span>
                  </div>
                </div>
              </div>
            </div>

            {/* LABS */}
            <div className="col-lg-6">
              <div className={styles.facilityCard}>
                <div className={styles.cardImageWrapper}>
                  <Image src="/Images/Life at HIMS/Advanced Labs.webp" alt="Medical Laboratories" width={100} height={100} className={styles.cardRealImg} />
                </div>
                <div className={styles.cardContent}>
                  <h3>Medical Laboratories</h3>
                  <p>Well furnished and well-equipped Lab with a seating capacity of 90 each with attached anterooms have been provided for conducting practical classes as per NMC norms.</p>
                  <div className={styles.cardTags}>
                    <span>NMC Norms</span> <span>Anterooms</span> <span>High-Tech</span>
                  </div>
                </div>
              </div>
            </div>

            {/* LIBRARY */}
            <div className="col-lg-6">
              <div className={styles.facilityCard}>
                <div className={styles.cardImageWrapper}>
                  <Image src="/Images/Life at HIMS/Modern Library.webp" alt="Central Library" width={100} height={100} className={styles.cardRealImg} />
                </div>
                <div className={styles.cardContent}>
                  <h3>Central Library</h3>
                  <p>A fully air-conditioned central library with a carpet area of more than 28000 sq. ft. has been provided in the college block. The library has the facility of an outside reading room for 150 students as well as an inside reading room for the students and the staff. Internet facilities with 20 nodes each have been provided for the students and the staff.</p>
                  <p>The library has a requisite number of the latest medical books on different subjects as well as National and International scientific journals. It is open for students and staff from 8.00 AM to 8.00 PM on all working days and 9.00 AM to 5.00 PM on Sundays and holidays.</p>
                  <div className={styles.cardTags}>
                    <span>28,000 Sq.Ft</span> <span>Inside/Outside Reading</span> <span>8 AM - 8 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* COMMON ROOMS */}
            <div className="col-12">
              <div className={`${styles.facilityCard} ${styles.fullWidthCard}`}>
                <div className={styles.cardImageWrapper}>
                  <Image src="/Images/home page images/Magnificent Campus.webp" alt="Common Rooms" width={100} height={100} className={styles.cardRealImg} />
                </div>
                <div className={styles.cardContent}>
                  <h3>Common Rooms</h3>
                  <p>Separate well-furnished common rooms for boys and girls with attached toilets having 100 seating capacity each have been provided in the college block.</p>
                  <div className={styles.cardTags}>
                    <span>Separate Wings</span> <span>Attached Toilets</span> <span>100 Capacity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AMENITIES GRID */}
      <section className={styles.amenitiesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.subHeader}>Campus Amenities</span>
            <h2>Complete <span>Student Ecosystem</span></h2>
          </div>

          <div className={styles.amenitiesGrid}>
            <div className={styles.amenityItem}>
              <Image src="/Images/home page images/Best Facilities.webp" alt="Auditorium" width={80} height={80} className={styles.amenityImg} />
              <span>Auditorium</span>
            </div>
            <div className={styles.amenityItem}>
              <Image src="/Images/home page images/Magnificent Campus.webp" alt="Cafeteria" width={80} height={80} className={styles.amenityImg} />
              <span>Cafeteria</span>
            </div>
            <div className={styles.amenityItem}>
              <Image src="/Images/home page images/Integrated Learning.webp" alt="Gymnasium" width={80} height={80} className={styles.amenityImg} />
              <span>Gymnasium</span>
            </div>
            <div className={styles.amenityItem}>
              <Image src="/Images/home page images/Experienced Faculty.webp" alt="Doctors Resident" width={80} height={80} className={styles.amenityImg} />
              <span>Doctors Resident</span>
            </div>
            <div className={styles.amenityItem}>
              <Image src="/Images/home page images/Magnificent Campus.webp" alt="Hostels" width={80} height={80} className={styles.amenityImg} />
              <span>Hostels</span>
            </div>
            <div className={styles.amenityItem}>
              <Image src="/Images/home page images/Best Facilities.webp" alt="Mess" width={80} height={80} className={styles.amenityImg} />
              <span>Mess</span>
            </div>
            <div className={styles.amenityItem}>
              <Image src="/Images/Life at HIMS/Advanced Labs.webp" alt="Computer Lab" width={80} height={80} className={styles.amenityImg} />
              <span>Computer Lab</span>
            </div>
            <div className={styles.amenityItem}>
              <Image src="/Images/Life at HIMS/Advanced Labs.webp" alt="Skill Lab" width={80} height={80} className={styles.amenityImg} />
              <span>Skill Lab</span>
            </div>
            <div className={styles.amenityItem}>
              <Image src="/Images/home page images/Integrated Learning.webp" alt="Recreation Facilities" width={80} height={80} className={styles.amenityImg} />
              <span>Recreation Facilities</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
