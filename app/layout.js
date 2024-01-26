"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./dev-components/Components/Common/Navbar";
import Footer from "./dev-components/Components/Common/Footer";
import { ThemeProvider } from "./dev-components/Context/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Kalasurya Foundation",
//   description: "Kalasurya Foundation",
// };

export default function RootLayout({ children }) {
  return (
    // <ThemeProvider>
    <html lang="en" className="dark">
      <body
        className={`${inter.className}  light-background  overflow-x-hidden dark:bg-slate-950 dark:text-white`}
      >
        <Navbar />
        <div className="container mx-auto px-3 py-5">{children}</div>
        <Footer />
      </body>
    </html>
    // </ThemeProvider>
  );
}
