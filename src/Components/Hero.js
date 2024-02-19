function Hero() {
  return (
    <section className="info-section">
      <section className="about-me-section">
        <span className="wave">👋</span>
        <h1 className="greeting">Michell Brito</h1>
        <p>Software Development Engineer @Adobe with 2+ years of experience</p>
        <p>
          Running sites such as{" "}
          <a
            className="website-link"
            href="https://csstrivia.com/"
            target="_blank"
            rel="noreferrer"
          >
            csstrivia.com
          </a>
          ,{" "}
          <a
            className="website-link"
            href="https://buildfullstack.com/"
            target="_blank"
            rel="noreferrer"
          >
            buildfullstack.com
          </a>
          ,{" "}
          <a
            className="website-link"
            href="https://countryclubpools.com/"
            target="_blank"
            rel="noreferrer"
          >
            countryclubpools.com
          </a>
          , and{" "}
          <a
            className="website-link"
            href="https://websiteleads.com/"
            target="_blank"
            rel="noreferrer"
          >
            websiteleads.com
          </a>
        </p>
        <section className="social-icons-section">
          <a
            href="https://github.com/michellbrito"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github Logo"
            className="social-icon"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/michellbrito/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin Logo"
            className="social-icon"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            href="https://twitter.com/michelldbrito"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Logo"
            className="social-icon"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </section>
      </section>
      <section className="hero-img-section"></section>
    </section>
  );
}

export default Hero;
