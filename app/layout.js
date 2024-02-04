import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const inter = DM_Sans({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Anargyros Stylidis",
  description:
    "Personal website of a web developer trying to build apps that don't break.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen h-full transition-colors duration-300 container max-w-6xl mx-auto bg-[#f8f7ff] dark:bg-[#323232] text-[#323232] dark:text-[#f8f7ff] scroll-smooth`}
      >
        <Providers>
          <Header />
          <Navbar />
          <main className="max-w-5xl mx-auto">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
