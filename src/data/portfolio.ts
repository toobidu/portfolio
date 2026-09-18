export interface CompanyProject {
  name: string
  period?: string
  role?: string
  description?: string
  achievements: string[]
  technologies: string[]
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  remoteReady?: boolean
  description?: string
  projects?: CompanyProject[]
  highlights?: string[]
  tags: string[]
}

export interface ProjectItem {
  title: string
  subtitle?: string
  period?: string
  category: 'Production / In-House' | 'Personal / Architecture'
  companyContext?: string
  problem: string
  solution: string
  results: string[]
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export const personalInfo = {
  name: 'To Tien Dung',
  englishName: 'To Tien Dung',
  title: 'Fullstack Software Engineer',
  specialization: 'Backend Systems, IoT & Real-time Media',
  avatarUrl: '/me.jpg',
  email: 'dungto0300567@gmail.com',
  phone: '+84 348569975',
  github: 'https://github.com/toobidu',
  githubUsername: 'toobidu',
  linkedin: 'https://linkedin.com/in/toobidu',
  linkedinUsername: 'toobidu',
  location: 'Hanoi, Vietnam',
  resumePdf: '/To_Tien_Dung_Fullstack_Software_Engineering.pdf',
  summary:
    'Fullstack Developer with 2+ years of hands-on experience building backend-heavy, real-time and IoT-connected systems in Java Spring Boot and ReactJS. Direct experience with message-driven architectures (MQTT, RabbitMQ), real-time media streaming (WebSocket, WebRTC, HLS, FFmpeg), and hardware/device integration (Kotlin, NMEA). Proven track record scaling platforms to 5,000+ concurrent devices, eliminating performance bottlenecks via data-driven profiling, and delivering resilient systems from API design to Linux server deployment.',
  availability: {
    status: 'Open for Remote Roles',
    targetRegion: 'European & Global Distributed Teams',
    schedule: 'Mon–Fri 19:00–24:00+ ICT (UTC+7)',
    overlap: '12:00–17:00 CET / 13:00–18:00 CEST (plus full-day Sat–Sun)',
  },
  metrics: [
    {
      value: '5,000+',
      label: 'IoT Devices Scaled',
      detail: 'Sustained telemetry across 17 modules for Ministry of Public Safety with 0 downtime',
    },
    {
      value: '< 2s',
      label: 'End-to-End Latency',
      detail: 'Sub-2s GPS & bodycam telemetry from device to MapLibre UI via MQTT QoS 1',
    },
    {
      value: '2.5×',
      label: 'Query Latency Reduction',
      detail: 'Cut ThingsBoard query latency from 1,483ms to 601ms via key pruning',
    },
  ],
}

export const experiences: ExperienceItem[] = [
  {
    company: 'Thanh Binh - BCA Co., Ltd.',
    role: 'Fullstack Software Engineer',
    period: 'Sep 2025 – Present',
    location: 'Hanoi, Vietnam (Remote-ready)',
    remoteReady: true,
    description:
      'High-reliability IoT fleet monitoring, public safety systems, and automated access control solutions for government and enterprise clients.',
    projects: [
      {
        name: 'IoT Fleet & Telemetry Monitoring Platform (In-House Product)',
        period: 'Oct 2025 – Present',
        role: 'Core Backend & Real-Time Engineer',
        achievements: [
          "Directly developed end-to-end telemetry data pipeline processing GPS and IoT devices across 17 feature modules and 84 domain entities serving Vietnam's Ministry of Public Safety, maintaining <2s latency from MQTT broker to MapLibre UI.",
          'Designed and implemented multi-device priority failover resolver with two-phase priority swap and 5-minute relative staleness debounce, supporting multiple GNSS channels per entity with 100% backward compatibility across regression tests.',
          'Built geofence violation engine auto-detecting 4 violation types (OUT_ZONE, CUT_STRAP, LOW_BATTERY, NO_SIGNAL); auto-synced configs to ThingsBoard Attributes with zero redundant network overhead.',
          'Benchmarked and reduced ThingsBoard telemetry query latency by 2.5× (1,483ms → 601ms) by identifying internal query count bottlenecks rather than payload size.',
          'Optimized camera wall for 25 simultaneous video streams: implemented 150ms batch loading (4 cameras/batch), volume throttle at 120ms to prevent 1,000+ WebAssembly bridge calls/second, and full decoder cleanup on tab hide.',
          'Eliminated redundant network round-trips for map radius filtering from 16 requests to 0 using client-side pre-computed distance matrices; cut session API calls from 11 to 2.',
          'Diagnosed and fixed WebSocket connection leaks under React StrictMode double-mount lifecycle by switching from shared refs to isolated per-effect closures.',
          'Eliminated N+1 query bottlenecks in assignment lookups via JPA LEFT JOIN FETCH and DTO projections (findNamesByType), reducing repetitive queries from 15 to 6.',
          'Contributed to expanding automated test suite to 732 tests (466 BE + 266 FE across 37 suites) with 100% pass rate; applied negative testing methodology and query-count assertions.',
        ],
        technologies: [
          'Java',
          'Spring Boot',
          'SQL Server',
          'ThingsBoard',
          'MQTT',
          'RabbitMQ',
          'WebRTC',
          'HLS',
          'FFmpeg',
          'Redis',
          'MinIO',
          'ReactJS',
          'TypeScript',
          'Docker',
          'Linux',
          'VietMap API',
        ],
      },
      {
        name: 'Alcohol-Breathalyzer & Violation Ticketing Device (In-House Product)',
        period: 'Jul 2026 – Present',
        role: 'Embedded Systems & Kotlin Developer',
        achievements: [
          'Integrated manufacturer hardware SDKs into native Kotlin application running on handheld law-enforcement terminals.',
          'Parsed raw NMEA 0183 sentences directly from GPS hardware module via serial interface instead of OS location services, improving coordinate fix time and accuracy.',
          'Constructed end-to-end inspection workflow from sensor sampling to identity verification and instant on-device thermal ticket printing.',
        ],
        technologies: [
          'Kotlin',
          'GPS Modules',
          'NMEA Protocol',
          'Hardware SDK',
          'Android/Embedded',
          'Linux',
        ],
      },
      {
        name: 'Guest Management & Face-Recognition Access Control',
        period: 'Sep 2025 – Oct 2025',
        role: 'Fullstack Developer',
        achievements: [
          'Built Spring Boot backend and ReactJS admin dashboard integrating third-party facial recognition APIs, streaming door actuation commands over MQTT in real time.',
          'Handled 300+ attendee arrival spikes by introducing adaptive request queuing and rate limiting, cutting processing latency by 31.2% (6.14s down to 4.0s) with zero dropped requests.',
          'Participated in on-site field deployment, local Linux network configuration, and live operational monitoring.',
        ],
        technologies: [
          'Java',
          'Spring Boot',
          'ReactJS',
          'TypeScript',
          'MQTT',
          'PostgreSQL',
          'Docker',
          'Linux',
        ],
      },
    ],
    tags: [
      'Java',
      'Spring Boot',
      'SQL Server',
      'PostgreSQL',
      'ThingsBoard',
      'MQTT',
      'RabbitMQ',
      'WebRTC',
      'HLS',
      'FFmpeg',
      'Redis',
      'MinIO',
      'Kotlin',
      'NMEA',
      'Docker',
      'Linux',
      'VietMap API',
    ],
  },
  {
    company: 'METASOL Future Digital Technology',
    role: 'Backend Developer',
    period: 'Feb 2025 – Aug 2025',
    location: 'Hanoi, Vietnam',
    description: 'Digital solutions and enterprise backend services engineering company.',
    projects: [
      {
        name: 'Enterprise Service Platform & Dynamic RBAC System',
        period: 'Feb 2025 – Aug 2025',
        role: 'Backend Developer',
        achievements: [
          'Engineered secure password reset flow utilizing JavaMailSender with encrypted, time-expiring verification tokens.',
          'Developed high-volume asynchronous Excel import/export processing using Apache POI, optimizing relational database mapping and memory usage.',
          'Implemented Dynamic Role-Based Access Control (RBAC) with Redis token caching and multi-tier Spring Cache, boosting API response throughput.',
          'Configured Cloudflare Tunnel for secure remote frontend-backend API integration testing; containerized services with Docker.',
          'Collaborated within an engineering team of 6 using strict Gitflow conventions, Jira project tracking, and GitHub.',
        ],
        technologies: [
          'Java',
          'Spring Boot',
          'Spring Security',
          'Redis',
          'Spring Cache',
          'Apache POI',
          'Docker',
          'Cloudflare Tunnel',
          'MySQL',
          'Jira',
          'GitHub',
        ],
      },
    ],
    tags: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Spring Cache',
      'Redis',
      'Docker',
      'Cloudflare Tunnel',
      'Apache POI',
      'MySQL',
      'Jira',
    ],
  },
  {
    company: 'IT Solutions & Resources, JSC',
    role: 'Java Backend Intern',
    period: 'Jul 2024 – Dec 2024',
    location: 'Hanoi, Vietnam',
    description:
      'Enterprise software solutions provider; practiced Java Spring Boot backend engineering with Oracle Database.',
    projects: [
      {
        name: 'Enterprise Backend Service & Microservices Prototype (Oracle DB)',
        period: 'Jul 2024 – Dec 2024',
        role: 'Java Backend Intern',
        achievements: [
          'Developed RESTful API endpoints in Java Spring Boot, mastering Dependency Injection, schema design, and transactional processing on Oracle Database.',
          'Optimized relational queries with Spring Data JPA and Hibernate, crafting custom JPQL specifications and validation routines.',
          'Prototyped distributed microservices architecture incorporating Spring Cloud Netflix Eureka for service registry and Spring Cloud API Gateway for intelligent routing and request filtering.',
          'Authored structured API documentation with Postman and Swagger; implemented unit tests for core endpoints.',
        ],
        technologies: [
          'Java',
          'Spring Boot',
          'Oracle',
          'Spring Cloud Eureka',
          'API Gateway',
          'Spring Data JPA',
          'REST API',
          'Postman',
        ],
      },
    ],
    tags: [
      'Java',
      'Spring Boot',
      'Oracle',
      'Spring Cloud Eureka',
      'API Gateway',
      'REST API',
      'Postman',
    ],
  },
]

export const projects: ProjectItem[] = [
  {
    title: 'IoT Fleet & Camera Telemetry Platform',
    period: 'Oct 2025 – Present',
    category: 'Production / In-House',
    companyContext: 'Thanh Binh - BCA Co., Ltd. (In-House Product)',
    problem:
      'High-frequency telemetry stream from 5,000+ public safety devices over unstable 4G networks caused packet loss risks and reconnect spikes, alongside live video and DVR streaming demands without browser memory leaks or bandwidth bottlenecks.',
    solution:
      'Engineered a high-throughput ingestion pipeline using Mosquitto MQTT (QoS 1), RabbitMQ asynchronous events, ThingsBoard rule engine, MS SQL Server, and Redis caching. Streamed live ONVIF video via FFmpeg and WebRTC for low latency, with HLS adaptive bitrate for DVR playback. Added multi-device priority failover and geofencing violation detection.',
    results: [
      'Maintained 5,000+ active devices 24/7 with zero downtime and <2s end-to-end latency',
      'Cut ThingsBoard telemetry query latency by 2.5× (1,483ms → 601ms) via telemetry key pruning',
      'Reduced patrol map slider API calls from 16 to 0 using client-side pre-computed distance matrices',
      'Prevented WebAssembly browser freezing on 25-stream camera wall via 120ms volume throttle',
      'Maintained 732 automated tests (466 BE + 266 FE) with 100% pass rate using negative testing',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'SQL Server',
      'ThingsBoard',
      'MQTT',
      'RabbitMQ',
      'WebRTC',
      'HLS',
      'FFmpeg',
      'Redis',
      'MinIO',
      'ReactJS',
      'TypeScript',
      'VietMap API',
      'Linux',
      'Docker',
    ],
  },
  {
    title: 'Event Guest Management & Face-Recognition Access',
    period: 'Sep 2025 – Oct 2025',
    category: 'Production / In-House',
    companyContext: 'Thanh Binh - BCA Co., Ltd.',
    problem:
      'Sudden surges of 300+ attendees during peak check-in window overwhelmed third-party facial recognition APIs, causing request timeouts and entrance bottlenecks.',
    solution:
      'Designed Java Spring Boot backend with adaptive request queuing and rate limiting in front of recognition endpoints, dispatching door actuator commands over MQTT in real time while syncing attendee status immediately to ReactJS admin UI.',
    results: [
      'Processed 300+ attendees during peak rush with zero dropped verification requests',
      'Cut network turnaround latency by 31.2% (from 6.14s down to 4.0s)',
      'Triggered instantaneous door actuation via lightweight MQTT publish-subscribe messaging',
    ],
    technologies: [
      'Spring Boot',
      'Java',
      'MQTT',
      'ReactJS',
      'TypeScript',
      'PostgreSQL',
      'Linux',
      'Docker',
    ],
  },
  {
    title: 'Alcohol-Breathalyzer & Violation Ticketing Device',
    period: 'Jul 2026 – Present',
    category: 'Production / In-House',
    companyContext: 'Thanh Binh - BCA Co., Ltd. (In-House Product)',
    problem:
      'Handheld public-safety hardware required direct serial interfacing for alcohol sensors, GPS modules, and thermal printers without relying on high-level OS location services.',
    solution:
      'Interfaced directly with manufacturer hardware SDKs in Kotlin; implemented raw NMEA 0183 serial parsing for fast GPS coordinate lock; automated entire workflow from alcohol sampling to instant on-device thermal ticket generation.',
    results: [
      'Achieved rapid GPS lock and high positioning accuracy via direct NMEA protocol parsing',
      'Completed full violation citation flow and thermal printing in under 10 seconds',
      'Deployed successfully on specialized inspection devices in active field operations',
    ],
    technologies: [
      'Kotlin',
      'GPS Modules',
      'NMEA Protocol',
      'Hardware SDK',
      'Android/Embedded',
      'Linux',
    ],
  },
  {
    title: 'Enterprise Backend & Dynamic RBAC Platform',
    period: 'Feb 2025 – Aug 2025',
    category: 'Production / In-House',
    companyContext: 'METASOL Future Digital Technology',
    problem:
      'Enterprise operations required dynamic permission changes with zero session re-login, memory-safe processing of large multi-thousand-row Excel reports, and fortified credential recovery.',
    solution:
      'Deployed Spring Security paired with Redis dynamic authorization; implemented asynchronous streaming Excel processing with Apache POI; established multi-tier Spring Cache; secured tokenized password resets via JavaMailSender; integrated remote frontend teams via Cloudflare Tunnel.',
    results: [
      'Substantially enhanced API response times through Redis token cache and Spring Cache',
      'Handled complex high-volume Excel exports smoothly with zero OutOfMemory errors',
      'Maintained rigorous Gitflow workflow with 6 engineers, fulfilling Jira sprints on schedule',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Redis',
      'Spring Cache',
      'Apache POI',
      'Cloudflare Tunnel',
      'Docker',
      'MySQL',
      'Jira',
      'GitHub',
    ],
  },
  {
    title: 'Enterprise Microservices Architecture Prototype',
    period: 'Jul 2024 – Dec 2024',
    category: 'Production / In-House',
    companyContext: 'IT Solutions & Resources, JSC',
    problem:
      'Needed a scalable distributed microservices blueprint ensuring dynamic service discovery, unified request filtering, and relational transaction integrity on enterprise Oracle Database.',
    solution:
      'Built Spring Boot microservices backed by Oracle Database via Spring Data JPA and Hibernate; integrated Spring Cloud Netflix Eureka for service registry and discovery; configured Spring Cloud API Gateway for centralized routing and security filters.',
    results: [
      'Mastered enterprise RESTful standards, Dependency Injection, and Oracle query optimization',
      'Successfully stood up auto-registering microservices mesh with Eureka and API Gateway',
      'Standardized comprehensive API docs with Postman and Swagger, adhering to unit test standards',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Oracle',
      'Spring Cloud Eureka',
      'API Gateway',
      'Spring Data JPA',
      'REST API',
      'Postman',
    ],
  },
  {
    title: 'Real-Time Multiplayer Quiz Platform',
    period: 'Jul 2025 – Aug 2025',
    category: 'Personal / Architecture',
    companyContext: 'Personal Project',
    problem:
      'Synchronizing live multiplayer game rooms, instant scoring, and real-time leaderboards with minimal server resource consumption compared to heavyweight web frameworks.',
    solution:
      'Developed lightweight C# Core backend (HttpListener & Dapper) paired with Node.js Socket.io for duplex real-time events; cached room state in Redis to protect database; built ReactJS client with Zustand for snappy local UI state; containerized services with Docker.',
    results: [
      'Achieved instantaneous room broadcast with ultra-low CPU/RAM footprint',
      'Eliminated database contention during peak contest rounds via in-memory Redis state',
      'Packaged clean multi-container deployment reproducible in a single Docker Compose command',
    ],
    technologies: [
      'C# Core',
      'HttpListener',
      'Dapper',
      'Socket.io',
      'Redis',
      'PostgreSQL',
      'ReactJS',
      'TypeScript',
      'Zustand',
      'Docker',
    ],
    githubUrl: 'https://github.com/toobidu',
  },
  {
    title: 'Sales & Dynamic RBAC Management System',
    period: 'Jun 2025',
    category: 'Personal / Architecture',
    companyContext: 'Personal Project',
    problem:
      'Required granular role permissions for 3 distinct user groups (Admin, Sales, Print Workshop) where permission updates apply instantly without forced re-login, alongside transactional internal ledger bookkeeping across order states.',
    solution:
      'Implemented token-based dynamic RBAC using Spring Security and Redis; developed tiered pricing rules, state-machine order lifecycle tracking, and internal ledger auditing all deposits and commission payouts; containerized with Docker.',
    results: [
      'Instantaneous permission revocation and update via Redis with zero user re-login',
      'Audited and transparent internal ledger tracking all balance adjustments across order lifecycle',
      'Automated end-to-end API regression test suite delivered via Postman Collections',
    ],
    technologies: [
      'Spring Boot',
      'Java',
      'Spring Security',
      'Spring Data JPA',
      'Redis',
      'PostgreSQL',
      'Docker',
      'Postman',
    ],
    githubUrl: 'https://github.com/toobidu',
  },
]

export const skillCategories: SkillCategory[] = [
  {
    category: 'Backend & Architecture',
    skills: [
      'Java (8/11/17/21)',
      'Spring Boot',
      'Spring Data JPA / Hibernate',
      'Spring Security',
      'Spring Cache',
      'Spring Cloud Eureka',
      'API Gateway',
      'RESTful API Design',
    ],
  },
  {
    category: 'Real-Time, Streaming & IoT',
    skills: [
      'MQTT (Mosquitto)',
      'RabbitMQ',
      'ThingsBoard (Rule Chain, Gateway)',
      'WebSocket',
      'WebRTC',
      'HLS Streaming',
      'FFmpeg (H.264/H.265)',
      'ONVIF Cameras',
    ],
  },
  {
    category: 'Hardware, Linux & Infrastructure',
    skills: [
      'Linux Server Administration',
      'Nginx',
      'SSL / TLS Setup',
      'NMEA GPS Protocol',
      '4G/5G Modules',
      'Docker & Compose',
      'Kotlin',
    ],
  },
  {
    category: 'Languages & Core Web',
    skills: ['Java', 'Kotlin', 'TypeScript', 'JavaScript', 'Python', 'C# Core'],
  },
  {
    category: 'Frontend & UI Engineering',
    skills: ['ReactJS', 'TypeScript', 'JavaScript', 'Vite', 'Zustand', 'Tailwind CSS'],
  },
  {
    category: 'Databases & Storage',
    skills: [
      'PostgreSQL',
      'Redis (Caching & Dynamic Auth)',
      'SQL Server',
      'MySQL',
      'Oracle',
      'MinIO Object Storage',
    ],
  },
  {
    category: 'DevOps, Tools & Collaboration',
    skills: ['Docker', 'Cloudflare Tunnel', 'GitHub', 'GitLab', 'Postman', 'Jira', 'Apache POI'],
  },
]

export const education = {
  institution: 'Hanoi University of Civil Engineering (HUCE)',
  degree: 'Bachelor of Computer Science',
  period: 'Oct 2022 – Mar 2026',
  location: 'Hanoi, Vietnam',
  logoUrl: '/HUCE_DHXD_Logo.png',
  // highlights: [
  //   'Core coursework in Data Structures, Algorithms, Distributed Systems, Software Architecture, and Database Management.',
  //   'Focused on high-performance backend systems, real-time networking protocols, and real-world system engineering throughout academic journey.',
  // ],
}
