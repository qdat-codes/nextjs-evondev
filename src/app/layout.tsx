import type { Metadata } from "next";
import { manrope } from "@/utils";
import "@/app/globals.css"
import Sidebar from "@/components/layout/Sidebar";

export const metadata: Metadata = {
  title: "Ucademy",
  description: "Nền tảng học lập trình siêu cấp vip pro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className={`${manrope.className}`}>
        <div className="grid grid-cols-[300px_1fr] min-h-screen">
          <Sidebar />
          <main>{children}</main>
        </div>
      </body>
    </html >
  );
}
