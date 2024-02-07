import { Russo_One } from "next/font/google";
import Image from "next/image";

const russoOne = Russo_One({ subsets: ["cyrillic"], weight: "400" });

export default function Home() {
  return (
    <main className={`${russoOne.className} flex flex-col gap-10 py-4`}>
      <div>
        <h1 className="text-center text-4xl text-[#FFFFFF] mt-5">
          Unlocking Possibilities through code
          <span className="flex justify-center w-fit mx-auto p-1 rounded mt-2">
            <Image
              alt="teminal-icon"
              src="/terminal.svg"
              width={25}
              height={25}
            />
          </span>
        </h1>
      </div>
      <p className="text-start text-lg text-[#DEC544] mt-24">
        Welcome to my digital realm, where creativity meets functionality. Join
        me on a journey of Innovation and Problem Solving
      </p>
    </main>
  );
}
