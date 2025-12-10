type navlinksType = {
  id: number;
  title: string;
  path: string;
};

type dashboard = {
  id: number;
  title: string;
};

interface TestimonyTyes {
  id: number;
  title: string;
  feedback: string;
  stars: number;
}

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
    title: "Skills and Stack",
    path: "/#skills",
  },
  {
    id: 4,
    title: "Testimonials",
    path: "/#testimonials",
  },

  {
    id: 5,
    title: "Projects",
    path: "/projects",
  },
];

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
