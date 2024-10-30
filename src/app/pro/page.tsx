// import Image from "next/image";
"use client"
import Image from 'next/image';

import styles from "../style/Project.module.css"
import Link from "next/link";

const Pro: React.FC = () => {
  return (
    <div id="pro" className={styles.projectContainer}>
      <section className={styles.projectSection}>
        <div className={styles.projectWrapper}>
          <div className={styles.titleContainer}>
            <h1 className={styles.projectTitle}>My Projects</h1>
            <p className={styles.projectDescription}>
              The projects featured in my portfolio reflect a deep commitment to innovation
              and quality. Each project has been carefully crafted to address specific needs,
              using cutting-edge technology and creative approaches. From design to execution,
              I ensure that every detail is aligned with the highest standards, delivering
              solutions that are both practical and impactful. My projects are not just about
              achieving goals—they are about creating meaningful and lasting value in every endeavor.
            </p>
          </div>
          <div className={styles.projectGrid}>
            {/* Project 1 */}
            <div className={styles.projectItem}>
              <div className={styles.projectImageContainer}>
                <Image
                  alt="Jarvis Project"
                  className={styles.projectImage}
                  src={"/Screenshot (107).png"} height={300} width={400}
                />
                <div className={styles.projectDetails}>
                  <h2 className={styles.projectLabel}>Jarvis project</h2>
                  <h1 className={styles.projectName}>Jarvis</h1>
                  <p className={styles.projectDescription}>
                    I’ve just created my own version of Jarvis! This is the first stage of AI, and I’m beyond happy to see it coming to life.
                  </p>
                  <Link href="https://jarvis-eight-beryl.vercel.app/">
                    <p className={styles.projectLink}>View project...</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className={styles.projectItem}>
              <div className={styles.projectImageContainer}>
                <Image
                  alt="Website Project"
                  className={styles.projectImage}
                  src={require("./../../../public/Screenshot (104).png")}
                />
                <div className={styles.projectDetails}>
                  <h2 className={styles.projectLabel}>Website project</h2>
                  <h1 className={styles.projectName}>Website</h1>
                  <p className={styles.projectDescription}>
                    I've created a website using HTML, CSS, and JavaScript! This has been a fantastic learning experience, and I'm proud to see the results of my hard work.
                  </p>
                  <Link href="https://coding-tuch.vercel.app/">
                    <p className={styles.projectLink}>View project...</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className={styles.projectItem}>
              <div className={styles.projectImageContainer}>
                <Image
                  alt="Resume Project"
                  className={styles.projectImage}
                  src={require("./../../../public/Screenshot (106).png")}
                />
                <div className={styles.projectDetails}>
                  <h2 className={styles.projectLabel}>Resume project</h2>
                  <h1 className={styles.projectName}>Resume</h1>
                  <p className={styles.projectDescription}>
                    I’ve created a Resume Builder using TypeScript, HTML, and CSS! This has been a fantastic learning experience, and I'm proud to see the results of my hard work.
                  </p>
                  <Link href="https://vercel.com/uzma-khans-projects-2704eacb/milestone-5-resume-builder">
                    <p className={styles.projectLink}>View project...</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pro;
