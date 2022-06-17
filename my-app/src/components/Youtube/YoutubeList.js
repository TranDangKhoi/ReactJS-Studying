import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = () => {
  const defaultAvt =
    "https://huyhoanhotel.com/wp-content/uploads/2016/05/765-default-avatar.png";
  return (
    <div className="youtube-list">
      {YoutubeData.map((item, index) => {
        return (
          <YoutubeItem
            key={item.id}
            title={item.title}
            avatar={item.avatar || defaultAvt}
            author={item.title}
            img={item.image}
            className={index === 1 ? "youtube-list--small" : ""}
          ></YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;
