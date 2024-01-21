import Image from "next/image";
import { RiBarChartHorizontalLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <nav className="p-3 flex justify-between">
      <Image src="/StevenMODIMO.svg" alt="" width={200} height={100} />
      <RiBarChartHorizontalLine className="text-[#DEC544] text-2xl" />
    </nav>
  );
}
