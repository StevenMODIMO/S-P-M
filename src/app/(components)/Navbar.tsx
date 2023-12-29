import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-center">
      <Image src="/steven-modimo.svg" alt="d3js" width={150} height={100} priority />
    </nav>
  );
}
