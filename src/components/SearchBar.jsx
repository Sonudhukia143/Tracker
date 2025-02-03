const SearchBar = ({ setSearchQuery }) => {
    return (
      <input
        type="text"
        className="form-control w-50"
        placeholder="Search by name..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    );
  };
  
  export default SearchBar;
  