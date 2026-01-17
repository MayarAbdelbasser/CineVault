import "./Pagination.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({ page, movies, setPage }) {
  const numberOfPages = Math.ceil(movies.length / 3);
  return (
    <div className="pagination">
      <span
        className={`flex ${page == 1 ? `disabled` : ""}`}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        <ChevronLeft />
      </span>
      <span className="flex">{page}</span>
      <span
        className={`flex ${page == numberOfPages ? `disabled` : ""}`}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        <ChevronRight />
      </span>
    </div>
  );
}

export default Pagination;
