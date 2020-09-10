import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = (props) => {
  const [movies, setMovies] = useState([]);

  const getData = () => {
    // GET request using axios with set headers
    const headers = {
      "x-rapidapi-host":
        "imdb-internet-movie-database-unofficial.p.rapidapi.com",
      "x-rapidapi-key": "0ae227400emshf2b48f45d41c931p101c8cjsn5d20d9b39e6d",
    };

    const response = axios
      .get(
        `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/batman`,
        { headers }
      )
      .then((response) => {
        setMovies(response.data.titles);
      });

    return response;
  };

  useEffect(() => {
    getData();
  });

  return (
    <div>
      <h1>Cards</h1>
      {movies.map((movie) => {
        return (
          <div>
            <img
              src={movie.image}
              className="card-img-top"
              alt="${title.id}"
            ></img>
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
