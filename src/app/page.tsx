
"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";

import styles from "./style/Hero.module.css"
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className={styles["hero-bg"]}>
      <section className="text-gray-600 body-font">
        <div className={`${styles["hero-container"]} container mx-auto md:${styles["hero-container-md"]}`}>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className={`${styles["hero-text"]} sm:${styles["hero-title-lg"]}`}>
              Welcome To... <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: [
                    "My Portfolio WEB",
                    "Creative digital content",
                    "Blending functionality with design",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className={styles["hero-divider"]}></div>
            <p className={styles["hero-description"]}>
              Hello! I’m Uzma Khan, a passionate student of Certified Cloud Applied GenEng (AI Engineering), mobile development, and UI/UX design at the Governor Sindh IT Initiative. This portfolio showcases some of my best work, highlighting my skills in HTML, CSS, Next.js, and TypeScript. My work reflects my dedication to delivering quality solutions and my commitment to continuous learning and innovation. Feel free to explore my portfolio, and don’t hesitate to reach out if you’d like to collaborate or learn more about my work. Thank you for visiting!
            </p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <Link href={"https://github.com/uzmee43"}>
                <button className={styles["hero-button"]}>Github</button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className={`${styles["hero-image"]} object-cover object-center rounded`}
              alt="hero"
              src={"/cloud Logo.png"} height={300} width={400}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

      
      
      

