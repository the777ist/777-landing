import Image from "next/legacy/image";
import styles from "./FooterLanding.module.css";
import { usePathname } from "next/navigation"

const Footer = () => {
  const pathname = usePathname()

  return (
    <div className={styles.footer}>
      <div className={styles.logoFooter}>
        <Image src="/icons/Logo Square.png" alt="Logo" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Footer;