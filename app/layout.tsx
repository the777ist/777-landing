"use client"

import { useEffect } from "react";
import "./globals.css"
import { isMobileAtom, isMobileLandscapeAtom, isMobileLoadedAtom } from "@/store/atoms";
import { useAtom } from "jotai";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMobileLoaded, setIsMobileLoaded] = useAtom(isMobileLoadedAtom);
  const [isMobile, setIsMobile] = useAtom(isMobileAtom);
  const [isMobileLandscape, setIsMobileLandscape] = useAtom(isMobileLandscapeAtom);

  useEffect(() => {
    const updateWidth = () => {
      if (window.matchMedia("(max-width: 666px)").matches) {
        setIsMobile(true);
        setIsMobileLandscape(false);
        setIsMobileLoaded(true);
      } else if (window.matchMedia("(max-width: 940px) and (orientation: landscape)").matches) {
        setIsMobile(true);
        setIsMobileLandscape(true);
        setIsMobileLoaded(true);
      } else {
        setIsMobile(false);
        setIsMobileLandscape(false);
        setIsMobileLoaded(true);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  return (
    <html>
      <body>
        {isMobileLoaded ? children : <></>}
      </body>
    </html>
  )
}