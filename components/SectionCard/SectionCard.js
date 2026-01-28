import styles from "./SectionCard.module.css";

function SectionCard({ title, description, tags, disableHover = false }) {
  return (
    <article className={`${styles.root} ${disableHover ? styles.noHover : ""}`}>
      <div className={styles.meta}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.badges}>
          {tags.map((tag) => (
            <div
              key={tag}
              className={`${styles.badge} ${styles[tag.toLowerCase()]}`}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      <p className={styles.description}>{description}</p>
    </article>
  );
}

export default SectionCard;
