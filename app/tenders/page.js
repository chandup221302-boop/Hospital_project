'use client';

import { useState, useEffect } from 'react';
import styles from './Tenders.module.css';
import { 
  FaFilePdf, FaDownload, FaEye, FaArrowRightLong, 
  FaFileLines, FaMagnifyingGlassPlus, FaRegFilePdf,
  FaChevronDown, FaCircleInfo, FaEnvelope, FaPhone, FaUserTie, FaCalendarDays
} from 'react-icons/fa6';

const TENDERS_SECTION_1 = [
  {
    id: 's1-1',
    title: "Tender Ref No. 11 - E-Tender Ayushman",
    shortTitle: "Ayushman Tender",
    ref: "REF-NO-11",
    date: "Feb 2026",
    url: "https://heritageims.com/wp-content/uploads/2026/02/TENTDER-REF-NO.11-E-TENDER-AYUSHMAN.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2026/02/TENTDER-REF-NO.11-E-TENDER-AYUSHMAN.pdf&embedded=true",
    caption: "Start from 6 April",
    subCaption: "E-Tender FOr RC"
  },
  {
    id: 's1-2',
    title: "E-Tender 01 - General Procurement",
    shortTitle: "Procurement 01",
    ref: "E-TENDER-01",
    date: "Feb 2026",
    url: "https://heritageims.com/wp-content/uploads/2026/02/E-TENDER-01.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2026/02/E-TENDER-01.pdf&embedded=true",
    caption: "Start from 6 April",
    subCaption: "E-Tender FOr RC"
  },
  {
    id: 's1-3',
    title: "E-Tender 02 - Medical Equipment",
    shortTitle: "Equipment 02",
    ref: "E-TENDER-02",
    date: "Feb 2026",
    url: "https://heritageims.com/wp-content/uploads/2026/02/E-TENDER-02.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2026/02/E-TENDER-02.pdf&embedded=true",
    caption: "Start from 6 April",
    subCaption: "E-Tender FOr RC"
  },
  {
    id: 's1-4',
    title: "1-E-Tender For RC",
    shortTitle: "RC Tender",
    ref: "RC-TENDER-01",
    date: "Jan 2026",
    url: "https://heritageims.com/wp-content/uploads/2026/01/1-E-Tender-FOr-RC.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2026/01/1-E-Tender-FOr-RC.pdf&embedded=true",
    caption: "Start from 6 April",
    subCaption: "E-Tender FOr RC"
  }
];

const TENDERS_SECTION_2 = [
  {
    id: 's2-1',
    title: "Tender Radiology IR",
    shortTitle: "Radiology IR",
    ref: "RAD-2025",
    date: "Dec 2025",
    url: "https://heritageims.com/wp-content/uploads/2025/12/TENDER-RADIOLOGY-IR.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2025/12/TENDER-RADIOLOGY-IR.pdf&embedded=true",
    caption: "Tender",
    subCaption: "Official Document"
  },
  {
    id: 's2-2',
    title: "General Tender Nov 2025",
    shortTitle: "Tender Nov 18",
    ref: "TEND-NOV-18",
    date: "Nov 2025",
    url: "https://heritageims.com/wp-content/uploads/2025/11/img20251118_15402492.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2025/11/img20251118_15402492.pdf&embedded=true",
    caption: "Tender",
    subCaption: "Official Document"
  },
  {
    id: 's2-3',
    title: "Medical Tender Nov 06 (A)",
    shortTitle: "Tender Nov 06-A",
    ref: "TEND-NOV-06-A",
    date: "Nov 2025",
    url: "https://heritageims.com/wp-content/uploads/2025/11/img20251106_12134574-2.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2025/11/img20251106_12134574-2.pdf&embedded=true",
    caption: "Tender",
    subCaption: "Official Document"
  },
  {
    id: 's2-4',
    title: "Medical Tender Nov 06 (B)",
    shortTitle: "Tender Nov 06-B",
    ref: "TEND-NOV-06-B",
    date: "Nov 2025",
    url: "https://heritageims.com/wp-content/uploads/2025/11/img20251106_12134574-2.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2025/11/img20251106_12134574-2.pdf&embedded=true",
    caption: "Tender",
    subCaption: "Official Document"
  },
  {
    id: 's2-5',
    title: "Archive Tender Sept 2025",
    shortTitle: "Tender Sept 10",
    ref: "TEND-SEPT-10",
    date: "Sept 2025",
    url: "https://heritageims.com/wp-content/uploads/2025/09/img20250910_12344233.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2025/09/img20250910_12344233.pdf&embedded=true",
    caption: "Tender",
    subCaption: "Official Document"
  },
  {
    id: 's2-6',
    title: "Tender For Drugs & Medicine (Merged)",
    shortTitle: "Drugs & Medicine 01",
    ref: "DRUG-MED-01",
    date: "July 2025",
    url: "https://heritageims.com/wp-content/uploads/2025/07/ilovepdf_merged.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2025/07/ilovepdf_merged.pdf&embedded=true",
    caption: "Tender For Drugs & Medicine",
    subCaption: "July 2025"
  },
  {
    id: 's2-7',
    title: "Tender For Drugs & Medicine (Special)",
    shortTitle: "Drugs & Medicine 02",
    ref: "DRUG-MED-02",
    date: "July 2025",
    url: "https://heritageims.com/wp-content/uploads/2025/07/img20250729_15192833.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2025/07/img20250729_15192833.pdf&embedded=true",
    caption: "Tender For Drugs & Medicine",
    subCaption: "July 2025"
  },
  {
    id: 's2-8',
    title: "Tender For Drugs & Medicine (Bulk)",
    shortTitle: "Drugs & Medicine 03",
    ref: "DRUG-MED-03",
    date: "July 2025",
    url: "https://heritageims.com/wp-content/uploads/2025/07/ilovepdf_merged-1.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2025/07/ilovepdf_merged-1.pdf&embedded=true",
    caption: "Tender For Drugs & Medicine",
    subCaption: "July 2025"
  },
  {
    id: 's2-9',
    title: "Tender For Ayushman 1",
    shortTitle: "Ayushman 1",
    ref: "AYU-01-2025",
    date: "July 2025",
    url: "https://heritageims.com/wp-content/uploads/2025/07/Tender-for-Ayushman-1.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2025/07/Tender-for-Ayushman-1.pdf&embedded=true",
    caption: "Tender For Ayushman 1",
    subCaption: "July 2025"
  },
  {
    id: 's2-10',
    title: "Tenter For Ayushman 2",
    shortTitle: "Ayushman 2",
    ref: "AYU-02-2025",
    date: "July 2025",
    url: "https://heritageims.com/wp-content/uploads/2025/07/Tenter-for-Ayushman-2.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2025/07/Tenter-for-Ayushman-2.pdf&embedded=true",
    caption: "Tender For Ayushman 2",
    subCaption: "July 2025"
  }
];

const TENDERS_SECTION_3 = [
  {
    id: 's3-1',
    title: "Tender No 2 2025",
    shortTitle: "Tender No 2",
    ref: "TEND-NO-2",
    date: "April 2025",
    url: "https://heritageims.com/wp-content/uploads/2025/05/Tender-No-2-2025.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2025/05/Tender-No-2-2025.pdf&embedded=true",
    caption: "DRUG AND MEDICINES",
    subCaption: "Official Document"
  }
];

const TENDERS_SECTION_4 = [
  {
    id: 's4-1',
    title: "DOCUMENT REQUIRED",
    shortTitle: "Docs Required",
    ref: "DOC-REQ",
    date: "March 2025",
    url: "https://heritageimshospital.com/assets/images/gallery/3April/Documents-Required.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageimshospital.com/assets/images/gallery/3April/Documents-Required.pdf&embedded=true",
    caption: "Tender for one year",
    subCaption: "QTY May be extended."
  },
  {
    id: 's4-2',
    title: "Tender for Carpainter one year Maintenance",
    shortTitle: "Carpenter",
    ref: "MAINT-CARP",
    date: "March 2025",
    url: "https://heritageimshospital.com/assets/images/gallery/3April/Carpainter.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageimshospital.com/assets/images/gallery/3April/Carpainter.pdf&embedded=true",
    caption: "Tender for one year",
    subCaption: "QTY May be extended."
  },
  {
    id: 's4-3',
    title: "Tender for Plumbing one year Maintenance",
    shortTitle: "Plumbing",
    ref: "MAINT-PLUMB",
    date: "March 2025",
    url: "https://heritageimshospital.com/assets/images/gallery/3April/Plumbing.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageimshospital.com/assets/images/gallery/3April/Plumbing.pdf&embedded=true",
    caption: "Tender for one year",
    subCaption: "QTY May be extended."
  },
  {
    id: 's4-4',
    title: "Tender for items to be Printed",
    shortTitle: "Printed Items",
    ref: "PRINT-ITEMS",
    date: "March 2025",
    url: "https://heritageimshospital.com/assets/images/gallery/3April/printed.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageimshospital.com/assets/images/gallery/3April/printed.pdf&embedded=true",
    caption: "Tender for one year",
    subCaption: "QTY May be extended."
  },
  {
    id: 's4-5',
    title: "Tender for Electrical Store",
    shortTitle: "Electrical Store",
    ref: "ELEC-STORE",
    date: "March 2025",
    url: "https://heritageimshospital.com/assets/images/gallery/3April/Electrical-Store.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageimshospital.com/assets/images/gallery/3April/Electrical-Store.pdf&embedded=true",
    caption: "Tender for one year",
    subCaption: "QTY May be extended."
  },
  {
    id: 's4-6',
    title: "Tender for Stationary Items",
    shortTitle: "Stationary",
    ref: "STAT-ITEMS",
    date: "March 2025",
    url: "https://heritageimshospital.com/assets/images/gallery/3April/Stationary-Item.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageimshospital.com/assets/images/gallery/3April/Stationary-Item.pdf&embedded=true",
    caption: "Tender for one year",
    subCaption: "QTY May be extended."
  }
];

const TENDERS_SECTION_5 = [
  {
    id: 's5-1',
    title: "Tender March 25",
    shortTitle: "Tender Mar 25",
    ref: "TEND-MAR-25",
    date: "Jan 2025",
    url: "https://heritageims.com/wp-content/uploads/2025/03/25Mar.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2025/03/25Mar.pdf&embedded=true",
    caption: "DRUG AND MEDICINES",
    subCaption: "Official Document"
  }
];

const TENDERS_SECTION_6 = [
  {
    id: 's6-1',
    title: "Tender Dec 2024",
    shortTitle: "Tender Dec 24",
    ref: "TEND-DEC-24",
    date: "Dec 2024",
    url: "https://heritageims.com/wp-content/uploads/2025/01/Ten-6.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2025/01/Ten-6.pdf&embedded=true",
    caption: "DRUG AND MEDICINE",
    subCaption: "Official Document"
  }
];

const TENDERS_SECTION_7 = [
  {
    id: 's7-1',
    title: "Tender Girls Hostel",
    shortTitle: "Girls Hostel",
    ref: "TEND-GIRLS",
    date: "Dec 2024",
    url: "https://heritageimshospital.com/assets/images/gallery/18dec/Tender_Girls_Hostel.docx",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageimshospital.com/assets/images/gallery/18dec/Tender_Girls_Hostel.docx&embedded=true",
    caption: "Tender Girls Hostel",
    subCaption: "DOCX File"
  },
  {
    id: 's7-2',
    title: "Tender for Drivers Rest Room",
    shortTitle: "Drivers Rest Room",
    ref: "TEND-DVR-1",
    date: "Dec 2024",
    url: "https://heritageimshospital.com/assets/images/gallery/18dec/Tender-for-Dvrs-Rest-Room.docx",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageimshospital.com/assets/images/gallery/18dec/Tender-for-Dvrs-Rest-Room.docx&embedded=true",
    caption: "Tender for Drivers Rest Room",
    subCaption: "DOCX File"
  },
  {
    id: 's7-3',
    title: "Tender DVR REST ROOM",
    shortTitle: "DVR Rest Room",
    ref: "TEND-DVR-2",
    date: "Dec 2024",
    url: "https://heritageimshospital.com/assets/images/gallery/18dec/Tender-DVR-REST-ROOM.docx",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageimshospital.com/assets/images/gallery/18dec/Tender-DVR-REST-ROOM.docx&embedded=true",
    caption: "Tender DVR REST ROOM",
    subCaption: "DOCX File"
  },
  {
    id: 's7-4',
    title: "Tender CLASS ROOM AT 5TH FLOOR",
    shortTitle: "Class Room 5th Flr",
    ref: "TEND-CLASS",
    date: "Dec 2024",
    url: "https://heritageimshospital.com/assets/images/gallery/18dec/Tender-CLASS-ROOM-AT-5TH-FLOOR-OF-MEDICAL-COLLEGE.docx",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageimshospital.com/assets/images/gallery/18dec/Tender-CLASS-ROOM-AT-5TH-FLOOR-OF-MEDICAL-COLLEGE.docx&embedded=true",
    caption: "Tender CLASS ROOM",
    subCaption: "DOCX File"
  },
  {
    id: 's7-5',
    title: "FINAL BOQ MEDICAL COLLEGE DEC 202401",
    shortTitle: "FINAL BOQ",
    ref: "BOQ-MED",
    date: "Dec 2024",
    url: "https://heritageimshospital.com/assets/images/gallery/18dec/FINAL-BOQ-MEDICAL-COLLEGE-DEC-202401.xls",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageimshospital.com/assets/images/gallery/18dec/FINAL-BOQ-MEDICAL-COLLEGE-DEC-202401.xls&embedded=true",
    caption: "FINAL BOQ MEDICAL COLLEGE",
    subCaption: "XLS File"
  },
  {
    id: 's7-6',
    title: "BOQ TENDER OF PROPOSED GIRLS HOSTEL",
    shortTitle: "BOQ Girls Hostel",
    ref: "BOQ-GIRLS",
    date: "Dec 2024",
    url: "https://heritageimshospital.com/assets/images/gallery/18dec/BOQ-TENDER-OF-PROPOSED-GIRLS-HOSTEL.xlsx",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageimshospital.com/assets/images/gallery/18dec/BOQ-TENDER-OF-PROPOSED-GIRLS-HOSTEL.xlsx&embedded=true",
    caption: "BOQ TENDER",
    subCaption: "XLSX File"
  }
];

const TENDERS_SECTION_8 = [
  {
    id: 's8-1',
    title: "Tender 4",
    shortTitle: "Tender 4",
    ref: "TEND-4",
    date: "Sept 2024",
    url: "https://heritageims.com/wp-content/uploads/2024/10/tender4.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2024/10/tender4.pdf&embedded=true",
    caption: "DRUG AND MEDICINE E-TENDER:",
    subCaption: "Official Document"
  },
  {
    id: 's8-2',
    title: "Tender 5",
    shortTitle: "Tender 5",
    ref: "TEND-5",
    date: "Sept 2024",
    url: "https://heritageims.com/wp-content/uploads/2024/10/tender5.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2024/10/tender5.pdf&embedded=true",
    caption: "DRUG AND MEDICINE E-TENDER:",
    subCaption: "Official Document"
  }
];

const TENDERS_SECTION_9 = [
  {
    id: 's9-1',
    title: "Tender Sept 26 (A)",
    shortTitle: "Tender 26(A)",
    ref: "TEND-SEPT-26A",
    date: "Sept 2024",
    url: "https://heritageims.com/wp-content/uploads/2024/09/img20240926_12212210.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2024/09/img20240926_12212210.pdf&embedded=true",
    caption: "DRUG AND MEDICINE E-TENDER:",
    subCaption: "Official Document"
  },
  {
    id: 's9-2',
    title: "Tender Sept 26 (B)",
    shortTitle: "Tender 26(B)",
    ref: "TEND-SEPT-26B",
    date: "Sept 2024",
    url: "https://heritageims.com/wp-content/uploads/2024/09/img20240926_12154861.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2024/09/img20240926_12154861.pdf&embedded=true",
    caption: "DRUG AND MEDICINE E-TENDER:",
    subCaption: "Official Document"
  },
  {
    id: 's9-3',
    title: "Tender Sept 25",
    shortTitle: "Tender 25",
    ref: "TEND-SEPT-25",
    date: "Sept 2024",
    url: "https://heritageims.com/wp-content/uploads/2024/09/img20240925_12280458.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2024/09/img20240925_12280458.pdf&embedded=true",
    caption: "DRUG AND MEDICINE E-TENDER:",
    subCaption: "Official Document"
  }
];

const TENDERS_SECTION_10 = [
  {
    id: 's10-1',
    title: "CTVS Consumable Items",
    shortTitle: "CTVS Items",
    ref: "CTVS-2024",
    date: "Sept 2024",
    url: "https://heritageims.com/wp-content/uploads/2024/09/CTVS-Consumable-items-.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2024/09/CTVS-Consumable-items-.pdf&embedded=true",
    caption: "CTVS Consumable Items Continuous Supply",
    subCaption: "Official Document"
  }
];

const TENDERS_SECTION_11 = [
  {
    id: 's11-1',
    title: "Gastroenterology ERCP Items",
    shortTitle: "Gastro Items",
    ref: "GASTRO-ERCP-2024",
    date: "May 2024",
    url: "https://heritageims.com/wp-content/uploads/2024/09/Requirement_Item_of_Gastroenterology.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2024/09/Requirement_Item_of_Gastroenterology.pdf&embedded=true",
    caption: "Requirement Items Of Gastroenterology For ERCP Procedure",
    subCaption: "Official Document"
  }
];

const TENDERS_SECTION_12 = [
  {
    id: 's12-1',
    title: "Cardiology Instrument OT",
    shortTitle: "Cardiac OT",
    ref: "CARDIO-OT-2024",
    date: "May 2024",
    url: "https://heritageims.com/wp-content/uploads/2024/05/Cardiology-instrument-for-cardiac-OT.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2024/05/Cardiology-instrument-for-cardiac-OT.pdf&embedded=true",
    caption: "Cardiology instrument for cardiac OT",
    subCaption: "Official Document"
  },
  {
    id: 's12-2',
    title: "Requirement for Cathlab",
    shortTitle: "Cathlab",
    ref: "CATHLAB-2024",
    date: "May 2024",
    url: "https://heritageims.com/wp-content/uploads/2024/05/Requirement-for-cathlab-.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2024/05/Requirement-for-cathlab-.pdf&embedded=true",
    caption: "Requirement for Cathlab",
    subCaption: "Official Document"
  }
];

const TENDERS_SECTION_13 = [
  {
    id: 's13-1',
    title: "Requirement for Cardiac OT",
    shortTitle: "Cardiac OT",
    ref: "CARDIO-REQ-24",
    date: "April 2024",
    url: "https://heritageims.com/wp-content/uploads/2024/05/requirement-for-cardiac-OT-instrument-.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2024/05/requirement-for-cardiac-OT-instrument-.pdf&embedded=true",
    caption: "Requirement for Cardiac OT Instrument",
    subCaption: "Official Document"
  },
  {
    id: 's13-2',
    title: "Microbiology Lab Items",
    shortTitle: "Microbiology",
    ref: "MICROBIO-24",
    date: "April 2024",
    url: "https://heritageims.com/wp-content/uploads/2024/05/MICROBIOLOGY.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2024/05/MICROBIOLOGY.pdf&embedded=true",
    caption: "Hospital items requirement for Microbiology Lab",
    subCaption: "Official Document"
  },
  {
    id: 's13-3',
    title: "Central Lab Items",
    shortTitle: "Central Lab",
    ref: "CENTRAL-LAB-24",
    date: "April 2024",
    url: "https://heritageims.com/wp-content/uploads/2024/05/LAB.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2024/05/LAB.pdf&embedded=true",
    caption: "Hospital items requirment for Central Lab",
    subCaption: "Official Document"
  }
];

const TENDERS_SECTION_14 = [
  {
    id: 's14-1',
    title: "REVISED PARAMEDICAL SPECIFICATION",
    shortTitle: "Paramedical Spec",
    ref: "PARAMED-SPEC",
    date: "May 2024",
    url: "https://heritageims.com/wp-content/uploads/2024/04/REVISED-PARAMEDICAL-COLLEGE-SPECIFICATION-1.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2024/04/REVISED-PARAMEDICAL-COLLEGE-SPECIFICATION-1.pdf&embedded=true",
    caption: "REVISED PARAMEDICAL COLLEGE SPECIFICATION",
    subCaption: "Official Document"
  },
  {
    id: 's14-2',
    title: "TENDER- 1 PARAMEDICAL COLLEGE",
    shortTitle: "Paramedical Tender 1",
    ref: "PARAMED-TEND-1",
    date: "May 2024",
    url: "https://heritageims.com/wp-content/uploads/2024/04/TENDER-1-PARAMEDICAL-COLLEGE-2.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2024/04/TENDER-1-PARAMEDICAL-COLLEGE-2.pdf&embedded=true",
    caption: "TENDER- 1 PARAMEDICAL COLLEGE",
    subCaption: "Official Document"
  },
  {
    id: 's14-3',
    title: "Site Plan",
    shortTitle: "Site Plan",
    ref: "SITE-PLAN",
    date: "May 2024",
    url: "https://heritageims.com/wp-content/uploads/2024/04/siteplan-16-3-24.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2024/04/siteplan-16-3-24.pdf&embedded=true",
    caption: "",
    subCaption: "Architectural Plan"
  },
  {
    id: 's14-4',
    title: "Stilt Floor Plan",
    shortTitle: "Stilt Floor",
    ref: "STILT-FLOOR",
    date: "May 2024",
    url: "https://heritageims.com/wp-content/uploads/2024/04/stilt-floor-plan-16-3-24.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2024/04/stilt-floor-plan-16-3-24.pdf&embedded=true",
    caption: "",
    subCaption: "Architectural Plan"
  },
  {
    id: 's14-5',
    title: "1st Floor Plan",
    shortTitle: "1st Floor",
    ref: "1ST-FLOOR",
    date: "May 2024",
    url: "https://heritageims.com/wp-content/uploads/2024/04/1st-floor-plan-16-3-24.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2024/04/1st-floor-plan-16-3-24.pdf&embedded=true",
    caption: "",
    subCaption: "Architectural Plan"
  },
  {
    id: 's14-6',
    title: "2nd Floor Plan",
    shortTitle: "2nd Floor",
    ref: "2ND-FLOOR",
    date: "May 2024",
    url: "https://heritageims.com/wp-content/uploads/2024/04/2nd-floor-plan-16-3-24.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2024/04/2nd-floor-plan-16-3-24.pdf&embedded=true",
    caption: "",
    subCaption: "Architectural Plan"
  },
  {
    id: 's14-7',
    title: "3rd Floor Plan",
    shortTitle: "3rd Floor",
    ref: "3RD-FLOOR",
    date: "May 2024",
    url: "https://heritageims.com/wp-content/uploads/2024/04/3rd-floor-plan-16-3-24.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2024/04/3rd-floor-plan-16-3-24.pdf&embedded=true",
    caption: "",
    subCaption: "Architectural Plan"
  },
  {
    id: 's14-8',
    title: "4th Floor Plan",
    shortTitle: "4th Floor",
    ref: "4TH-FLOOR",
    date: "May 2024",
    url: "https://heritageims.com/wp-content/uploads/2024/04/4th-floor-plan-16-3-24.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2024/04/4th-floor-plan-16-3-24.pdf&embedded=true",
    caption: "",
    subCaption: "Architectural Plan"
  },
  {
    id: 's14-9',
    title: "5th Floor Plan",
    shortTitle: "5th Floor",
    ref: "5TH-FLOOR",
    date: "May 2024",
    url: "https://heritageims.com/wp-content/uploads/2024/04/5th-floor-plan-16-3-24.pdf",
    viewerUrl: "https://docs.google.com/viewerng/viewer?url=https://heritageims.com/wp-content/uploads/2024/04/5th-floor-plan-16-3-24.pdf&embedded=true",
    caption: "",
    subCaption: "Architectural Plan"
  }
];

export default function TendersPage() {
  const [selectedTenderS1, setSelectedTenderS1] = useState(TENDERS_SECTION_1[0]);
  const [selectedTenderS2, setSelectedTenderS2] = useState(TENDERS_SECTION_2[0]);
  const [selectedTenderS3, setSelectedTenderS3] = useState(TENDERS_SECTION_3[0]);
  const [selectedTenderS4, setSelectedTenderS4] = useState(TENDERS_SECTION_4[0]);
  const [selectedTenderS5, setSelectedTenderS5] = useState(TENDERS_SECTION_5[0]);
  const [selectedTenderS6, setSelectedTenderS6] = useState(TENDERS_SECTION_6[0]);
  const [selectedTenderS7, setSelectedTenderS7] = useState(TENDERS_SECTION_7[0]);
  const [selectedTenderS8, setSelectedTenderS8] = useState(TENDERS_SECTION_8[0]);
  const [selectedTenderS9, setSelectedTenderS9] = useState(TENDERS_SECTION_9[0]);
  const [selectedTenderS10, setSelectedTenderS10] = useState(TENDERS_SECTION_10[0]);
  const [selectedTenderS11, setSelectedTenderS11] = useState(TENDERS_SECTION_11[0]);
  const [selectedTenderS12, setSelectedTenderS12] = useState(TENDERS_SECTION_12[0]);
  const [selectedTenderS13, setSelectedTenderS13] = useState(TENDERS_SECTION_13[0]);
  const [selectedTenderS14, setSelectedTenderS14] = useState(TENDERS_SECTION_14[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 992);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleTenderSelect = (tender, section) => {
    if (section === 1) setSelectedTenderS1(tender);
    else if (section === 2) setSelectedTenderS2(tender);
    else if (section === 3) setSelectedTenderS3(tender);
    else if (section === 4) setSelectedTenderS4(tender);
    else if (section === 5) setSelectedTenderS5(tender);
    else if (section === 6) setSelectedTenderS6(tender);
    else if (section === 7) setSelectedTenderS7(tender);
    else if (section === 8) setSelectedTenderS8(tender);
    else if (section === 9) setSelectedTenderS9(tender);
    else if (section === 10) setSelectedTenderS10(tender);
    else if (section === 11) setSelectedTenderS11(tender);
    else if (section === 12) setSelectedTenderS12(tender);
    else if (section === 13) setSelectedTenderS13(tender);
    else setSelectedTenderS14(tender);

    if (isMobile) {
      const viewerId = section === 1 ? 'tender-viewer-s1' : section === 2 ? 'tender-viewer-s2' : section === 3 ? 'tender-viewer-s3' : section === 4 ? 'tender-viewer-s4' : section === 5 ? 'tender-viewer-s5' : section === 6 ? 'tender-viewer-s6' : section === 7 ? 'tender-viewer-s7' : section === 8 ? 'tender-viewer-s8' : section === 9 ? 'tender-viewer-s9' : section === 10 ? 'tender-viewer-s10' : section === 11 ? 'tender-viewer-s11' : section === 12 ? 'tender-viewer-s12' : section === 13 ? 'tender-viewer-s13' : 'tender-viewer-s14';
      const viewer = document.getElementById(viewerId);
      if (viewer) {
        const offset = 120;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = viewer.getBoundingClientRect().top;
        window.scrollTo({
          top: elementRect - bodyRect - offset,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleDownload = (e, url, title) => {
    e.preventDefault();
    const extMatch = url.match(/\.(pdf|docx?|xlsx?|xls)$/i);
    const ext = extMatch ? extMatch[0] : '.pdf';
    const fileName = `${title.replace(/\s+/g, '_')}${ext}`;
    window.location.href = `/api/download?url=${encodeURIComponent(url)}&name=${encodeURIComponent(fileName)}`;
  };

  return (
    <div className={styles.mainContainer}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>Official Portal</span>
            <h1>Procurement & <span>Tenders</span></h1>
            <p>Access active and archived tender documents with our integrated secure viewer.</p>
          </div>
        </div>
      </section>

      {/* SECTION 1: CURRENT TENDERS */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.sectionHeadingBox}>
            <h2 className={styles.sectionTitle}>Tender Started from <span>7 November 2025</span></h2>
          </div>

          {/* CONTACT INFO BOX */}
          <div className={styles.contactInfoBox}>
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className={styles.contactDate}>
                  <FaCalendarDays />
                  <span>Tender Started from:<br/><b>7 November 2025</b></span>
                </div>
              </div>
              <div className="col-lg-9">
                <div className={styles.contactDetails}>
                  <div className={styles.contactItem}>
                    <FaEnvelope /> <span>heritagemsrc@gmail.com</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaPhone /> <span>Contact no. – 0542-7111071</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaUserTie /> <span>Contact Person – SK Tripathi 8003121202 & 7014727207</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {isMobile && (
            <div className={styles.mobileSelectorWrapper}>
              <div className={styles.mobileChipsGrid}>
                {TENDERS_SECTION_1.map((tender) => (
                  <button 
                    key={tender.id}
                    className={`${styles.mobileChip} ${selectedTenderS1.id === tender.id ? styles.active : ''}`}
                    onClick={() => handleTenderSelect(tender, 1)}
                  >
                    {tender.shortTitle}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="row g-4">
            {!isMobile && (
              <div className="col-lg-4">
                <div className={styles.sidebarList}>
                  {TENDERS_SECTION_1.map((tender) => (
                    <div 
                      key={tender.id} 
                      className={`${styles.tenderCard} ${selectedTenderS1.id === tender.id ? styles.active : ''}`}
                      onClick={() => handleTenderSelect(tender, 1)}
                    >
                      <div className={styles.cardIcon}><FaFileLines /></div>
                      <div className={styles.cardInfo}>
                        <h3>{tender.title}</h3>
                        <div className={styles.cardMeta}><span>{tender.ref}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={isMobile ? "col-12" : "col-lg-8"} id="tender-viewer-s1">
              <TenderViewer tender={selectedTenderS1} onDownload={handleDownload} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ARCHIVED / PREVIOUS TENDERS */}
      <section className={`${styles.contentSection} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeadingBox}>
            <h2 className={styles.sectionTitle}>Tender Started from <span>16 May 2025</span></h2>
          </div>

          {/* CONTACT INFO BOX */}
          <div className={styles.contactInfoBox}>
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className={styles.contactDate}>
                  <FaCalendarDays />
                  <span>Tender Started from:<br/><b>16 May 2025</b></span>
                </div>
              </div>
              <div className="col-lg-9">
                <div className={styles.contactDetails}>
                  <div className={styles.contactItem}>
                    <FaEnvelope /> <span>heritagemsrc@gmail.com</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaPhone /> <span>Contact no. – 0542-7111071</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaUserTie /> <span>Contact Person – SK Tripathi 8003121202 & 7014727207</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {isMobile && (
            <div className={styles.mobileSelectorWrapper}>
              <div className={styles.mobileChipsGrid}>
                {TENDERS_SECTION_2.map((tender) => (
                  <button 
                    key={tender.id}
                    className={`${styles.mobileChip} ${selectedTenderS2.id === tender.id ? styles.active : ''}`}
                    onClick={() => handleTenderSelect(tender, 2)}
                  >
                    {tender.shortTitle}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="row g-4">
            {!isMobile && (
              <div className="col-lg-4">
                <div className={styles.sidebarList}>
                  {TENDERS_SECTION_2.map((tender) => (
                    <div 
                      key={tender.id} 
                      className={`${styles.tenderCard} ${selectedTenderS2.id === tender.id ? styles.active : ''}`}
                      onClick={() => handleTenderSelect(tender, 2)}
                    >
                      <div className={styles.cardIcon}><FaFileLines /></div>
                      <div className={styles.cardInfo}>
                        <h3>{tender.title}</h3>
                        <div className={styles.cardMeta}><span>{tender.ref}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={isMobile ? "col-12" : "col-lg-8"} id="tender-viewer-s2">
              <TenderViewer tender={selectedTenderS2} onDownload={handleDownload} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DRUG AND MEDICINES */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.sectionHeadingBox}>
            <h2 className={styles.sectionTitle}>Tender Started from <span>03 April 2025</span></h2>
          </div>

          {/* CONTACT INFO BOX */}
          <div className={styles.contactInfoBox}>
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className={styles.contactDate}>
                  <FaCalendarDays />
                  <span>Tender Started from:<br/><b>03 April 2025</b></span>
                </div>
              </div>
              <div className="col-lg-9">
                <div className={styles.contactDetails}>
                  <div className={styles.contactItem} style={{width: '100%', marginBottom: '10px'}}>
                    <FaFileLines /> <b>Tender for one year QTY May be extended.</b>
                  </div>
                  <div className={styles.contactItem}>
                    <FaEnvelope /> <span>akashrai@heritageims.com</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaUserTie /> <span>Contact Person – Harinder Singh (7570002495), Anoop Srivastava (9452640356)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {isMobile && (
            <div className={styles.mobileSelectorWrapper}>
              <div className={styles.mobileChipsGrid}>
                {TENDERS_SECTION_3.map((tender) => (
                  <button 
                    key={tender.id}
                    className={`${styles.mobileChip} ${selectedTenderS3.id === tender.id ? styles.active : ''}`}
                    onClick={() => handleTenderSelect(tender, 3)}
                  >
                    {tender.shortTitle}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="row g-4">
            {!isMobile && (
              <div className="col-lg-4">
                <div className={styles.sidebarList}>
                  {TENDERS_SECTION_3.map((tender) => (
                    <div 
                      key={tender.id} 
                      className={`${styles.tenderCard} ${selectedTenderS3.id === tender.id ? styles.active : ''}`}
                      onClick={() => handleTenderSelect(tender, 3)}
                    >
                      <div className={styles.cardIcon}><FaFileLines /></div>
                      <div className={styles.cardInfo}>
                        <h3>{tender.title}</h3>
                        <div className={styles.cardMeta}><span>{tender.ref}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={isMobile ? "col-12" : "col-lg-8"} id="tender-viewer-s3">
              <TenderViewer tender={selectedTenderS3} onDownload={handleDownload} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ONE YEAR QTY MAY BE EXTENDED */}
      <section className={`${styles.contentSection} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeadingBox}>
            <h2 className={styles.sectionTitle}>Tender Started from <span>22 March 2025</span></h2>
          </div>

          {/* CONTACT INFO BOX */}
          <div className={styles.contactInfoBox}>
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className={styles.contactDate}>
                  <FaCalendarDays />
                  <span>Tender Started from:<br/><b>22 March 2025</b></span>
                </div>
              </div>
              <div className="col-lg-9">
                <div className={styles.contactDetails}>
                  <div className={styles.contactItem}>
                    <FaEnvelope /> <span>heritagemsrc@gmail.com</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaPhone /> <span>Contact no. – 0542-7111071</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaUserTie /> <span>Contact Person – SK Tripathi 8003121202 & 7014727207</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {isMobile && (
            <div className={styles.mobileSelectorWrapper}>
              <div className={styles.mobileChipsGrid}>
                {TENDERS_SECTION_4.map((tender) => (
                  <button 
                    key={tender.id}
                    className={`${styles.mobileChip} ${selectedTenderS4.id === tender.id ? styles.active : ''}`}
                    onClick={() => handleTenderSelect(tender, 4)}
                  >
                    {tender.shortTitle}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="row g-4">
            {!isMobile && (
              <div className="col-lg-4">
                <div className={styles.sidebarList}>
                  {TENDERS_SECTION_4.map((tender) => (
                    <div 
                      key={tender.id} 
                      className={`${styles.tenderCard} ${selectedTenderS4.id === tender.id ? styles.active : ''}`}
                      onClick={() => handleTenderSelect(tender, 4)}
                    >
                      <div className={styles.cardIcon}><FaFileLines /></div>
                      <div className={styles.cardInfo}>
                        <h3>{tender.title}</h3>
                        <div className={styles.cardMeta}><span>{tender.ref}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={isMobile ? "col-12" : "col-lg-8"} id="tender-viewer-s4">
              <TenderViewer tender={selectedTenderS4} onDownload={handleDownload} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: JAN 2025 TENDERS */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.sectionHeadingBox}>
            <h2 className={styles.sectionTitle}>Tender Started from <span>23 Jan 2025</span></h2>
          </div>

          {/* CONTACT INFO BOX */}
          <div className={styles.contactInfoBox}>
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className={styles.contactDate}>
                  <FaCalendarDays />
                  <span>Tender Started from:<br/><b>23 Jan 2025</b></span>
                </div>
              </div>
              <div className="col-lg-9">
                <div className={styles.contactDetails}>
                  <div className={styles.contactItem}>
                    <FaEnvelope /> <span>ms.hims@heritageims.com</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaPhone /> <span>Contact no. – Medical Superintendent – 0542-7111071</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaUserTie /> <span>Contact Person – 8003121202 & 7014727207</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {isMobile && (
            <div className={styles.mobileSelectorWrapper}>
              <div className={styles.mobileChipsGrid}>
                {TENDERS_SECTION_5.map((tender) => (
                  <button 
                    key={tender.id}
                    className={`${styles.mobileChip} ${selectedTenderS5.id === tender.id ? styles.active : ''}`}
                    onClick={() => handleTenderSelect(tender, 5)}
                  >
                    {tender.shortTitle}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="row g-4">
            {!isMobile && (
              <div className="col-lg-4">
                <div className={styles.sidebarList}>
                  {TENDERS_SECTION_5.map((tender) => (
                    <div 
                      key={tender.id} 
                      className={`${styles.tenderCard} ${selectedTenderS5.id === tender.id ? styles.active : ''}`}
                      onClick={() => handleTenderSelect(tender, 5)}
                    >
                      <div className={styles.cardIcon}><FaFileLines /></div>
                      <div className={styles.cardInfo}>
                        <h3>{tender.title}</h3>
                        <div className={styles.cardMeta}><span>{tender.ref}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={isMobile ? "col-12" : "col-lg-8"} id="tender-viewer-s5">
              <TenderViewer tender={selectedTenderS5} onDownload={handleDownload} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: DEC 2024 TENDERS */}
      <section className={`${styles.contentSection} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeadingBox}>
            <h2 className={styles.sectionTitle}>Tender Started from <span>18 Dec 2024 - 31 Jan 2024</span></h2>
          </div>

          {/* CONTACT INFO BOX */}
          <div className={styles.contactInfoBox}>
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className={styles.contactDate}>
                  <FaCalendarDays />
                  <span>Tender Started from:<br/><b>18 Dec 2024 - 31 Jan 2024</b></span>
                </div>
              </div>
              <div className="col-lg-9">
                <div className={styles.contactDetails}>
                  <div className={styles.contactItem}>
                    <FaEnvelope /> <span>heritageims1@gmail.com</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaUserTie /> <span>Project Head</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaPhone /> <span>Contact Person – 9140652771, 9602907273</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {isMobile && (
            <div className={styles.mobileSelectorWrapper}>
              <div className={styles.mobileChipsGrid}>
                {TENDERS_SECTION_6.map((tender) => (
                  <button 
                    key={tender.id}
                    className={`${styles.mobileChip} ${selectedTenderS6.id === tender.id ? styles.active : ''}`}
                    onClick={() => handleTenderSelect(tender, 6)}
                  >
                    {tender.shortTitle}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="row g-4">
            {!isMobile && (
              <div className="col-lg-4">
                <div className={styles.sidebarList}>
                  {TENDERS_SECTION_6.map((tender) => (
                    <div 
                      key={tender.id} 
                      className={`${styles.tenderCard} ${selectedTenderS6.id === tender.id ? styles.active : ''}`}
                      onClick={() => handleTenderSelect(tender, 6)}
                    >
                      <div className={styles.cardIcon}><FaFileLines /></div>
                      <div className={styles.cardInfo}>
                        <h3>{tender.title}</h3>
                        <div className={styles.cardMeta}><span>{tender.ref}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={isMobile ? "col-12" : "col-lg-8"} id="tender-viewer-s6">
              <TenderViewer tender={selectedTenderS6} onDownload={handleDownload} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: OCT 2024 TENDERS */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.sectionHeadingBox}>
            <h2 className={styles.sectionTitle}>Tender Started from <span>1 Oct 2024</span></h2>
          </div>

          {/* CONTACT INFO BOX */}
          <div className={styles.contactInfoBox}>
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className={styles.contactDate}>
                  <FaCalendarDays />
                  <span>Tender Started from:<br/><b>1 Oct 2024</b></span>
                </div>
              </div>
              <div className="col-lg-9">
                <div className={styles.contactDetails}>
                  <div className={styles.contactItem}>
                    <FaEnvelope /> <span>ms.hims@heritageims.com</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaPhone /> <span>Contact Us – Medical Superintendent – 8502007509</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaUserTie /> <span>Contact Person – 8003121202, 7014727207</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {isMobile && (
            <div className={styles.mobileSelectorWrapper}>
              <div className={styles.mobileChipsGrid}>
                {TENDERS_SECTION_7.map((tender) => (
                  <button 
                    key={tender.id}
                    className={`${styles.mobileChip} ${selectedTenderS7.id === tender.id ? styles.active : ''}`}
                    onClick={() => handleTenderSelect(tender, 7)}
                  >
                    {tender.shortTitle}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="row g-4">
            {!isMobile && (
              <div className="col-lg-4">
                <div className={styles.sidebarList}>
                  {TENDERS_SECTION_7.map((tender) => (
                    <div 
                      key={tender.id} 
                      className={`${styles.tenderCard} ${selectedTenderS7.id === tender.id ? styles.active : ''}`}
                      onClick={() => handleTenderSelect(tender, 7)}
                    >
                      <div className={styles.cardIcon}><FaFileLines /></div>
                      <div className={styles.cardInfo}>
                        <h3>{tender.title}</h3>
                        <div className={styles.cardMeta}><span>{tender.ref}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={isMobile ? "col-12" : "col-lg-8"} id="tender-viewer-s7">
              <TenderViewer tender={selectedTenderS7} onDownload={handleDownload} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: SEPT 2024 TENDERS */}
      <section className={`${styles.contentSection} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeadingBox}>
            <h2 className={styles.sectionTitle}>Tender Started from <span>26 Sept 2024</span></h2>
          </div>

          {/* CONTACT INFO BOX */}
          <div className={styles.contactInfoBox}>
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className={styles.contactDate}>
                  <FaCalendarDays />
                  <span>Tender Started from:<br/><b>26 Sept 2024</b></span>
                </div>
              </div>
              <div className="col-lg-9">
                <div className={styles.contactDetails}>
                  <div className={styles.contactItem}>
                    <FaEnvelope /> <span>ms.hims@heritageims.com</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaPhone /> <span>Contact Us – Medical Superintendent – 8502007509</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaUserTie /> <span>Contact Person – 8003121202, 7014727207</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {isMobile && (
            <div className={styles.mobileSelectorWrapper}>
              <div className={styles.mobileChipsGrid}>
                {TENDERS_SECTION_8.map((tender) => (
                  <button 
                    key={tender.id}
                    className={`${styles.mobileChip} ${selectedTenderS8.id === tender.id ? styles.active : ''}`}
                    onClick={() => handleTenderSelect(tender, 8)}
                  >
                    {tender.shortTitle}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="row g-4">
            {!isMobile && (
              <div className="col-lg-4">
                <div className={styles.sidebarList}>
                  {TENDERS_SECTION_8.map((tender) => (
                    <div 
                      key={tender.id} 
                      className={`${styles.tenderCard} ${selectedTenderS8.id === tender.id ? styles.active : ''}`}
                      onClick={() => handleTenderSelect(tender, 8)}
                    >
                      <div className={styles.cardIcon}><FaFileLines /></div>
                      <div className={styles.cardInfo}>
                        <h3>{tender.title}</h3>
                        <div className={styles.cardMeta}><span>{tender.ref}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={isMobile ? "col-12" : "col-lg-8"} id="tender-viewer-s8">
              <TenderViewer tender={selectedTenderS8} onDownload={handleDownload} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: 23 SEPT 2024 TENDERS */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.sectionHeadingBox}>
            <h2 className={styles.sectionTitle}>Tender Started from <span>23 Sept 2024</span></h2>
          </div>

          {/* CONTACT INFO BOX */}
          <div className={styles.contactInfoBox}>
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className={styles.contactDate}>
                  <FaCalendarDays />
                  <span>Tender Started from:<br/><b>23 Sept 2024</b></span>
                </div>
              </div>
              <div className="col-lg-9">
                <div className={styles.contactDetails}>
                  <div className={styles.contactItem}>
                    <FaEnvelope /> <span>heritageimsrc@gmail.com</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaPhone /> <span>Contact no. – Medical Superintendent – 8502007509</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaUserTie /> <span>Biomedical Eng – 7652034446</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {isMobile && (
            <div className={styles.mobileSelectorWrapper}>
              <div className={styles.mobileChipsGrid}>
                {TENDERS_SECTION_9.map((tender) => (
                  <button 
                    key={tender.id}
                    className={`${styles.mobileChip} ${selectedTenderS9.id === tender.id ? styles.active : ''}`}
                    onClick={() => handleTenderSelect(tender, 9)}
                  >
                    {tender.shortTitle}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="row g-4">
            {!isMobile && (
              <div className="col-lg-4">
                <div className={styles.sidebarList}>
                  {TENDERS_SECTION_9.map((tender) => (
                    <div 
                      key={tender.id} 
                      className={`${styles.tenderCard} ${selectedTenderS9.id === tender.id ? styles.active : ''}`}
                      onClick={() => handleTenderSelect(tender, 9)}
                    >
                      <div className={styles.cardIcon}><FaFileLines /></div>
                      <div className={styles.cardInfo}>
                        <h3>{tender.title}</h3>
                        <div className={styles.cardMeta}><span>{tender.ref}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={isMobile ? "col-12" : "col-lg-8"} id="tender-viewer-s9">
              <TenderViewer tender={selectedTenderS9} onDownload={handleDownload} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: 13 SEPT 2024 TENDERS */}
      <section className={`${styles.contentSection} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeadingBox}>
            <h2 className={styles.sectionTitle}>Tender Started from <span>13 Sept 2024</span></h2>
          </div>

          {/* CONTACT INFO BOX */}
          <div className={styles.contactInfoBox}>
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className={styles.contactDate}>
                  <FaCalendarDays />
                  <span>Tender Started from:<br/><b>13 Sept 2024</b></span>
                </div>
              </div>
              <div className="col-lg-9">
                <div className={styles.contactDetails}>
                  <div className={styles.contactItem}>
                    <FaEnvelope /> <span>heritageimsrc@gmail.com</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaPhone /> <span>Contact no. – Medical Superintendent – 8502007509</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaUserTie /> <span>Biomedical Eng – 7652034446</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {isMobile && (
            <div className={styles.mobileSelectorWrapper}>
              <div className={styles.mobileChipsGrid}>
                {TENDERS_SECTION_10.map((tender) => (
                  <button 
                    key={tender.id}
                    className={`${styles.mobileChip} ${selectedTenderS10.id === tender.id ? styles.active : ''}`}
                    onClick={() => handleTenderSelect(tender, 10)}
                  >
                    {tender.shortTitle}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="row g-4">
            {!isMobile && (
              <div className="col-lg-4">
                <div className={styles.sidebarList}>
                  {TENDERS_SECTION_10.map((tender) => (
                    <div 
                      key={tender.id} 
                      className={`${styles.tenderCard} ${selectedTenderS10.id === tender.id ? styles.active : ''}`}
                      onClick={() => handleTenderSelect(tender, 10)}
                    >
                      <div className={styles.cardIcon}><FaFileLines /></div>
                      <div className={styles.cardInfo}>
                        <h3>{tender.title}</h3>
                        <div className={styles.cardMeta}><span>{tender.ref}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={isMobile ? "col-12" : "col-lg-8"} id="tender-viewer-s10">
              <TenderViewer tender={selectedTenderS10} onDownload={handleDownload} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: 23 MAY 2024 TENDERS */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.sectionHeadingBox}>
            <h2 className={styles.sectionTitle}>Tender Started from <span>23 May 2024</span></h2>
          </div>

          {/* CONTACT INFO BOX */}
          <div className={styles.contactInfoBox}>
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className={styles.contactDate}>
                  <FaCalendarDays />
                  <span>Tender Started from:<br/><b>23 May 2024</b></span>
                </div>
              </div>
              <div className="col-lg-9">
                <div className={styles.contactDetails}>
                  <div className={styles.contactItem}>
                    <FaEnvelope /> <span>heritageimsrc@gmail.com</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaPhone /> <span>Contact no. – Medical Superintendent – 8502007509</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaUserTie /> <span>Biomedical Eng – 7652034446</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {isMobile && (
            <div className={styles.mobileSelectorWrapper}>
              <div className={styles.mobileChipsGrid}>
                {TENDERS_SECTION_11.map((tender) => (
                  <button 
                    key={tender.id}
                    className={`${styles.mobileChip} ${selectedTenderS11.id === tender.id ? styles.active : ''}`}
                    onClick={() => handleTenderSelect(tender, 11)}
                  >
                    {tender.shortTitle}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="row g-4">
            {!isMobile && (
              <div className="col-lg-4">
                <div className={styles.sidebarList}>
                  {TENDERS_SECTION_11.map((tender) => (
                    <div 
                      key={tender.id} 
                      className={`${styles.tenderCard} ${selectedTenderS11.id === tender.id ? styles.active : ''}`}
                      onClick={() => handleTenderSelect(tender, 11)}
                    >
                      <div className={styles.cardIcon}><FaFileLines /></div>
                      <div className={styles.cardInfo}>
                        <h3>{tender.title}</h3>
                        <div className={styles.cardMeta}><span>{tender.ref}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={isMobile ? "col-12" : "col-lg-8"} id="tender-viewer-s11">
              <TenderViewer tender={selectedTenderS11} onDownload={handleDownload} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: 8 MAY 2024 TENDERS */}
      <section className={`${styles.contentSection} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeadingBox}>
            <h2 className={styles.sectionTitle}>Tender Started from <span>8 May 2024</span></h2>
          </div>

          {/* CONTACT INFO BOX */}
          <div className={styles.contactInfoBox}>
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className={styles.contactDate}>
                  <FaCalendarDays />
                  <span>Tender Started from:<br/><b>8 May 2024</b></span>
                </div>
              </div>
              <div className="col-lg-9">
                <div className={styles.contactDetails}>
                  <div className={styles.contactItem}>
                    <FaEnvelope /> <span>heritageimsrc@gmail.com</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaPhone /> <span>Contact no. – Medical Superintendent – 8502007509</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaUserTie /> <span>Biomedical Eng – 7652034446</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {isMobile && (
            <div className={styles.mobileSelectorWrapper}>
              <div className={styles.mobileChipsGrid}>
                {TENDERS_SECTION_12.map((tender) => (
                  <button 
                    key={tender.id}
                    className={`${styles.mobileChip} ${selectedTenderS12.id === tender.id ? styles.active : ''}`}
                    onClick={() => handleTenderSelect(tender, 12)}
                  >
                    {tender.shortTitle}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="row g-4">
            {!isMobile && (
              <div className="col-lg-4">
                <div className={styles.sidebarList}>
                  {TENDERS_SECTION_12.map((tender) => (
                    <div 
                      key={tender.id} 
                      className={`${styles.tenderCard} ${selectedTenderS12.id === tender.id ? styles.active : ''}`}
                      onClick={() => handleTenderSelect(tender, 12)}
                    >
                      <div className={styles.cardIcon}><FaFileLines /></div>
                      <div className={styles.cardInfo}>
                        <h3>{tender.title}</h3>
                        <div className={styles.cardMeta}><span>{tender.ref}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={isMobile ? "col-12" : "col-lg-8"} id="tender-viewer-s12">
              <TenderViewer tender={selectedTenderS12} onDownload={handleDownload} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: 12 APRIL 2024 TENDERS */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.sectionHeadingBox}>
            <h2 className={styles.sectionTitle}>Tender Started from <span>12 April 2024</span></h2>
          </div>

          {/* CONTACT INFO BOX */}
          <div className={styles.contactInfoBox}>
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className={styles.contactDate}>
                  <FaCalendarDays />
                  <span>Tender Started from:<br/><b>12 April 2024</b></span>
                </div>
              </div>
              <div className="col-lg-9">
                <div className={styles.contactDetails}>
                  <div className={styles.contactItem}>
                    <FaEnvelope /> <span>heritageimsrc@gmail.com</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaPhone /> <span>Contact no. – Medical Superintendent – 8502007509</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaUserTie /> <span>Biomedical Eng – 7652034446</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {isMobile && (
            <div className={styles.mobileSelectorWrapper}>
              <div className={styles.mobileChipsGrid}>
                {TENDERS_SECTION_13.map((tender) => (
                  <button 
                    key={tender.id}
                    className={`${styles.mobileChip} ${selectedTenderS13.id === tender.id ? styles.active : ''}`}
                    onClick={() => handleTenderSelect(tender, 13)}
                  >
                    {tender.shortTitle}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="row g-4">
            {!isMobile && (
              <div className="col-lg-4">
                <div className={styles.sidebarList}>
                  {TENDERS_SECTION_13.map((tender) => (
                    <div 
                      key={tender.id} 
                      className={`${styles.tenderCard} ${selectedTenderS13.id === tender.id ? styles.active : ''}`}
                      onClick={() => handleTenderSelect(tender, 13)}
                    >
                      <div className={styles.cardIcon}><FaFileLines /></div>
                      <div className={styles.cardInfo}>
                        <h3>{tender.title}</h3>
                        <div className={styles.cardMeta}><span>{tender.ref}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={isMobile ? "col-12" : "col-lg-8"} id="tender-viewer-s13">
              <TenderViewer tender={selectedTenderS13} onDownload={handleDownload} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14: 23 MAY 2024 TENDERS */}
      <section className={`${styles.contentSection} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeadingBox}>
            <h2 className={styles.sectionTitle}>Tender Started from <span>23 May 2024</span></h2>
          </div>

          {/* CONTACT INFO BOX */}
          <div className={styles.contactInfoBox}>
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className={styles.contactDate}>
                  <FaCalendarDays />
                  <span>Tender Started from:<br/><b>23 May 2024</b></span>
                </div>
              </div>
              <div className="col-lg-9">
                <div className={styles.contactDetails}>
                  <div className={styles.contactItem}>
                    <FaEnvelope /> <span>heritageimsrc@gmail.com</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaPhone /> <span>Contact no. – Medical Superintendent – 8502007509</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaUserTie /> <span>Biomedical Eng – 7652034446</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {isMobile && (
            <div className={styles.mobileSelectorWrapper}>
              <div className={styles.mobileChipsGrid}>
                {TENDERS_SECTION_14.map((tender) => (
                  <button 
                    key={tender.id}
                    className={`${styles.mobileChip} ${selectedTenderS14.id === tender.id ? styles.active : ''}`}
                    onClick={() => handleTenderSelect(tender, 14)}
                  >
                    {tender.shortTitle}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="row g-4">
            {!isMobile && (
              <div className="col-lg-4">
                <div className={styles.sidebarList}>
                  {TENDERS_SECTION_14.map((tender) => (
                    <div 
                      key={tender.id} 
                      className={`${styles.tenderCard} ${selectedTenderS14.id === tender.id ? styles.active : ''}`}
                      onClick={() => handleTenderSelect(tender, 14)}
                    >
                      <div className={styles.cardIcon}><FaFileLines /></div>
                      <div className={styles.cardInfo}>
                        <h3>{tender.title}</h3>
                        <div className={styles.cardMeta}><span>{tender.ref}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={isMobile ? "col-12" : "col-lg-8"} id="tender-viewer-s14">
              <TenderViewer tender={selectedTenderS14} onDownload={handleDownload} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function TenderViewer({ tender, onDownload }) {
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state when tender changes
  useEffect(() => {
    setIsLoading(true);
  }, [tender.id]);

  return (
    <div className={styles.viewerContainer}>
      <div className={styles.viewerHeader}>
        <div className={styles.viewerTitleInfo}>
          <h2>{tender.title}</h2>
          <div className={styles.viewerMeta}>
            <span><b>REF:</b> {tender.ref}</span>
            <span><b>Date:</b> {tender.date}</span>
          </div>
        </div>
        <div className={styles.viewerActions}>
          <a href={tender.url.match(/\.(docx?|xlsx?|xls)$/i) ? tender.viewerUrl.replace('&embedded=true', '') : tender.url} target="_blank" rel="noopener noreferrer" className={`${styles.actionBtn} ${styles.viewBtn}`}><FaEye /> View</a>
          <button onClick={(e) => onDownload(e, tender.url, tender.title)} className={`${styles.actionBtn} ${styles.downloadBtn}`}><FaDownload /> Download</button>
        </div>
      </div>

      <div className={styles.dynamicCaptions}>
        <h2 className={styles.mainCaption}>{tender.caption}</h2>
        <div className={styles.subCaptionGroup}>
          <h3 className={styles.subCaption}>{tender.subCaption}</h3>
          <div className={styles.accentLine}></div>
        </div>
      </div>

      <div className={styles.pdfWrapper}>
        {isLoading && (
          <div className={styles.pdfLoader}>
            <div className="spinner-border text-danger" role="status" style={{width: '3rem', height: '3rem', marginBottom: '15px'}}></div>
            <div>Loading Secure Document Viewer...</div>
            <div style={{fontSize: '0.8rem', marginTop: '10px', opacity: 0.7}}>If it takes too long, click &apos;View&apos; or &apos;Download&apos; above.</div>
          </div>
        )}
        <iframe 
          src={tender.viewerUrl} 
          className={styles.pdfIframe} 
          title={tender.title} 
          key={tender.id}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease' }}
        />
      </div>
      
      <div className={styles.viewerFooter}>
        <FaMagnifyingGlassPlus />
        <span>Use viewer controls to zoom or print.</span>
      </div>
    </div>
  );
}
