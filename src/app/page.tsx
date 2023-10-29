import {
  BiLogoMongodb,
  BiLogoReact,
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen">
      <h1 className="text-center text-4xl m-6">Technologies</h1>
      <section className="flex justify-center">
        <main className="w-fit border rounded p-2">
          <div className="flex gap-2 text-xl font-light">
            <TbBrandNextjs className="mt-1" />
            <h1>Nextjs</h1>
          </div>
          <div className="flex gap-2 text-xl font-light">
            <BiLogoTailwindCss className="mt-1" />
            <h1>Tailwindcss</h1>
          </div>
          <div className="flex gap-2 text-xl font-light">
            <BiLogoReact className="mt-1" />
            <h1>React</h1>
          </div>
          <div className="flex gap-2 text-xl font-light">
            <BiLogoTypescript className="mt-1" />
            <h1>Typescript</h1>
          </div>
          <div className="flex gap-2 text-xl font-light">
            <BiLogoJavascript className="mt-1" />
            <h1>Javascript</h1>
          </div>
          <div className="flex gap-2 text-xl font-light">
            <Image src="/d3.jpg" alt="d3js" width={50} height={10} priority />
            <h1>Data-Driven Document (D3.js)</h1>
          </div>
          <div className="flex gap-2 text-xl font-light">
            <BiLogoMongodb className="mt-1" />
            <h1>MongoDB</h1>
          </div>
        </main>
      </section>
    </main>
  );
}
