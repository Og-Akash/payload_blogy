import { NextRequest, NextResponse } from "next/server";
import { getBlogsByQuery } from "@/helpers/payload";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const query = searchParams.get("query") || "";

  const res = await getBlogsByQuery(query);
  return NextResponse.json(res);
}
