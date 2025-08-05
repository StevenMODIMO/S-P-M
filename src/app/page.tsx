import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="h-full flex flex-col gap-12">
      <Hero />
      <About />
      <Footer />
      {/* <section className="flex gap-4 items-center">
        <div className="h-44 w-44 rounded-md bg-[#333333]"></div>
        <div className="h-44 w-44 rounded-md bg-[#2a2929]"></div>
        <div className="h-44 w-44 rounded-md bg-[#262626]"></div>
      </section> */}
    </main>
  );
}
