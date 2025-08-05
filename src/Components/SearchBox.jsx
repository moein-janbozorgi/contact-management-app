import styles from "./SearchBox.module.css";

function SearchBox({ search, setSearch, setSelectDlete, setChoseDelete, selectDelete }) {
  return (
    <div className={styles.searchbox}>
      <p>Search in Contacts:</p>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setSelectDlete((s) => !s)}>🗑️</button>
      {selectDelete ? (
        <button onClick={() => setChoseDelete((s) => !s)}>✅</button>
      ) : null}
    </div>
  );
}

export default SearchBox;
