import styles from "./PageBodyLanding.module.css";

interface PageBodyLandingProps {
  children: React.ReactNode;
}

const PageBodyLanding: React.FC<PageBodyLandingProps> = ({ children }) => {
  return <div className={styles.pageBodyLanding}>{children}</div>;
};

export default PageBodyLanding;