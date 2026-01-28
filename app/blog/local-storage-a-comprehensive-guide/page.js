import Blog from "@components/Blog/Blog";
import Markdown from "@components/Markdown/Markdown";
import readingTime from "reading-time";
import { getData } from "@utils";

export const metadata = {
  title: "LocalStorage:A Comprehensive Guide | Michell Brito",
  description:
    "Dive into the world of LocalStorage with our comprehensive guide. Explore its key features, practical applications, core methods, and learn how to access LocalStorage across different browsers. Enhance your understanding and leverage LocalStorage effectively for your web projects.",
};

async function LocalStorageAComprehensiveGuide() {
  const content = await getData("local-storage-a-comprehensive-guide.md");
  return (
    <Blog
      title="LocalStorage:A Comprehensive Guide"
      publishedDate="March 11th 2024"
      readingTime={readingTime(content).text}
    >
      <Markdown content={content} />
    </Blog>
  );
}

export default LocalStorageAComprehensiveGuide;
