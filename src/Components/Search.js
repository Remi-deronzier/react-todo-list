const Search = ({ handleSearch, isTasksDBEmpty }) => {
  return (
    <div className={isTasksDBEmpty ? "search" : "hidden"}>
      <input
        type="text"
        placeholder="Which task are you looking for ?"
        onChange={handleSearch}
        className="input-search"
      />
    </div>
  );
};

export default Search;
