import { useEffect, useState } from "react";
import styles from "./Movies.module.css";
import MovieCard from "./components/MovieCard/MovieCard";
import RemoveRatingsModal from "./components/Modals/RemoveRatingsModal";
import AddMovieModal from "./components/Modals/AddMovieModal";
import Pagination from "./components/Pagination/Pagination";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [showRemove, setShowRemove] = useState(false);
  const [removed, setRemoved] = useState();
  const [showAdd, setShowAdd] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);

  const getAllMovies = async () => {
    const res = await fetch("http://localhost:3000/movies");
    const data = await res.json();
    setMovies(data);
    console.log(data);
  };
  useEffect(() => {
    //get all movies
    getAllMovies();
  }, []);

  //sort movies by genre
  const [filterType, setFilterType] = useState("all");
  const filteredData =
    filterType === "all"
      ? movies
      : movies.filter((m) => m.genres.includes(filterType));

  //remove all ratings
  const removeRatings = async () => {
    const res = await Promise.all(
      movies.map((m) =>
        fetch(`http://localhost:3000/movies/${m.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ rating: 0 }),
        })
      )
    );
    setAverageRating(0);
    getAllMovies();
    setRemoved(true);
    setShowRemove(false);
  };
  useEffect(() => {
    //get average rating
    const getAverageRating = () => {
      const totalAverage = movies.reduce((acc, movie) => {
        return acc + movie.rating;
      }, 0);
      setAverageRating((totalAverage / movies.length).toFixed(1));
    };
    getAverageRating();
  }, [movies]);

  return (
    <div className={`container ${styles.movies}`}>
      <div>
        <h2>Movies List</h2>
        <div className={styles.movies__heading}>
          <div className={`flex ${styles.movies__heading__content}`}>
            <p>Total Movies: {movies.length}</p>
            <p>/</p>
            <p>Average Rating: {averageRating}</p>
          </div>
          <div className={`flex ${styles.movies__heading__button}`}>
            <button
              className={`btn btn-primary`}
              onClick={() => setShowRemove(true)}
            >
              Remove Ratings
            </button>
            {showRemove && (
              <RemoveRatingsModal
                onClose={() => setShowRemove(false)}
                onConfirm={() => removeRatings()}
              />
            )}
            <button
              className={`btn btn-primary`}
              onClick={() => setShowAdd(true)}
            >
              Add Movie
            </button>
            {showAdd && (
              <AddMovieModal
                onClose={() => setShowAdd(false)}
                onSuccess={() => getAllMovies()}
              />
            )}
          </div>
        </div>
      </div>
      <div className={styles.moviesFilter}>
        <label htmlFor="genre">Sort By Genre</label>
        <div className="select-wrapper">
          <select
            name="genre"
            id="genre"
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All Genres</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Action">Action</option>
            <option value="Crime">Crime</option>
            <option value="Adventure">Adventure</option>
            <option value="Drama">Drama</option>
            <option value="Fantasy">Fantasy</option>
          </select>
        </div>
      </div>
      {/* movies list */}
      <div className={styles.movies__list}>
        {filteredData
          .slice((page - 1) * limit, (page - 1) * limit + limit)
          .map((movie) => {
            return (
              <MovieCard
                imgSrc={movie.image}
                name={movie.name}
                genres={movie.genres}
                description={movie.description}
                rating={movie.rating}
                movieId={movie.id}
                getAllMovies={getAllMovies}
                removed={removed}
                movie={movie}
              />
            );
          })}
        {/* {filteredData.length > 0 ? (
          filteredData.map((movie) => {
            return (
              <MovieCard
                imgSrc={movie.image}
                name={movie.name}
                genres={movie.genres}
                description={movie.description}
                rating={movie.rating}
                movieId={movie.id}
                getAllMovies={getAllMovies}
                removed={removed}
                movie={movie}
              />
            );
          })
        ) : (
          <p className={styles.empty}>No movies to show</p>
        )} */}
      </div>
      <div>
        {
          <Pagination
            movies={filteredData}
            page={page}
            setPage={setPage}
            limit={limit}
            setLimit={setLimit}
          />
        }
      </div>
    </div>
  );
}

export default Movies;
