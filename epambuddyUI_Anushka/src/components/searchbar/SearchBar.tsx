// Search Bar
import "./SearchBar.css";
export default () => {
    return <div className="search-bar">
      <input type="text"
        placeholder="Type keywords to find answers"
        name="search"/>
      <button>Search</button>
    </div>    
  }