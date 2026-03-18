import { NextResponse } from "next/server";
import { writeFile, readFile } from "fs/promises";
import { existsSync } from "fs";

const SUBMISSIONS_PATH = "/tmp/consultant-submissions.json";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, company, type, website, email, phone, linkedin, city, region, specialisms, sectors, description } = body;

    if (!name || !email || !city) {
      return NextResponse.json(
        { error: "Name, email, and city are required." },
        { status: 400 }
      );
    }

    const submission = {
      name,
      company: company || "",
      type: type || "Individual",
      website: website || "",
      email,
      phone: phone || "",
      linkedin: linkedin || "",
      city,
      region: region || "",
      specialisms: specialisms || [],
      sectors: sectors || [],
      description: description || "",
      submittedAt: new Date().toISOString(),
    };

    let existing: unknown[] = [];
    if (existsSync(SUBMISSIONS_PATH)) {
      try {
        const data = await readFile(SUBMISSIONS_PATH, "utf-8");
        existing = JSON.parse(data);
      } catch {
        existing = [];
      }
    }

    existing.push(submission);
    await writeFile(SUBMISSIONS_PATH, JSON.stringify(existing, null, 2));

    console.log("New consultant submission:", submission);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission." },
      { status: 500 }
    );
  }
}
