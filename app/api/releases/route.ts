import { NextRequest, NextResponse } from "next/server";

interface Release {
  version: string;
  name: string;
  downloadUrl: string;
  releaseDate: string;
  fileSize: string;
  changelog?: string;
}

export async function GET(request: NextRequest) {
  const releases: Release[] = [
    {
      version: "1.0.0",
      name: "RecycLens v1.0 - Initial Release",
      downloadUrl: "/downloads/recyc-lens-1.0.0.apk",
      releaseDate: "2026-04-27",
      fileSize: "45.2 MB",
      changelog:
        "Initial release featuring waste classification using AI/ML, bilingual support (English & Filipino), and real-time scanning capabilities.",
    },
  ];

  return NextResponse.json(
    { releases },
    {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600",
      },
    }
  );
}
