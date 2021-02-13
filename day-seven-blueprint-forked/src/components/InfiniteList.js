import React, { useEffect } from "react";

export function InfiniteList(props) {
  const getData = () => {
    fetch("https://dog.ceo/api/breeds/image/random/15")
      .then((res) => {
        return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
      })
      .then((res) => props.setState([...props.state, ...res.message]))
      .catch(console.log);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <ul id="list">
      {props.state.map((img, index) => (
        <li
          key={index}
          style={{ backgroundImage: `url(${img})`, height: "300px" }}
        ></li>
      ))}
    </ul>
  );
}
