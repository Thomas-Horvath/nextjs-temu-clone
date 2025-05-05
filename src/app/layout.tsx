import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { getCurrentSession } from "@/actions/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Temu Clone",
  description: "NextJs 15 Temu Clone project",
};

const RootLayout = async (
  { children }: Readonly<{ children: React.ReactNode }>
) => {

  const { user } = await getCurrentSession();

  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-white min-h-[125vh]`}>
        <Header user = { user }/>
        {children}
      </body>
    </html>
  );
}


export default RootLayout;