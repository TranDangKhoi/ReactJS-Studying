import React from "react";

const YoutubeItem = (props) => {
  // props chính là thằng object mang attr của các thẻ, truyền từ thằng cha vào đây
  // console.log(props);
  return (
    <div className={`youtube-item ${props.className}`}>
      <div className="youtube-image">
        <img src={props.img} alt="" />
      </div>
      <div className="youtube-footer">
        <img src={props.avatar} alt="" className="youtube-avatar" />
        <div className="youtube-info">
          <h3 className="yotube-title">
            {props.title || "This is a youtube video title"}
          </h3>
          <h4 className="youtube-author">{props.author}</h4>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
