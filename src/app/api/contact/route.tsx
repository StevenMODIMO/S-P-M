import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const name = body.name;
  const email = body.email;
  const subject = body.subject
  const message = body.message
  return NextResponse.json(body)
}
