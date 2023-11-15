import { LayoutProps } from "@/common/types/next-components.type";
import "./globals.css";
import { Header } from "./components";
import { Aside } from "./components";

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <header className="w-full px-2 px-2 pt-16 2xsm:px-16 xsm:px-8 xsm:pt-8">
        <Header />
      </header>
      <main className="flex h-[calc(100vh-5.5rem)] flex-col justify-between xsm:h-auto xsm:flex-row">
        <div className="w-full px-2 pt-16 2xsm:px-16 xsm:w-1/2 xsm:px-8 xsm:pt-8">{children}</div>
        <Aside className="relative -z-50 w-full pt-[23%] xsm:w-1/2 xsm:pt-0" />
      </main>
    </>
  );
}
