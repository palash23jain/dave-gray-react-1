const SearchItem = ({ searchItem, setSearchItem }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="text"
        placeholder="Search Item"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value.toLocaleLowerCase())}
      />
    </form>
  );
};

export default SearchItem;
