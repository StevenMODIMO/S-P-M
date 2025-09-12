type navlinksType = {
  id: number;
  title: string;
  path: string;
};

type socialType = {
  id: number;
  path: string;
  name: string;
};

type expertise = {
  id: number;
  role: string;
  description: string;
};

type tools = {
  id: number;
  name: string;
};

type dashboard = {
  id: number;
  title: string;
};

type filterTypes = {
  id: number;
  option: string;
};

type projects = {
  id: number;
  name: string;
  features: string[];
};

interface BlogPlaceholdersTypes {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  image: string;
}

interface TestimonyTyes {
  id: number;
  title: string;
  feedback: string;
  stars: number;
}

export const testimonials: TestimonyTyes[] = [
  {
    id: 1,
    title: "NextJS Developer - Perfomance Optimization and API intergration",
    feedback: `Exceptional NextJS Developer – Highly Recommended!
    I had the pleasure of working with Steven on a project that required expertise in Next.js, performance optimization, and API integration. Despite being new to Upwork, Steven demonstrated an impressive level of professionalism, technical skill, and problem-solving abilities throughout the project.
    He quickly identified and addressed performance bottlenecks, significantly improving our website’s speed and efficiency. His integration of Google and Facebook social logins with the backend was flawless, and his attention to detail ensured seamless functionality. Communication was always prompt, and he provided valuable insights and suggestions that went beyond the scope of the project.
    If you're looking for a dedicated, talented NextJS developer who can deliver quality work on time, Steven is the right person for the job. I highly recommend him and look forward to working with him again!`,
    stars: 5,
  },
  {
    id: 2,
    title: "React js developer",
    feedback:
      "Awesome guy to work with Completed works in less than expected time and beyond expectations",
    stars: 5,
  },
];

export const blogPlaceholders: BlogPlaceholdersTypes[] = [
  {
    id: 1,
    title: "Understanding React Hooks",
    description:
      "A deep dive into the world of React Hooks, exploring their benefits and how to use them effectively.",
    createdAt: "2023-10-01",
    image: "/images/blog/react-hooks.jpg",
  },
  {
    id: 2,
    title: "Building Scalable Node.js Applications",
    description:
      "Learn how to build scalable applications using Node.js, focusing on best practices and performance optimization.",
    createdAt: "2023-10-05",
    image: "/images/blog/nodejs-scalable.jpg",
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox",
    description:
      "A comprehensive comparison between CSS Grid and Flexbox, helping you choose the right layout technique for your projects.",
    createdAt: "2023-10-10",
    image: "/images/blog/css-grid-flexbox.jpg",
  },
];

export const upcomingProjects: projects[] = [
  {
    id: 1,
    name: "Project Management Tool",
    features: [
      "Task boards",
      "Real-time updates",
      "Reporting and Analytics",
      "Gantt Charts",
      "File Sharing and Document Management",
    ],
  },
  {
    id: 2,
    name: "E-learning Platform",
    features: [
      "Course Management",
      "Content Creation and Delivery",
      "Progress Tracking and Reporting",
      "Discussion Forums and Collaboration Tools",
      "Gamification and Engagement Features",
    ],
  },
  {
    id: 3,
    name: "Video Streaming Application",
    features: [
      "Content Library",
      "Search and Discovery",
      "Offline Viewing",
      "Subscription Management",
      "Cross-Device Syncing",
    ],
  },
  {
    id: 4,
    name: "A.I Personalized Recipe Generator",
    features: [
      "Cooking Instructions and Tips",
      "Ingredient Substitution",
      "Meal Planning",
      "Recipe Sharing",
      "Custom Recipe Creation",
    ],
  },
  // {
  //   id: 5,
  //   name: "Interactive 3D Portfolio",
  //   features: [""],
  // },
];

export const filterOptions: filterTypes[] = [
  {
    id: 1,
    option: "Latest",
  },
  {
    id: 2,
    option: "Frontend",
  },
  {
    id: 3,
    option: "Backend",
  },
  {
    id: 4,
    option: "Database",
  },
];

export const dashboardLinks: dashboard[] = [
  {
    id: 0,
    title: "Overview",
  },
  {
    id: 1,
    title: "Markdown",
  },
  {
    id: 2,
    title: "Analytics",
  },
  {
    id: 3,
    title: "Manager",
  },
];

export const mytools: tools[] = [
  {
    id: 1,
    name: "HTML",
  },
  {
    id: 2,
    name: "CSS",
  },
  {
    id: 3,
    name: "JavaScript",
  },
  {
    id: 4,
    name: "TypeScript",
  },
  {
    id: 5,
    name: "React",
  },
  {
    id: 6,
    name: "Graphql",
  },
  {
    id: 7,
    name: "NodeJS",
  },
  {
    id: 8,
    name: "NextJS",
  },
  {
    id: 9,
    name: "SQL",
  },
  {
    id: 10,
    name: "Firebase",
  },
  {
    id: 11,
    name: "Tailwind",
  },
  {
    id: 12,
    name: "Python",
  },
  {
    id: 13,
    name: "Django",
  },
  {
    id: 14,
    name: "Express",
  },
  {
    id: 15,
    name: "Git",
  },
  {
    id: 16,
    name: "Jest",
  },
  {
    id: 17,
    name: "MongoDB",
  },
  {
    id: 18,
    name: "MySql",
  },
  {
    id: 19,
    name: "Postgres",
  },
  {
    id: 20,
    name: "Redis",
  },
  {
    id: 21,
    name: "VsCode",
  },
  {
    id: 22,
    name: "Windows",
  },
];

export const navlinks: navlinksType[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/#about",
  },
  {
    id: 3,
    title: "Testimonials",
    path: "/#testimonials",
  },
  // {
  //   id: 4,
  //   title: "04. Blog",
  //   path: "/blog",
  // },
  {
    id: 4,
    title: "Projects",
    path: "/projects",
  },
  // {
  //   id: 6,
  //   title: "06. Get in touch",
  //   path: "/contact",
  // },
];

export const socialLinks: socialType[] = [
  {
    id: 1,
    path: "https://github.com/StevenMODIMO",
    name: "Github",
  },
  {
    id: 2,
    path: "https://web.facebook.com/profile.php?id=100090569018744",
    name: "Facebook",
  },
  {
    id: 3,
    path: "https://www.linkedin.com/in/steven-modimo-912521204/",
    name: "Linkedin",
  },
  {
    id: 4,
    path: "https://twitter.com/Steve_Modimo",
    name: "Twitter",
  },
];

export const myexpertise: expertise[] = [
  {
    id: 1,
    role: "Frontend Developement",
    description:
      "As a frontend developer, I excel in creating intuitive user interfaces and engaging user experiences",
  },
  {
    id: 2,
    role: "Backend Developement",
    description:
      "My backend development skills enable me to build robust and scalable server-side solutions.",
  },
  {
    id: 3,
    role: "Database Management",
    description:
      "I'm proficient in managing databases to ensure efficient storage and retrieval of data.",
  },
  {
    id: 4,
    role: "FullStack Developement",
    description:
      "With a full stack development background, I can bridge the gap between frontend and backend.",
  },
];
