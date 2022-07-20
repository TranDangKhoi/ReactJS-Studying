import React, { useEffect, useState } from "react";
import axios from "axios";
const getRandomPhotos = () => {
  return axios
    .get("https://picsum.photos/v2/list?page=1&limit=8")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const Photo2 = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  useEffect(() => {
    getRandomPhotos().then((images) => {
      setRandomPhotos(images);
    });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 p-5">
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => (
            <div
              key={item.id}
              className="p-3 bg-white shadow-md rounded-lg h-[200px]"
            >
              <img
                src={item.download_url}
                alt={item.author}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Photo2;
