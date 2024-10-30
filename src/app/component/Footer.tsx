import Image from "next/image";
import portfolio from "../../../public/Logo1-removebg-preview.png";
// import portfolio from "../../../public/"
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import styles from "../style/Footer.module.css"

const Footer: React.FC = () => {
  return (
    <div className={styles["footer-bg"]}>
      <footer className="text-blue-600 body-font">
        <div className={`${styles["footer-container"]} container mx-auto sm:${styles["footer-container-sm"]}`}>
          <a className={styles["footer-logo"]}>
            <Image
              src={portfolio}
              alt="Portfolio Logo"
              height={100}
              width={100}
              className={styles["logo-image"]}
            />
            <span className={styles["footer-text"]}>My Portfolio</span>
          </a>
          <p className={`${styles["copyright-text"]} sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4`}>
            © 2024 My Portfolio —
          </p>
          <span className={`${styles["social-icons"]} sm:ml-auto sm:mt-0 mt-4`}>
            <Link
              target="_blank"
              href="https://github.com/uzmee43"
              className={styles["social-icon"]}
            >
              <FaGithub />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/uzma-khan6643/"
              className={`${styles["social-icon"]} ${styles["icon-spacing"]}`}
            >
              <FaLinkedin />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
