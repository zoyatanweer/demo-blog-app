import React, { useEffect, useState } from "react";
import { blogs } from "../../blogsData/blogs";
import { Header } from "../../components/Header/Header";
import { Link, NavLink } from "react-router-dom";
import "./Blogs.css";
import { createBlog, exploreBlogImg } from "../../Assets";
import { doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { collection } from "firebase/firestore";
import JoditEditor from "jodit-react";

const Blogs = () => {
  const [blogList, setBlogList] = useState([]);

  const BlogCollectionRef = collection(db, "blogs");

  useEffect(() => {
    const getBlogs = async () => {
      const data = await getDocs(BlogCollectionRef);
      setBlogList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getBlogs();
  });

  return (
    <>
      <Header />
      <div className="blogs-section">
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
        </div>

        <div className="blogs">
          {blogList.map((blog) => {
            return (
              <>
                <div className="blog-container">
                  <Link to={`/blog/${blog.id}`}>
                    <h2 className="blog-title">{blog.title}</h2>

                    <p className="blog-description">{blog.content}</p>
                    {blog.newValue.length > 100 ? (
                      <>
                        {`${blog.content.substring(0, 200)}...`}
                        <Link to="/#" className="read-more">
                          Read more
                        </Link>
                      </>
                    ) : (
                      <p className="blog-description">{blog.content}</p>
                    )}

                    {/* <div dangerouslySetInnerHTML={{ __html: blog.content }} /> */}
                    <small className="blog-footer">
                      Author: {blog.authorName}{" "}
                    </small>
                  </Link>
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
