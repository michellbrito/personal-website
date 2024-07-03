import Blog from '../../../components/Blog/Blog';
import Markdown from '../../../components/Markdown/Markdown';
import readingTime from 'reading-time';
import fs from 'fs';
import path from 'path';

async function getData() {
    const fullPath = path.join(process.cwd(), 'content', `local-storage-a-comprehensive-guide.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return fileContents;
}

async function LocalStorageAComprehensiveGuide() {
    const content = await getData();

    return (
        <Blog
            title='LocalStorage:A Comprehensive Guide'
            publishedDate='March 11th 2024'
            readingTime={readingTime(content).text}
            description="Dive into the world of LocalStorage with our comprehensive guide. Explore its key features, practical applications, core methods, and learn how to access LocalStorage across different browsers. Enhance your understanding and leverage LocalStorage effectively for your web projects."
        >
            <Markdown content={content} />
        </Blog>
    );
}

export default LocalStorageAComprehensiveGuide;
