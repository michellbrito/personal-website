import BlogGrid from '../../Components/BlogGrid/BlogGrid';
import blogs from '../Blog/directory';
import Hero from '../../Components/Hero/Hero';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.root}>
      <Hero />
      <BlogGrid blogs={blogs} />
    </div>
  );
}

export default Home;
