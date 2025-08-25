"use client";
import { useSearchParams } from "next/navigation";
export default function ProjectsFilter() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "No query provided";
  const sort = searchParams.get("sort") || "No query provided";
  return (
    <div>
    </div>
  );
}
