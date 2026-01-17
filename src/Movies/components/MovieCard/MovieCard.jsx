import "./MovieCard.css";
import MovieRating from "./MovieRating";
import { Star } from "lucide-react";

function MovieCard({
  imgSrc,
  name,
  genres,
  description,
  rating,
  movieId,
  getAllMovies,
  removed,
  movie,
}) {
  return (
    <div className="movieCard">
      <div className="movieCard__img">
        <img src={imgSrc} alt="movie image" />
      </div>
      <div className="movieCard__details">
        <div>
          <p className="movieCard__details__name">{name}</p>
          <div className="movieCard__details__genres">
            {genres.map((g) => {
              return <p>{g}</p>;
            })}
          </div>
          <p className="movieCard__details__description">
            {description || "No description"}
          </p>
        </div>
        <MovieRating
          rating={rating}
          movieId={movieId}
          getAllMovies={getAllMovies}
          removed={removed}
          movie={movie}
        />
      </div>
    </div>
  );
}

export default MovieCard;
