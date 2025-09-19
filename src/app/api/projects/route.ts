import { NextResponse, type NextRequest } from "next/server";
import { query } from "@/lib/db";
import { put } from "@vercel/blob";
//import { v4 as uuidv4 } from "uuid";

export async function GET(req: NextRequest) {
  try {
    const result = await query("SELECT inet_server_port()");
    return NextResponse.json(result.rows[0], { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 404 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const title = formData.get("title");
    const description = formData.get("description");
    const demoLink = formData.get("demoLink");
    const githubLink = formData.get("githubLink");
    const figmaLink = formData.get("figmaLink");
    const stack = JSON.parse(formData.get("stack") as string) as string[];
    const category = JSON.parse(formData.get("category") as string) as string[];
    const thumbnail = formData.get("thumbnail") as File;
    const icon = formData.get("icon") as File;

    let thumbnailUrl;
    let iconUrl;

    if (thumbnail) {
      const blob = await put(`modimo-projects/${thumbnail.name}`, thumbnail, {
        access: "public",
        addRandomSuffix: true,
      });
      thumbnailUrl = blob.url;
    }
    if (icon) {
      const blob = await put(`modimo-projects/${icon.name}`, icon, {
        access: "public",
        addRandomSuffix: true,
      });
      iconUrl = blob.url;
    }

    const insertQuery = `
      INSERT INTO project_listings 
      (title, thumbnail, icon, description, demo_link, github_link, figma_link, stack, category)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *;
    `;

    const values = [
      title,
      thumbnailUrl,
      iconUrl,
      description,
      demoLink || null,
      githubLink || null,
      figmaLink || null,
      stack,
      category,
    ];

    const result = await query(insertQuery, values);

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error("❌ Error in POST /api/projects:", error);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}
