import Blog from '../Blog';
import Markdown from '../../../Components/Markdown/Markdown';
import { useState, useEffect } from 'react';
import markdownContent from './local-storage-a-comprehensive-guide.md';
import readingTime from 'reading-time';

function LocalStorageAComprehensiveGuide({ title, publishedDate, slug }) {
  const [content, setContent] = useState('');
  const url = `https://michellbrito.com${slug}`;

  useEffect(() => {
    document.title = title;
    fetch(markdownContent)
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, [title]);

  return (
    <Blog
      title={title}
      publishedDate={publishedDate}
      readingTime={readingTime(content).text}
      description="Dive into the world of LocalStorage with our comprehensive guide. Explore its key features, practical applications, core methods, and learn how to access LocalStorage across different browsers. Enhance your understanding and leverage LocalStorage effectively for your web projects."
      url={url}
    >
      <Markdown content={content} />
    </Blog>
  );
}

export default LocalStorageAComprehensiveGuide;
