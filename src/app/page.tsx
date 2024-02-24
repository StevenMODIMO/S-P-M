import { Russo_One, Fredoka } from "next/font/google";
import Icons from "./(components)/Icons";

const russoOne = Russo_One({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: "400",
});

const fredoka = Fredoka({
  subsets: ["hebrew", "latin", "latin-ext"],
  weight: "300",
});

export default function Home() {
  return (
    <main className="text-white">
      <section className="flex flex-col gap-10">
        <div className="flex flex-col items-center gap-4">
          <p
            className={`${russoOne.className} text-4xl text-start w-60 sm:w-96 sm:text-5xl md:w-[500px] lg:w-[700px] lg:9xl`}
          >
            Unlocking Possibilities through{" "}
            <span className="text-[#DEC544] sm:text-black">code</span>.
          </p>
          <Icons />
        </div>
        <p className="w-60 mx-auto text-xl sm:w-96 sm:text-2xl md:w-[500px] lg:w-[700px] lg:text-4xl">
          Welcome to my digital realm, where creativity meets functionality.
          Join me on a journey of Innovation and Problem Solving.
        </p>
      </section>
    </main>
  );
}

{
  /* <div
        className={`max-w-4xl mx-auto px-4 flex flex-col justify-center items-center gap-8`}
      >
        <h1 className={`text-4xl sm:text-6xl font-bold text-center`}>
          Unlocking Possibilities through Code{" "}
          <span className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
            <Image
              alt="Terminal Icon"
              src="/terminal.svg"
              width={20}
              height={20}
            />
          </span>
        </h1>
        <p className="text-lg text-center">
          Welcome to my digital realm, where creativity meets functionality.
          Join me on a journey of Innovation and Problem Solving.
        </p>
      </div>
      <div className="text-[#DEC544] h-screen mt-24" id="about">
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
            offers unparalleled accessibility to a wide audience, setting it
            apart from native apps that often demand intricate installation and
            configuration procedures. With web-based applications, all it takes
            is a simple URL entry, and the service is instantly available at
            your fingertips. This seamless accessibility eliminates barriers and
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
      </div> */
}
