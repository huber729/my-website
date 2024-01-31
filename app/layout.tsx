import type { Metadata } from "next";
import Header from "./components/headers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Collin Huber",
  description: "A Website for my Programming journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main className="container lg:px-28">{children}</main>
      </body>
    </html>
  );
}
