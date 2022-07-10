import React from "react";
import "./CardTailwind.css";

const CardTailwind = (props) => {
  return (
    <div className="relative">
      <div className="w-full">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/15883991/media/c5a6d6098f4ec6a0ce1b38909d82a494.png?compress=1&resize=1000x750&vertical=top"
          alt=""
          className="card-image"
        />
      </div>
      <div className="card-content">
        <div className="card-top">
          <div className="card-user">
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/14988700/media/5fd7eb67da21caa45eb864fbc27f24a2.jpg?compress=1&resize=1000x750&vertical=top"
              alt=""
              className="user-avatar"
            />
            <span>@toilatofu</span>
          </div>
          <div className="card-react">
            <img src="/coolicon.svg" alt="Hey" />
            <span className="card-likes-amount">256</span>
          </div>
        </div>
        <div className="card-footer">
          <span className="card-title">Cosmic Perspective</span>
          <span className="card-psl">12,000 PSL</span>
        </div>
      </div>
    </div>
  );
};

export default CardTailwind;
