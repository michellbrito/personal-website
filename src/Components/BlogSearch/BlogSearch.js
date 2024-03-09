import styles from './BlogSearch.module.css';

function BlogSearch() {
  return (
    <section className={styles.root}>
      <i className="fas fa-search search-icon"></i>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search"
      ></input>
      <button className={styles.filterBtn}>
        <i className="fas fa-sort-amount-up fa-1x"></i>
        Ascending
      </button>
      <button className={styles.filterBtn}>
        <i className="fas fa-sort-amount-down fa-1x"></i>
        Descending
      </button>
    </section>
  );
}

export default BlogSearch;
