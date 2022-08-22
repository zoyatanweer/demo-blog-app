import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage/Homepage";
import { Blogs } from "./pages/Blogs/Blogs";
import { Blog } from "./pages/Blog/Blog";

import "./App.css";
import { CreateBlog } from "./pages/Create-Blog/CreateBlog";
import { useState } from "react";
import { Header } from "./components/Header/Header";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/create" element={<CreateBlog isAuth={isAuth} />} />
        <Route
          path="/login"
          element={<Header setIsAuth={(isAuth, setIsAuth)} />}
        />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
