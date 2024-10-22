import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./redux/providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ubaid Ahmed",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/Images/avatarimg.png" />
        <meta name="description" content={metadata.description} />
       
      </head>
      <body className={`${inter.className} `}>
        <Providers >

        {children}
        </Providers>
        </body>
    </html>
  );
}
