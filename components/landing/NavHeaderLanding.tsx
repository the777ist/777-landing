import React, { useEffect, useState } from "react";
import styles from "./NavHeaderLanding.module.css";
import { useAtom, atom } from "jotai";
import { useRouter } from "next/navigation";
import { isMobileAtom, isMobileLandscapeAtom } from "@/store/atoms";

export const showMenuAtom = atom<boolean>(false);

const NavHeader = () => {
  const [text, setText] = useState("777");

  const [isMobile] = useAtom(isMobileAtom);
  const [isMobileLandscape] = useAtom(isMobileLandscapeAtom);
  const [showMenu, setShowMenu] = useAtom(showMenuAtom);

  const router = useRouter();

  useEffect(() => {
    if (isMobile && !isMobileLandscape) {
      setText("777");
    } else {
      setText("THE777INCIDENT");
    }
  }, [isMobile, isMobileLandscape]);

  return (
    <div className={styles.header}>
      <div
        className={`${styles.logo} ${showMenu ? styles.menuLogo : ""}`}
      >
        {text}
      </div>
      <div className={!showMenu ? styles.textContainer : styles.textContainerInverted}>
        <div
          className={!showMenu ? styles.text : styles.textInverted}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          {!showMenu ? "Get in touch" : "Go Back"}
        </div>
      </div>
    </div>
  );
};

export default NavHeader;