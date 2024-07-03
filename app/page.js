import BlogGrid from '../components/BlogGrid/BlogGrid';
import blogs from '../content/directory';
import Hero from '../components/Hero/Hero';
import styles from "./page.module.css";

function Home() {
  return (
    <div className={styles.root}>
      <Hero />
      <BlogGrid blogs={blogs} />
    </div>
  );
}

export default Home;
