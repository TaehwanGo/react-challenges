import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
// https://jsonplaceholder.typicode.com/photos
export const ScrollComponent = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(0);
  const [prevY, setPrevY] = useState(0);
  const loadingRef = useRef();

  const getPhotos = (page) => {
    setLoading(true);
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
      )
      .then((res) => {
        setPhotos([...photos, ...res.data]);
        setLoading(false);
      });
  };

  useEffect(() => {
    getPhotos(page);

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    };

    function handleObserver(entities, observer) {
      const y = entities[0].boundingClientRect.y;
      if (prevY > y) {
        const lastPhoto = photos[photos.length - 1];
        const curPage = lastPhoto.albumId;
        getPhotos(curPage);
        setPage(curPage);
      }
      setPrevY(y);
    }

    const observer = new IntersectionObserver(
      handleObserver.bind(this),
      options
    );
    observer.observe(loadingRef);
  }, []);

  // Additional css
  const loadingCSS = {
    height: "100px",
    margin: "30px"
  };

  // To change the loading icon behavior
  const loadingTextCSS = { display: loading ? "block" : "none" };

  return (
    <div className="container">
      <div style={{ minHeight: "800px" }}>
        {photos.map((user) => (
          <img src={user.url} alt="user" height="100px" width="200px" />
        ))}
      </div>
      <div ref={loading} style={loadingCSS}>
        <span style={loadingTextCSS}>Loading...</span>
      </div>
    </div>
  );
};
