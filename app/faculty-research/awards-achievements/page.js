'use client';

import styles from './Awards.module.css';

export default function AwardsAchievements() {
  return (
    <div className={styles.mainContainer}>
      

      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>Excellence Recognized</span>
            <h1>Awards & <span>Achievements</span></h1>
            <p>Celebrating the remarkable accomplishments, dedication, and research spirit of our distinguished faculty and students.</p>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">

          {/* Section 1: Proud Moment for HIMS Varanasi! */}
          <div className={styles.awardBlock}>
            <div className="row align-items-center">
              <div className="col-lg-5 mb-4 mb-lg-0">
                <h2 className={styles.awardTitle}>
                  🌟 Proud Moment for HIMS Varanasi! 🌟
                </h2>
                <div className={styles.awardLine}></div>
                <div className={styles.awardText}>
                  <p>
                    We are delighted to share that our 2nd Year General Medicine Residents have excelled at the National Conference CCDSICON, held at Kota, Rajasthan on 23rd–24th August 2025.
                  </p>
                  <p>
                    Out of 30 presentations from across India, our residents achieved remarkable success:
                  </p>
                  <ul>
                    <li>🏅 Dr. Prashant Kumar Pandey – 1st Prize in E-Poster Presentation</li>
                    <li>🥈 Dr. Ashish Jangid – 2nd Prize in Oral Paper Presentation</li>
                  </ul>
                  <p>
                    Their outstanding performance reflects the academic strength, dedication, and research spirit of HIMS Varanasi. 🌿📚
                  </p>
                  <p>
                    We congratulate them for this proud achievement and wish them greater success ahead! 👏
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className={styles.imagesRow}>
                  <img src="/Images/awards-achievements/Proud Moment for HIMS Varanasi! One.webp" alt="Award 1" />
                  <img src="/Images/awards-achievements/Proud Moment for HIMS Varanasi! two.webp" alt="Award 2" />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Dr. Prashant */}
          <div className={styles.awardBlock}>
            <div className="row align-items-center flex-row-reverse">
              <div className="col-lg-7 mb-4 mb-lg-0">
                <img className={styles.singleImage} src="/Images/awards-achievements/Prashant second position.webp" alt="Dr. Prashant" />
              </div>
              <div className="col-lg-5">
                <h2 className={styles.awardTitle}>
                  Dr. Prashant (Medicine PG, Heritage Institute of Medical Science)
                </h2>
                <div className={styles.awardLine}></div>
                <div className={styles.awardText}>
                  <p>
                    Dr. Prashant (Medicine PG, Heritage Institute of Medical Science) secured 2nd Prize in paper presentation at the 30th Annual Conference of the Cardiological Society of India, UP Chapter (CARDICON 2025) held at Raj Vilas, The Palace, Orchha, MP! This premier event brought together over 600 delegates, including esteemed cardiologists, researchers, and medical professionals from Uttar Pradesh and across India.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Text lists */}
          <div className={styles.awardBlock}>
            <div className="row">
              <div className="col-12">
                
                {/* Dr. Dhananjay */}
                <div className={styles.textListItem}>
                  <h3>Dr. Dhananjay Kumar Singh (Associate Professor)</h3>
                  <div className={styles.subLine}></div>
                  <ol>
                    <li>Best Scientific Paper Presentation award in IAPSMCON UPUK-2018 Conference held at JNMC, AMU, Aligarh 26-27 October 2018.</li>
                    <li>Certificate of appreciation by Ministry of Health & Family Welfare for TB Free India Pledge on 08th March 2019.</li>
                    <li>Certificate of appreciation by NEOCON organizing committee for scientific management in NEOCON 2018 14-16 December 2018.</li>
                    <li>Certificate of appreciation in New Born Care CME organized by National Neonatology Forum at Heritage IMS, Varanasi on 14th Nov 2018.</li>
                  </ol>
                </div>

                {/* Dr. Kalpana */}
                <div className={styles.textListItem}>
                  <h3>Dr. Kalpana Kumari (Assistant Professor)</h3>
                  <div className={styles.subLine}></div>
                  <p>Research Peace Award 2019-2020 for</p>
                  <p><strong>“Best Researcher in Public Health”</strong> [RULA Award by World Research Council and United Medical Council]</p>
                </div>

                {/* Aminna */}
                <div className={styles.textListItem}>
                  <h3>Aminna Duthie of 2016 MBBS batch</h3>
                  <div className={styles.subLine}></div>
                  <p>Amina Duthie of the 2016 MBBS batch was selected among 29,835 applicants for the Asia World Model United Nations, AWMUN III, a conference held at Nusa Dua, Bali, Indonesia on 13-16th November 2019.</p>
                  <p>The focus of this conference was “The Implementation Of World’s Agenda 2030”. She was a part of the Indian delegation and a member of the WFP (World Food Programme) council.</p>
                </div>

                {/* Dr. Juhi */}
                <div className={styles.textListItem}>
                  <h3>Dr. Juhi Deshpande (Assistant Professor) of Dept of OBS & Gynae</h3>
                  <div className={styles.subLine}></div>
                  <p>Dr. Juhi Deshpande (Assistant Professor) of Dept of OBS & Gynae</p>
                  <p><strong>Heritage Institute of Medical Sciences</strong></p>
                  <p>was awarded the Gold Medal for Best Poster Presentation on the conference theme (High-Risk Pregnancy) by Faculty &lt;40 years at UPCOG 2019.</p>
                  <p className={styles.hashtag}>#UPCOG</p>
                  <p>2019 was held at Varanasi 15-17 th November.</p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      
    </div>
  );
}
