import { Pen, Star, Trash2 } from "lucide-react";
import "./MovieCard.css";
import { useEffect, useState } from "react";
import DeleteMovieModal from "../Modals/DeleteMovieModal";
import AddMovieModal from "../Modals/AddMovieModal";

function MovieRating({ rating, movieId, getAllMovies, removed, movie }) {
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [rate, setRate] = useState(rating);
  //change rating
  const changeRating = async (newRate) => {
    setRate(newRate);
    const updatedData = { rating: newRate };
    const data = await fetch(`http://localhost:3000/movies/${movieId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    const res = await data.json();
    console.log(res);
    getAllMovies();
  };
  //delete movie
  const deleteMovie = async () => {
    const data = await fetch(`http://localhost:3000/movies/${movieId}`, {
      method: "DELETE",
    });
    const res = await data.json();
    console.log(res);
    getAllMovies();
  };
  useEffect(() => {
    if (removed === true) {
      setRate(0);
    }
  }, [removed]);
  return (
    <div className="movieCard__details__rating">
      <div className="movieCard__star">
        <Star color="#e5ac0a" fill="#e5ac0a" />
        <p>{rate ?? 0}</p>
      </div>
      <div className="movieCard__details__rating__left">
        <p>Rating: ({rate ?? 0}/5)</p>
        <div>
          <Star
            color={rate > 0 ? "#e5ac0a" : "#90a1b0"}
            fill={rate > 0 ? "#e5ac0a" : "#90a1b0"}
            id="1"
            onClick={() => changeRating(1)}
          />
          <Star
            color={rate > 1 ? "#e5ac0a" : "#90a1b0"}
            fill={rate > 1 ? "#e5ac0a" : "#90a1b0"}
            id="2"
            onClick={() => changeRating(2)}
          />
          <Star
            color={rate > 2 ? "#e5ac0a" : "#90a1b0"}
            fill={rate > 2 ? "#e5ac0a" : "#90a1b0"}
            id="3"
            onClick={() => changeRating(3)}
          />
          <Star
            color={rate > 3 ? "#e5ac0a" : "#90a1b0"}
            fill={rate > 3 ? "#e5ac0a" : "#90a1b0"}
            id="4"
            onClick={() => changeRating(4)}
          />
          <Star
            color={rate > 4 ? "#e5ac0a" : "#90a1b0"}
            fill={rate > 4 ? "#e5ac0a" : "#90a1b0"}
            id="5"
            onClick={() => changeRating(5)}
          />
        </div>
      </div>
      <div className="movieCard__details__rating__right">
        <div
          className="iconWrapper flex"
          onClick={() => {
            setShowEdit(true);
          }}
        >
          <Pen fill="black" />
        </div>
        <div
          className="iconWrapper flex"
          onClick={() => {
            setShowDelete(true);
          }}
        >
          <Trash2 color="black" />
        </div>
      </div>
      {showDelete && (
        <DeleteMovieModal
          onClose={() => setShowDelete(false)}
          onConfirm={() => {
            deleteMovie();
            setShowDelete(false);
          }}
        />
      )}
      {showEdit && (
        <AddMovieModal
          onClose={() => setShowEdit(false)}
          movie={movie}
          onSuccess={() => getAllMovies()}
        />
      )}
    </div>
  );
}

export default MovieRating;
