export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  remoteReady?: boolean
  description?: string
  highlights: string[]
  tags: string[]
}

export interface ProjectItem {
  title: string
  subtitle: string
  period?: string
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
  name: 'Tô Tiến Dũng',
  englishName: 'To Tien Dung',
  title: 'Fullstack Software Engineer',
  specialization: 'Backend Systems, IoT & Real-time Media',
  email: 'dungto0300567@gmail.com',
  phone: '+84 348569975',
  github: 'https://github.com/toobidu',
  githubUsername: 'toobidu',
  linkedin: 'https://linkedin.com/in/toobidu',
  linkedinUsername: 'toobidu',
  location: 'Hanoi, Vietnam',
  resumePdf: '/To_Tien_Dung_FullStack_Software_Engineer.pdf',
  summary:
    'Fullstack Developer with 2+ years of experience building backend-heavy, real-time and IoT-connected systems in Java Spring Boot and ReactJS. Hands-on with message-driven architectures (MQTT, RabbitMQ), real-time streaming (WebSocket, WebRTC, HLS, FFmpeg) and hardware/device integration (Kotlin, NMEA). Comfortable owning features end-to-end – from API and database design to frontend integration and Linux deployment.',
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
      detail: 'Sustained concurrent devices on 4G without server crashes or reconnect storms',
    },
    {
      value: '31.2%',
      label: 'Latency Reduction',
      detail: 'Request queue & rate limiting cut face-recog check-in from 6.14s down to 4.0s',
    },
    {
      value: '< 10ms',
      label: 'Telemetry Updates',
      detail: 'Tuned MQTT QoS & persistence ensuring zero packet loss during network drops',
    },
  ],
}

export const experiences: ExperienceItem[] = [
  {
    company: 'Thanh Binh - BCA Co., Ltd.',
    role: 'Fullstack Developer',
    period: 'Sep 2025 – Present',
    location: 'Hanoi, Vietnam (Remote-ready)',
    highlights: [
      'IoT Fleet Monitoring Platform: Engineered vehicle tracking backend using Spring Boot + ThingsBoard (Rule Chain, Gateway), Mosquitto for device messaging, RabbitMQ for internal events, SQL Server for enterprise telemetry persistence, and MinIO for media.',
      'Scale & Resilience: Scaled the platform to sustain 5,000+ concurrent devices on resource-constrained 4G hardware; solved reconnect storms and memory spikes through gateway session handling and optimized logging.',
      'Live Media & Telemetry: Implemented live camera viewing, DVR-style playback, and two-way talk using FFmpeg, HLS, and WebRTC (H.264/H.265 with ONVIF cameras).',
      'Cost & Performance: Cut VietMap map-matching API cost by batching GPS points and adding Redis caching for hot coordinate data.',
      'Guest Management & Access Control: Built Spring Boot backend and ReactJS admin for face-recognition door access control; handled 300+ guests during registration spikes with request queuing and rate limiting (cutting per-check-in network time by 31.2%).',
      'Hardware Integration (Kotlin): Integrated vendor SDK directly, parsed raw NMEA sentences from GPS modules, and built the end-to-end violation ticketing flow for an alcohol-breathalyzer device.',
      'Customer On-Site Deployment: Provisioned Linux servers, configured domain/SSL, deployed containerized runtime environments, and provided operational training on customer premises.',
    ],
    tags: [
      'Java',
      'Spring Boot',
      'ThingsBoard',
      'SQL Server',
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
    ],
  },
  {
    company: 'METASOL Future Digital Technology',
    role: 'Backend Developer',
    period: 'Feb 2025 – Aug 2025',
    location: 'Hanoi, Vietnam',
    highlights: [
      'Engineered dynamic authorization with Redis and multi-level caching strategies using Spring Cache to improve API throughput.',
      'Implemented transactional password recovery flows using JavaMailSender with encrypted time-sensitive verification tokens.',
      'Built high-performance Excel export/import capabilities handling large datasets using Apache POI and relational databases.',
      'Collaborated with frontend engineers through Cloudflare Tunnel for secure remote staging and integration testing; containerized services with Docker.',
      'Worked in an agile 6-member team following strict Gitflow conventions, tracked via Jira and GitHub.',
    ],
    tags: [
      'Java',
      'Spring Boot',
      'Spring Cache',
      'Redis',
      'Docker',
      'Cloudflare Tunnel',
      'Apache POI',
    ],
  },
  {
    company: 'IT Solutions & Resources, JSC',
    role: 'Java Backend Intern',
    period: 'Jul 2024 – Dec 2024',
    location: 'Hanoi, Vietnam',
    highlights: [
      'Acquired deep foundation in Spring Boot architecture, RESTful API design, dependency injection, and JPA/Hibernate mapping.',
      'Gained hands-on exposure to distributed microservices architecture by building a multi-service prototype with Spring Cloud Netflix Eureka for service discovery and Spring Cloud API Gateway for routing and request filtering.',
      'Practiced writing unit test cases and documented clean API endpoints using Postman and Swagger.',
    ],
    tags: ['Java', 'Spring Boot', 'Spring Cloud Eureka', 'API Gateway', 'REST API', 'PostgreSQL'],
  },
]

export const projects: ProjectItem[] = [
  {
    title: 'IoT Fleet & Camera Telemetry Platform',
    subtitle: 'High-concurrency vehicle tracking, video streaming & telemetry',
    problem:
      'Handling telemetry from 5,000+ erratic 4G devices while supporting live video streams without memory crashes or data drops.',
    solution:
      'Built a hybrid pipeline combining Mosquitto (MQTT QoS) for low-latency telemetry, RabbitMQ for asynchronous event dispatching, SQL Server & PostgreSQL for relational telemetry persistence, ThingsBoard rule chains, and WebRTC/HLS/FFmpeg for low-latency camera viewing and DVR playback.',
    results: [
      'Sustains 5,000+ concurrent active devices with zero downtime',
      'Near-instant telemetry updates with zero message loss during reconnects',
      'Significantly reduced map-matching API billing via batching and Redis cache',
    ],
    technologies: [
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
    ],
  },
  {
    title: 'Event Guest Management & Access Control',
    subtitle: 'Face-recognition door control with rate-limiting queue',
    problem:
      'High check-in spikes right before large events caused third-party face recognition API timeouts and door access latency.',
    solution:
      'Engineered a resilient request queue with adaptive rate limiting in front of concurrent face-recognition calls, broadcasting validated access events over MQTT to hardware controllers.',
    results: [
      'Processed 300+ guests with 0% data drop during high peak bursts',
      'Cut average network processing time by 31.2% (from 6.14s down to 4.0s)',
      'Real-time door trigger feedback via MQTT',
    ],
    technologies: [
      'Spring Boot',
      'MQTT',
      'Face-Recognition API',
      'ReactJS',
      'PostgreSQL',
      'Docker',
    ],
  },
  {
    title: 'Real-Time Multiplayer Quiz Platform',
    subtitle: 'Quizizz-style interactive game with low-latency state sync',
    problem:
      'Synchronizing multi-room player state, score calculations, and real-time leaderboard updates without traditional framework bloat.',
    solution:
      'Constructed backend in lightweight C# Core (HttpListener & Dapper) coupled with Socket.io for bi-directional messaging, Redis for instant session caching, and React with Zustand on frontend.',
    results: [
      'Ultra-fast room broadcast with minimal CPU overhead',
      'Decoupled database load by keeping active game states in Redis',
      'Fully containerized multi-service deployment with Docker',
    ],
    technologies: [
      'C# Core',
      'HttpListener',
      'Dapper',
      'Socket.io',
      'Redis',
      'PostgreSQL',
      'ReactJS',
      'Zustand',
      'Docker',
    ],
    githubUrl: 'https://github.com/toobidu',
  },
  {
    title: 'Sales & Dynamic RBAC Management System',
    subtitle: 'Multi-tier pricing, internal ledger wallet & dynamic security',
    problem:
      'Complex permission matrices across Admin, Sales, and Printing houses where permission changes must reflect immediately without user re-login.',
    solution:
      'Implemented Spring Security + Redis dynamic token authorization, hierarchical product pricing, full order lifecycle state machine, and internal wallet accounting.',
    results: [
      'Instant privilege revocation and update without session re-authentication',
      'Complete ledger tracking for deposits, payments, and revenue splits',
      'End-to-end automated testing with Postman collection',
    ],
    technologies: [
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'Redis',
      'PostgreSQL',
      'Docker',
    ],
    githubUrl: 'https://github.com/toobidu',
  },
]

export const skillCategories: SkillCategory[] = [
  {
    category: 'Backend & Microservices',
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
    category: 'Languages & Hardware Integration',
    skills: [
      'Java',
      'Kotlin',
      'TypeScript',
      'JavaScript',
      'Python',
      'C# Core',
      'NMEA GPS Protocol',
      '4G/5G Modules',
    ],
  },
  {
    category: 'Databases & Storage',
    skills: [
      'PostgreSQL',
      'Redis (Caching & Dynamic Auth)',
      'MySQL',
      'Oracle',
      'SQL Server',
      'MinIO Object Storage',
    ],
  },
  {
    category: 'DevOps, Tools & Frontend',
    skills: [
      'Docker & Compose',
      'Linux Server Administration',
      'Domain & SSL Setup',
      'Gitflow (GitHub, GitLab)',
      'ReactJS & Vite',
      'Zustand',
      'Tailwind CSS',
      'Postman',
      'Jira',
    ],
  },
]

export const education = {
  institution: 'Hanoi University of Civil Engineering (HUCE)',
  vietnameseInstitution: 'Trường Đại học Xây Dựng Hà Nội',
  degree: 'Bachelor of Computer Science',
  period: 'Oct 2022 – Mar 2026',
  location: 'Hanoi, Vietnam',
  highlights: [
    'Core coursework in Data Structures, Algorithms, Distributed Systems, Software Architecture, and Database Management.',
    'Applied research and real-world system engineering focus throughout academic journey.',
  ],
}
