import React from "react";
import styles from "./MenuLanding.module.css";
import { useAtom } from "jotai";
import { showMenuAtom } from "./NavHeaderLanding";

const Menu = () => {
  const [showMenu, setShowMenu] = useAtom(showMenuAtom);

  const menuContent = showMenu ? (
    <>
      <a
        href="https://calendly.com/the777incident/product-the777incident"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <div className={styles.ctaContainerTop}>
          <div className={`${styles.item} ${styles.title}`}>
            Schedule a call
          </div>
        </div>
      </a>
      <div className={`${styles.item} ${styles.subText}`}>
        Or come visit us at
      </div>
      <a
        href="https://maps.app.goo.gl/cXhSFmP2TBEKPMGK9"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <div className={`${styles.item} ${styles.text}`}>
          The777incident<br /><br />Scape Workspaces<br />Doca de Santo Amaro Armazem 15<br />1350-353<br />Lisboa, Portugal
        </div>
      </a>
      <div className={`${styles.content} ${styles.disclaimer}`}>
        © 2024 the777incident Unipessoal LDA. All Rights Reserved
      </div>
    </>
  ) : null;

  return (
    <div className={styles.menu}>
      {menuContent}
    </div>
  );
};

export default Menu;