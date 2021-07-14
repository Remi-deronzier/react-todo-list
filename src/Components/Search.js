const Search = ({ handleSearch, isTasksDBEmpty }) => {
  return (
    <>
      {isTasksDBEmpty && (
        <div className="search">
          <input
            type="text"
            placeholder="Which task are you looking for ?"
            onChange={handleSearch}
            className="input-search"
          />
        </div>
      )}
    </>
  );
};

export default Search;
