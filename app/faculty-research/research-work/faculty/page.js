'use client';

import styles from '../../Research.module.css';
import { FaFileLines, FaUserDoctor } from 'react-icons/fa6';

const facultyData = [
  "Singh A, Rajawat J, Singh A, Abhinay A, Prasad R, Mishra O P. Clinical Quiz. Questions & Answers. Osteopetrosis and renal tubular acidosis: Questions. Pediatr Nephrol 2021 (in press).",
  "Mishra OP, Verma AK, Abhinay A, Singh A, Singh A, Prasad R. Risk factors for mortality in critically ill infants with acute kidney injury: A resource- limited setting Thera Apher Dial 2021 (in press).",
  "Singh P,  Mishra  O  P,  Upadhyay  SK,  Prasad  R,  Singh  A,  Abhinay  A,  Mishra  A,  Schaefer  Persistence  of  behavioral  abnormalities  following  corticosteroid  therapy  in  children  with  initial episode of idiopathic nephrotic syndrome: a prospective longitudinal observation. Brazilian J Nephrol (in press).",
  "Verma S,  Abhinay A,  Mishra O  P,  Singh A,  Prasad R.  Comparison  of  efficacy  of  first hemodialysis session  for  correction  of  metabolic  disturbances  in  acute  kidney  injury and chronic kidney disease treated by dialysis in children. J Nepal Pediatr Soc 2021; 41:35-41",
  "Abhinay A,Shankar  J,  Rao  S  K,  Mishra  OP.  Steroid  Sensitive  Nephrotic  Syndrome presented  as  Posterior  Reversible  Encephalopathy  Syndrome  – A  rare  case  report.  J  Nepal Paediatr Soc. 2020;40(2):142–5",
  "Singh S, Mishra O P, Mandal PP, Patel PS, Sharma SS, Saini H, Rani K, Chandrasekhar S, Singh MP. Thyroid function status in patients with idiopathic nephrotic syndrome. Int Urol Nephrol 2021. 2021 ;53):1859-64.",
  "Singh A, Singh A, Mishra O P, Prasad R, Narayan G, Batra VV, Tabatabaeifar M, Schaefer F.  Molecular  study  of  childhood  steroid-resistant  nephrotic  syndrome:  A  hospital-based study. J Pediatr Genet 2021; doi.org/ 10.1055/s-0040-1722286.",
  "Mishra OP.  Urinary  CD  80  in  nephrotic  syndrome:  a  biomarker  to  distinguish  minimal change disease from other glomerular diseases. Kidney Int Rep 2020 28 ;5(11):1851-2.",
  "Singh A, Prasad R, Mishra OP. Spectrum of lysosomal storage disorders at tertiary centre: retrospective case-record analysis. J Pediatr Genet 2020; 9(2):87-92.",
  "Das A, Anupurba S, Mishra OP, Banerjee T, Tripathi R.     Evaluation of Xpert MTB/RIF assay for diagnosis of tuberculosis in children. J Trop Pediatr. 2019:. 65 :14-20."
];

const facultyNationalData = [
  "Singh G, Mishra OP, Abhinay A, Agarwal V, Mishra SP, Dwivedi A N D, Singh A, Prasad R, Mishra RN. Fibroblast growth factor 23 level and cardiovascular parameters in children with chronic kidney disease . Indian J Pediatr (in press).",
  "SK,  Kumar  A,  Prasad  R,  Gupta  V,  Mishra  OP.  Clinical  profile  and  outcome  of  COVID-19 among immunocompromised children: A tertiary care center observation. Indian Pediatr 2021; 58 : 686-7.",
  "Agarwal KN,  Agarwal  DK,  Mishra  OP.  Alterations  in  body  fluids-  blood  (plasma,  erythrocytes, leucocytes), edema fluid and saliva as indicators of nutritional status. Ann Clin Med Res. 2021; 2(3):1031.",
  "Mishra O  P,  Prasad  R.  Acute  kidney  injury  in  diabetic  ketoacidosis:  risk  factors  and mortality. Indian J Pediatr. 2021 88(6):542-3.",
  "Sinha A,  Bagga  A,  Banerjee  S,  Mishra  K,  Mehta  A,  Agarwal  I,  Uthup  S,  Saha  A, Mishra  O  P.  Steroid  sensitive  nephrotic  syndrome.  Revised Guidelines. Indian Society of Pediatric Nephrology. Indian Pediatr 2021 58(5):461-81.",
  "Vasudevan A, Mantan M, Krishnamurthy S, Pais P, Mathew G, Hari P, Kanitkar M, Gulati S, Bagga  A,  Mishra  OP;  Managing  children  with  renal  diseases    during  COVID-19 Indian    Society    of    Pediatric    Nephrology.    Indian    Pediatr   2020; 57 : 641-51.",
  "Prasad R, Rai A, Singh A, Mishra OP, Singh UK. Giant tuberculoma masquedering as brain tumor. Clin Neurol Int. 2020;2(1):1013.",
  "Mishra  OP,  Prasad  R.  Microalbuminuria  and  serum  cystatin  C:  biomarkers  for  early detection of kidney injury in children with obesity. Indian J Pediatr. 2020 ;87(12):991-2.",
  "Prasad R, Biswas J, Singh K, Mishra OP, Singh A.  Clinical profile and outcome of brain abscess in children from a tertiary care hospital in eastern Uttar Pradesh. Ann Indian Acad Neurol. 2020 ;23(3):303-7.",
  "Mishra OP,  Prasad  R.  Acute  peritoneal  dialysis  in  neonates  with  acute  kidney  injury. Indian Pediatr. 2020; 57(5):399-4.",
  "Mishra OP,  Prasad  R.  Congenital  anomalies  of the kidney and  urinary tract:  challenges and future prospects. Indian J Pediatr 2020 ;87(9):680-1.",
  "Aggarwal  P,  Jain  A,  Mishra  O  P.  Gupta  V.   Variable  phenotypic  presentation  of  two siblings with Hemoglobin SD disease. Indian J Pediatr 2020; 87:229-30.",
  "Mishra OP, Chhabra P, Narayan G, Srivastava P, Prasad R, Singh A, Abhinay A, Batra VV. Cytotoxic T- Lymphocyte Antigen-4 (CTLA4) gene expression and urinary CTLA4 levels in children with idiopathic nephrotic syndrome. Indian J Pediatr 2019: 86 : :26-31",
  "Momia Y, Koushal V, Talati S, Bhagat H, Kumar A, Singh R, Gupta K, Momia N. Exponential smoothening of postponement rates in operation theatres of advanced pediatric centre- time series forecasting with regression analysis. Int. Journ. of Tech Research and Application 2018; 6 (3):73-9.",
  "Shukla D, Sreedhar SK, Rastogi V. A Comparative Study of Botulinum Toxin: A with Triamcinolone Compared to Triamcinolone alone in the treatment of Osteoarthritis of Knee. Anesthesia, essays and researches 2018; 12 (1):47-9.",
  "Paswan AK, Gupta S, Prakash S, Dubey RK, Khuba S, Rastogi V.Automated percutaneous lumbar discectomy in patients suffering from prolapsed intervertebral disc: a prospective study. Anaesthesia, Pain & Intensive Care 2019; 20(4): 429-35.",
  "Bajpai V, Gangwar P, Gupta A. Ultrasound guided supraclavicular brachial plexus block to compare the effect of addition of clonidine or dexmedetomidine with 0.5% bupivacaine: A comparative study. International Journal of medical anad health research. Vol 5, issue 7: July 2019 : 97-102",
  "Limited mouth opening: Retrograde intubation revisited. Saudi Journal of Anesthesia. 2018 ;12 (2): 349-51.",
  "Videolaryngoscopy‑assisted intubation in a patient of Pendred syndrome with a pendulous goiter. Indian Anesthetist Forum 2019; 20:107-9",
  "Gupta M.A comparative study of post surgical outcome between abdominal sacrocolpopexy and abdominal high uterosacral suspension for vault prolapse.International Journal of Clinical Obstetrics and Gynaecology.2019;3(5):158-160.",
  "Gupta M.“A surprising presentation of a partial Hydatiform Molar pregnancy in Rudimentary Horn of unicornuate uterus.”Indian Journal Of Obstetrics and Gynaecology Research2019.vol 6 issue 3.399-401.",
  "Gupta M. Study of Association of Poor Responders with Serum Inhibin B level in Ovulation Induction.International Journal of Clinical Obstetrics and Gynaecology.2019.vol.3.issue 6.",
  "Gupta M.”Malignant hidradenoma of vulva in pregnancy- A rare case”Indian Journal Of Obstetrics and Gynaecology Research 2019.vol.6.issue 4.",
  "Kishore Vatsala,Singh Neeraj Kumar,Kotasthane Dhananjay .Non keratinizing squamous cell carcinoma of nasal cavity-Arare case of confusing nomenclature.Journal of medical science and clinical research 2019:7(10);147-149.",
  "Vatsalakishore,Dr.Neerajsingh,Dr.Dhananjaykotasthane.Bilateral phyllodes tumor of breast.2018.Asian pacific journal of  health sciences.",
  "Neerajkumarsingh,Dr.Vatsalakishore. Patterns of anemia in elderly:A hospital based study in Eastern U.P.International journal of scientific research:2018",
  "Vatsalakishore,Dr.Neerajsingh,Dr.Dhananjaykotasthane.Endometrial histopathological changes in DUB at tertiary care hospital in eastern U.P.Interntational journal of applied research.2018",
  "VatsalaKishore,Dr.Neeraj Kumar Singh. A study of anaemia among females of reproductive age at a Tertiary hospital in North India.Journal of evolution of medical and dental sciences.2018",
  "Vatsalakishore,Dr.Neerajkumar singh. A Clinicopathological Study Of Cervical Lymphadenopathy And Role Of Fine-Needle Aspiration: A Hospital Based Study In Eastern U.P. International journal of scientific research:2018",
  "Singh S and Pandey S.K. Adverse macroscopic changes in developing mice treated with lamotrigine on early and late phase of gestation current Adv Res.7(2), 10104-10107,2018.",
  "Misra MK, Mishra A, Pandey SK, Kapoor R, Sharma RK, Agrawal S. Genetic association of Transcription factor FOX K1 gene variants with EsRD and renal allograft outcome. Gene, 2018 (Accepted).",
  "Shweta Jha, GitanjaliKhorwal. Rare case of accessory nerve to mylohyoid communucating with lingual nerve and its clinical implications.International Journal of Anatomy and Research.2018 Vol 6(3.2):5550-53.",
  "Agrawal S and Goel RK. Study of protective effects of curcumin on heat stress-induced hepatic damage in rats.Int J Sci Res. 2018; 7(4): 537-9.",
  "Chauhan I, Agrawal S, Goel RK. Status of inflammatory markers and growth factor in gastric ulcer protective effect of Punicagranatum L. peel extract in rat.. NatIJPhysiol Pharm Pharmacol 2018, 8 (online first). Doi:10.5455/njppp. 2018.8.0309317072017.",
  "Tiwari RK, Gupta SK, Goel RK. A questionnaire-based comparison of conventional teaching methods to computer assisted learning in experimental pharmacology for undergraduate medical students. Int J Basic ClinPharmacol 2019:8(4):762-6",
  "Gupta SK. A study to assess the methodological quality of an in vivo animal experiments published in Indian journal of Pharmacology: A retrospective, cross sectional, observational study. Indian J pharmacol 2019; 51:11-6"
];

export default function FacultyResearchPage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.hero}>
        <div className="container">
          <span className={styles.heroBadge}>Research Excellence</span>
          <h1>Faculty <span>Research</span></h1>
          <p>Discover the latest clinical breakthroughs and academic contributions from our distinguished faculty members.</p>
        </div>
      </div>

      <div className={styles.contentSection}>
        <div className="container">
          <div className={styles.statsBar}>
            <div className={styles.statItem}>
              <span className={styles.statVal}>{facultyData.length + facultyNationalData.length}+</span>
              <span className={styles.statLbl}>Total Papers</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>{facultyNationalData.length}</span>
              <span className={styles.statLbl}>National Journals</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>{facultyData.length}</span>
              <span className={styles.statLbl}>International Journals</span>
            </div>
          </div>

          <h2 className={styles.sectionHeader}>List Of Research & Publications</h2>
          <div className={styles.pubList}>
            {facultyData.map((text, idx) => (
              <div key={idx} className={styles.pubCard}>
                <div className={styles.pubIcon}>
                  <FaFileLines />
                </div>
                <div className={styles.pubInfo}>
                  <h3 className={styles.pubTitle}>{text}</h3>
                </div>
              </div>
            ))}
          </div>

          <h2 className={styles.sectionHeader}>Papers Published – National Journals</h2>
          <div className={styles.pubList}>
            {facultyNationalData.map((text, idx) => (
              <div key={idx} className={styles.pubCard}>
                <div className={styles.pubIcon}>
                  <FaFileLines />
                </div>
                <div className={styles.pubInfo}>
                  <h3 className={styles.pubTitle}>{text}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
