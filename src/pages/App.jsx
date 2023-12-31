import { useEffect } from "react";
import logo from "../assets/top.png";
import searchIcon from "../assets/search.svg";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
import { useState } from "react";

import "./App.css";
import MovieCard from "../components/movieCard/movieCard";
import Footer from "../components/footer/footer"

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const apiKey = "eb1a598e";
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    console.log(data);
    setMovies(data.Search);
  };

  const handleKeyPress = (e) => {
    e.key === "Enter" && searchMovies(searchTerm);
  };

  // fetch(apiUrl)
  //   .then((Response) => Response.json())
  //   .then((data) => console.log(data));
  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };
  return (
    <div id="app">
      <div className="app">
        <img src={logo} alt="logo devflix"></img>
      </div>

      <div className="search">
        <div className="menu">
          <button className="menu-icon" onClick={toggleMenu}>
            {isMenu && <menu click={toggleMenu} />}
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
          <div className="modal">
            {isMenu && (
              <>
                <div className="fundoMenu" onClick={toggleMenu}></div>
                <ul>
                  <li>
                    <a href="#">Terror</a>
                  </li>
                  <li>
                    <a href="#">Romance</a>
                  </li>
                  <li>
                    <a href="#">Comédia</a>
                  </li>
                  <li>
                    <a href="#">Ação</a>
                  </li>
                  <li>
                    <a href="#">Auspense</a>
                  </li>
                  <li>
                    <a href="#">Animação</a>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="pesquise aqui "
        />

        <img
          src={searchIcon}
          alt="Icone de pesquisa"
          onClick={() => searchMovies(searchTerm)}
        />

        <div className="menu"></div>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movies={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Nenhum filme encontrado 😢</h2>
        </div>
      )}
      <Footer link={"https://github.com.br"}>Murilo</Footer>
    </div>
  );
};
export default App;
