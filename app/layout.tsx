import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RecycLens - Download Releases",
  description: "Download the latest RecycLens APK releases",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
