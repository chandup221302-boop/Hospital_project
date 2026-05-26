'use client';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Home.module.css';
import { 
  FaShieldHalved, FaCreditCard, FaUserTie, FaBuilding, FaWandSparkles, 
  FaHeartPulse, FaArrowRightLong, FaPlus, FaMinus, FaUserGraduate, 
  FaHospital, FaFileLines, FaUsers, FaWallet, FaBookOpen, FaBandage, FaBriefcaseMedical,
  FaPlay, FaDownload, FaAngleLeft, FaAngleRight
} from 'react-icons/fa6';

const Counter = ({ end, duration = 2500, suffix = "" }) => {
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
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const TestimonialCard = ({ rev, styles }) => {
  const [activeTab, setActiveTab] = useState('admission');

  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewCardHeader}>
        <div className={styles.reviewerInfo}>
          <div className={styles.avatarWrapper}>
            <svg viewBox="0 0 24 24" className={styles.avatarSvg} fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <div>
            <h4 className={styles.reviewerName}>{rev.name}</h4>
            <p className={styles.reviewerCourse}>{rev.course}</p>
            <p className={styles.reviewDate}>{rev.dateStr}</p>
          </div>
        </div>
        <div className={styles.ratingBadge}>
          <span>★ {rev.rating.toFixed(1)}</span>
        </div>
      </div>

      <div className={styles.tabContainer}>
        <button 
          className={`${styles.tabBtn} ${activeTab === 'admission' ? styles.tabBtnActive : ''}`}
          onClick={() => setActiveTab('admission')}
        >
          <span className={styles.tabStar}>★ {rev.subRatings.admission}</span> Admission
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === 'placement' ? styles.tabBtnActive : ''}`}
          onClick={() => setActiveTab('placement')}
        >
          <span className={styles.tabStar}>★ {rev.subRatings.placement}</span> Placement
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === 'campus' ? styles.tabBtnActive : ''}`}
          onClick={() => setActiveTab('campus')}
        >
          <span className={styles.tabStar}>★ {rev.subRatings.infrastructure}</span> Campus & Infra
        </button>
      </div>

      <div className={styles.reviewContent}>
        {activeTab === 'admission' && (
          <p className={styles.tabContentText}>
            <strong>Admission & Academics:</strong> {rev.admissionText}
          </p>
        )}
        {activeTab === 'placement' && (
          <p className={styles.tabContentText}>
            <strong>Placements & Jobs:</strong> {rev.placementText}
          </p>
        )}
        {activeTab === 'campus' && (
          <p className={styles.tabContentText}>
            <strong>Campus & Infrastructure:</strong> {rev.campusText}
          </p>
        )}
      </div>
    </div>
  );
};

export default function Home() {
  const videoRef = useRef(null);
  const courseCarouselRef = useRef(null);
  const hospitalCarouselRef = useRef(null);
  const testimonialCarouselRef = useRef(null);
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeCourseIndex, setActiveCourseIndex] = useState(0);
  const [activeHospitalIndex, setActiveHospitalIndex] = useState(0);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [maxCourseIndex, setMaxCourseIndex] = useState(3);
  const [maxHospitalIndex, setMaxHospitalIndex] = useState(4);
  const [maxTestimonialIndex, setMaxTestimonialIndex] = useState(3);

  const updateCarouselLimits = () => {
    if (courseCarouselRef.current && courseCarouselRef.current.children.length > 0) {
      const containerWidth = courseCarouselRef.current.clientWidth;
      const cardWidth = courseCarouselRef.current.children[0].offsetWidth + 20;
      const visible = Math.round(containerWidth / cardWidth) || 1;
      const maxIdx = Math.max(0, courses.length - visible);
      setMaxCourseIndex(maxIdx);
    }
    if (hospitalCarouselRef.current && hospitalCarouselRef.current.children.length > 0) {
      const containerWidth = hospitalCarouselRef.current.clientWidth;
      const cardWidth = hospitalCarouselRef.current.children[0].offsetWidth + 20;
      const visible = Math.round(containerWidth / cardWidth) || 1;
      const maxIdx = Math.max(0, 5 - visible);
      setMaxHospitalIndex(maxIdx);
    }
    if (testimonialCarouselRef.current && testimonialCarouselRef.current.children.length > 0) {
      const containerWidth = testimonialCarouselRef.current.clientWidth;
      const cardWidth = testimonialCarouselRef.current.children[0].offsetWidth + 20;
      const visible = Math.round(containerWidth / cardWidth) || 1;
      const maxIdx = Math.max(0, reviews.length - visible);
      setMaxTestimonialIndex(maxIdx);
    }
  };

  useEffect(() => {
    updateCarouselLimits();
    window.addEventListener('resize', updateCarouselLimits);
    return () => window.removeEventListener('resize', updateCarouselLimits);
  }, []);

  const faqData = [
    {
      icon: <FaShieldHalved />,
      q: "Is HIMS recognized by the Government of India?",
      a: <>Yes. HIMS is fully compliant with <strong>NMC (National Medical Commission)</strong> guidelines. All programs are approved by the <strong>Ministry of Health & Family Welfare</strong> and affiliated with <strong>MGKVP & ABVM University</strong>.</>
    },
    {
      icon: <FaWallet />,
      q: "Are there any hidden charges in the fee structure?",
      a: <><strong>Absolutely none</strong>. Every detail of the fee structure is in accordance with <strong>State Government Policy</strong>. What you see is what you pay — <strong>full transparency</strong>, no surprises.</>
    },
    {
      icon: <FaUserGraduate />,
      q: "What courses does HIMS offer?",
      a: <>HIMS offers <strong>MBBS, PG Courses, Nursing and Allied Health</strong> programs — all under an <strong>NMC-approved</strong> curriculum designed to make graduates <strong>job-ready</strong> and clinically confident.</>
    },
    {
      icon: <FaHospital />,
      q: "What is the hospital & clinical training like?",
      a: <>HIMS runs its own <strong>1,000-bed hospital</strong> serving all of <strong>Purvanchal</strong> — with departments covering General Medicine, Surgery, Pediatrics, Orthopedics, ICU, Emergency and more. Students <strong>train on real cases from day one</strong>.</>
    },
    {
      icon: <FaUserTie />,
      q: "How experienced is the faculty at HIMS?",
      a: <>Our faculty comes from <strong>AIIMS, BHU, AMU, KGMU and CMC</strong> — with an average experience of <strong>25 to 30 years</strong>. They don&apos;t just teach; they mentor and shape future doctors.</>
    },
    {
      icon: <FaBuilding />,
      q: "What does the campus & hostel facility look like?",
      a: <>Spread across <strong>10 lakh sq.ft.</strong>, HIMS is among <strong>UP&apos;s largest medical campuses</strong>. Students get <strong>sophisticated labs</strong>, a <strong>comfortable hostel</strong> and a well-maintained mess — all within a secure environment.</>
    },
    {
      icon: <FaFileLines />,
      q: "Does HIMS support research & academic publications?",
      a: <><strong>Yes</strong>. HIMS actively <strong>supports research work and academic publications</strong>. Regular <strong>CME sessions</strong> and conferences are organized to keep students and faculty at the cutting edge of medical science.</>
    },
    {
      icon: <FaUsers />,
      q: "What is student life like at HIMS?",
      a: <>HIMS offers <strong>vibrant campus life</strong> — cultural activities, sports and a <strong>strict Anti-Ragging policy</strong> ensure every student feels safe, supported and at home throughout their journey.</>
    }
  ];

  const courses = [
    {
      icon: <FaHeartPulse />,
      image: "/Images/course_mbbs.png",
      title: "MBBS",
      desc: "HIMS offers an NMC-approved MBBS degree affiliated with MGKVP University. Students train from Day 1 at our own 1,000-bed hospital — one of the largest in Purvanchal — gaining real clinical exposure across all major departments.",
      bullets: [
        "Live OPD & ward rotations from Year 1",
        "Faculty from AIIMS, BHU, KGMU & CMC",
        "State Govt. fee policy — no hidden charges"
      ],
      tags: ["4.5 Yrs + 1 Yr Internship", "Undergraduate"],
      link: "/courses/mbbs"
    },
    {
      icon: <FaUserGraduate />,
      image: "/Images/course_pg.png",
      title: "PG Courses",
      desc: "HIMS postgraduate programs — MD, MS and Diploma — are designed for doctors ready to specialize. With access to a high-volume hospital, regular CME sessions and experienced senior faculty, HIMS is where specialists are shaped.",
      bullets: [
        "Specializations in Medicine, Surgery & Radiology",
        "Active research support & academic publications",
        "High case load for deep clinical specialization"
      ],
      tags: ["3 Years", "Postgraduate"],
      link: "/courses/pg"
    }
  ];

  const pillars = [
    {
      num: "01",
      image: "/Images/home%20page%20images/Government%20Approved.webp",
      title: "Government Approved",
      text: "HIMS is strictly compliant with the guidelines of NATIONAL MEDICAL COMMISSION (NMC). All programs offered are approved by Ministry of Health & Family Welfare, Government of India, and are affiliated with MGKVP University & ABVM University."
    },
    {
      num: "02",
      image: "/Images/home%20page%20images/Transparent%20Fee%20Policies.webp",
      title: "Transparent Fee Policies",
      text: "The Institute prides itself on the transparency of its fee structure, with no hidden costs. Every stipulation in the annual fee structure is in accordance with the State Government Policy."
    },
    {
      num: "03",
      image: "/Images/home%20page%20images/Experienced%20Faculty.webp",
      title: "Experienced Faculty",
      text: "HIMS hosts a faculty of academicians from premier institutes including AIIMS, BHU, AMU, KGMU, CMC etc with broad experience of 25-30 years in their respective fields."
    },
    {
      num: "04",
      image: "/Images/home%20page%20images/Magnificent%20Campus.webp",
      title: "Magnificent Campus",
      text: "With 10 lac sq.ft. of completed construction and the rest in active development, HIMS is easily one of the largest medical institutions in UP. Situated in a highly connected secure campus and integrated learning environment, HIMS is pushing the envelope of educational excellence."
    },
    {
      num: "05",
      image: "/Images/home%20page%20images/Best%20Facilities.webp",
      title: "Best Facilities",
      text: "The visionary minds behind HIMS believe in providing the best of technology and comforts to the HIMS family. Sophisticated labs, comfortable hostel, and a tasty mess are just a few of the numerous glories."
    },
    {
      num: "06",
      image: "/Images/home%20page%20images/Integrated%20Learning.webp",
      title: "Integrated Learning",
      text: "At HIMS, a state of the art hospital of 1000 beds catering to the whole of Purvanchal functions. Latest surgical, medical and diagnostic specialties coupled with experienced Professors lead the various departments and train future doctors."
    }
  ];

  const reviews = [
    {
      name: "Sanjay Joshi",
      course: "MBBS-Bachelor of Medicine and Bachelor of Surgery",
      dateStr: "Reviewed On 27 Nov, 2025",
      dateObj: new Date('2025-11-27'),
      rating: 5.0,
      subRatings: {
        admission: 5,
        academics: 5,
        placement: 5,
        infrastructure: 5
      },
      admissionText: "The teachers are all experienced doctors from BHU and other good medical schools. The course layout is easy to grasp. Almost everyone passes with over 98% every year. Exams every semester aren't too tough, and the teachers are really helpful. You gotta have 75% attendance though.",
      placementText: "After finishing the MBBS course, students have landed jobs in top institutions by acing interviews and post-grad exams. The college provides awesome job prospects in all kinds of fields.",
      campusText: "The college has 3 hostels for MBBS students and another one for PG students. They have Wi-Fi all day, and the classrooms are nice and cool with AC. The hostel food is good, and they have medical help round the clock. Plus, they organize sports events often."
    },
    {
      name: "Poonam Patel",
      course: "MBBS-Bachelor of Medicine and Bachelor of Surgery",
      dateStr: "Reviewed On 8 Nov, 2025",
      dateObj: new Date('2025-11-08'),
      rating: 4.0,
      subRatings: {
        admission: 4,
        academics: 4,
        placement: 4,
        infrastructure: 4
      },
      admissionText: "The teachers and lecturers really care about helping us with our studies. They work hard to make sure every student does well. We have exams every 2-3 months, but don't stress about the grading. As long as you answer the questions, you'll get marks.",
      placementText: "The MBBS students in our batch of 2023 have great opportunities for internships and future careers in medicine. Our college offers good placements and a steady flow of patients for hands-on practice. It really helps us understand the concepts better. I'm grateful for all the experience I'm gaining here.",
      campusText: "The college's infrastructure is pretty good, with a decent number of patients coming in. The lecture theaters are nicely furnished and have everything students need. The practical rooms are also good, with all the important equipment available. Overall, it's a nice place for learning."
    },
    {
      name: "Vidya Singh",
      course: "MBBS-Bachelor of Medicine and Bachelor of Surgery",
      dateStr: "Reviewed On 19 Oct, 2025",
      dateObj: new Date('2025-10-19'),
      rating: 4.8,
      subRatings: {
        admission: 5,
        academics: 5,
        placement: 4,
        infrastructure: 5
      },
      admissionText: "The teachers here are awesome! They really know their stuff and are super focused on helping us succeed.",
      placementText: "The placement here is awesome, but you gotta put in the effort to make it work for you. Just showing up won't cut it.",
      campusText: "The college has Wi-Fi, practical labs, a medicine lab, and a canteen with fresh food. I really liked the delicious and hot vegetables and other food they serve. The cooks and chefs are well trained and professional."
    },
    {
      name: "Deepak Menon",
      course: "MBBS-Bachelor of Medicine and Bachelor of Surgery",
      dateStr: "Reviewed On 11 Jul, 2025",
      dateObj: new Date('2025-07-11'),
      rating: 4.0,
      subRatings: {
        admission: 4,
        academics: 4,
        placement: 4,
        infrastructure: 4
      },
      admissionText: "The teachers know their stuff and teach really well. The MBBS course is practical and interesting. I'm enjoying studying here. Exams are manageable and the passing requirements are fair.",
      placementText: "Around half of the students got good jobs with high salaries after graduation. The internships at our college are great, especially for MBBS and paramedical nursing students. They help you get good placements too.",
      campusText: "The college has great facilities like Wi-Fi, labs, classrooms, library, and cafeteria. The food in the mess is tasty and they change the menu daily. We also have a canteen for snacks. The sports facilities are awesome too. Overall, the college is pretty good."
    }
  ];



  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.loop = true;
      video.play().catch(() => {});
    }

    const courseInterval = setInterval(() => {
      if (courseCarouselRef.current && courseCarouselRef.current.children.length > 0) {
        setActiveCourseIndex((prev) => {
          const next = prev >= maxCourseIndex ? 0 : prev + 1;
          
          const container = courseCarouselRef.current;
          container.style.scrollSnapType = 'none';
          const cardWidth = container.children[0].offsetWidth + 20;
          container.scrollTo({
            left: next * cardWidth,
            behavior: 'smooth'
          });
          setTimeout(() => {
            container.style.scrollSnapType = 'x mandatory';
          }, 500);
          
          return next;
        });
      }
    }, 5000);

    return () => {
      clearInterval(courseInterval);
    };
  }, [maxCourseIndex]);

  const scrollToSlide = (ref, index) => {
    if (ref.current && ref.current.children.length > index) {
      const container = ref.current;
      const targetChild = container.children[index];
      const targetOffset = targetChild.offsetLeft - container.offsetLeft;
      
      const originalSnap = container.style.scrollSnapType;
      container.style.scrollSnapType = 'none';
      
      container.scrollTo({
        left: targetOffset,
        behavior: 'smooth'
      });
      
      setTimeout(() => {
        container.style.scrollSnapType = originalSnap;
      }, 500);
    }
  };

  const scrollCarousel = (ref, direction) => {
    if (ref.current && ref.current.children.length > 0) {
      let maxIndex = maxCourseIndex;
      let currentIndex = activeCourseIndex;
      
      if (ref === hospitalCarouselRef) {
        maxIndex = maxHospitalIndex;
        currentIndex = activeHospitalIndex;
      } else if (ref === testimonialCarouselRef) {
        maxIndex = maxTestimonialIndex;
        currentIndex = activeTestimonialIndex;
      }
      
      let nextIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;
      if (nextIndex < 0) nextIndex = maxIndex;
      if (nextIndex > maxIndex) nextIndex = 0;
      
      scrollToSlide(ref, nextIndex);
    }
  };

  const handleCarouselScroll = (ref, activeIndexSetter, maxIndex) => {
    if (ref.current && ref.current.children.length > 0) {
      const container = ref.current;
      const { scrollLeft } = container;
      const containerOffsetLeft = container.offsetLeft;
      
      let closestIndex = 0;
      let minDistance = Infinity;
      
      for (let i = 0; i < container.children.length; i++) {
        const child = container.children[i];
        const distance = Math.abs((child.offsetLeft - containerOffsetLeft) - scrollLeft);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      }
      
      closestIndex = Math.min(closestIndex, maxIndex);
      activeIndexSetter(closestIndex);
    }
  };

  const handleCourseScroll = () => {
    handleCarouselScroll(courseCarouselRef, setActiveCourseIndex, maxCourseIndex);
  };

  const handleHospitalScroll = () => {
    handleCarouselScroll(hospitalCarouselRef, setActiveHospitalIndex, maxHospitalIndex);
  };

  const handleTestimonialScroll = () => {
    handleCarouselScroll(testimonialCarouselRef, setActiveTestimonialIndex, maxTestimonialIndex);
  };

  return (
    <div className={styles.homeWrapper}>
      {/* VIDEO BANNER */}
      <section className={styles.videoBannerSection}>
        <video 
          ref={videoRef}
          src="/Videos/home-video.mp4"
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="auto"
          className={styles.bannerVideo}
          onError={(e) => {
            console.error("Video failed to load:", e);
          }}
        >
          Your browser does not support HTML5 video.
        </video>
        <div className={styles.videoOverlay}></div>
        <div className={styles.videoCaptionContainer}>
          <span className="hero-badge">Welcome to HIMS</span>
          <h1 className={styles.videoTitle}>Heritage Institute of <span>Medical Sciences</span></h1>
          <p className={styles.videoSubtitle}>A Premier Medical Institution Dedicated to Healthcare & Education</p>
        </div>
      </section>

      {/* HERO PILLARS */}
      <div className={styles.himsSection}>
        <div className="container-fluid p-0">
          <div className={styles.trustBanner}>
            <div className={styles.trustCenter}>
              <span className="section-badge" style={{color: '#fff', border: '1px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.1)'}}>Our Pillars of Excellence</span>
              <h2>Built on Trust. Driven by Excellence.</h2>
              <p>Every pillar we stand on is crafted for your confidence, growth & success.</p>
            </div>
          </div>
        </div>

        <div className={`container ${styles.pillarsContainer}`}>
          <div className="row g-4 justify-content-center">
            {pillars.map((pillar, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className={styles.featCard}>
                  <span className={styles.cardNum}>{pillar.num}</span>
                  <div className={styles.featCardImg}>
                    <img src={pillar.image} alt={pillar.title} />
                  </div>
                  <div className={styles.cardTitle}>{pillar.title}</div>
                  <p className={styles.cardText}>{pillar.text}</p>
                  <a href="#" className={styles.learnBtn} onClick={(e) => e.preventDefault()}>Learn more <FaArrowRightLong /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className={styles.faqSection}>
        <div className="container">
          <div className={styles.faqHeaderBanner}>
            <span className="section-badge">FAQ & Doubts</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-sub mx-auto">Clear, transparent answers to the most common queries about admissions, training, and fees.</p>
          </div>

          <div className={styles.faqContainer}>
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`${styles.faqItem} ${activeFaq === index ? styles.active : ''}`}
              >
                <button 
                  className={styles.faqHeader} 
                  onClick={() => toggleFaq(index)}
                  aria-expanded={activeFaq === index}
                >
                  <div className={styles.faqIcon}>{faq.icon}</div>
                  <div className={styles.faqQuestion}>{faq.q}</div>
                  <div className={styles.faqToggle}>
                    {activeFaq === index ? <FaMinus /> : <FaPlus />}
                  </div>
                </button>
                <div className={styles.faqBody}>
                  <div className={styles.faqContent}>{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COURSES & ACADEMICS */}
      <div className={styles.courseSection}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-badge"><FaBookOpen className="me-2" /> Academics</span>
            <h2 className="section-title">Courses & Academics</h2>
            <p className="section-sub mx-auto">NMC-approved programs designed to build confident, skilled and compassionate medical professionals.</p>
          </div>

          <div className="row g-4 justify-content-center">
            {courses.map((course, index) => (
              <div key={index} className="col-lg-6 col-md-6">
                <div className={styles.courseCard}>
                  <div className={styles.courseImage}>
                    <img src={course.image} alt={course.title} />
                  </div>
                  <h3>{course.title}</h3>
                  <p className={styles.desc}>{course.desc}</p>
                  <ul className={styles.courseList}>
                    {course.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                  <div className={styles.tagBox}>
                    {course.tags.map((tag, idx) => (
                      <span key={idx} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                  <Link href={course.link} className={styles.knowLink}>
                    Know more <FaArrowRightLong />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CAMPUS LIFE */}
      <div className={styles.campusSection}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-badge">Vibrant Life</span>
            <h2 className="section-title">Life at HIMS</h2>
            <p className="section-sub mx-auto">Explore the world-class facilities and vibrant atmosphere that makes HIMS more than just an institute.</p>
          </div>

          <div className={styles.campusGrid}>
            <div className={`${styles.campusCard} ${styles.campusCardWide}`}>
              <img src="/Images/Life at HIMS/Magnificent Campus.webp" alt="Campus" />
              <div className={styles.campusOverlay}>
                <h4>Magnificent Campus</h4>
                <p>Experience the grandeur of one of UP&apos;s largest and most secure medical campuses.</p>
              </div>
            </div>
            <div className={styles.campusCard}>
              <img src="/Images/Life at HIMS/Modern Library.webp" alt="Library" />
              <div className={styles.campusOverlay}>
                <h4>Modern Library</h4>
                <p>A vast collection of medical literature and digital resources.</p>
              </div>
            </div>
            <div className={styles.campusCard}>
              <img src="/Images/Life at HIMS/Advanced Labs.webp" alt="Labs" />
              <div className={styles.campusOverlay}>
                <h4>Advanced Labs</h4>
                <p>Cutting-edge laboratories for practical learning and research.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HOSPITAL & CLINICAL EXPOSURE */}
      <div className={styles.hospitalStatSection}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-badge">Clinical Excellence</span>
            <h2 className="section-title">Hospital & Clinical Exposure</h2>
            <p className="section-sub mx-auto">Train at one of the region&apos;s largest medical facilities with hands-on exposure to real-world medical cases.</p>
          </div>

          <div 
            className={styles.carouselContainer} 
            ref={hospitalCarouselRef}
            onScroll={handleHospitalScroll}
            style={{ justifyContent: maxHospitalIndex === 0 ? 'center' : 'flex-start' }}
          >
            {[
              { stat: "1,000+", title: "Hospital Beds", desc: "Regional-scale capacity providing students with vast clinical case studies.", img: "/Images/Hospital & Clinical Exposure images/Beds.webp", link: "/hospital/bed-capacity" },
              { stat: "50+", title: "ICU Beds", desc: "Specialized critical care units for intense clinical training.", img: "/Images/Hospital & Clinical Exposure images/ICU Beds.webp", link: "/hospital/icu" },
              { stat: "2,500+", title: "Daily OPD", desc: "High patient volume ensures diverse exposure across all departments.", img: "/Images/Hospital & Clinical Exposure images/Daily OPD.png", link: "/hospital/opd-services" },
              { stat: "24/7", title: "Emergency", desc: "Trauma and emergency services for real-time acute care learning.", img: "/Images/Hospital & Clinical Exposure images/Emergency.webp", link: "/hospital/emergency" },
              { stat: "Expert", title: "Clinical Training", desc: "Direct training under the region's most experienced clinicians in our hospital.", img: "/Images/Hospital & Clinical Exposure images/Clinical Training.webp", link: "/hospital/clinical-facilities" }
            ].map((item, idx) => (
              <div key={idx} className={styles.carouselSlide}>
                <div className={styles.statCard}>
                  <div className={styles.statCardImg}>
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className={styles.statCardContent}>
                    <div className={styles.statTitleBox}>
                      <h4 className={styles.statTitleText}>{item.title}</h4>
                      <span className={styles.statNum}>{item.stat}</span>
                    </div>
                    <p className={styles.statDesc}>{item.desc}</p>
                    <div className={styles.statCardFooter}>
                      <Link href={item.link} className={styles.exploreLink} style={{ textDecoration: 'none' }}>
                        Explore Details <FaArrowRightLong />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {maxHospitalIndex > 0 && (
            <div className={styles.carouselControls}>
              <button className={styles.carouselBtn} onClick={() => scrollCarousel(hospitalCarouselRef, 'left')} aria-label="Previous Stats">
                <FaAngleLeft />
              </button>
              <div className={styles.carouselDots}>
                {Array.from({ length: maxHospitalIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    className={`${styles.dot} ${activeHospitalIndex === idx ? styles.activeDot : ''}`}
                    onClick={() => scrollToSlide(hospitalCarouselRef, idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button className={styles.carouselBtn} onClick={() => scrollCarousel(hospitalCarouselRef, 'right')} aria-label="Next Stats">
                <FaAngleRight />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* FACULTY & RESEARCH SECTION */}
      <section className={styles.facultyResearchSection}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-badge">Academic Excellence</span>
            <h2 className="section-title">Faculty & Research</h2>
            <p className="section-sub mx-auto">Guided by world-class medical experts and driven by cutting-edge clinical research.</p>
          </div>

          {/* 1. Stats Row */}
          <div className={styles.facultyStatsRow}>
            <div className={styles.facultyStatItem}>
              <span className={styles.fStatNum}><Counter end={150} suffix="+" /></span>
              <span className={styles.fStatLabel}>Expert Faculty Members</span>
            </div>
            <div className={styles.facultyStatItem}>
              <span className={styles.fStatNum}><Counter end={500} suffix="+" /></span>
              <span className={styles.fStatLabel}>Published Research Papers</span>
            </div>
            <div className={styles.facultyStatItem}>
              <span className={styles.fStatNum}><Counter end={25} suffix="+" /></span>
              <span className={styles.fStatLabel}>Annual Conferences & CME</span>
            </div>
            <div className={styles.facultyStatItem}>
              <span className={styles.fStatNum}><Counter end={10} suffix="+" /></span>
              <span className={styles.fStatLabel}>National & Global Awards</span>
            </div>
          </div>

          {/* 2. Faculty Grid */}
          <div className="row g-4 mt-5">
            {[
              { 
                name: "Col (Dr.) Bipin Kishore Prasad", 
                category: "Principal & Professor", 
                specialty: "Internal Medicine Specialist", 
                img: "/Images/doctors/Col (Dr.) Bipin Kishore Prasad.webp" 
              },
              { 
                name: "Dr. (Prof.) Sandeep Kumar Gupta", 
                category: "Professor & HOD", 
                specialty: "Laparoscopic Surgery Specialist", 
                img: "/Images/doctors/Dr. (Prof.) Sandeep Kumar Gupta.webp" 
              },
              { 
                name: "Prof. Dr. S.K. Singh", 
                category: "Senior Consultant & HOD", 
                specialty: "Endocrinology Specialist", 
                img: "/Images/doctors/Prof. Dr. S.K. Singh   Endocrinology.webp" 
              },
              { 
                name: "Prof. Dr. V.K. Dixit", 
                category: "Senior Professor & HOD", 
                specialty: "Gastroenterology Specialist", 
                img: "/Images/doctors/Prof. Dr. V.K. Dixit   Gastroenterologist.webp" 
              }
            ].map((doc, idx) => (
              <div key={idx} className="col-12 col-sm-6 col-md-6 col-lg-3">
                <div className={styles.docCard}>
                  <div className={styles.docImg}>
                    <img src={doc.img} alt={doc.name} />
                  </div>
                  <div className={styles.docInfo}>
                    <span className={styles.docDept}>{doc.category}</span>
                    <h4 className={styles.docName}>{doc.name}</h4>
                    <p className={styles.docDesig}><strong>Specialist:</strong> {doc.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3. Featured Research */}
          <div className={styles.featuredResearchWrap}>
            <div className="row align-items-center">
              <div className="col-lg-7 order-2 order-lg-1">
                <div className={styles.featuredContent}>
                  <span className={styles.featuredTag}>Latest Achievement</span>
                  <h3>Breakthrough in Cardiovascular Research Published in Lancet</h3>
                  <p>Our Cardiology department recently published a landmark study on minimally invasive techniques, garnering international acclaim and setting new benchmarks in medical science.</p>
                  <a href="/faculty-research/publications" className={styles.readMoreBtn}>
                    Read More Publications <FaArrowRightLong className="ms-2" />
                  </a>
                </div>
              </div>
              <div className="col-lg-5 order-1 order-lg-2">
                <div className={styles.featuredImg}>
                  <img src="/Images/Image.jpg" alt="Research" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS / STUDENT EXPERIENCE */}
      <section className={styles.testimonialSection}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-badge">Student Reviews & Ratings</span>
            <h2 className="section-title">Verified Reviews & Ratings</h2>
          </div>

          {/* Reviews List */}
          <div 
            className={styles.reviewsCarouselContainer}
            ref={testimonialCarouselRef}
            onScroll={handleTestimonialScroll}
            style={{ justifyContent: maxTestimonialIndex === 0 ? 'center' : 'flex-start' }}
          >
            {reviews.map((rev, idx) => (
              <div key={idx} className={styles.reviewSlide}>
                <TestimonialCard rev={rev} styles={styles} />
              </div>
            ))}
          </div>

          {maxTestimonialIndex > 0 && (
            <div className={styles.carouselControls}>
              <button className={styles.carouselBtn} onClick={() => scrollCarousel(testimonialCarouselRef, 'left')} aria-label="Previous Testimonials">
                <FaAngleLeft />
              </button>
              <div className={styles.carouselDots}>
                {Array.from({ length: maxTestimonialIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    className={`${styles.dot} ${activeTestimonialIndex === idx ? styles.activeDot : ''}`}
                    onClick={() => scrollToSlide(testimonialCarouselRef, idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button className={styles.carouselBtn} onClick={() => scrollCarousel(testimonialCarouselRef, 'right')} aria-label="Next Testimonials">
                <FaAngleRight />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ADMISSION CTA SECTION */}
      <section className={styles.admissionCtaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className={styles.ctaText}>
                  <span className={styles.ctaBadge}>Admissions 2026 Open</span>
                  <h2>Shape Your Medical Career at <span>HIMS</span></h2>
                  <p>Join one of North India&apos;s premier medical institutions. Secure your future with world-class faculty and unmatched clinical exposure.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styles.ctaActions}>
                  <a href="/contact-us" className={styles.applyBtn}>
                    Apply Now <FaArrowRightLong className="ms-2" />
                  </a>
                  <a 
                    href="/Documents/HIMS_Brochure_2026.pdf" 
                    download="HIMS_Brochure_2026.pdf"
                    className={styles.downloadBtn}
                  >
                    Download Brochure <FaDownload className="ms-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
