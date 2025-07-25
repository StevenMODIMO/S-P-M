import Icons from "@/components/Icons";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      {/* <section className="flex flex-col gap-5">
        <div className="flex flex-col items-center gap-4">
          <p
            className={`text-4xl text-start w-60 sm:w-96 sm:text-5xl md:w-[500px] lg:w-[700px] lg:text-7xl`}
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
      <Footer /> */}
      <section className="flex gap-4 items-center">
        <div className="h-44 w-44 rounded-md bg-[#333333]"></div>
        <div className="h-44 w-44 rounded-md bg-[#2a2929]"></div>
        <div className="h-44 w-44 rounded-md bg-[#262626]"></div>
      </section>
    </main>
  );
}
