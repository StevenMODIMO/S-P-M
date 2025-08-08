"use client";
import Container from "./Container";
import Header from "./ui/Header";

export default function Expertise() {
  return (
    <div>
      <Container>
        <section className="text-[#393a1f] dark:text-white flex flex-col gap-3">
          <h1 className="font-semibold text-2xl text-[#393a1f] dark:text-[#E7EE1A]">
            My Expertise
          </h1>
          <p>
            I <span className="text-[#9CA600] dark:text-[#E7EE1A]">build</span>{" "}
            with purpose,{" "}
            <span className="text-[#9CA600] dark:text-[#E7EE1A]">design</span>{" "}
            with intent, and{" "}
            <span className="text-[#9CA600] dark:text-[#E7EE1A]">code</span>{" "}
            with clarity.
          </p>
        </section>
        <section className="md:flex md:flex-col md:gap-12">
          <div className="flex flex-col gap-4 md:w-[50%]">
            <Header className="text-[#393a1f] dark:text-white text-4xl">
              Frontend development
            </Header>
            <p className="text-sm lg:text-base dark:text-white">
              I love creating visually compelling interfaces, user experience
              and landing pages optimized for conversions. I combine design
              systems, performance best practices, and scalable component
              structures to build fast, responsive web experiences. Every
              detail—from typography to micro-interactions—is shaped with the
              end user in mind.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:w-[50%] md:ml-auto">
            <Header className="text-[#393a1f] dark:text-white text-4xl">
              Backend development
            </Header>
            <p className="text-sm lg:text-base dark:text-white">
              I design and implement server-side logic with a strong focus on
              API performance, code re-usability, and clean architectural
              patterns. From authentication and authorization workflows to
              request handling, data validation, and integration with
              third-party services, I ensure backend systems are secure,
              efficient, and maintainable.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:w-[50%]">
            <Header className="text-[#393a1f] dark:text-white text-4xl">
              Database management
            </Header>
            <p className="text-sm lg:text-base dark:text-white">
              I develop robust data management for storage, retrieval, creation,
              and action-triggered processes. I specialize in designing and
              managing both SQL and NoSQL databases—such as PostgreSQL and
              MongoDB—to ensure fast, reliable, and scalable data operations. My
              expertise includes optimizing schemas, crafting efficient queries,
              and maintaining data integrity for seamless application
              performance.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:w-[50%] md:ml-auto">
            <Header className="text-[#393a1f] dark:text-white text-4xl">
              Fullstack development
            </Header>
            <p className="text-sm lg:text-base dark:text-white">
              I bridge the gap between client-side interfaces and server-side
              logic, ensuring efficient data flow and consistent functionality
              throughout the product. By focusing on clean code architecture,
              scalable solutions, and seamless API integrations, I help deliver
              smooth, reliable experiences that meet both user and business
              needs.
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
}
