function Pagination({ page, onClickRight, onClickLeft }) {
  return (
    <div className="paginationContainer">
      <button className="button" onClick={onClickLeft}>
        ◀️
      </button>
      <h2>{page} from 22</h2>
      <button className="button" onClick={onClickRight}>
        ▶️
      </button>
    </div>
  );
}

export default Pagination;
