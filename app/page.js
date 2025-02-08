"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./page.module.css";

export default function Home() {
  const [data, setData] = useState(null);
  const [time, setTime] = useState(new Date());

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.125,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch("/resume.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching resume:", error));
  }, []);

  if (!data) return;

  return (
    <motion.main variants={containerVariants} initial="hidden" animate="show">
      <motion.section className={styles.basics} variants={sectionVariants}>
        <div className={`${styles.spacingRegular} ${styles.pinch}`}>
          <h1>{data.basics.name}</h1>
          <span>
            <p>{data.basics.label}</p>
          </span>
        </div>
        <div className={`${styles.spacingSmall} ${styles.pinch}`}>
          <p>{data.basics.summary}</p>
        </div>
        <div className={styles.pinch}>
          {data.basics.profiles.map((profile, index) => (
            <div key={index} className={styles.contactItem}>
              <a href={profile.url}>
                {profile.network}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section className={styles.projects} variants={sectionVariants}>
        <h1 className={`${styles.spacingRegular} ${styles.pinch}`}>Projects</h1>
        <div>
          {data.projects.map((project, index) => (
            <div key={index} className={styles.showcaseItem}>
              <div
                onClick={() =>
                  project.url && window.open(project.url, "_blank")
                }
              >
                <p className={styles.spacingSmall}>
                  {project.name}{" "}
                  {project.url && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  )}
                </p>
                <span>
                  <p>{project.description}</p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section className={styles.work} variants={sectionVariants}>
        <h1 className={`${styles.spacingRegular} ${styles.pinch}`}>Work</h1>
        <div>
          {data.work.map((work, index) => (
            <div key={index} className={styles.showcaseItem}>
              <div
                key={index}
                onClick={() => work.url && window.open(work.url, "_blank")}
              >
                <p className={styles.spacingSmall}>
                  {work.position} at {work.name}{" "}
                  {work.url && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  )}
                </p>
                <span>
                  <p>{work.summary}</p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section className={styles.education} variants={sectionVariants}>
        <h1 className={`${styles.spacingRegular} ${styles.pinch}`}>
          Education
        </h1>
        <div>
          {data.education.map((education, index) => (
            <div key={index} className={styles.showcaseItem}>
              <div
                key={index}
                onClick={() =>
                  education.url && window.open(education.url, "_blank")
                }
              >
                <p className={styles.spacingSmall}>
                  {education.area} at {education.institution}{" "}
                  {education.url && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  )}
                </p>
                <span>
                  {education.courses && education.courses.length > 0 && (
                    <p>{education.courses.join(", ")}</p>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
      <motion.footer className={styles.pinch} variants={sectionVariants}>
        <p>© {data.basics.name}</p>
        <p>{time.toLocaleTimeString("en-US", { hour12: false })}</p>
      </motion.footer>
    </motion.main>
  );
}
