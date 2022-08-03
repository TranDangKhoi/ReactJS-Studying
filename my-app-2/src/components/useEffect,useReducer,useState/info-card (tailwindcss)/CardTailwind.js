import React from "react";

const CardTailwind = (props) => {
  const PSLClasses = `text-lg text-transparent font-bold bg-clip-text ${
    props.primary ? "bg-primary-gradient" : "bg-secondary-gradient"
  }`;
  return (
    <div className="relative">
      <div className="w-full rounded-lg h-[400px] overflow-hidden">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/15883991/media/c5a6d6098f4ec6a0ce1b38909d82a494.png?compress=1&resize=1000x750&vertical=top"
          alt=""
          className="block w-full h-full object-cover border-inherit"
        />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 bg-white z-10 rounded-[20px] p-[20px] w-[calc(100%-36px)]">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-x-3">
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/14988700/media/5fd7eb67da21caa45eb864fbc27f24a2.jpg?compress=1&resize=1000x750&vertical=top"
              alt=""
              className="w-8 h-8 rounded-full object-cover flex-shrink-0"
            />
            <span>@toilatofu</span>
          </div>
          <div className="flex items-center gap-x-3">
            <img src="/coolicon.svg" alt="Hey" />
            <span className="text-gray-500">256</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium">Cosmic Perspective</span>
          <span className={PSLClasses}>12,000 PSL</span>
        </div>
      </div>
    </div>
  );
};

export default CardTailwind;
