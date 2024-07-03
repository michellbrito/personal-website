import styles from './Hero.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Hero() {
  return (
    <section className={styles.root}>
      <section className={styles.aboutSection}>
        <h1 className={styles.greeting}>
          <span className={styles.wave}>👋</span>Michell Brito
        </h1>
        <p className={styles.info}>Software Development Engineer @Adobe with 2+ years of experience</p>
        <p className={styles.info}>
          Running sites such as{' '}
          <a
            className={styles.link}
            href="https://csstrivia.com/"
            target="_blank"
            rel="noreferrer"
          >
            csstrivia.com
          </a>
          ,{' '}
          <a
            className={styles.link}
            href="https://buildfullstack.com/"
            target="_blank"
            rel="noreferrer"
          >
            buildfullstack.com
          </a>
          ,{' '}
          <a
            className={styles.link}
            href="https://countryclubpools.com/"
            target="_blank"
            rel="noreferrer"
          >
            countryclubpools.com
          </a>
          , and{' '}
          <a
            className={styles.link}
            href="https://websiteleads.com/"
            target="_blank"
            rel="noreferrer"
          >
            websiteleads.com
          </a>
        </p>
        <section className={styles.socialIconsSection}>
          <a
            href="https://github.com/michellbrito"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github Logo"
            className={styles.socialIcon}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/michellbrito/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin Logo"
            className={styles.socialIcon}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://twitter.com/michelldbrito"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Logo"
            className={styles.socialIcon}
          >
            <FontAwesomeIcon icon={faTwitter} />

          </a>
        </section>
      </section>
      <section className={styles.heroSection}></section>
    </section>
  );
}

export default Hero;
