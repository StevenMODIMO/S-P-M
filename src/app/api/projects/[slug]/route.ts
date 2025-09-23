import { NextResponse, type NextRequest } from "next/server";
import { query } from "@/lib/db";
import { put } from "@vercel/blob";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    if (slug) {
      const result = await query("SELECT * FROM project_listings WHERE id=$1", [
        slug,
      ]);
      return NextResponse.json(result.rows[0], { status: 200 });
    } else {
      const result = await query("SELECT * FROM project_listings");
      return NextResponse.json(result.rows, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(error, { status: 404 });
  }
}
