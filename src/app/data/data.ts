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
  {
    id: 5,
    title: "Contact",
    path: "/contact",
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
