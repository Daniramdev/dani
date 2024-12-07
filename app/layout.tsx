import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";


export const metadata: Metadata = {
  title: "Dani",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio" />
        <meta name="author" content="Dani" />
        <meta property="og:title" content="Dani's Portfolio" />
        <meta property="og:description" content="Showcasing the work of Dani, a full-stack developer" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <link rel="icon" href="/images/logo.jpg" />
      </head>
      <body>
        <Header />
        
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
