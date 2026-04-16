import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Providers from "./lib/providers";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KinKeeper",
  description: "Assignment project",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col mx-auto  font-sans  bg-zinc-50 max-w-400">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>

        <Toaster />
      </body>
    </html>
  );
}
