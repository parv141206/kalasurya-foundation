import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./dev-components/Components/Common/Navbar";
import Footer from "./dev-components/Components/Common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kalasurya Foundation",
  description: "Kalasurya Foundation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} overflow-x-hidden  dark:bg-slate-950 dark:text-white`}
      >
        <Navbar />
        <div className="py-5">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
