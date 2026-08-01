import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  vehicle?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const fullName = body.name?.trim() ?? "";
  const firstName = body.firstName?.trim() || fullName.split(/\s+/)[0] || "";
  const lastName =
    body.lastName?.trim() ||
    (fullName.includes(" ") ? fullName.split(/\s+/).slice(1).join(" ") : "") ||
    firstName;
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if ((!firstName && !fullName) || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Please complete all required fields." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
  }

  console.info("[A2B contact enquiry]", {
    name: fullName || `${firstName} ${lastName}`.trim(),
    firstName,
    lastName,
    email,
    phone: body.phone?.trim() ?? "",
    vehicle: body.vehicle?.trim() ?? "",
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
