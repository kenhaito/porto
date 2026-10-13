// ====== EDIT HERE ======
export const LINKS = {
  email: 'safitriimp@gmail.com',
  linkedin: 'https://www.linkedin.com/in/safitriimp',
  github: 'https://github.com/kenhaito',     // fill in when ready; empty = hidden
}

export const HERO = {
  name: 'Safitri Mutiara Putri',
  intro:
    "Hi, I'm Fitri, an Informatics Engineering graduate from the University of Lampung with a GPA of 3.84/4.00. I enjoy understanding user needs, designing intuitive interfaces, building web and mobile apps, and making sure software works as expected.",
  more:
    'Through academic projects, an industry internship, and collaborative programs, I have worked on frontend development, UI/UX design, software testing, and translating requirements into functional features.'
}

export const STATS = [
  { k: 'GPA', v: '3.84 / 4.00' },
  { k: 'Projects', v: '5 projects' },
  { k: 'Location', v: 'Bandar Lampung' },
]

// type: 'dev' = no link (not hosted) · 'ui' = Figma link
// Each project has case-study `sections`; every section is made of blocks: {p}, {ul}, {users}, {results}
export const PROJECTS = [
  {
    id: 'simbek', type: 'dev', title: 'SI MBEK', sub: 'Livestock Production & Feed Warehouse Management',
    role: 'Frontend Developer · Undergraduate Thesis', icon: '🐐', 
    tech: ['Laravel Blade', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    images: ['/img/simbek-1.png', '/img/simbek-2.png', '/img/simbek-3.png'],
    note: 'Undergraduate thesis project, not publicly hosted.',
    sections: [
      { h: 'Overview', blocks: [
        { p: 'SI MBEK is a web-based information system designed to support livestock-related operations. My thesis focused on developing the frontend for its production management and feed warehouse modules, with a case study at CV Raman Farm.' },
        { p: 'The project addressed operational activities that previously relied on manual records: raw material purchasing, inventory tracking, feed production, and sales recording.' },
        { users: [['Admin', 'Manages operational data, purchasing, inventory, production, and sales.'], ['Owner', 'Reviews operational information and approves purchase orders.'], ['Buyer', 'Accesses the buyer-facing features available in the system.']] },
      ] },
      { h: 'My Role', blocks: [
        { p: 'I worked with a teammate responsible for backend development. My work focused on frontend implementation, translating operational requirements into interfaces, and testing system functionality.' },
        { ul: ['Developed interfaces for raw material purchasing, inventory management, feed production, and feed and medicine sales.', 'Implemented role-based interfaces for Admin, Owner, and Buyer.', 'Collaborated on connecting frontend forms and views with backend functionality.', 'Conducted system testing and user acceptance testing to evaluate whether features met operational needs.'] },
      ] },
      { h: 'Analysis', blocks: [
        { p: 'The system needed to support several connected business processes:' },
        { ul: ['Recording raw material purchases and supplier information.', 'Monitoring raw material and finished feed inventory.', 'Managing feed formulas and production activities.', 'Recording sales of feed and medicine.', 'Supporting purchase order approval by the Owner.', "Providing relevant information based on each user's role."] },
        { p: 'Understanding these relationships helped me think beyond individual pages, to how information moves between purchasing, inventory, production, and sales.' },
      ] },
      { h: 'Build & Test', blocks: [
        { p: "I built the interfaces with Laravel Blade and Tailwind CSS, including forms, tables, and operational views, and worked with the backend developer to integrate them with the system's functionality." },
        { p: 'Testing used Black-Box Testing and User Acceptance Testing (UAT), and the System Usability Scale (SUS) evaluated perceived usability. Final results:' },
        { results: [['Black-Box', '100%', 'tested functionality passed'], ['UAT', '86.4%', 'user acceptance'], ['SUS', '84', 'usability score']] },
      ] },
      { h: 'Features', blocks: [
        { ul: ['Role-based interfaces for Admin, Owner, and Buyer.', 'Raw material purchasing and inventory management.', 'Feed formula and production management.', 'Feed and medicine sales.', 'Operational summaries and inventory information.'] },
      ] },
      { h: 'Learnings', blocks: [
        { p: 'This project helped me understand how business processes shape system requirements and interface design. I gained experience collaborating across frontend and backend, testing functional requirements, and evaluating a system based on user feedback.' },
      ] },
    ],
  },
  {
    id: 'basis', type: 'dev', title: 'BASIS', sub: 'Internal Asset Loan Management',
    role: 'Frontend Developer Intern · PT Semen Baturaja', icon: '🏭', 
    tech: ['React.js', 'Tailwind CSS', 'Vite', 'Figma'],
    images: ['/img/basis-1.png', '/img/basis-2.png', '/img/basis-3.png'],
    figma: 'https://www.figma.com/design/9AwEdQGjopMBQJqx60r3Pi/design-asset-tracker?node-id=1-10091&t=g8Wl5cEiU8UisOT3-1',
    note: 'Internship project, not publicly hosted.',
    sections: [
      { h: 'Overview', blocks: [
        { p: 'BASIS is an internal web application project built during my internship at PT Semen Baturaja. It supports asset loan management through interfaces designed for different user roles, and gave me experience turning requirements and interface designs into frontend features in an organizational setting.' },
        { users: [['Admin', 'Manages asset-related information and administrative activities.'], ['Leader', 'Accesses features relevant to supervisory responsibilities.'], ['Employee', 'Uses the employee-facing asset loan features.']] },
      ] },
      { h: 'My Role', blocks: [
        { ul: ['Developed frontend interfaces for the internal asset loan management application.', 'Implemented interfaces for three user roles: Admin, Leader, and Employee.', 'Worked on dashboard, reporting, notification, and email reminder features.', 'Collaborated with the team to translate requirements and design references into application interfaces.'] },
      ] },
      { h: 'Design & Build', blocks: [
        { p: "The application needed interfaces that reflected different responsibilities across roles, so I organized navigation, information, and available actions around each role's needs. I worked from interface designs and requirements to build screens that presented asset information clearly and supported the intended workflows." },
        { p: 'I used React.js and Tailwind CSS for the frontend, with Vite in the development setup: layouts, structured information, and interface elements for the application features.' },
      ] },
      { h: 'Features', blocks: [
        { ul: ['Role-based interfaces for Admin, Leader, and Employee.', 'Dashboard and reporting interfaces.', 'Asset-related data presentation.', 'Notification and email reminder features.'] },
      ] },
      { h: 'Learnings', blocks: [
        { p: 'This internship strengthened my understanding of frontend development in an organizational setting. I learned to weigh user roles, information hierarchy, and existing requirements when translating designs into working interfaces.' },
      ] },
    ],
  },
  {
    id: '1upfarm', type: 'dev', title: '1UpFarm', sub: 'Android Application',
    role: 'Mobile UI Developer · Infinite Learning MSIB Batch 7', icon: '📱', 
    tech: ['Kotlin', 'Jetpack Compose', 'Figma'],
    images: ['/img/1upfarm-1.png', '/img/1upfarm-2.png', '/img/1upfarm-3.png'],
    figma: 'https://www.figma.com/design/VVXg7JtvNn4yn6rdtqMVF1/Design-Figma---Massive?node-id=0-1&t=IkuA8J1LeIixvTnA-1',
    note: 'Collaborative learning project, not publicly hosted.',
    sections: [
      { h: 'Overview', blocks: [
        { p: 'A collaborative project from the Infinite Learning Independent Study Program (MSIB Batch 7). It was a chance to turn interface designs into Android screens and work with a team through the whole development process.' },
      ] },
      { h: 'My Role', blocks: [
        { ul: ['Translated Figma designs into Android interfaces using Kotlin and Jetpack Compose.', 'Implemented onboarding and authentication screens: login, registration, and password recovery.', 'Prepared usability testing scenarios and questionnaires to collect feedback.', 'Collaborated with team members during development.'] },
      ] },
      { h: 'Design to Code', blocks: [
        { p: 'My work involved interpreting the supplied designs, implementing interface components in Jetpack Compose, and making sure the screens followed the intended layouts and interactions, with Figma as the design reference.' },
      ] },
      { h: 'Screens & Usability', blocks: [
        { p: 'Key screens I implemented:' },
        { ul: ['Onboarding', 'Login', 'Registration', 'Password recovery'] },
        { p: 'I also prepared usability testing scenarios and questionnaires, which helped structure feedback collection and look at the app from the user\u2019s perspective.' },
      ] },
      { h: 'Learnings', blocks: [
        { p: 'This project strengthened my ability to translate visual designs into mobile interfaces and introduced me to usability evaluation as part of development.' },
      ] },
    ],
  },
  {
    id: 'qureo', type: 'ui', title: 'Qureo', sub: "Gamified Al-Qur'an Learning Concept",
    role: 'UI/UX Design Team Member · MTQMN 2025', icon: '📖',
    tech: ['Figma'],
    images: ['/img/qureo-1.png', '/img/qureo-2.png', '/img/qureo-3.png'],
    figma: 'https://www.figma.com/design/VygS5tlEaj6WjsapdzyWbb/Desain-Aplikasi-Alquran?node-id=0-1&t=ViaDQ8GvtgevXxC6-1',
    sections: [
      { h: 'Overview', blocks: [
        { p: 'Qureo is an application concept for Al-Qur\u2019an learning, developed as a team project for an application design competition at MTQMN 2025. It explores how digital interfaces and gamification can make Islamic learning more engaging and approachable.' },
        { p: 'A design concept and prototype, not a deployed application.' },
      ] },
      { h: 'My Role', blocks: [
        { ul: ['Collaborated with a teammate to develop the application concept.', 'Contributed to the interface design and interactive prototype.', 'Explored ways to present learning activities through a digital interface.'] },
      ] },
      { h: 'Design Approach', blocks: [
        { p: 'The design focused on presenting learning content and interactions in a clear, approachable format, exploring how interface structure and visual presentation could support the intended learning experience.' },
        { p: 'Deliverables: selected application screens and an interactive Figma prototype.' },
      ] },
      { h: 'Learnings', blocks: [
        { p: 'Qureo gave me experience collaborating on a design concept and thinking about how interface decisions can support an educational purpose.' },
      ] },
    ],
  },
  {
    id: 'sijuko', type: 'ui', title: 'Si Juko', sub: 'Cooperative Management App Concept',
    role: 'UI/UX Designer · Individual Project', icon: '🤝', 
    tech: ['Figma'],
    images: ['/img/sijuko-1.png', '/img/sijuko-2.png', '/img/sijuko-3.png'],
    figma: 'https://www.figma.com/design/EGVQnQSwLcWd2wl7imlRnU/si-juko?node-id=0-1&t=vUyoGzYiTu7KhSKx-1',
    sections: [
      { h: 'Overview', blocks: [
        { p: 'Si Juko is an independent UI/UX design project for a cooperative management application. It explored how cooperative-related information and features could be organized into a consistent, easy-to-navigate interface.' },
        { p: 'A design project, not a deployed application.' },
      ] },
      { h: 'My Role', blocks: [
        { ul: ['Designed high-fidelity application interfaces.', 'Created an interactive prototype to demonstrate navigation and user interactions.', 'Organized interface elements to keep visual consistency across screens.'] },
      ] },
      { h: 'Design Approach', blocks: [
        { p: 'I developed the interface from the application concept and organized its screens around the intended user interactions, focusing on information hierarchy, consistent components, and clear navigation.' },
        { p: 'Deliverables: high-fidelity interface designs, an interactive prototype, and selected screens showing key application flows.' },
      ] },
      { h: 'Learnings', blocks: [
        { p: 'This project let me practice independent interface design and turn an application concept into a visual prototype that shows how the product could work.' },
      ] },
    ],
  },
]

export const APPROACH = [
  { icon: '🔍', t: 'Understand the Problem', d: 'Understanding user needs, workflows, feature goals, and what each role requires.' },
  { icon: '🧭', t: 'Design the Experience', d: 'Shaping user flows, interface layouts, and prototypes that fit those needs.' },
  { icon: '🛠️', t: 'Build the Solution', d: 'Turning designs and requirements into working web or mobile interfaces.' },
  { icon: '✅', t: 'Validate the Result', d: 'Testing functionality, comparing actual results to expectations, and gathering feedback where available.' },
]



export const HISTORY = [
  { when: 'Sep 2024 – Jul 2026', title: 'Computer Laboratory Assistant', where: 'University of Lampung',
    pts: ['Assisted practical sessions across six subjects: Software Engineering, Algorithms and Programming, Operating Systems, Data Structures, Information Systems Security, and Computer Networking.', 'Helped students understand technical concepts, complete programming exercises, and troubleshoot practical tasks.', 'Prepared learning materials and supported laboratory activities.'] },
  { when: 'Jan – Feb 2025', title: 'Frontend Developer Intern', where: 'PT Semen Baturaja',
    pts: ['Built interfaces for BASIS, an internal asset loan management app.', 'Worked with Admin, Leader, and Employee roles, each with different access and workflows.'] },
  { when: 'Sep – Dec 2024', title: 'Android Mobile Development (Independent Study)', where: 'Infinite Learning',
    pts: ['Developed Android interfaces using Kotlin and Jetpack Compose.',  'Collaborated with teammates in a structured, team-based development program.'] },
]

export const EDU = {
  degree: "Bachelor's Degree in Informatics Engineering", school: 'University of Lampung', years: '2022–2026', gpa: '3.84 / 4.00', TOEFEL: '497',
  certs: ['Programmer — BNSP, 2026', 'Python Programming Essentials — Cisco'],
}

export const ACHIEVEMENTS = [
  { icon: '🏆', t: '1st Best Graduate', d: 'Faculty of Engineering, University of Lampung' },
  { icon: '🥇', t: '1st Best Graduate', d: 'Informatics Engineering, University of Lampung' },
  { icon: '🎬', t: '3rd Place', d: 'Vlog Competition, Saintek Expo 2023' },
]
