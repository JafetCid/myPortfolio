import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jafet-Portafolio",
  description: "Portafolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"></link>
      </head>
      <body
        className={`antialiased select-none`}
      >
        <>
          {children}
        </>
      </body>
    </html>
  );
}
