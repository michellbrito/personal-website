import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Markdown from 'markdown-to-jsx';
function Blog() {
  const { slug } = useParams();
  const [blog, setBlog] = useState({});
const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;
console.log(typeof markdown)
console.log(typeof blog.content)
  const fetchBlog = () => {
    try {
      fetch(`http://localhost:3001/api/blogs/${slug}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setBlog(data);
        });
    } catch (_e) {}
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <article className="blog-root">
      <section className="blog-hero">
        <h1 className="blog-title">{blog.title}</h1>
        <p>
          {new Date(blog.published_date).toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </section>
      <section className="blog-content">
        <ReactMarkdown
          className="markdown-body"
          children={blog.content}
          remarkPlugins={[remarkGfm]}
        />
      </section>
    </article>
  );
}

export default Blog;
