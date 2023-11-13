import localFont from "next/font/local";
import { LayoutProps } from "@/common/types/next-components.type";
import "./globals.css";
import { Metadata } from "next";
import { Header } from "./components";
import { Aside } from "./components";

export const metadata: Metadata = {
  title: "azki test app",
};

const BNazaninFont = localFont({
  src: "../../public/fonts/B_NAZANIN/B-NAZANIN.ttf",
  variable: "--font-b-nazanin",
});

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html className={BNazaninFont.className} lang="en" dir="rtl">
      <body>
        <header className="w-full px-16 pt-16 xsm:px-8 xsm:pt-8">
          <Header />
        </header>
        <main className="flex h-[calc(100vh-5.5rem)] flex-col justify-between xsm:h-auto xsm:flex-row">
          <div className="w-full xsm:w-1/2">{children}</div>
          <Aside className="relative -z-50 w-full pt-[23%] xsm:w-1/2 xsm:pt-0" />
        </main>
      </body>
    </html>
  );
}
