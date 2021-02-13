import React, { useState, useEffect } from "react";
import axios from "axios";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    // load init data
    setIsFetching(true);

    // add event
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // we use an empty array [] as the second parameter of useEffect, that tells the useEffect function to act like componentDidMount and only run onee time, when the component first mounts.

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreMovies();
  }, [isFetching]);

  // event handler
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setPage((current) => current + 1);
    setIsFetching(true);
  };

  // getData function using axios
  const fetchMoreMovies = async () => {
    // get new movies
    // merge current and new movies
    let movieData;
    try {
      movieData = await axios.get(
        `https://yts.mx/api/v2/list_movies.json?page=${page}`
      );
      console.log("movieData:", movieData);
    } catch (err) {
      console.log(err);
    }

    setMovies((currentMovies) => [
      ...currentMovies,
      ...movieData.data.data.movies
    ]);
    setIsFetching(false);
  };

  return (
    <>
      <h1 className="text-3xl font-semibold">Infinite Movies / Page {page}</h1>
      <ul className="mt-2">
        {movies.map((movie, n) => (
          <li key={n} className="font-semibold mb-2">
            {movie.title}
          </li>
        ))}
      </ul>
      {isFetching && "Fetching more list items..."}
    </>
  );
};

export default Movies;
