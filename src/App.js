import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage/Homepage";
import { Blogs } from "./pages/Blogs/Blogs";

import "./App.css";
import { CreateBlog } from "./pages/Create-Blog/CreateBlog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/create" element={<CreateBlog />} />
      </Routes>
    </div>
  );
}

export default App;
