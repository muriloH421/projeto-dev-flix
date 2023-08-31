import { useEffect, useState } from "react";
import styles from "./movieDescription.module.css";
import devFlix from "/favicon.png";

const MovieDesc = ({ movies, click }) => {
  const apiKey = "eb1a598e";
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}&i=${movies.imdbID}`;
  const [MovieDesc, setMovieDesc] = useState([]);

  // console.log(movies.imdbID)
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMovieDesc(data))
      .catch((error) => console.error("Erro: ", error));
  }, [apiUrl]);
  const movie = MovieDesc;

  console.log(movie);
  return (
    <div className={styles.modalBackdrop} onClick={click}>
      <div className={styles.movieModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.movieInfo}>
          <img src={movies.Poster} alt={movie.Title} />
          <button className={styles.btnClose} onClick={click}>
            X
          </button>
          <div className={styles.movieType}>
            <div>
              <img src={devFlix} alt="" />
              {movie.Type}
              <h1>{movie.Title}</h1>
              <a
                href={`https://google.com/search?q=${encodeURIComponent(
                  movie.Title
                )}`}
                target="blank"
              >
                ▶️assistir
              </a>
            </div>
          </div>
        </div>
        <div className={styles.containerMisc}>
          <div className={styles.containerFlex}>
            Avaliação: {movie.imdbRating} | {movie.Metascore}% relevante | duração: {movie.Runtime} | {" "} 
            {movie.year}
          </div>
          <div className={styles.containerFlex}>
            <p>Elenco: {movie.Actors}</p>
            <p>Gênero: {movie.Genre}</p>
          </div>
        </div>
        <div className={styles.desc}>
          <p>Sinopse: {movie.Plot}</p>

        </div>
      </div>
    </div>
  );
  
};
export default MovieDesc;
