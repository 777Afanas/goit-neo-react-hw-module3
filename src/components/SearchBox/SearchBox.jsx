import style from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  return (
    <div className={style.searchBar}>
      <p>Find contacts by name</p>
      <input
        type="text"
        className={style.searchInput}
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
