import React from "react";
import { NavLink } from "react-router-dom";
import {
  heroImg,
  homeImg,
  createBlog,
  exploreBlogImg,
} from "../../Assets/index";
import { Header } from "../../components/Header/Header";
import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <Header />

      <div className="homepage">
        <div class="homepage-left-section">
          <div>
            <h1 className="heading-h1">Welcome to Blog Website!</h1>
            <p className="para-medium">
              Discover our blogs on topics which are trending worldwide. Write
              and read blogs as much as you want.
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
        <div className="blogs-intro">
          <div className="create-blog-section">
            <img src={createBlog} className="create-blog-img"></img>
            <div className="create-blog-intro">
              <h1>Write your first blog with us!</h1>
              <NavLink to="/create">
                <button className="btn-create-blog">Create Blog</button>
              </NavLink>
            </div>
          </div>
          <div className="explore-blog-section">
            <div className="explore-blog-intro">
              <h1>Discover our wide range of blogs below!</h1>
              <NavLink to="/blogs">
                <button className="btn-explore-blog">Explore Blogs</button>
              </NavLink>
            </div>

            <img src={exploreBlogImg} className="create-blog-img"></img>
          </div>
        </div>
      </div>
      <footer>Made by Zoya Tanweer</footer>
    </>
  );
};

export { Homepage };
