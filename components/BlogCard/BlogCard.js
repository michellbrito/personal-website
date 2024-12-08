import styles from './BlogCard.module.css';

function BlogCard({ title, publishedDate, tags }) {
  return (
    <article className={styles.root}>
      <div className={styles.meta}>
        {publishedDate}{' '}
        <div className={styles.badges}>
          {
            tags.map((tag) => <div key={tag} className={`${styles.badge} ${styles[tag.toLowerCase()]}`}>{tag}</div>)
          }
        </div>
      </div>
      <h2 className={styles.title}>{title}</h2>
    </article>
  );
}

export default BlogCard;
