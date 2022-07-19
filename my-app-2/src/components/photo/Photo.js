import React, { useEffect, useState } from "react";
import axios from "axios";
const getRandomPhotos = () => {
  return axios
    .get("https://picsum.photos/v2/list")
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
const Photo = () => {
  // useEffect(callback, [dependencies])
  //   useEffect(function callback() {
  //     // side-effects
  //   }, []);
  // https://picsum.photos/v2/list
  const [randomPhotos, setRandomPhotos] = useState([]);
  console.log("outside");
  useEffect(() => {
    // side-effects
    getRandomPhotos().then((images) => {
      console.log(images);
      setRandomPhotos(images);
    });
  }, []);
  return <div>{JSON.stringify(randomPhotos)}</div>;
};

export default Photo;
