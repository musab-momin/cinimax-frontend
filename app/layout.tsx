import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "@components/Navbar";
import "@styles/_global.scss";

const inter = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Cinimax",
  description:
    "Discover the ultimate way to enjoy media content with friends and family online! Our web application enables seamless video calling while watching movies, shows, and videos together, creating unforgettable shared experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
