import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Ubaid Ahmed — Full-Stack Developer & Tech Trainer",
  description:
    "Ubaid Ahmed is a Full-Stack Developer and Tech Trainer building scalable web applications with React, Next.js, Node.js and Oracle/PostgreSQL, and mentoring the next generation of developers.",
  icons: {
    icon: "/Images/avatarimg.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body antialiased bg-ink text-paper">{children}</body>
    </html>
  );
}
