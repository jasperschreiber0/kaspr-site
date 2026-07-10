import { NextRequest, NextResponse } from "next/server";

// Gates /dashboard behind HTTP Basic Auth. Internal-only tool, no
// client-facing accounts — fails closed (404, not open) if the password
// env var isn't set, so a missed env var can't accidentally leave client
// data exposed on the public marketing domain.
export function middleware(req: NextRequest) {
  const expectedPassword = process.env.DASHBOARD_PASSWORD;
  if (!expectedPassword) {
    return new NextResponse("Not found", { status: 404 });
  }

  const auth = req.headers.get("authorization");
  if (auth) {
    const [scheme, encoded] = auth.split(" ");
    if (scheme === "Basic" && encoded) {
      const [, password] = Buffer.from(encoded, "base64").toString().split(":");
      if (password === expectedPassword) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Kaspr Dashboard"' },
  });
}

export const config = {
  matcher: "/dashboard/:path*",
};
