"use client";
import "../globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import logo from "@/assets/logo.svg";
import NextNProgress from "nextjs-progressbar";
import { Next13ProgressBar } from "next13-progressbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Nunito:wght@600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Montserrat:wght@400&family=Nunito:wght@600&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <title>RCA Red Cross</title>
      </head>
      <body className={poppins.className + "w-screen"}>
        <Next13ProgressBar color="red" height={"3px"} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
