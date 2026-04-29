import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RecycLens - Download Releases",
  description: "Download the latest RecycLens APK releases",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
