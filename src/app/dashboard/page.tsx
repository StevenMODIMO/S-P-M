import { type Metadata } from "next";
import Header from "@/components/ui/Header";
import Container from "@/components/Container";
import Image from "next/image";
import MainContainer from "./components/MainContainer";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Dashboard() {
  return (
    <div>
      <Container>
        <header className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image
              src="/images/bg-modimo.webp"
              alt="logo"
              fill={true}
              className="rounded-full shadow-md"
            />
          </div>
          <Header className="text-xl">
            Modimo's Content Management System
          </Header>
        </header>
        <MainContainer />
      </Container>
    </div>
  );
}
