import styles from "./Footer.module.css";

export default function Footer() {
  return (
        <footer className={styles.siteFooter} translate="no">
        <span className={styles.footerMark}>YM.</span>

        <p className={styles.footerCopy}>
            © 2026{" "}
            <span className={styles.footerName}>
            Youssef Mostafa ElSayed
            </span>
            . All rights reserved.
        </p>

        <a
            href="https://youssef-mostafa.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contact}>
            Contact Me
        </a>
        </footer>
  );
}