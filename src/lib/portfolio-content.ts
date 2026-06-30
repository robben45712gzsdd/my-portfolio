export type Language = "vi" | "en";

export const languages: Record<Language, string> = {
  vi: "VI",
  en: "EN",
};

export const profile = {
  name: "Dương Văn Mạnh",
  role: "Front-End Developer",
  handle: "manhduong2953",
  website: "https://www.duongvanmanh.online",
  location: "Cau Giay District, Hanoi, Vietnam",
  phone: "0353421340",
  email: "duongvanmanh2953@gmail.com",
  github: "https://github.com/robben45712gzsdd",
  facebook: "https://www.facebook.com/manhduong2953/",
  resume: "/resume/Duong-Van-Manh-Frontend-Developer-CV.pdf",
};

export const content = {
  vi: {
    nav: {
      about: "Giới thiệu",
      services: "Năng lực",
      projects: "Dự án",
      skills: "Kỹ năng",
      process: "Quy trình",
      journey: "Kinh nghiệm",
      resume: "CV",
      contact: "Liên hệ",
    },
    common: {
      available: "Sẵn sàng cho cơ hội Front-End mới",
      contactMe: "Liên hệ",
      viewWork: "Xem dự án",
      getInTouch: "Trao đổi ngay",
      viewCv: "Xem CV",
      downloadCv: "Tải CV PDF",
      scroll: "Cuộn để xem thêm",
      liveDemo: "Demo",
      code: "Mã nguồn",
      featured: "Nổi bật",
      all: "Tất cả",
    },
    hero: {
      greeting: "Xin chào, tôi là Dương Văn Mạnh",
      roles: ["Front-End Developer", "Vue/Nuxt Developer", "React Developer"],
      description:
        "Front-End Developer có 2 năm kinh nghiệm xây dựng web app thực tế với Vue/Nuxt, React, TypeScript, RESTful API, UI responsive, tối ưu hiệu năng và quy trình Agile/Scrum.",
    },
    resume: {
      title: "CV cho nhà tuyển dụng",
      subtitle:
        "Bản tóm tắt nhanh từ CV mới nhất: kinh nghiệm, thế mạnh và thông tin liên hệ cần thiết để đánh giá nhanh mức độ phù hợp.",
      highlights: [
        { label: "Kinh nghiệm", value: "2 năm Front-End" },
        { label: "Thế mạnh", value: "Vue/Nuxt, React, TypeScript" },
        { label: "Sản phẩm", value: "CPMS, CMS, 3D Viewer, Web app" },
        { label: "Làm việc", value: "Agile/Scrum, Jira, Git, BA/QA/Backend" },
      ],
      note:
        "CV PDF đã được đính kèm trực tiếp trên portfolio để nhà tuyển dụng có thể mở hoặc tải xuống ngay.",
    },
    about: {
      title: "Giới thiệu",
      intro:
        "Tôi là Dương Văn Mạnh, Front-End Developer tốt nghiệp ngành Software Engineering in Information Technology tại Hanoi University of Mining and Geology (HUMG), GPA 3.37/4 và nhận 5 học bổng khuyến khích học tập.",
      summary:
        "Tôi tập trung xây dựng giao diện responsive, SEO-friendly và hiệu năng cao; có kinh nghiệm SPA, CSR, SSR, SSG, state management, tích hợp API, tái sử dụng component và phối hợp với BA, QA, Backend, Deployment trong môi trường Agile/Scrum.",
      facts: [
        "Vị trí: Front-End Developer",
        "Kinh nghiệm: 2 năm",
        "Định hướng: Mid-Level Front-End Developer",
      ],
      techTitle: "Công nghệ & công cụ",
      workflowTitle: "Cách tôi làm việc",
      workflow:
        "Tôi bắt đầu từ yêu cầu nghiệp vụ, chia nhỏ task trên Jira, ước lượng rõ ràng, xây dựng UI theo component có thể tái sử dụng, tích hợp RESTful API, review code, test luồng chính và tối ưu performance trước khi bàn giao.",
      passionsTitle: "Tôi quan tâm nhiều đến",
      passions: ["Web app hiệu năng cao", "UI/UX dễ dùng", "Kiến trúc component", "Tối ưu SEO"],
    },
    services: {
      title: "Năng lực chính",
      subtitle: "Những mảng tôi có thể đóng góp tốt trong dự án Front-End.",
      items: [
        {
          title: "Front-End Web App",
          description:
            "Xây dựng giao diện responsive, dễ bảo trì với Vue/Nuxt, React, TypeScript, Tailwind CSS và SCSS.",
          features: ["SPA, CSR, SSR, SSG", "Reusable components", "Pinia/Vuex state management", "Responsive UI"],
        },
        {
          title: "API & Real-time Integration",
          description:
            "Tích hợp RESTful API, xử lý state, authentication và các chức năng real-time cho sản phẩm vận hành thực tế.",
          features: ["RESTful APIs", "JWT/OAuth", "Socket.IO, PeerJS", "Error handling"],
        },
        {
          title: "Performance & SEO",
          description:
            "Tối ưu tốc độ tải, trải nghiệm người dùng và khả năng index cho landing page hoặc web app Nuxt.",
          features: ["Lazy loading", "Virtual scrolling", "Debounce/throttle", "Nuxt SSR/SSG"],
        },
        {
          title: "Team Workflow",
          description:
            "Làm việc theo Agile/Scrum với Jira, Git, code review và phối hợp chặt với BA, QA, Backend, Deployment.",
          features: ["Jira", "Git collaboration", "Code review", "Production support"],
        },
      ],
    },
    skills: {
      title: "Kỹ năng",
      subtitle: "Tech stack trong CV mới nhất và các công cụ tôi dùng thường xuyên.",
      categories: ["Tất cả", "Frontend", "Backend", "Mobile", "Database", "Libraries", "DevOps", "Workflow", "AI Support"],
    },
    process: {
      title: "Quy trình làm việc",
      subtitle: "Một quy trình thực tế cho Front-End Developer trong team sản phẩm.",
      steps: [
        {
          number: "01",
          title: "Phân tích yêu cầu",
          description:
            "Làm rõ nghiệp vụ với BA/team, xác định luồng người dùng, API cần dùng, trạng thái lỗi và tiêu chí nghiệm thu.",
        },
        {
          number: "02",
          title: "Thiết kế hướng triển khai",
          description:
            "Chia component, chọn state phù hợp, chuẩn bị responsive layout, loading state, empty state và kế hoạch tối ưu.",
        },
        {
          number: "03",
          title: "Phát triển & tích hợp",
          description:
            "Code UI, tích hợp API, xử lý auth/permission, tái sử dụng component và cập nhật task theo sprint.",
        },
        {
          number: "04",
          title: "Kiểm thử & tối ưu",
          description:
            "Test luồng chính, fix bug, review code, tối ưu render/performance và hỗ trợ deploy hoặc xử lý issue production.",
        },
      ],
    },
    timeline: {
      title: "Kinh nghiệm",
      subtitle: "Timeline học tập và kinh nghiệm làm việc cập nhật theo CV.",
      events: [
        {
          year: "08/02/2026 - nay",
          title: "Frontend Developer - Newway Technology Solutions JSC",
          desc:
            "Phát triển CPMS Cloud Property Management System cho khách sạn/nhà hàng: table ordering, menu ordering, giảm giá hóa đơn, chuyển order, dashboard, report, data visualization, real-time sync và bảo trì module production.",
        },
        {
          year: "04/06/2024 - 06/02/2026",
          title: "Frontend Developer - NekSolution Co., Ltd.",
          desc:
            "Tham gia nhiều dự án có lượng người dùng lớn: 3D Viewer bằng Nuxt 2, Three.js, Tailwind CSS, Ant Design Vue; Streamie CMS bằng Nuxt 3, TypeScript, Pinia cho quản trị nội dung, tài khoản, phân quyền và dữ liệu người dùng; landing page SEO có animation GSAP/AOS; tích hợp Web3 bằng Ethers.js. Tập trung tối ưu responsive UI, hiệu năng render, pagination/filter/search cho dữ liệu lớn, hỗ trợ deploy VPS và phối hợp Backend/QA xử lý bug production.",
        },
        {
          year: "2021 - 2025",
          title: "Hanoi University of Mining and Geology",
          desc:
            "Software Engineering in Information Technology, GPA 3.37/4, nhận 5 học bổng học tập; phát triển nền tảng web, database, backend, mobile và tư duy sản phẩm.",
        },
      ],
    },
    projects: {
      title: "Dự án cá nhân",
      subtitle:
        "Các dự án thể hiện khả năng xây dựng sản phẩm từ giao diện, API, database đến triển khai.",
      categories: ["Tất cả", "Web Development", "Mobile Development"],
    },
    contact: {
      title: "Liên hệ",
      subtitle: "Bạn có dự án hoặc cơ hội phù hợp? Tôi luôn sẵn sàng trao đổi.",
      formTitle: "Cùng làm việc",
      formSubtitle: "Gửi thông tin để bắt đầu trao đổi.",
      firstName: "Tên *",
      lastName: "Họ",
      email: "Email *",
      phone: "Số điện thoại",
      message: "Nội dung trao đổi *",
      send: "Gửi tin nhắn",
      sending: "Đang gửi...",
      wait: "Vui lòng chờ...",
      success: "Tin nhắn đã được gửi. Tôi sẽ phản hồi sớm.",
      error: "Gửi tin nhắn chưa thành công. Vui lòng thử lại.",
      errors: {
        firstName: "Vui lòng nhập tên",
        emailRequired: "Vui lòng nhập email",
        emailInvalid: "Email không hợp lệ",
        message: "Vui lòng nhập nội dung",
      },
    },
    footer: {
      summary:
        "Front-End Developer chuyên Vue/Nuxt, React, TypeScript, tối ưu hiệu năng và xây dựng web app thực tế theo quy trình Agile/Scrum.",
      navigation: "Điều hướng",
      contact: "Liên hệ",
      status: "Trạng thái",
      available: "Sẵn sàng trao đổi",
      builtWith: "Xây dựng với Next.js, TypeScript và Tailwind CSS",
      stats: ["Năm kinh nghiệm", "Học bổng", "GPA"],
    },
  },
  en: {
    nav: {
      about: "About",
      services: "Expertise",
      projects: "Projects",
      skills: "Skills",
      process: "Process",
      journey: "Experience",
      resume: "CV",
      contact: "Contact",
    },
    common: {
      available: "Available for new Front-End opportunities",
      contactMe: "Contact Me",
      viewWork: "View Projects",
      getInTouch: "Get In Touch",
      viewCv: "View CV",
      downloadCv: "Download CV PDF",
      scroll: "Scroll to explore",
      liveDemo: "Demo",
      code: "Code",
      featured: "Featured",
      all: "All",
    },
    hero: {
      greeting: "Hi, I'm Dương Văn Mạnh",
      roles: ["Front-End Developer", "Vue/Nuxt Developer", "React Developer"],
      description:
        "Front-End Developer with 2 years of hands-on experience building production web apps with Vue/Nuxt, React, TypeScript, RESTful APIs, responsive UI, performance optimization, and Agile/Scrum workflows.",
    },
    resume: {
      title: "CV for recruiters",
      subtitle:
        "A quick snapshot from my latest CV: experience, strengths, and contact details recruiters need for a fast fit check.",
      highlights: [
        { label: "Experience", value: "2 years Front-End" },
        { label: "Strengths", value: "Vue/Nuxt, React, TypeScript" },
        { label: "Products", value: "CPMS, CMS, 3D Viewer, Web apps" },
        { label: "Workflow", value: "Agile/Scrum, Jira, Git, BA/QA/Backend" },
      ],
      note:
        "The PDF CV is attached directly to this portfolio so recruiters can open or download it immediately.",
    },
    about: {
      title: "About Me",
      intro:
        "I am Dương Văn Mạnh, a Front-End Developer and Software Engineering in Information Technology graduate from Hanoi University of Mining and Geology (HUMG), with a GPA of 3.37/4 and 5 academic scholarships.",
      summary:
        "I focus on responsive, SEO-friendly, high-performance interfaces and have hands-on experience with SPA, CSR, SSR, SSG, state management, API integration, reusable component architecture, and collaboration with BA, QA, Backend, and Deployment teams.",
      facts: [
        "Position: Front-End Developer",
        "Experience: 2 years",
        "Goal: Mid-Level Front-End Developer",
      ],
      techTitle: "Tech & Tools",
      workflowTitle: "Workflow",
      workflow:
        "I start from business requirements, break work into Jira tasks, estimate clearly, build reusable UI components, integrate RESTful APIs, review code, test core flows, and optimize performance before handoff.",
      passionsTitle: "What I care about",
      passions: ["High-performance web apps", "Usable UI/UX", "Component architecture", "SEO optimization"],
    },
    services: {
      title: "Core Expertise",
      subtitle: "Areas where I can contribute strongly as a Front-End Developer.",
      items: [
        {
          title: "Front-End Web Apps",
          description:
            "Building responsive, maintainable interfaces with Vue/Nuxt, React, TypeScript, Tailwind CSS, and SCSS.",
          features: ["SPA, CSR, SSR, SSG", "Reusable components", "Pinia/Vuex state management", "Responsive UI"],
        },
        {
          title: "API & Real-time Integration",
          description:
            "Integrating RESTful APIs, state, authentication, and real-time features for production products.",
          features: ["RESTful APIs", "JWT/OAuth", "Socket.IO, PeerJS", "Error handling"],
        },
        {
          title: "Performance & SEO",
          description:
            "Improving load speed, user experience, and indexability for Nuxt apps and landing pages.",
          features: ["Lazy loading", "Virtual scrolling", "Debounce/throttle", "Nuxt SSR/SSG"],
        },
        {
          title: "Team Workflow",
          description:
            "Working in Agile/Scrum teams with Jira, Git, code reviews, and close collaboration with BA, QA, Backend, and Deployment.",
          features: ["Jira", "Git collaboration", "Code review", "Production support"],
        },
      ],
    },
    skills: {
      title: "Skills",
      subtitle: "Current CV tech stack and tools I use regularly.",
      categories: ["All", "Frontend", "Backend", "Mobile", "Database", "Libraries", "DevOps", "Workflow", "AI Support"],
    },
    process: {
      title: "Workflow",
      subtitle: "A practical Front-End workflow for product teams.",
      steps: [
        {
          number: "01",
          title: "Requirement Analysis",
          description:
            "Clarify business flows, API needs, edge cases, error states, and acceptance criteria with BA/team members.",
        },
        {
          number: "02",
          title: "Implementation Design",
          description:
            "Plan components, state, responsive layout, loading/empty states, and performance strategy.",
        },
        {
          number: "03",
          title: "Development & Integration",
          description:
            "Build UI, integrate APIs, handle auth/permissions, reuse components, and keep sprint tasks updated.",
        },
        {
          number: "04",
          title: "Testing & Optimization",
          description:
            "Test core flows, fix bugs, review code, optimize rendering/performance, and support deployment or production issues.",
        },
      ],
    },
    timeline: {
      title: "Experience",
      subtitle: "Education and professional experience updated from my latest CV.",
      events: [
        {
          year: "08/02/2026 - Present",
          title: "Frontend Developer - Newway Technology Solutions JSC",
          desc:
            "Developing CPMS Cloud Property Management System for hospitality businesses, including table/menu ordering, bill discounts, order transfers, dashboards, reports, data visualization, real-time sync, and production module maintenance.",
        },
        {
          year: "04/06/2024 - 06/02/2026",
          title: "Frontend Developer - NekSolution Co., Ltd.",
          desc:
            "Worked across high-user production projects: a Nuxt 2/Three.js 3D Viewer, the Nuxt 3/TypeScript/Pinia Streamie CMS for content, account, permission, and user-data management, SEO landing pages with GSAP/AOS animation, and Web3 features with Ethers.js. Focused on responsive UI, render performance, pagination/filter/search for larger data sets, VPS deployment support, and production bug fixing with Backend/QA.",
        },
        {
          year: "2021 - 2025",
          title: "Hanoi University of Mining and Geology",
          desc:
            "Software Engineering in Information Technology, GPA 3.37/4, 5 academic scholarships, and a foundation across web, database, backend, mobile, and product thinking.",
        },
      ],
    },
    projects: {
      title: "Personal Projects",
      subtitle:
        "Projects that show my ability to build products across UI, APIs, databases, and deployment.",
      categories: ["All", "Web Development", "Mobile Development"],
    },
    contact: {
      title: "Contact",
      subtitle: "Have a suitable project or opportunity? I am open to talk.",
      formTitle: "Let's work together",
      formSubtitle: "Send a short message to start the conversation.",
      firstName: "First name *",
      lastName: "Last name",
      email: "Email address *",
      phone: "Phone number",
      message: "Tell me about your project or inquiry *",
      send: "Send Message",
      sending: "Sending...",
      wait: "Please wait...",
      success: "Your message has been sent. I will get back to you soon.",
      error: "There was an error sending your message. Please try again.",
      errors: {
        firstName: "First name is required",
        emailRequired: "Email is required",
        emailInvalid: "Email is invalid",
        message: "Message is required",
      },
    },
    footer: {
      summary:
        "Front-End Developer specializing in Vue/Nuxt, React, TypeScript, performance optimization, and practical Agile/Scrum web app delivery.",
      navigation: "Navigation",
      contact: "Get In Touch",
      status: "Status",
      available: "Available to talk",
      builtWith: "Built with Next.js, TypeScript and Tailwind CSS",
      stats: ["Years Exp.", "Scholarships", "GPA"],
    },
  },
} as const;

export const skillItems = [
  { name: "Vue.js", category: "Frontend" },
  { name: "Nuxt.js", category: "Frontend" },
  { name: "React.js", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3/SCSS", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js / Express.js", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "Dart / Flutter", category: "Mobile" },
  { name: "SQL Server", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "Vuetify", category: "Libraries", description: "Vue UI library" },
  { name: "Ant Design Vue", category: "Libraries", description: "Enterprise UI components" },
  { name: "Socket.IO", category: "Libraries", description: "Realtime communication" },
  { name: "PeerJS", category: "Libraries", description: "WebRTC peer connection" },
  { name: "Firebase", category: "Libraries", description: "Auth, storage, realtime" },
  { name: "Cloudinary", category: "Libraries", description: "Media upload/CDN" },
  { name: "GSAP", category: "Libraries", description: "Web animation" },
  { name: "AOS", category: "Libraries", description: "Scroll animation" },
  { name: "Docker", category: "DevOps", description: "Container workflow" },
  { name: "VPS", category: "DevOps", description: "Linux server deployment" },
  { name: "Linux", category: "DevOps", description: "Server environment" },
  { name: "Git", category: "Workflow", description: "Version control" },
  { name: "Jira", category: "Workflow", description: "Sprint/task tracking" },
  { name: "Agile/Scrum", category: "Workflow", description: "Team delivery process" },
  { name: "MCP Server", category: "AI Support", description: "AI tool integration" },
  { name: "Codex CLI", category: "AI Support", description: "AI coding in terminal" },
  { name: "GitHub Copilot", category: "AI Support", description: "Code completion" },
  { name: "Claude", category: "AI Support", description: "Code review/support" },
  { name: "ChatGPT Plus", category: "AI Support", description: "Problem solving" },
];

export const projectItems = [
  {
    id: "vibe",
    title: "Vibe - Social Networking Web Application",
    description:
      "Full-stack social platform with real-time messaging, video calls, Web3 payments, and interactive 3D product visualization.",
    category: "Web Development",
    tags: ["ReactJS", "Material UI", "SCSS", "Three.js", "Node.js", "Express.js", "MySQL", "Redis", "Socket.IO", "PeerJS", "Cloudinary"],
    images: ["/projects/vibe_1.png", "/projects/vibe_7.png", "/projects/vibe_2.png", "/projects/vibe_3.png"],
    githubUrl: "https://github.com/robben45712gzsdd/vibe_social_client.git",
    liveUrl: "https://vibe-sn-client.onrender.com/",
    featured: true,
  },
  {
    id: "zingmp3",
    title: "Online Music Streaming Web Application",
    description:
      "Music streaming platform with audio playback, upload management, playlist features, VNPay payment, PHP/MySQL backend, and Cloudinary media handling.",
    category: "Web Development",
    tags: ["PHP", "MySQL", "Cloudinary", "VNPay", "Music Streaming"],
    images: ["/projects/zingmp3_1.png", "/projects/zingmp3_2.png", "/projects/zingmp3_3.png"],
    githubUrl: "https://github.com/robben45712gzsdd/zingmp3",
    featured: true,
  },
  {
    id: "foodapp",
    title: "FoodApp - Food Ordering Mobile Application",
    description:
      "Cross-platform Flutter food ordering app with cart, checkout, reviews, Node.js/Express APIs, and MySQL database.",
    category: "Mobile Development",
    tags: ["Flutter", "Dart", "Node.js", "Express.js", "MySQL"],
    images: ["/projects/foodapp_0.webp", "/projects/foodapp_1.png", "/projects/foodapp_2.png", "/projects/foodapp_3.png"],
    githubUrl: "https://github.com/robben45712gzsdd/FoodApp.git",
    featured: true,
  },
  {
    id: "xiaomi",
    title: "Landing Page Xiaomi 15",
    description:
      "Product landing page using GSAP ScrollTrigger/ScrollSmoother to create smooth storytelling interactions.",
    category: "Web Development",
    tags: ["GSAP", "ScrollTrigger", "Landing Page"],
    images: ["/projects/xiaomi-15.png"],
    liveUrl: "https://manhduong2953.github.io/GSAP_SCROLL_FRAME/",
    githubUrl: "https://github.com/ManhDuong2953/GSAP_SCROLL_FRAME.git",
    featured: false,
  },
  {
    id: "mephim",
    title: "Mephim Web App",
    description: "Movie web application built with React and TMDB API.",
    category: "Web Development",
    tags: ["React", "TMDB API"],
    images: ["/projects/mephim-web-app.png"],
    liveUrl: "https://manhduong2953.github.io/mephim/",
    githubUrl: "https://github.com/ManhDuong2953/mephim.git",
    featured: false,
  },
];
