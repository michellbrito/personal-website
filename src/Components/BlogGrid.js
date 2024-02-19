import BlogCard from "./BlogCard";

function BlogGrid({ blogs }) {
  return (
    <section className="blog-grid-root">
      {blogs.length > 0 && (
        <>
          {blogs.map((blog) => (
            <BlogCard title={blog.title} description={blog.content} />
          ))}
        </>
      )}
    </section>
  );
}

export default BlogGrid;
