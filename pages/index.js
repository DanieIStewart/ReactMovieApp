import { useState, useEffect } from "react";

import Carousel from "../components/Carousel";
import Card from "../components/Card";

// actions
import { getImages, getUsers, getMovies } from "../actions/index";

const Home = (props) => {
  // props
  const { appName, images, movies } = props;

  console.log(movies);

  useEffect(() => {
    // alert("loaded");
  });

  // create state
  const [count, setCount] = useState(0);

  return (
    <div className="home-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 style={{ marginLeft: "40%" }} className="center">
              {appName}
            </h1>
            <Carousel images={images} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="card">
            <div className="col-lg-12">
              <Card movies={movies} />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .card {
            width: 50%;
          }
          row {
            justify-content: center;
          }
        `}
      </style>
    </div>
  );
};

Home.getInitialProps = async () => {
  // get data from actions
  const images = await getImages();
  const users = await getUsers();
  const movies = await getMovies();

  return {
    appName: "Movies",
    images: images,
    users: users,
    movies: movies,
  };
};

export default Home;

// <div className="row">
// <div className="col-lg-12"></div>
// <h1>{count}</h1>
// <button
//   onClick={() => {
//     setCount(count + 1);
//   }}
// >
//   Add one
// </button>
// <button
//   onClick={() => {
//     setCount(count - 1);
//   }}
// >
//   Minus one
// </button>
// </div>
