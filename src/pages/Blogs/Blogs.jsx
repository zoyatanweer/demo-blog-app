import React from "react";
import { blogs } from "../../blogsData/blogs";
import { Header } from "../../components/Header/Header";
import { Link } from "react-router-dom";
import "./Blogs.css";
import { createBlog, exploreBlogImg } from "../../Assets";

const Blogs = () => {
  return (
    <>
      <Header />
      <div className="blogs-section">
        <div className="blogs-intro">
          {/* <h1 className="heading-h1">Blogs</h1>
        <button className="btn-primary">Create Blog</button>
        <p className="para-medium">Discover blogs here.</p> */}

          <div className="create-blog-section">
            <img src={createBlog} className="create-blog-img"></img>
            <div className="create-blog-intro">
              <h1>Write your first blog with us!</h1>
              <button className="btn-create-blog">Create Blog</button>
            </div>
          </div>
          <div className="explore-blog-section">
            <div className="explore-blog-intro">
              <h1>Discover our wide range of blogs below!</h1>
              <button className="btn-explore-blog">Explore Blogs</button>
            </div>

            <img src={exploreBlogImg} className="create-blog-img"></img>
          </div>
        </div>
        <div className="blogs">
          {blogs.map((blog) => {
            return (
              <>
                <div className="blog-container">
                  <h2 className="blog-title">{blog.title}</h2>

                  {/* <p className="blog-description">{blog.description}</p> */}
                  {blog.description.length > 100 ? (
                    <>
                      {`${blog.description.substring(0, 200)}...`}
                      <Link to="/#" className="read-more">
                        Read more
                      </Link>
                      {/* <Link to="/#">Read more</Link> */}
                    </>
                  ) : (
                    <p className="blog-description">{blog.description}</p>
                  )}
                  {/* {`${blog.description.substring(0, 100)}...`}
                <a href="#">Read more</a> */}

                  <small className="blog-footer">
                    {blog.author} , {blog.date}
                  </small>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export { Blogs };
