// Search Bar
import "./SearchBar.css";
import closeIcon from "../../assests/close.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchBar() {
  interface searchResultDataType {
    topic: String;
  }
  const [filteredData, setFilteredData] = useState<searchResultDataType[]>([]);
  const [wordEntered, setWordEntered] = useState("");
  const navigate = useNavigate();
  let searchResultDataArr: searchResultDataType[] = [
    { topic: "Insurance  POC" },
    { topic: "Insurance  Policy" },
    { topic: "Insurance  Renewal" },
    { topic: "Insurance  Coverage" },
    { topic: " Health Insurance " },
    { topic: "Dental Coverage" },
    { topic: "Travel Allowance" },
  ];
  const searchFilter = (e: any) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = searchResultDataArr.filter((value) => {
      return value.topic.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") setFilteredData([]);
    else setFilteredData(newFilter);
  };
  const clearSearch = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  const searchBtnClicked = () => {
    navigate(`/search/${wordEntered}`);
    clearSearch();
  };
  function searchItemClicked(topic: String) {
    navigate(`/search/${topic}`);
    clearSearch();
  }
  return (
    <div className="search-bar">
      <div className="search-top">
        <input
          className="search-input"
          type="text"
          placeholder="Type keywords to find answers"
          name="search"
          value={wordEntered}
          onChange={searchFilter}
        />
        {wordEntered.length !== 0 ? (
          <>
            <img
              className="cancel-img"
              src={closeIcon}
              onClick={clearSearch}
            ></img>
            <button className="search-button" onClick={searchBtnClicked}>
              Search
            </button>
          </>
        ) : (
          <button className="search-button">Search</button>
        )}
      </div>
      {filteredData.length !== 0 && (
        <div className="search-result">
          {filteredData.map((searchItem, index) => {
            return (
              <a key={index}>
                <p
                  className="search-item"
                  onClick={() => searchItemClicked(searchItem.topic)}
                >
                  {searchItem.topic}{" "}
                </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default SearchBar;
