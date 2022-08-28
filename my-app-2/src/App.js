import React, { Fragment } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// Link Active Outlet
function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              similique ad, consectetur recusandae eaque, corrupti, obcaecati
              illum sequi delectus eius alias cupiditate fugit laborum nostrum
              minima adipisci quos voluptatem odio.
            </div>
          }
        ></Route>
        <Route path="/about" element={<div>This is about page</div>}></Route>
        <Route
          path="/movie"
          element={<div>This is a movie details</div>}
        ></Route>
        {/* slug or id (:movieId, :page, etc) */}
        <Route
          path="movie/:movieId"
          element={<div>This is movie's detail of movieId</div>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
