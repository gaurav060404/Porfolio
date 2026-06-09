export const myProjects = [
  {
    id: 1,
    title: "Akashic Records - Centralized Entertainment Hub",
    description:
      "Designed to bring all forms of pop culture into one seamless and accessible platform.",
    subDescription: [
      "Built a centralized hub for movies, series, and anime with a unified entertainment experience.",
      "Integrated TMDB and Jikan APIs to dynamically fetch trending movies and anime content.",
      "Managed complex state dependencies and asynchronous data fetching efficiently with Recoil.",
    ],
    href: "https://akashicrecords.gouravsingh.dev",
    logo: "",
    image: "/assets/projects/akashicrecords.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "Recoil",
        path: "/assets/logos/recoil-js.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Short Url",
    description:
      "A fast and reliable URL shortening web app that transforms long links into concise, shareable URLs. Built with the MERN stack and a clean, responsive UI using React and TailwindCSS.",
    subDescription: [
      "Developed a secure and efficient URL shortening system using Node.js, Express, and MongoDB.",
      "Implemented an intuitive React frontend with TailwindCSS for a seamless user experience.",
    ],
    href: "https://shorturl.gouravsingh.dev",
    logo: "",
    image: "/assets/projects/ShortUrl.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "ExpressJS",
        path: "/assets/logos/expressjs.svg",
      },
    ],
  },
  {
    id: 3,
    title: "VidPlay – Video Sharing Platform Backend",
    description:
      "A YouTube-like backend API with user authentication, video upload/management, and cloud storage integration.",
    subDescription: [
      "Built a scalable backend for a YouTube-like platform with secure JWT authentication, file uploads, and cloud integration.",
      "Designed modular REST APIs for user management, video uploads, and media storage, improving maintainability and scalability.",
      "Implemented performance optimizations with MongoDB indexing and aggregation.",
    ],
    href: "https://github.com/gaurav060404/VidPlay",
    logo: "",
    image: "/assets/projects/VidPlay.png",
    tags: [
      {
        id: 1,
        name: "NodeJS",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 2,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 3,
        name: "ExpressJS",
        path: "/assets/logos/expressjs.svg",
      },
    ],
  },
  {
    id: 4,
    title: "News Summarization Chrome Extension",
    description:
      "Delivers real-time article summarization, allowing users to quickly grasp key points. Designed a userfriendly interface using HTML, CSS, and JavaScript for seamless in-browser integration and enhanced user experience.",
    subDescription: [
      "Built a Chrome extension that generates real-time news article summaries using the Facebook BART-CNN transformer model.",
      "Enabling faster content consumption for users.",
    ],
    href: "https://github.com/gaurav060404/news-text-summarization-extension",
    logo: "",
    image: "/assets/projects/summarize.png",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 2,
        name: "Html",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "CSS",
        path: "/assets/logos/css3.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Project Camp – Project Management Backend ",
    description:
      "A robust and scalable RESTful API for collaborative project management built with Express.js and MongoDB",
    subDescription: [
      "Built a scalable project management backend featuring RBAC, JWT authentication, email verification, and password reset functionality.",
      "Built RESTful APIs for managing projects, tasks, subtasks, and notes with multi-role permissions (Admin, Project Admin, Member).",
    ],
    href: "https://github.com/gaurav060404/ProjectCamp",
    logo: "",
    image: "/assets/projects/projectcamp.jpg",
    tags: [
      {
        id: 1,
        name: "NodeJS",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 2,
        name: "ExpressJS",
        path: "/assets/logos/expressjs.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "Github",
    href: "https://github.com/gaurav060404",
    icon: "/assets/logos/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/singh-gourav/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Leetcode",
    href: "https://leetcode.com/u/GouravSingh060404/",
    icon: "/assets/logos/leetcode.png",
  },
];

export const experiences = [
  {
    title: "Full Stack Developer Intern, Axamine AI",
    job: "Frontend & Backend Projects",
    date: "May 2025 - Jul 2025",
    contents: [
      "Built and maintained full-stack web applications for AI-powered projects, delivering production-ready features in an agile environment.",
      "Developed responsive user interfaces with React, reducing frontend bugs and improving user experience.",
      "Integrated AI-powered modules into the existing stack, automating key workflows and improving system efficiency",
      "Contributed to DocDynamo, an AI-powered documentation assistant, by engineering scalable frontend components in React.",
      "Implemented responsive UI with Tailwind CSS and optimized API integration with Axios, ensuring seamless data flow and faster rendering.",
    ],
  },
  {
    title: "Full Stack Developer Intern, OpenRAG Innovations Pvt. Ltd.",
    job: "Full Stack Projects",
    date: "Jan 2026 - Present",
    contents: [
      "Working closely with the core engineering team to build, improve, and scale web-based systems supporting product and research initiatives.",
      "Developing and maintaining full-stack features across frontend and backend with a focus on performance, reliability, and clean system design.",
      "Collaborating on designing scalable and efficient application architectures and integrating APIs, databases, and frontend components.",
      "Debugging, optimizing, and improving existing workflows while contributing ideas to enhance overall product quality.",
    ],
  },
];
