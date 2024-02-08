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
      <p className="text-center">
        Hello, I'm Steven Modimo, a passionate full stack web developer. I
        thrive on turning ideas into interactive experiences that leave a
        lasting impact.
      </p>
      <p className="text-center">
        A little about me I love building Stuffs for the web Building solutions
        for the web offers unparalleled accessibility to a wide audience,
        setting it apart from native apps that often demand intricate
        installation and configuration procedures. With web-based applications,
        all it takes is a simple URL entry, and the service is instantly
        available at your fingertips. This seamless accessibility eliminates
        barriers and instantly connects users to the content they need,
        fostering a smoother and more user-centric experience.
      </p>
    </div>
  );
};

export default About;
