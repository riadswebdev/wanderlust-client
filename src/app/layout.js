import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Wanderlust - Your Ultimate Travel Companion",
  description: "Discover your next adventure with Wanderlust, the ultimate travel companion. Explore breathtaking destinations, find hidden gems, and create unforgettable memories. Start your journey today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <Toaster/>
      </body>
    </html>
  );
}
