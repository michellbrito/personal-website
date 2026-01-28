import SectionGrid from "../components/SectionGrid/SectionGrid";
import { articles, projects } from "../content/directory";
import Hero from "../components/Hero/Hero";
import styles from "./page.module.css";

function Home() {
  return (
    <div className={styles.root}>
      <Hero />
      <div className={styles.sectionGridContainer}>
        <SectionGrid title="Projects 💡" items={projects} />
        <SectionGrid title="Articles 📝" items={articles} />
      </div>
    </div>
  );
}

export default Home;
