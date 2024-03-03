import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'My Blog'
}

export default function Blog() {
  return (
      <main className="bg-black -mt-8 h-screen">
        <p className="text-center text-lg text-[#DEC544]">Blog Page</p>
      </main>
  );
}
