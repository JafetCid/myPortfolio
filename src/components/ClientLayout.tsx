'use client'

import { usePathname } from "next/navigation";

import Footer from "./Footer";
import Navbar from "./Navbar";

export default function ClientLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

    const pathname = usePathname();
    // const project: string[] = ["/project", "/project-dental"];
    const route = pathname.includes("/project");

  return (
      <main>
        {!route && <Navbar/>}
        {children}
        <Footer/>
      </main>
  );
}
