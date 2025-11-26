import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Tools from "@/components/Tools";
import Testimony from "@/components/Testimony";

export default function Home() {
  return (
    <main className="h-full flex flex-col gap-12">
      <Hero />
      <About />
      <Expertise />
      <Tools />
      <Testimony />
    </main>
  );
}
