// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "../components/Navbar"; // Imports our new Navbar

// const inter = Inter({ subsets: ["latin"] });

// // SEO Metadata (Day 10)
// export const metadata: Metadata = {
//   title: "Kundanika Reddy Bommineni | Software Engineer",
//   description: "Portfolio of Kundanika Reddy Bommineni, IT undergrad at VIT, incoming Wells Fargo Intern, and AWS Certified Cloud Practitioner.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         {/* Navbar will now appear at the top of every page! */}
//         <Navbar />
        
//         {/* This renders the actual page content below the navbar */}
//         {children}
//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kundanika Reddy Bommineni | Software Engineer",
  description: "Portfolio of Kundanika Reddy Bommineni, IT undergrad at VIT, incoming Wells Fargo Intern, and AWS Certified Cloud Practitioner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}