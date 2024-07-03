import styles from './Blog.module.css';

async function Blog({
  title,
  publishedDate,
  readingTime,
  children,
}) {
  return (
    <>
      <article className={styles.root}>
        <section className={styles.hero}>
          <h1 className={styles.title}>{title}</h1>
          <p>
            {publishedDate} • {readingTime}
          </p>
        </section>
        <section className={styles.contentContainer}>
          <section className={styles.content}>{children}</section>
        </section>
      </article>
    </>
  );
}

export default Blog;
