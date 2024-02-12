import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="text-[#DEC544] h-screen mt-24">
      <Image
        alt="teminal-icon"
        src="/1698083088330.jpg"
        width={200}
        height={200}
        className="mx-auto rounded"
      />
      <p className="text-center text-xl my-12">
        Hello, I'm Steven Modimo, a passionate full stack web developer. I
        thrive on turning ideas into interactive experiences that leave a
        lasting impact.
      </p>
      <div className="h-screen p-2 mt-24">
        <h1 className="text-center text-3xl p-2">Why I love the web ?</h1>
        <p className="text-center text- p-2">
          I love building Stuffs for the web Building solutions for the web
          offers unparalleled accessibility to a wide audience, setting it apart
          from native apps that often demand intricate installation and
          configuration procedures. With web-based applications, all it takes is
          a simple URL entry, and the service is instantly available at your
          fingertips. This seamless accessibility eliminates barriers and
          instantly connects users to the content they need, fostering a
          smoother and more user-centric experience.
        </p>
      </div>

      <section className="h-screen">
        <h1 className="text-center text-3xl p-2">/ My Expertise</h1>
        <ul className="grid items-center p-2 m-2">
          <li className="text-center p-4">Frontend Development</li>
          <li className="text-center p-4">Backend Development</li>
          <li className="text-center p-4">Full Stack Development</li>
          <li className="text-center p-4">Database Administration</li>
        </ul>
      </section>
    </div>
  );
};

export default About;