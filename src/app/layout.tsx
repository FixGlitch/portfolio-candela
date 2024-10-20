"use client";

import { useState, useEffect } from "react";
import "./globals.css";
import Loader from "@/components/Common/Loader";
import Navbar from "@/components/NavBar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <div className="flex flex-col h-screen overflow-hidden">
          <Navbar />
          <main className="bg-white flex-1 overflow-y-auto no-scrollbar">
            {loading ? <Loader /> : children}
          </main>
        </div>
      </body>
    </html>
  );
}
