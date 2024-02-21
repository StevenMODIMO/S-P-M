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

export const navlinks: navlinksType[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Projects",
    path: "/projects",
  },
  {
    id: 3,
    title: "Blog",
    path: "/blog",
  },
  {
    id: 4,
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
