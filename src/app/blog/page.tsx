import { Metadata } from "next";
import Header from "@/components/ui/Header";
import Container from "@/components/Container";
import BlogListing from "@/components/BlogListing";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Explore my projects and contributions to the tech community.",
};

export default function Blog() {
  return (
    <div>
      <Container>
        <Header className="text-5xl">Welcome to my blog</Header>
      </Container>
      <BlogListing />
    </div>
  );
}
