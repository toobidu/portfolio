export interface CompanyProject {
  name: string
  period?: string
  role?: string
  description: string
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
  subtitle: string
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
  name: 'Tô Tiến Dũng',
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
    'Fullstack Developer with 2+ years of experience building backend-heavy, real-time and IoT-connected systems in Java Spring Boot and ReactJS. Hands-on with message-driven architectures (MQTT, RabbitMQ), real-time streaming (WebSocket, WebRTC, HLS, FFmpeg) and hardware/device integration (Kotlin, NMEA). Comfortable owning a feature end-to-end – from API and database design to frontend integration and Linux deployment.',
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
    remoteReady: true,
    description:
      'Doanh nghiệp chuyên nghiên cứu và triển khai giải pháp IoT giám sát hành trình phương tiện vận tải và thiết bị an ninh kiểm soát chuyên dụng.',
    projects: [
      {
        name: 'Alcohol-Breathalyzer Device (In-House Product, Kotlin)',
        period: 'Jul 2026 – Present',
        role: 'Hardware Integration & Kotlin Developer',
        description:
          'Thiết bị đo nồng độ cồn chuyên dụng cầm tay tích hợp định vị GPS và in biên bản vi phạm tại chỗ phục vụ công tác kiểm tra an toàn.',
        achievements: [
          'Đọc hiểu tài liệu SDK của nhà sản xuất phần cứng và tích hợp trực tiếp vào ứng dụng Kotlin trên thiết bị.',
          'Bóc tách bản tin NMEA thô từ module GPS để giao tiếp trực tiếp với phần cứng định vị thay vì phụ thuộc location service mặc định của hệ điều hành, tối ưu thời gian fix toạ độ và độ chính xác.',
          'Xây dựng quy trình nghiệp vụ khép kín từ lúc đo nồng độ cồn, định danh đến in phiếu biên bản vi phạm trực tiếp qua máy in nhiệt tích hợp trên máy.',
        ],
        technologies: [
          'Kotlin',
          'GPS Modules',
          'NMEA Protocol',
          'Hardware SDK',
          'Android/Embedded',
        ],
      },
      {
        name: 'IoT Fleet Monitoring Platform (In-House Product)',
        period: 'Oct 2025 – Present',
        role: 'Backend Developer',
        description:
          'Nền tảng định vị và giám sát hành trình xe thời gian thực cho 5.000+ phương tiện vận tải kết hợp camera hành trình.',
        achievements: [
          'Thiết kế và phát triển backend bằng Java Spring Boot kết hợp ThingsBoard (Rule Chain, Gateway), Mosquitto điều phối messaging thiết bị, RabbitMQ xử lý event nội bộ và MinIO lưu trữ media.',
          'Đạt tốc độ cập nhật vị trí thời gian thực (< 10ms) nhờ tối ưu MQTT QoS và cơ chế message persistence, loại bỏ hoàn toàn mất mát bản tin telemetry khi thiết bị 4G chập chờn và kết nối lại.',
          'Tiết kiệm chi phí API VietMap map-matching và tăng throughput bằng kỹ thuật batching điểm GPS trước khi gọi định tuyến; giảm tải map-tile bằng cache Redis cho toạ độ nóng; áp dụng adaptive bitrate cho luồng camera HLS.',
          'Scale hệ thống chịu tải 5.000+ thiết bị hoạt động đồng thời trên phần cứng 4G tài nguyên hạn chế: tinh chỉnh logging ứng dụng tránh tràn ổ đĩa, cấu hình session và cơ chế reconnect tại gateway ngăn chặn "reconnect storm" gây spike RAM/CPU (hệ thống duy trì 5.000+ thiết bị hoạt động 24/7 ổn định với 0 downtime).',
          'Xây dựng luồng xem camera trực tiếp, xem lại DVR và đàm thoại 2 chiều qua FFmpeg, HLS và WebRTC (chuẩn nén H.264/H.265, camera chuẩn ONVIF), kèm hệ thống báo cáo lộ trình, cảnh báo và sự kiện toàn diện.',
          'Trực tiếp tham gia bàn giao và triển khai thực địa: cài đặt phần mềm, thiết lập môi trường máy chủ Linux (Ubuntu/Debian) và container Docker, cấu hình domain/subdomain/SSL và đào tạo khách hàng vận hành.',
        ],
        technologies: [
          'Java',
          'Spring Boot',
          'ThingsBoard',
          'MQTT',
          'RabbitMQ',
          'WebRTC',
          'HLS',
          'FFmpeg',
          'SQL Server',
          'PostgreSQL',
          'Redis',
          'MinIO',
          'ReactJS',
          'Linux',
          'Docker',
          'VietMap API',
        ],
      },
      {
        name: 'Guest Management & Face-Recognition Access Control',
        period: 'Sep 2025 – Oct 2025',
        role: 'Fullstack Developer',
        description:
          'Hệ thống đăng ký khách tham dự sự kiện và kiểm soát cửa ra vào tự động bằng công nghệ camera nhận diện khuôn mặt.',
        achievements: [
          'Xây dựng backend (Java Spring Boot) và giao diện quản trị (ReactJS) tích hợp API nhận diện khuôn mặt bên thứ ba, stream sự kiện xác thực qua MQTT tới phần cứng điều khiển cửa theo thời gian thực.',
          'Đáp ứng 300 khách mời với lưu lượng đăng ký check-in tăng vọt ngay trước giờ sự kiện; thiết lập hàng đợi (request queue) và rate limiting trước các cuộc gọi nhận diện đồng thời, cắt giảm 31.2% thời gian xử lý mạng (từ 6.14s xuống 4.0s) với 0 downtime và 0 mất mát dữ liệu.',
          'Tham gia triển khai thực địa hệ thống tại hiện trường sự kiện, cấu hình máy chủ Linux nội bộ và mạng đảm bảo kiểm soát cửa vận hành thông suốt.',
        ],
        technologies: [
          'Java',
          'Spring Boot',
          'ReactJS',
          'MQTT',
          'Face-Recognition API',
          'PostgreSQL',
          'Linux',
          'Docker',
        ],
      },
    ],
    tags: [
      'Java',
      'Spring Boot',
      'ThingsBoard',
      'SQL Server',
      'PostgreSQL',
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
    ],
  },
  {
    company: 'METASOL Future Digital Technology',
    role: 'Backend Developer',
    period: 'Feb 2025 – Aug 2025',
    location: 'Hanoi, Vietnam',
    description:
      'Công ty công nghệ phát triển giải pháp số và hệ sinh thái dịch vụ backend cho doanh nghiệp.',
    projects: [
      {
        name: 'Enterprise Service Platform & Dynamic RBAC System',
        period: 'Feb 2025 – Aug 2025',
        role: 'Backend Developer',
        description:
          'Phát triển lõi backend với cơ chế phân quyền linh hoạt, xử lý file dữ liệu lớn và tối ưu hóa hiệu năng API.',
        achievements: [
          'Xây dựng tính năng khôi phục/đổi mật khẩu an toàn sử dụng JavaMailSender gửi email xác thực kèm token mã hóa có thời hạn.',
          'Phát triển tính năng xuất/nhập file Excel dung lượng lớn bằng Apache POI, tối ưu hóa truy xuất và mapping dữ liệu từ relational databases.',
          'Áp dụng cơ chế phân quyền động (Dynamic Authorization) với Redis và chiến lược caching đa tầng qua Spring Cache, cải thiện rõ rệt tốc độ phản hồi API.',
          'Phối hợp làm việc với team frontend qua Cloudflare Tunnel để tích hợp và kiểm thử API từ xa; đóng gói ứng dụng với Docker cho môi trường deploy container hóa.',
          'Làm việc trong nhóm 6 thành viên theo chuẩn Gitflow nghiêm ngặt, quản lý task qua Jira và quản lý mã nguồn trên GitHub.',
        ],
        technologies: [
          'Java',
          'Spring Boot',
          'Spring Security',
          'Redis',
          'Spring Cache',
          'Apache POI',
          'JavaMailSender',
          'Docker',
          'Cloudflare Tunnel',
          'MySQL',
          'Jira',
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
      'Doanh nghiệp giải pháp phần mềm và nhân lực công nghệ; thực tập sinh phát triển backend Java Spring Boot với Oracle Database.',
    projects: [
      {
        name: 'Enterprise Backend Service & Microservices Prototype (Oracle DB)',
        period: 'Jul 2024 – Dec 2024',
        role: 'Java Backend Intern',
        description:
          'Học tập và xây dựng các dịch vụ RESTful API kết nối Oracle Database, tiếp cận kiến trúc microservices phân tán.',
        achievements: [
          'Học tập và thực hành phát triển backend bài bản với Java Spring Boot, tập trung vào thiết kế RESTful API chuẩn mực, Dependency Injection và xử lý nghiệp vụ trên hệ quản trị cơ sở dữ liệu Oracle Database.',
          'Làm việc với Spring Data JPA và Hibernate để tối ưu hóa truy vấn dữ liệu quan hệ trên Oracle, thiết kế cấu trúc schema và validation dữ liệu.',
          'Tiếp cận và thực hành kiến trúc Microservices thông qua dự án demo kết hợp Spring Cloud Netflix Eureka (Service Discovery & Registration) và Spring Cloud API Gateway (Request Routing, Filter).',
          'Viết tài liệu API với Postman và Swagger, viết unit test cơ bản đảm bảo độ tin cậy của các endpoint.',
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
    subtitle: 'Nền tảng giám sát hành trình 5.000+ xe & streaming camera trực tiếp',
    period: 'Oct 2025 – Present',
    category: 'Production / In-House',
    companyContext: 'Thanh Binh - BCA Co., Ltd. (In-House Product)',
    problem:
      'Hạ tầng phải tiếp nhận luồng dữ liệu liên tục từ 5.000+ thiết bị trên sóng 4G chập chờn mà không được rơi rớt bản tin vị trí, đồng thời truyền video camera trực tiếp và xem lại DVR mà không làm tràn bộ nhớ hay nghẽn băng thông.',
    solution:
      'Xây dựng kiến trúc pipeline kết hợp Mosquitto (MQTT QoS 1) cho telemetry độ trễ mili-giây, RabbitMQ xử lý event bất đồng bộ, ThingsBoard Rule Chain, SQL Server & PostgreSQL lưu trữ nghiệp vụ, MinIO lưu trữ media; pipeline camera sử dụng FFmpeg, WebRTC cho xem trực tiếp độ trễ thấp và HLS adaptive bitrate cho xem lại DVR; tối ưu chi phí API VietMap bằng GPS batching và Redis cache.',
    results: [
      'Duy trì ổn định 5.000+ thiết bị hoạt động đồng thời 24/7 với 0 downtime',
      'Cập nhật toạ độ tức thì (< 10ms), bảo toàn 100% bản tin khi thiết bị 4G mất sóng và reconnect',
      'Ngăn chặn triệt để "reconnect storm" gây crash CPU/RAM nhờ gateway session handling',
      'Tiết kiệm đáng kể chi phí gọi API VietMap map-matching nhờ batching và Redis caching',
    ],
    technologies: [
      'Spring Boot',
      'ThingsBoard',
      'SQL Server',
      'PostgreSQL',
      'MQTT',
      'RabbitMQ',
      'WebRTC',
      'HLS',
      'FFmpeg',
      'Redis',
      'MinIO',
      'ReactJS',
      'VietMap API',
    ],
  },
  {
    title: 'Event Guest Management & Face-Recognition Access',
    subtitle: 'Kiểm soát cửa ra vào tự động bằng camera nhận diện & queue chống nghẽn',
    period: 'Sep 2025 – Oct 2025',
    category: 'Production / In-House',
    companyContext: 'Thanh Binh - BCA Co., Ltd.',
    problem:
      'Lượng khách tham dự 300+ người ồ ạt check-in trong khoảng thời gian ngắn ngay trước sự kiện gây áp lực lớn lên API nhận diện khuôn mặt bên thứ ba, dễ dẫn tới timeout và nghẽn cửa vào.',
    solution:
      'Thiết kế backend Java Spring Boot với cơ chế hàng đợi (request queue) và rate limiting thích ứng phía trước các cuộc gọi API nhận diện, đẩy sự kiện mở cửa qua MQTT tới mạch điều khiển cửa theo thời gian thực; giao diện quản trị ReactJS cập nhật trạng thái khách tức thì.',
    results: [
      'Xử lý mượt mà 300+ khách mời trong đợt cao điểm với tỷ lệ thất thoát dữ liệu 0%',
      'Cắt giảm 31.2% thời gian xử lý mạng mỗi lượt check-in (từ 6.14s xuống còn 4.0s)',
      'Phản hồi kích hoạt mở cửa qua MQTT tức thì, trải nghiệm check-in thông suốt',
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
    title: 'Alcohol-Breathalyzer & Violation Ticketing Device',
    subtitle: 'Ứng dụng nhúng tích hợp phần cứng đo nồng độ cồn & định vị GPS',
    period: 'Jul 2026 – Present',
    category: 'Production / In-House',
    companyContext: 'Thanh Binh - BCA Co., Ltd. (In-House Product)',
    problem:
      'Cần tích hợp trực tiếp phần cứng cảm biến đo nồng độ cồn, module GPS và máy in nhiệt chuyên dụng trên thiết bị cầm tay mà không bị phụ thuộc vào location service mặc định của hệ điều hành.',
    solution:
      'Đọc hiểu SDK phần cứng nhà sản xuất, lập trình ứng dụng Kotlin giao tiếp trực tiếp; phân tích cú pháp (parsing) bản tin NMEA thô từ module GPS để lấy toạ độ chính xác cao; xây dựng quy trình khép kín từ đo nồng độ cồn, kiểm tra định danh đến in phiếu biên bản vi phạm tại chỗ.',
    results: [
      'Giao tiếp trực tiếp với GPS module qua NMEA protocol với độ chính xác cao và thời gian fix toạ độ nhanh',
      'Hoàn thiện luồng kiểm tra nồng độ cồn và in phiếu vi phạm tại chỗ trong vài giây',
      'Triển khai thực tế trên thiết bị chuyên dụng phục vụ công tác an toàn giao thông',
    ],
    technologies: ['Kotlin', 'GPS Modules', 'NMEA Protocol', 'Hardware SDK', 'Android/Embedded'],
  },
  {
    title: 'Enterprise Backend & Dynamic RBAC Platform',
    subtitle: 'Nền tảng phân quyền động Redis, xuất nhập Excel lớn & xác thực bảo mật',
    period: 'Feb 2025 – Aug 2025',
    category: 'Production / In-House',
    companyContext: 'METASOL Future Digital Technology',
    problem:
      'Hệ thống doanh nghiệp cần cơ chế phân quyền động linh hoạt, xử lý các báo cáo Excel hàng nghìn dòng và luồng đổi mật khẩu bảo mật cao mà không ảnh hưởng hiệu năng hệ thống.',
    solution:
      'Ứng dụng Spring Security + Redis dynamic authorization; thiết lập Spring Cache đa tầng giảm tải database; xử lý xuất/nhập dữ liệu Excel bất đồng bộ tối ưu bộ nhớ với Apache POI; bảo mật quy trình cấp lại mật khẩu qua email bằng JavaMailSender và token mã hóa có hạn dùng; dùng Cloudflare Tunnel để kết nối kiểm thử từ xa.',
    results: [
      'Tăng đáng kể tốc độ phản hồi API nhờ cơ chế cache toạ độ và phân quyền trên Redis',
      'Xử lý xuất/nhập báo cáo Excel mượt mà, không gặp hiện tượng OutOfMemory',
      'Vận hành quy trình Gitflow chuẩn chỉ trong nhóm 6 kỹ sư, bàn giao đúng tiến độ Jira',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Redis',
      'Spring Cache',
      'Apache POI',
      'JavaMailSender',
      'Docker',
      'Cloudflare Tunnel',
      'MySQL',
    ],
  },
  {
    title: 'Enterprise Microservices Architecture Prototype',
    subtitle: 'Mô hình Microservices với Spring Cloud Eureka, API Gateway & Oracle Database',
    period: 'Jul 2024 – Dec 2024',
    category: 'Production / In-House',
    companyContext: 'IT Solutions & Resources, JSC',
    problem:
      'Tiếp cận và xây dựng kiến trúc phân tán microservices đảm bảo khả năng định tuyến linh hoạt, service discovery và quản lý dữ liệu trên hệ quản trị cơ sở dữ liệu quan hệ Oracle Database của doanh nghiệp.',
    solution:
      'Xây dựng các RESTful microservices trên Java Spring Boot kết nối Oracle Database qua Spring Data JPA/Hibernate; tích hợp Spring Cloud Netflix Eureka làm registry discovery cho các service; thiết lập Spring Cloud API Gateway làm cổng tập trung điều hướng và filter request.',
    results: [
      'Thành thạo thiết kế RESTful API chuẩn mực, Dependency Injection và tối ưu truy vấn trên Oracle Database',
      'Triển khai thành công kiến trúc microservices demo tự động đăng ký và định tuyến qua Eureka và API Gateway',
      'Chuẩn hóa tài liệu API với Postman và Swagger, áp dụng unit testing',
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
    subtitle: 'Nền tảng thi đấu trắc nghiệm nhiều người chơi thời gian thực (Quizizz-style)',
    period: 'Jul 2025 – Aug 2025',
    category: 'Personal / Architecture',
    companyContext: 'Personal Project',
    problem:
      'Đồng bộ hóa trạng thái nhiều phòng chơi, tính điểm và cập nhật bảng xếp hạng thời gian thực với độ trễ cực thấp mà không làm nặng nề tài nguyên máy chủ bằng các web framework truyền thống.',
    solution:
      'Xây dựng backend bằng C# Core gọn nhẹ (sử dụng HttpListener & Dapper thay vì ASP.NET nặng nề) kết hợp Node.js Socket.io cho kết nối hai chiều thời gian thực; cache trạng thái game trên Redis để giảm tải database PostgreSQL; frontend ReactJS kết hợp Zustand quản lý state cục bộ mượt mà; đóng gói toàn bộ dịch vụ bằng Docker.',
    results: [
      'Tốc độ broadcast phòng chơi tức thì với mức tiêu thụ CPU/RAM máy chủ cực thấp',
      'Tách rời gánh nặng truy vấn database nhờ lưu trữ trạng thái phòng chơi trực tiếp trên Redis',
      'Mô hình kiến trúc đa dịch vụ đóng gói gọn gàng trong Docker Compose',
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
    subtitle: 'Hệ thống quản lý bán hàng, bảng giá đa tầng & ví nội bộ ghi sổ doanh thu',
    period: 'Jun 2025',
    category: 'Personal / Architecture',
    companyContext: 'Personal Project',
    problem:
      'Cần ma trận phân quyền phức tạp cho 3 nhóm vai trò (Admin, Sale, Nhà in) với yêu cầu thay đổi quyền hạn phải có hiệu lực ngay lập tức mà không bắt người dùng phải đăng nhập lại, kèm nghiệp vụ ví nội bộ ghi sổ dòng tiền theo trạng thái đơn hàng.',
    solution:
      'Hiện thực cơ chế phân quyền động bằng token kết hợp Spring Security và Redis; xây dựng bảng giá sản phẩm phân tầng, máy trạng thái (state machine) quản lý vòng đời đơn hàng và hệ thống ví nội bộ theo dõi nạp tiền, trừ tiền và chia sẻ doanh thu; kết nối PostgreSQL qua Spring Data JPA và container hóa bằng Docker.',
    results: [
      'Thu hồi hoặc cập nhật quyền hạn người dùng tức thì trên Redis mà không cần đăng nhập lại',
      'Hệ thống sổ cái ví nội bộ ghi nhận minh bạch mọi biến động số dư theo trạng thái đơn hàng',
      'Toàn bộ API được kiểm thử tự động khép kín với bộ sưu tập Postman Collection',
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
  logoUrl: '/HUCE_DHXD_Logo.png',
  degree: 'Bachelor of Computer Science',
  period: 'Oct 2022 – Mar 2026',
  location: 'Hanoi, Vietnam',
  highlights: [
    'Core coursework in Data Structures, Algorithms, Distributed Systems, Software Architecture, and Database Management.',
    'Applied research and real-world system engineering focus throughout academic journey.',
  ],
}
