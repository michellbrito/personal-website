function BlogSearch() {
  return (
    <section className="blog-search-section">
      <i className="fas fa-search search-icon"></i>
      <input
        className="blog-search-input"
        type="text"
        placeholder="Search"
      ></input>
      <button className="blog-search-filter-btn">
        <i className="fas fa-sort-amount-up fa-1x"></i>
        Ascending
      </button>
      <button className="blog-search-filter-btn">
        <i className="fas fa-sort-amount-down fa-1x"></i>
        Descending
      </button>
    </section>
  );
}

export default BlogSearch;
