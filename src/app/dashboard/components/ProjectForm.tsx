"use client";
import {
  CirclePlus,
  Heading,
  Library,
  Image as ImageIcon,
  Wallpaper,
  Link,
  Github,
  Figma,
  Layers,
  ListFilter,
  Trash,
  FolderPlus,
} from "lucide-react";
import { useEffect, useState } from "react";
import { marked } from "marked";

export default function ProjectForm() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  // Files + previews
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string>("");
  const [iconFile, setIconFile] = useState<File | null>(null);
  const [iconPreview, setIconPreview] = useState<string>("");

  const [demoLink, setDemoLink] = useState<string>("");
  const [githubLink, setGithubLink] = useState<string>("");
  const [figmaLink, setFigmaLink] = useState<string>("");

  // Stack & category inputs (keep typed string + derived arrays)
  const [stackInput, setStackInput] = useState<string>("");
  const [stack, setStack] = useState<string[]>([]);
  const [categoryInput, setCategoryInput] = useState<string>("");
  const [category, setCategory] = useState<string[]>([]);

  const [errors, setErrors] = useState<{ thumbnail?: string; icon?: string }>(
    {}
  );

  // keep derived arrays in sync with typed inputs
  useEffect(() => {
    setStack(
      stackInput
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    );
  }, [stackInput]);

  useEffect(() => {
    setCategory(
      categoryInput
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    );
  }, [categoryInput]);

  // Clean up object URLs on unmount
  useEffect(() => {
    return () => {
      if (thumbnailPreview) URL.revokeObjectURL(thumbnailPreview);
      if (iconPreview) URL.revokeObjectURL(iconPreview);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const MAX_SIZE = 5 * 1024 * 1024; // 5MB

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // reset input so same file can be selected again if needed
    e.currentTarget.value = "";

    if (file.size > MAX_SIZE) {
      setErrors((p) => ({
        ...p,
        thumbnail: "File too large. Max size is 5MB.",
      }));
      return;
    }

    setErrors((p) => ({ ...p, thumbnail: undefined }));

    // revoke previous preview if present
    if (thumbnailPreview) URL.revokeObjectURL(thumbnailPreview);

    const url = URL.createObjectURL(file);
    setThumbnailFile(file);
    setThumbnailPreview(url);
  };

  const handleIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    e.currentTarget.value = "";

    if (file.size > MAX_SIZE) {
      setErrors((p) => ({ ...p, icon: "File too large. Max size is 5MB." }));
      return;
    }

    setErrors((p) => ({ ...p, icon: undefined }));

    if (iconPreview) URL.revokeObjectURL(iconPreview);

    const url = URL.createObjectURL(file);
    setIconFile(file);
    setIconPreview(url);
  };

  const removeThumbnail = () => {
    if (thumbnailPreview) {
      URL.revokeObjectURL(thumbnailPreview);
      setThumbnailPreview("");
    }
    setThumbnailFile(null);
    setErrors((p) => ({ ...p, thumbnail: undefined }));
  };

  const removeIcon = () => {
    if (iconPreview) {
      URL.revokeObjectURL(iconPreview);
      setIconPreview("");
    }
    setIconFile(null);
    setErrors((p) => ({ ...p, icon: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("demoLink", demoLink);
    formData.append("githubLink", githubLink);
    formData.append("figmaLink", figmaLink);
    formData.append("stack", JSON.stringify(stack));
    formData.append("category", JSON.stringify(category));

    if (thumbnailFile) formData.append("thumbnail", thumbnailFile);
    if (iconFile) formData.append("icon", iconFile);

    // Example: POST to your API route (adjust URL as needed)
    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Upload failed:", text);
        alert("Upload failed");
        return;
      }

      const data = await res.json();
      console.log("Server response:", data);
      alert("Project saved");

      // Reset form (optional)
      setTitle("");
      setDescription("");
      removeThumbnail();
      removeIcon();
      setDemoLink("");
      setGithubLink("");
      setFigmaLink("");
      setStackInput("");
      setCategoryInput("");
    } catch (err) {
      console.error("Submit error:", err);
      alert("An error occurred while uploading");
    }
  };

  return (
    <div className="flex flex-col gap-4 text-[#393a1f]">
      <header className="flex items-center gap-2 cursor-pointer">
        <FolderPlus size={20} />
        <h1 className="font-semibold text-[#393a1f] text-xl">New Project</h1>
      </header>
      <section className="flex gap-2">
        <div className="w-[80%]">
          <form
            onSubmit={handleSubmit}
            className="shadow-md p-4 rounded bg-[#fafafa] text-sm"
          >
            <section className="grid grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="flex items-center gap-1">
                  <Heading size={18} />
                  <span>Title</span>
                </span>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="rounded p-2 border border-[#e7ee1a] outline-none"
                  placeholder="Project Title"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="flex items-center gap-1">
                  <Library size={18} />
                  <span>Description</span>
                </span>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="rounded p-2 border border-[#e7ee1a] outline-none"
                  placeholder="Project Description"
                />
              </label>
              <label className="rounded p-2 border border-dashed border-[#e7ee1a] outline-none flex items-center">
                {thumbnailPreview ? (
                  <div className="flex items-center gap-2">
                    <span>Remove Thumbnail</span>
                    <Trash size={18} onClick={removeThumbnail} />
                  </div>
                ) : (
                  <span className="flex items-center gap-1">
                    <Wallpaper size={18} />
                    <span className="underline">
                      Click to upload or drag and drop
                    </span>
                  </span>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailChange}
                  className="hidden"
                />
                {errors.thumbnail && (
                  <small className="text-red-600">{errors.thumbnail}</small>
                )}
              </label>
              <label className="rounded p-2 border border-dashed border-[#e7ee1a] outline-none flex items-center">
                {iconPreview ? (
                  <div className="flex items-center gap-2">
                    <span>Remove Icon</span>
                    <Trash size={18} onClick={removeIcon} />
                  </div>
                ) : (
                  <span className="flex items-center gap-1">
                    <ImageIcon size={18} />
                    <span className="underline">
                      Click to upload or drag and drop
                    </span>
                  </span>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleIconChange}
                  className="hidden"
                />
                {errors.icon && (
                  <small className="text-red-600">{errors.icon}</small>
                )}
              </label>
              <label className="flex flex-col gap-2">
                <span className="flex items-center gap-1">
                  <Link size={18} />
                  <span>Demo Link</span>
                </span>
                <input
                  type="text"
                  value={demoLink}
                  onChange={(e) => setDemoLink(e.target.value)}
                  className="rounded p-2 border border-[#e7ee1a] outline-none"
                  placeholder="Live/Demo url"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="flex items-center gap-1">
                  <Github size={18} />
                  <span>Github Link</span>
                </span>
                <input
                  value={githubLink}
                  onChange={(e) => setGithubLink(e.target.value)}
                  type="text"
                  className="rounded p-2 border border-[#e7ee1a] outline-none"
                  placeholder="Repository url"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="flex items-center gap-1">
                  <Figma size={18} />
                  <span>Figma Link</span>
                </span>
                <input
                  value={figmaLink}
                  onChange={(e) => setFigmaLink(e.target.value)}
                  type="text"
                  className="rounded p-2 border border-[#e7ee1a] outline-none"
                  placeholder="Figma url"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="flex items-center gap-1">
                  <Layers size={18} />
                  <span>Stack (comma separated)</span>
                </span>
                <input
                  type="text"
                  value={stackInput}
                  onChange={(e) => setStackInput(e.target.value)}
                  placeholder="Tech stack e.g. React, TypeScript, Tailwind"
                  className="rounded p-2 border border-[#e7ee1a] outline-none"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="flex items-center gap-1">
                  <ListFilter size={18} />
                  <span>Category (comma separated)</span>
                </span>
                <input
                  type="text"
                  value={categoryInput}
                  onChange={(e) => setCategoryInput(e.target.value)}
                  placeholder="Category e.g. web, mobile, ui"
                  className="rounded p-2 border border-[#e7ee1a] outline-none"
                />
              </label>
            </section>
            <button
              type="submit"
              className="my-4 bg-[#e7ee1a] hover:bg-[#e7ee1ac9] transition-colors duration-100 ease-in-out text-[#393a1f] p-2 rounded w-fit mx-auto flex items-center gap-2"
            >
              <CirclePlus size={18} />
              <span>Add Project</span>
            </button>
          </form>
        </div>
        <div className="w-[50%] pl-4">
          <div className="space-y-3">
            {thumbnailPreview ? (
              <img
                src={thumbnailPreview}
                alt="Thumbnail Preview"
                className="w-full h-40 object-cover rounded shadow"
              />
            ) : (
              <div className="w-full h-40 rounded bg-gray-50 flex items-center justify-center">
                <ImageIcon size={100} />
              </div>
            )}
            <div className="flex items-center gap-3">
              {iconPreview ? (
                <img
                  src={iconPreview}
                  alt="icon preview"
                  className="w-12 h-12 object-cover rounded-full"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <ImageIcon size={18} />
                </div>
              )}
              <h1 className="text-2xl font-medium">
                {title || "Project Title"}
              </h1>
            </div>
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: marked(description) }}
            />
            <div className="space-y-1">
              {demoLink && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  Demo
                </a>
              )}
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-blue-600 underline"
                >
                  Github
                </a>
              )}
              {figmaLink && (
                <a
                  href={figmaLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-[#e7ee1a] underline"
                >
                  <Figma size={18} className="text[#393a1f]" />
                  <span>Figma</span>
                </a>
              )}
            </div>
            {stack.length > 0 && (
              <div className="flex gap-2 items-center">
                <h2 className="font-semibold">Stack:</h2>
                <ul className="flex items-center gap-2 bg-gray-200">
                  {stack.map((tech, i) => (
                    <li key={i} className="p-1 rounded skew-x-4">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {category.length > 0 && (
              <div className="flex gap-2 items-center">
                <h2 className="font-semibold">Category:</h2>
                <ul className="flex gap-2 items-center bg-gray-200">
                  {category.map((cat, i) => (
                    <li key={i} className="p-1 rounded skew-x-4">
                      {cat}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
