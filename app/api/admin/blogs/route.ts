import { NextResponse } from "next/server";
import { dbBlogs } from "@/lib/database";

function countParagraphs(text: string): number {
  const html = text ?? "";
  const pTags = html.match(/<p\b[^>]*>/gi);
  if (pTags?.length) return pTags.length;

  const brBreaks = html.split(/<br\s*\/?>\s*<br\s*\/?>/gi).map((s) => s.trim()).filter(Boolean);
  if (brBreaks.length >= 2) return brBreaks.length;

  const blocks = html
    .replace(/<[^>]+>/g, "\n")
    .split(/\n\s*\n+/g)
    .map((s) => s.trim())
    .filter(Boolean);
  return blocks.length;
}

function assertMinBlogContent(content: unknown) {
  if (typeof content !== "string" || !content.trim()) {
    throw new Error("content is required");
  }
  const paragraphs = countParagraphs(content);
  if (paragraphs < 3) {
    throw new Error("Blog content must include at least 3 paragraphs");
  }
}

function assertExcerptQuality(excerpt: unknown) {
  if (typeof excerpt !== "string" || !excerpt.trim()) {
    throw new Error("excerpt is required");
  }
  if (excerpt.trim().length < 140) {
    throw new Error("Blog excerpt must be at least 140 characters");
  }
}

export async function GET() {
  try {
    const blogs = await dbBlogs.getAll();
    return NextResponse.json({ blogs });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    assertMinBlogContent(body?.content);
    assertExcerptQuality(body?.excerpt);
    const created = await dbBlogs.create(body);
    return NextResponse.json({ blog: created });
  } catch (e: unknown) {
    console.error("Database error:", e);
    const message = e instanceof Error ? e.message : "Failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { slug, ...patch } = body;
    if (!slug) throw new Error("slug required");
    const patchObj = patch as Record<string, unknown>;
    if (Object.prototype.hasOwnProperty.call(patchObj, "content")) {
      assertMinBlogContent(patchObj.content);
    }
    if (Object.prototype.hasOwnProperty.call(patchObj, "excerpt")) {
      assertExcerptQuality(patchObj.excerpt);
    }
    const updated = await dbBlogs.update(slug, patch);
    if (!updated) throw new Error("Blog not found");
    return NextResponse.json({ blog: updated });
  } catch (e: unknown) {
    console.error("Database error:", e);
    const message = e instanceof Error ? e.message : "Failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(req: Request) {
  try {
    // Support both ?slug=... and JSON body { slug } (admin UI uses JSON).
    let slug: string | null = null;
    try {
      const body = await req.json();
      slug = body?.slug ?? null;
    } catch {
      // ignore body parse errors
    }
    if (!slug) {
      const { searchParams } = new URL(req.url);
      slug = searchParams.get("slug");
    }
    if (!slug) throw new Error("slug required");
    const ok = await dbBlogs.delete(slug);
    if (!ok) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    console.error("Database error:", e);
    const message = e instanceof Error ? e.message : "Failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

