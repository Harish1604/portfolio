import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harish J | Developer Workspace",
  description: "Full Stack Developer | Backend Engineer | Cloud & Systems Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark h-full antialiased bg-background text-foreground selection:bg-primary/30 selection:text-primary"
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden">{children}</body>
    </html>
  );
}
