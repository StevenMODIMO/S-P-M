type navlinksType = {
  id: number;
  title: string;
  path: string;
};

const navlinks: navlinksType[] = [
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

export default navlinks;
