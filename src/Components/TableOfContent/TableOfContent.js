import styles from './TableOfContent.module.css';
import { useState, useEffect } from 'react';

function TableOfContent() {
  const [headings, setHeadings] = useState([]);

  function getClassName(level) {
    switch (level) {
      case 2:
        return styles.head2;
      case 3:
        return styles.head3;
      case 4:
        return styles.head4;
      default:
        return null;
    }
  }

  useEffect(() => {
    function updateHeadings() {
      const elements = Array.from(document.querySelectorAll('h2, h3, h4'))
        .map((elem) => ({
          id: elem.getAttribute('id'),
          text: elem.innerText,
          level: Number(elem.nodeName.charAt(1)),
        }))
        .filter(({ text }) => text !== 'Table of contents');
      setHeadings(elements);
    }

    const observer = new MutationObserver(updateHeadings);

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    });

    updateHeadings();

    return () => observer.disconnect();
  }, []);

  return (
    <aside className={styles.root}>
      <h3>Table of contents</h3>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id} className={getClassName(heading.level)}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${heading.id}`).scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default TableOfContent;
