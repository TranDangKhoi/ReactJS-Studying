import React, { Fragment } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Router In React/Nav";
import BlogPage from "./components/Router In React/BlogPage";
import ProfilePage from "./components/Router In React/ProfilePage";
import BlogPageDetail from "./components/Router In React/BlogPageDetail";

// Link Active Outlet Nested routes useParams useSearchParams NotFound useNavigate
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/" element={<>Homepage</>}></Route>
          <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
          <Route
            path="/blog/:slug"
            element={<BlogPageDetail></BlogPageDetail>}
          ></Route>
          <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        </Route>
        <Route path="*" element={<div>This is 404 page</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
