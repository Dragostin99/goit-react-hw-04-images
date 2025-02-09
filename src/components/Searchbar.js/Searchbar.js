const Searchbar = ({ setFilter, filter, setPageNum, setImages }) => {
  const submitForm = e => {
    e.preventDefault();
    const searchValue = e.target.searchQuery.value;
    if (searchValue === filter) {
      return;
    }
    if (searchValue) {
      setImages([]);
      setFilter(searchValue);
      setPageNum(1);
      e.target.reset();
    }
  };

  return (
    <div className="Searchbar">
      <form className="SearchForm" onSubmit={submitForm}>
        <input
          type="text"
          name="searchQuery"
          autoComplete="off"
          placeholder="Search images..."
          className="SearchForm-input"
        />
        <button type="submit" className="SearchForm-button">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};
export default Searchbar;
