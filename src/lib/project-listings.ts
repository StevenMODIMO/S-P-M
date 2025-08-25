interface ProjectListingsTypes {
  id: number;
  title: string;
  thumbnail: string;
  icon: string;
  description: string;
  demoLink?: string;
  githubLink?: string;
  figmaLink?: string;
  stack: string[];
  category: string[];
}

export const projectsListings: ProjectListingsTypes[] = [
  {
    id: 1,
    title: "Project Management Dashboard",
    thumbnail: "/portfolio-assets/thumbnails/pmd-thumbnail.png",
    icon: "/portfolio-assets/pmd-logo.svg",
    description:
      "A web-based dashboard that helps teams and individuals plan, track, and manage projects efficiently.",
    figmaLink:
      "https://www.figma.com/design/CLpcMTLrxLIkO7ed0jSLIs/Project-Management-Dashboard?node-id=0-1&t=feOVGa3TxJP3IgyM-1",
    stack: ["Figma", "UI/UX Design"],
    category: ["UI", "UX", "Design"],
  },
  {
    id: 2,
    title: "Next.js Ecommerce",
    thumbnail: "/portfolio-assets/thumbnails/qc-thumbnail.png",
    icon: "/portfolio-assets/qc-logo.svg",
    description:
      "A modern e-commerce platform built with Next.js and Stripe, offering a seamless shopping experience with secure payment processing and dynamic product management.",
    githubLink: "https://github.com/StevenMODIMO/next-ecommerce-stripe",
    demoLink: "https://quick-cart-plum.vercel.app/",
    stack: ["Next.js", "React", "Postgres", "Vercel"],
    category: ["Ecommerce", "Fullstack", "Web"],
  },
];

/** It provides a centralized space to create tasks, assign team members, set deadlines, and monitor progress in real time. The goal is to improve collaboration, transparency, and productivity across projects. */
