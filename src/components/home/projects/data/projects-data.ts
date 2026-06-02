import { Project } from "@/types/projects-types";
import { FaMobileAlt } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";

export const projectsData: Project[] = [
  {
    id: "techpathfinder",
    title: "TechPathFinder",
    subtitle: "Event Management Platform",
    projectType: "website",
    description:
      "A full-stack event management platform with real-time events management, registration, and admin dashboard.",
    images: [
      "/projects/techpathfinder/tpf_01.png",
      "/projects/techpathfinder/tpf_02.png",
      "/projects/techpathfinder/tpf_03.png",
    ],
    githubUrl: "https://github.com/mohitxcodes",
    liveUrl: "https://techpathfinder.msxcodes.in",
    technologies: [
      "Next.js",
      "ExpressJs",
      "MongoDB",
      "Tailwind",
      "Docker",
    ],
    featured: true,
    challenges: [
      "Implementing real-time updates across multiple devices",
      "Handling concurrent user registrations",
      "Optimizing database queries for large datasets",
    ],
    impact: [
      "Reduced event management time by 60%",
      "Increased user engagement by 40%",
      "Improved registration process efficiency",
    ],
    role: "Full Stack Developer",
    duration: "3 months",
    techStack: {
      frontend: "Next.js + Tailwind, with real-time updates using Socket.io",
      backend: "Node.js + Express with MongoDB for data persistence",
      devops: "CI/CD using GitHub Actions, deployed on Vercel",
      extras:
        "JWT authentication, role-based access control, and real-time notifications",
    },
  },
  {
    id: "insightsEd",
    title: "InsightsEd",
    subtitle: "AI-Powered Study Notes Generator",
    projectType: "ai",
    description:
      "A web application that allows users to generate study notes using AI.",
    images: [
      "/projects/insightsEd/insightsEd_01.png",
      "/projects/insightsEd/insightsEd_02.png",
    ],
    githubUrl: "https://github.com/mohitxcodes/insighted-frontend",
    liveUrl: "https://insights-ed.vercel.app",
    technologies: [
      "React",
      "Gemini API",
      "MongoDB",
      "Express",
      "Redis",
    ],
    featured: true,
    challenges: [
      "Ensuring AI accuracy and reliability",
      "Managing large datasets for AI training",
      "Integrating AI with existing educational systems",
    ],
    impact: [
      "Enhanced learning experience for students",
      "Reduced study time by 30%",
      "Improved note organization and retrieval",
    ],
    role: "AI Developer",
    duration: "2 months",
    techStack: {
      frontend: "React + Tailwind, with AI result rendering via react-markdown",
      backend:
        "Node.js + Express with OpenAI API integration; used background jobs (BullMQ + Redis) to queue video transcription",
      devops:
        "CI/CD using GitHub Actions + Dockerized backend; deployed on Render",
      extras:
        "Rate-limiting via express-rate-limit, user-level API quotas, and Swagger docs for public API",
    },
  },

  {
    id: "yashwantkumar",
    title: "Portfolio Website",
    subtitle: "Web Application for his personal portfolio",
    projectType: "website",
    description:
      "A web application that showcases Dr. Yashwant Kumar's academic and professional achievements.",
    images: ["/projects/yk/yk-01.png", "/projects/yk/yk-02.png"],
    githubUrl: "https://github.com/mohitxcodes/yk-portfolio",
    liveUrl: "https://yashwantkumar.com",
    technologies: [
      "ReactJs",
      "TypeScript",
      "Firebase",
      "Tailwind CSS",
      "Framer Motion",
    ],
    featured: true,
    challenges: [
      "Designing and implementing a visually appealing and responsive UI",
      "Integrating content from various sources (Academic papers, Research papers, etc.)",
      "Optimizing performance and ensuring smooth user experience",
    ],
    impact: [
      "Providing a centralized platform for Dr. Yashwant Kumar's work",
      "Enhancing his online presence and visibility",
      "Simplifying access to his academic and professional achievements",
    ],
    role: "Frontend Developer",
    duration: "15-20 Days",
    techStack: {
      frontend: "React + Tailwind CSS",
      backend: "Firebase for hosting and storing content",
      devops: "CI/CD using GitHub Actions, deployed on Firebase Hosting",
      extras: "No additional libraries or frameworks were used",
    },
  },
  {
    id: "playnex",
    title: "PlayNex",
    subtitle:
      "Online platform for booking and managing tournaments, matches, and teams",
    projectType: "website",
    description:
      "A web application that enables users to register for tournaments, find teams, and manage their schedules.",
    images: [
      "/projects/playnex/playnex-01.png",
      "/projects/playnex/playnex-02.png",
    ],
    githubUrl: "#",
    liveUrl: "https://playnex.in",
    technologies: ["ReactJs", "Express", "Tailwind", "MongoDB", "Node.js"],
    featured: true,
    challenges: [
      "Implementing a robust user authentication system",
      "Designing and implementing a responsive and user-friendly UI",
      "Integrating third-party APIs for team and tournament management",
    ],
    impact: [
      "Simplifying the process of booking tournaments and matches",
      "Enabling users to find and join teams for their favorite games",
      "Providing a centralized platform for managing tournament schedules and match results",
    ],
    role: "Full Stack Developer",
    duration: "6 months",
    techStack: {
      frontend: "React + Tailwind CSS",
      backend: "Node.js + Express with MongoDB for data persistence",
      devops: "CI/CD using GitHub Actions, deployed on Vercel",
      extras:
        "JWT authentication, role-based access control, and third-party API integration",
    },
  },
  {
    id: "mysgpatracker",
    title: "MySGPATracker",
    subtitle: "A Flutter app for calculating SGPA.",
    projectType: "app",
    description:
      "A mobile app built using Flutter and Firebase. The app allows students to enter their subject grades and credit hours, and calculates the SGPA (Semester GPA) and cumulative GPA.",
    images: ["/projects/mysgpatracker/mysgpatracker.png"],
    githubUrl: "https://github.com/mohitxcodes/my-sgpa-tracker",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.msxcodes.my_sgpa_tracker",
    technologies: ["Flutter", "Firebase", "Dart", "Hive"],
    featured: false,
    challenges: [
      "Designing and implementing a responsive and user-friendly UI",
      "Integrating Firebase authentication and database for storing and retrieving data",
      "Calculating and updating SGPA and cumulative GPA based on user inputs",
    ],
    impact: [
      "Improving the efficiency of calculating SGPA for students",
      "Providing a convenient and intuitive app for students to use",
      "Showcasing the versatility of Flutter and Firebase in mobile app development",
    ],
    role: "Mobile Developer",
    duration: "2 weeks",
    techStack: {
      frontend: "Flutter",
      backend: "Firebase for hosting and storing content",
      devops: "CI/CD using GitHub Actions, deployed on Google Play Store",
      extras: "No additional libraries or frameworks were used",
    },
  },
  {
    id: "painal",
    title: "Painal Village App",
    subtitle: "A Flutter app for village information.",
    projectType: "app",
    description:
      "A mobile app built using Flutter and Firebase. The app allows village residents to view and manage their ancestry, village information, and other relevant data.",
    images: ["/projects/painal/painal.png"],
    githubUrl: "https://github.com/mohitxcodes/painal_app",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.mohitxcodes.painal",
    technologies: ["React Native", "Supabase", "Expo", "postgresql"],
    featured: false,
    challenges: [
      "Designing and implementing a responsive and user-friendly UI",
      "Integrating Firebase authentication and database for storing and retrieving data",
      "Managing and organizing village information",
    ],
    impact: [
      "Simplifying the access to village information and ancestry records",
      "Enabling village residents to manage their personal data",
      "Showcasing the versatility of Flutter and Firebase in mobile app development",
    ],
    role: "Mobile Developer",
    duration: "2 months",
    techStack: {
      frontend: "Flutter",
      backend: "Firebase for hosting and storing content",
      devops: "CI/CD using GitHub Actions, deployed on Google Play Store",
      extras: "Cloudinary for storing and managing images",
    },
  },
  {
    id: "netspeq-solutions",
    title: "Netspeq Solutions",
    subtitle:
      "Clone website of an IT company built on top of ReactJS, TailwindCSS, and JavaScript",
    projectType: "website",
    description:
      "A clone website of an IT company built on top of ReactJS, TailwindCSS, and JavaScript. The website includes features like a homepage, about page, services page, portfolio page, contact page, and a blog section.",
    images: [
      "/projects/netspeq/netspeq-01.png",
      "/projects/netspeq/netspeq-02.png",
    ],
    githubUrl: "https://github.com/mohitxcodes/netspeqClone",
    liveUrl: "https://netspeq-solutions.netlify.app/",
    technologies: ["ReactJs", "TailwindCSS", "JavaScript"],
    featured: false,
    challenges: [
      "Implementing a responsive and user-friendly UI",
      "Integrating third-party APIs for fetching data",
      "Handling routing and navigation using React Router",
    ],
    impact: [
      "Building a website that closely resembles the original website",
      "Improving my skills in ReactJS and TailwindCSS",
      "Learning how to fetch and display data from third-party APIs",
    ],
    role: "Full Stack Developer",
    duration: "2 weeks",
    techStack: {
      frontend: "ReactJS + TailwindCSS",
      backend: "No backend was used",
      devops: "CI/CD using GitHub Actions, deployed on Vercel",
      extras: "No additional libraries or frameworks were used",
    },
  },
  {
    id: "maxMovie",
    title: "Max Movie",
    subtitle: "Web Application for Movie Reviews",
    projectType: "website",
    description:
      "A web application that allows users to search for movies and read reviews.",
    images: [
      "/projects/max_movie/maxmovie_01.png",
      "/projects/max_movie/maxmovie_02.png",
    ],
    githubUrl: "https://github.com/mohitxcodes/max-movie",
    liveUrl: "https://max-movie.vercel.app",
    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "TMDB API",
      "Redux",
    ],
    featured: false,
    challenges: [
      "Handling large movie datasets",
      "Ensuring fast and accurate search results",
      "Balancing user reviews and ratings",
    ],
    impact: [
      "Improved movie discovery experience",
      "Increased user engagement",
      "Enhanced movie information accessibility",
    ],
    role: "Frontend Developer",
    duration: "2 months",
    techStack: {
      frontend: "React + Next.js + Tailwind CSS",
      backend: "Node.js + Express with MongoDB for data persistence",
      devops: "CI/CD using GitHub Actions, deployed on Vercel",
      extras: "Chart.js for data visualization",
    },
  },
];

export const projectTabs = [
  {
    id: "all",
    label: "All Projects",
    icon: null,
    color: "bg-gray-900 dark:bg-gray-100 dark:text-gray-900",
  },
  { id: "website", label: "Web Apps", icon: FaDesktop, color: "bg-blue-600" },
  { id: "ai", label: "AI Projects", icon: FaRobot, color: "bg-purple-600" },
  { id: "app", label: "Mobile Apps", icon: FaMobileAlt, color: "bg-green-600" },
];
