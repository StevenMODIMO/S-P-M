"use client";

import { marked } from "marked";

export default function Description({ description }: { description: string }) {
  return (
    <div>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: marked(description) }}
      />
    </div>
  );
}
