import styles from './BlogCard.module.css';

function BlogCard({ title, publishedDate }) {
  return (
    <article className={styles.root}>
      <div className={styles.meta}>
        {publishedDate}{' '}
        <div className={`${styles.badge} ${styles.javascript}`}>JavaScript</div>
      </div>
      <h2 className={styles.title}>{title}</h2>
    </article>
  );
}

export default BlogCard;
