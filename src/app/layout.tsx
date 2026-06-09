import "./globals.css";

export const metadata = {
  title: "Gajendra Singh Thakur",
  description: "SAP Integration Consultant Portfolio",
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