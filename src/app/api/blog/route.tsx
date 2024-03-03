import { NextResponse } from "next/server";

interface BlogTypes {
  title: string;
  content: string;
}

async function handler(req: Request) {
  const { method } = req;

  switch (method) {
    case "GET":
      return NextResponse.json({
        message: "Message Returned From Modimo's Server",
      });
      break;
    case "POST":
      return NextResponse.json({ message: "You perfomed a post request." });
      break;
    case "DELETE":
      return NextResponse.json({ message: "You performed a delete request." });
      break;
    default:
      return NextResponse.json({ info: "Unknown Operation. 404" });
  }
}

export { handler as GET, handler as POST, handler as DELETE };
