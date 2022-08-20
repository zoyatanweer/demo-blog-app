import React from "react";
import { NavLink } from "react-router-dom";
import { heroImg, homeImg } from "../../Assets/index";
import { Header } from "../../components/Header/Header";
import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <Header />

      <div className="homepage">
        <div class="homepage-left-section">
          <h1 className="heading-h1">Welcome to Blog Page!</h1>
          <p className="para-medium">
            Discover our blogs on topics which are trending worldwide. Write and
            read blogs as much as you want.
          </p>
          <div className="btn-section">
            <NavLink to="/create">
              <button class="btn-primary">Create Blog</button>
            </NavLink>
            <NavLink to="/blogs">
              <button class="btn-secondary">Explore Blogs</button>
            </NavLink>
          </div>
        </div>
        <img className="homepage-cover" src={homeImg} alt="homepage image" />
      </div>
    </>
  );
};

export { Homepage };
