"use client";
import Header from "@/components/ui/Header";
import {
  File,
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
} from "lucide-react";
import { useEffect, useState } from "react";

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

    // Basic client-side validation example
    if (!title.trim()) {
      alert("Title is required");
      return;
    }

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
    <div className="flex flex-col gap-4">
      <header className="flex items-center justify-center gap-2 cursor-pointer">
        <File size={20} />
        <Header className="text-[#393a1f]">Add New Project</Header>
      </header>

      <section className="flex gap-2">
        {/* Left Form */}
        <div className="w-[50%]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 mx-4 font-medium"
          >
            <section className="grid grid-cols-1 gap-3">
              <label className="flex flex-col gap-2">
                <span className="flex items-center gap-1">
                  <Heading size={20} />
                  <span>Title</span>
                </span>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="rounded p-1 border border-[#393a1f] outline-none"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="flex items-center gap-1">
                  <Library size={20} />
                  <span>Description</span>
                </span>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="rounded p-1 border border-[#393a1f] outline-none"
                />
              </label>

              {/* Thumbnail file input */}
              <label className="flex flex-col gap-2">
                <span className="flex items-center gap-1">
                  <Wallpaper size={20} />
                  <span>Thumbnail (image file)</span>
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailChange}
                  className="rounded p-1 border border-[#393a1f] outline-none"
                />
                {errors.thumbnail && (
                  <small className="text-red-600">{errors.thumbnail}</small>
                )}
                {thumbnailPreview && (
                  <div className="flex items-center gap-2 mt-2">
                    <img
                      src={thumbnailPreview}
                      alt="thumbnail preview"
                      className="w-40 h-24 object-cover rounded border"
                    />
                    <button
                      type="button"
                      onClick={removeThumbnail}
                      className="text-sm px-2 py-1 rounded border"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </label>

              {/* Icon / favicon file input */}
              <label className="flex flex-col gap-2">
                <span className="flex items-center gap-1">
                  <ImageIcon size={20} />
                  <span>Favicon / Icon (image file)</span>
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleIconChange}
                  className="rounded p-1 border border-[#393a1f] outline-none"
                />
                {errors.icon && (
                  <small className="text-red-600">{errors.icon}</small>
                )}
                {iconPreview && (
                  <div className="flex items-center gap-2 mt-2">
                    <img
                      src={iconPreview}
                      alt="icon preview"
                      className="w-12 h-12 object-cover rounded border"
                    />
                    <button
                      type="button"
                      onClick={removeIcon}
                      className="text-sm px-2 py-1 rounded border"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </label>

              <label className="flex flex-col gap-2">
                <span className="flex items-center gap-1">
                  <Link size={20} />
                  <span>Demo Link</span>
                </span>
                <input
                  type="text"
                  value={demoLink}
                  onChange={(e) => setDemoLink(e.target.value)}
                  className="rounded p-1 border border-[#393a1f] outline-none"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="flex items-center gap-1">
                  <Github size={20} />
                  <span>Github Link</span>
                </span>
                <input
                  value={githubLink}
                  onChange={(e) => setGithubLink(e.target.value)}
                  type="text"
                  className="rounded p-1 border border-[#393a1f] outline-none"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="flex items-center gap-1">
                  <Figma size={20} />
                  <span>Figma Link</span>
                </span>
                <input
                  value={figmaLink}
                  onChange={(e) => setFigmaLink(e.target.value)}
                  type="text"
                  className="rounded p-1 border border-[#393a1f] outline-none"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="flex items-center gap-1">
                  <Layers size={20} />
                  <span>Stack (comma separated)</span>
                </span>
                <input
                  type="text"
                  value={stackInput}
                  onChange={(e) => setStackInput(e.target.value)}
                  placeholder="e.g. React, TypeScript, Tailwind"
                  className="rounded p-1 border border-[#393a1f] outline-none"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="flex items-center gap-1">
                  <ListFilter size={20} />
                  <span>Category (comma separated)</span>
                </span>
                <input
                  type="text"
                  value={categoryInput}
                  onChange={(e) => setCategoryInput(e.target.value)}
                  placeholder="e.g. web, mobile, ui"
                  className="rounded p-1 border border-[#393a1f] outline-none"
                />
              </label>
            </section>

            <button
              type="submit"
              className="my-4 bg-[#393a1f] text-white p-2 rounded w-fit mx-auto flex items-center gap-2"
            >
              <CirclePlus size={20} />
              <span>Add Project</span>
            </button>
          </form>
        </div>

        {/* Right Preview */}
        <div className="w-[50%] border-l pl-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              {iconPreview ? (
                <img
                  src={iconPreview}
                  alt="icon preview"
                  className="w-12 h-12 object-cover rounded border"
                />
              ) : (
                <div className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center border">
                  <ImageIcon size={18} />
                </div>
              )}

              <h1 className="text-2xl font-medium">
                {title || "Project Title"}
              </h1>
            </div>

            <p className="text-sm text-gray-700">
              {description || "Project description will appear here..."}
            </p>

            {thumbnailPreview ? (
              <img
                src={thumbnailPreview}
                alt="Thumbnail Preview"
                className="w-full max-w-xs h-40 object-cover rounded border"
              />
            ) : (
              <div className="w-full max-w-xs h-40 rounded bg-gray-50 border flex items-center justify-center text-sm text-gray-500">
                Thumbnail preview
              </div>
            )}

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
                  className="block text-blue-600 underline"
                >
                  Figma
                </a>
              )}
            </div>

            {stack.length > 0 && (
              <div>
                <h2 className="font-semibold">Stack:</h2>
                <ul className="list-disc list-inside">
                  {stack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}

            {category.length > 0 && (
              <div>
                <h2 className="font-semibold">Category:</h2>
                <ul className="list-disc list-inside">
                  {category.map((cat, i) => (
                    <li key={i}>{cat}</li>
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
