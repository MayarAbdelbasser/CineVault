import { Controller, useForm } from "react-hook-form";
import MultiSelect from "./MultiSelect";
import { useEffect } from "react";

function AddMovieModal({ onClose, onSuccess, movie = "" }) {
  //multi select
  const genres = ["Sci-Fi", "Action", "Crime", "Fantasy", "Adventure", "Drama"];

  //react hook form
  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      image: "",
      genres: [],
      theatres: false,
    },
  });
  const { register, control, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  useEffect(() => {
    if (movie && movie !== "") {
      reset({
        name: movie.name,
        description: movie.description,
        image: movie.image,
        genres: movie.genres,
        theatres: movie.theatres,
      });
    } else {
      reset({
        name: "",
        description: "",
        image: "",
        genres: [],
        theatres: false,
      });
    }
  }, [movie, reset]);
  const method = movie && movie !== "" ? "PUT" : "POST";
  const onSubmit = async (data) => {
    try {
      const res = await fetch(
        `http://localhost:3000/movies${
          movie && movie !== "" ? `/${movie.id}` : ""
        }`,
        {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...data, rating: 0 }),
        }
      );
      const dataRes = await res.json();
      reset();
      onClose();
      onSuccess();
      console.log(
        `http://localhost:3000/movies${
          movie && movie !== "" ? `/${movie.id}` : ""
        }`
      );
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return (
    <div className="popup__overlay">
      <div className="add">
        <div className="add__form">
          <form
            className="form"
            method="post"
            name="movie-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            {/* movie name */}
            <div className="form__input">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Enter movie name"
                id="name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Movie name must be at least 2 characters long.",
                  },
                })}
              />
              <p className="form__error">{errors.name?.message}</p>
            </div>
            {/* movie description */}
            <div className="form__textarea">
              <label htmlFor="description">Description</label>
              <textarea
                placeholder="Tell us about movie description..."
                id="description"
                className="message--input"
                {...register("description", {
                  required: "Description is required",
                  minLength: {
                    value: 10,
                    message: "Description must be at least 10 characters long.",
                  },
                  maxLength: {
                    value: 300,
                    message: "Description must not exceed 300 characters.",
                  },
                })}
              />
              <p className="error">{errors.description?.message}</p>
            </div>
            {/* image url */}
            <div className="form__input">
              <label htmlFor="image">Image URL</label>
              <input
                type="url"
                placeholder="https://example.com/movie-image.jpg"
                id="image"
                {...register("image", {
                  required: "Image URL is required",
                  pattern: {
                    value:
                      /^(https?:\/\/[^\s]+|data:image\/[a-zA-Z]+;base64,[A-Za-z0-9+/=]+)$/,
                    message: "Enter valid Image URL",
                  },
                })}
              />
              <p className="form__error">{errors.image?.message}</p>
            </div>
            {/* genres */}
            <div className="genres">
              <label htmlFor="genres">Genres</label>
              <Controller
                name="genres"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Please select at least one option",
                  },
                }}
                render={({ field }) => (
                  <MultiSelect
                    genres={genres}
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              <p className="form__error">{errors.genres?.message}</p>
            </div>
            {/* theatres */}
            <div className="checkbox">
              <label htmlFor="theaters">In theatres</label>
              <input type="checkbox" id="theaters" {...register("theatres")} />
            </div>
            {/* submit or cancel */}
            <div className="add__btns">
              <button
                type="button"
                className="btn  btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>
              <button type="submit" className="btn  btn-primary">
                {movie === "" ? "Create" : "Update"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddMovieModal;
