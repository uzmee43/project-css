

import Image from "next/image";

import portfolio from "../../../public/Logo1-removebg-preview.png"
import { LuDownloadCloud } from "react-icons/lu";

import styles from "../style/Nav.module.css"
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className={styles.header}>
      <header className="text-blue-600 body-font">
        <div className={`${styles["navbar-container"]} container mx-auto md:${styles["navbar-container-md"]}`}>
          <a className={styles["logo-title"]}>
            <Image
              src={portfolio}
              alt="Portfolio Logo"
              height={100}
              width={100}
              className={styles["logo-image"]}
            />
            <span className="ml-3 text-xl text-blue-400">My Portfolio</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className={styles["nav-link"]}>
              Home
            </Link>
            <Link href={"/about"} className={styles["nav-link"]}>
              About us
            </Link>
            <Link href={"/skills"} className={styles["nav-link"]}>
              Skills
            </Link>
            <Link href={"/pro"} className={styles["nav-link"]}>
              Project
            </Link>
            <Link href={"contact"} className={styles["nav-link"]}>
              Contact
            </Link>
          </nav>
          <button className={styles["download-button"]}>
            <a href="/myCV.pdf">
           
           
              <LuDownloadCloud className="text-xl ml-5" />
              Download CV
            </a>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
