const SearchBar = ({ searchText, setSearchText, list, setList }) => {
  function filterRes() {
    const filteredRes = list.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );

    if (filteredRes.length === 0) {
      console.log("Found 0");
      console.log(list);
    } else {
      console.log(filteredRes);
      setList(filteredRes);
    }
  }

  return (
    <div className="mt-4 flex font-mono justify-center">
      <div className="border rounded-md ">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="focus:outline-none  focus:border-green-600 border-r-white rounded-md px-2 text-[#FFFFF0]"
        />
        <button
          onClick={filterRes}
          className="rounded-sm p-2 cursor-pointer bg-[#202a36] text-white focus:outline-white"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
