import "@/styles/globals.css";

export const metadata = {
  title: "Fisayo Akintomiwa — Senior Software Engineer",
  description:
    "Resume of Fisayo Akintomiwa, a Senior Software Engineer with 8+ years of experience building scalable web applications in fintech, childcare, and developer tooling.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
