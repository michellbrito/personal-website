function BlogCard({ title, description }) {
  return (
    <article className="blog-preview-section" tabIndex="1">
      <h2 className="blog-title">{title}</h2>
      <p className="blog-description">{description}</p>
    </article>
  );
}

export default BlogCard;
