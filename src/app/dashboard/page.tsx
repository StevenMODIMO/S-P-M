import Header from "@/components/ui/Header";
import Container from "@/components/Container";
import Image from "next/image";
import ProjectForm from "./components/ProjectForm";

export default function Dashboard() {
  return (
    <div>
      <Container>
        <header className="flex items-center gap-3">
          <div className="relative w-12 h-12">
            <Image
              src="/images/bg-modimo.webp"
              alt="logo"
              fill={true}
              className="rounded-full shadow-md"
            />
          </div>
          <Header className="text-2xl">
            Modimo's Content Management System
          </Header>
        </header>
        <ProjectForm />
      </Container>
    </div>
  );
}
