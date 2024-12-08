import Link from 'next/link';
import BlogCard from '../BlogCard/BlogCard';
import styles from './BlogGrid.module.css';

function BlogGrid({ blogs }) {
  return (
    <section className={styles.root}>
      {blogs.length > 0 && (
        <>
          {blogs.map(({ title, publishedDate, slug, tags }) => (
            <Link href={`${slug}`} key={slug} className={styles.link}>
              <BlogCard title={title} publishedDate={publishedDate} tags={tags} />
            </Link>
          ))}
        </>
      )}
    </section>
  );
}

export default BlogGrid;
