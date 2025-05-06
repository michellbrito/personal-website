import styles from './Hero.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

function Hero() {
  return (
    <section className={styles.root}>
      <section className={styles.aboutSection}>
        <h1 className={styles.greeting}>
          Greetings <span className={styles.wave}>👋</span>
        </h1>
        <p className={styles.info}>I&apos;m Michell Brito, a Software Engineer with 4+ years of experience</p>
        <p className={styles.info}>Current Role: Software Development Engineer <a className={styles.link} href="https://x.com/adobe" target="_blank" rel="noreferrer">@Adobe</a></p>
        <p className={styles.info}>Building <a className={styles.link} href="https://golfmini.com" target="_blank">GolfMini.com</a> - a niche directory that brings in 2.5k+ monthly visitors and ranks for 700+ high-intent keywords on Google</p>
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
            href="https://www.youtube.com/@michelldbrito"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="youtube Logo"
            className={styles.socialIcon}
          >
            <FontAwesomeIcon icon={faYoutubeSquare} />
          </a>
          <a
            href="https://x.com/michelldbrito"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="x Logo"
            className={styles.socialIcon}
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </section>
      </section>
      <section className={styles.heroSection}></section>
    </section>
  );
}
export default Hero;
