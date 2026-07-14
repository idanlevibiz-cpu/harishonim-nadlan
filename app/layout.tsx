import type { Metadata } from "next";
import { headers } from "next/headers";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "הראשונים בנדל״ן | אלעד ומירי בן־ברוך";
  const description = "תיווך, יזמות ושיווק פרויקטים בראשון לציון והסביבה. ליווי אישי ומקצועי בעסקת הנדל״ן שלכם.";

  return {
    title,
    description,
    icons: { icon: "/images/logo.jpg" },
    openGraph: {
      title,
      description,
      locale: "he_IL",
      type: "website",
      images: [{ url: `${origin}/og.png`, width: 1731, height: 909, alt: "הראשונים בנדל״ן, אלעד ומירי בן־ברוך" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl">
      <body className={heebo.variable}>{children}</body>
    </html>
  );
}
