"use client"

import React, { useEffect, useRef } from "react";
import styles from "./page.module.css";
import Footer from "@/components/landing/FooterLanding";
import PageBodyLanding from "@/components/landing/PageBodyLanding";
import PageContentLanding from "@/components/landing/PageContentLanding";
import NavHeader, { showMenuAtom } from "@/components/landing/NavHeaderLanding";
import Menu from "@/components/landing/MenuLanding";
import { useAtom } from "jotai";

const LandingHome: React.FC = () => {
  const [showMenu, setShowMenu] = useAtom(showMenuAtom);
  
  return (
    <div className={styles.landingHome}>
      {showMenu && <Menu />}
      <NavHeader />
      <PageBodyLanding>
        <PageContentLanding />
      </PageBodyLanding>
      <Footer />
    </div>
  );
};

export default LandingHome;