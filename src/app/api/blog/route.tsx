import { NextResponse } from "next/server";

interface BlogTypes {
  title: string;
  content: string;
}

export async function handler(req: Request) {}

export { handler as POST, handler as GET, handler as DELETE };
