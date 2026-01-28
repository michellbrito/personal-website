"use client";

import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import SectionCard from "../SectionCard/SectionCard";
import Link from "next/link";
import styles from "./SectionGrid.module.css";

function SectionGrid({ title, items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isFirstItem = currentIndex === 0;
  const isLastItem = currentIndex === items.length - 1;

  const handlePrevious = () => {
    if (!isFirstItem) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (!isLastItem) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <section className={styles.root}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.arrowContainer}>
          <FontAwesomeIcon
            className={`${styles.arrowIcon} ${isFirstItem ? styles.disabled : ""}`}
            icon={faArrowLeft}
            onClick={handlePrevious}
            tabIndex={isFirstItem ? -1 : 0}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !isFirstItem) {
                handlePrevious();
              }
            }}
            aria-disabled={isFirstItem}
          />
          <FontAwesomeIcon
            className={`${styles.arrowIcon} ${isLastItem ? styles.disabled : ""}`}
            icon={faArrowRight}
            onClick={handleNext}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !isLastItem) {
                handleNext();
              }
            }}
            tabIndex={isLastItem ? -1 : 0}
            aria-disabled={isLastItem}
          />
        </div>
      </div>

      <div className={styles.contentWrapper}>
        {items[currentIndex].url ? (
          <Link
            href={`${items[currentIndex].url}`}
            className={styles.link}
            key={currentIndex}
          >
            <SectionCard
              title={items[currentIndex].title}
              description={items[currentIndex].description}
              tags={items[currentIndex].tags}
            />
          </Link>
        ) : (
          <div className={styles.link} key={currentIndex}>
            <SectionCard
              title={items[currentIndex].title}
              description={items[currentIndex].description}
              tags={items[currentIndex].tags}
              disableHover={true}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default SectionGrid;
