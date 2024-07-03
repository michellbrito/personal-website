import Link from 'next/link';
import BlogCard from '../BlogCard/BlogCard';
import styles from './BlogGrid.module.css';

function BlogGrid({ blogs }) {
  return (
    <section className={styles.root}>
      {blogs.length > 0 && (
        <>
          {blogs.map(({ title, publishedDate, slug }) => (
            <Link href={`${slug}`} key={slug} className={styles.link}>
              <BlogCard title={title} publishedDate={publishedDate} />
            </Link>
          ))}
        </>
      )}
    </section>
  );
}

export default BlogGrid;
