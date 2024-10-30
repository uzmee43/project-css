"use client";

import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";

import styles from "../style/About.module.css"

const About: React.FC = () => {
  return (
    <div id="about" className={styles["about-bg"]}>
      <section className="text-gray-600 body-font">
        <div className={`${styles["about-container"]} container mx-auto md:${styles["about-container-md"]}`}>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className={styles["about-image"]}
              alt="hero"
              src={require("../../../public/pic2.jpg")}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className={`${styles["about-title"]} sm:${styles["about-title-lg"]}`}>
              I’m Uzma Khan..
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ["AI Engineer", "Web Developer", "UI/UX Designer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className={styles["about-description"]}>
              I'm a driven professional specializing in cloud-applied generative AI engineering, fueled by a profound passion for programming. I am broadening my horizons through immersion in the Governor Sindh IT Initiative, delving into TypeScript and various aspects of full-stack development. My journey in the realm of technology has endowed me with a rich skill set encompassing HTML, CSS, JavaScript, and Next.js. Thriving in dynamic environments, I relish the opportunity to apply my problem-solving acumen and creative flair toward crafting innovative solutions. As a dedicated student at the Governor Sindh IT Initiative, I am committed to continuous growth and excellence in the ever-evolving landscape of technology.
            </p>
            <div className="flex justify-center">
              <Link href={"../contact"}>
                <button className={styles["about-button"]}>Contact</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
