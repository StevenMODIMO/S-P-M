import { blogPlaceholders } from "@/lib/data";
import Container from "./Container";

export default function BlogListing() {
  return (
    <Container>
      <div className="flex flex-col gap-2">
        {blogPlaceholders.map((blog) => (
          <div key={blog.id} className="bg-[#FAFAFA] flex flex-col px-4 py-2">
            <img src={blog.image} alt={blog.title} />
            <h2 className="text-4xl font-medium">{blog.title}</h2>
            <p className="text-lg font-medium">{blog.description}</p>
            <span className="font-bold text-sm">
              {new Date(blog.createdAt).toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>
    </Container>
  );
}
