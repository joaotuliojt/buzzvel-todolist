import "./styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToggleTheme } from "@/components/ToggleTheme";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buzzvel | Todolist",
  description: "Todolist challenger",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-zinc-50 dark:bg-slate-900 transition-all`}
      >
        {children}
        <ToastContainer />
        <ToggleTheme />
      </body>
    </html>
  );
}
