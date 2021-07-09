const Search = ({ handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Which task are you looking for ?"
      onChange={handleSearch}
    />
  );
};

export default Search;
