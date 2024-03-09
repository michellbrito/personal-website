import styles from './Blog.module.css';
import TableOfContent from '../../Components/TableOfContent/TableOfContent';
import Head from './Head';

function Blog({
  title,
  publishedDate,
  readingTime,
  description,
  url,
  children,
}) {
  return (
    <>
      <Head title={title} description={description} url={url} />
      <article className={styles.root}>
        <section className={styles.hero}>
          <h1 className={styles.title}>{title}</h1>
          <p>
            {publishedDate} • {readingTime}
          </p>
        </section>
        <section className={styles.contentContainer}>
          <section className={styles.content}>{children}</section>
          <TableOfContent />
        </section>
      </article>
    </>
  );
}

export default Blog;
