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
  id: number,
  option: string
}

export const filterOptions: filterTypes[] = [
  {
    id: 1,
    option: 'Latest'
  },
  {
    id: 2,
    option: 'Testing'
  },
  {
    id: 3,
    option: 'React'
  },
  {
    id: 4,
    option: 'Node.js'
  }
]

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
    path: "/about",
  },
  {
    id: 3,
    title: "Projects",
    path: "/projects",
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
  },
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
