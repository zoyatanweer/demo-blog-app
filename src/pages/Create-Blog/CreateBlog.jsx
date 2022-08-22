import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";

import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import JoditEditor from "jodit-react";

import "./CreateBlog.css";

const CreateBlog = ({ isAuth }) => {
  const editorRef = useRef(null);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const BlogCollectionRef = collection(db, "blogs");

  const createBlog = async () => {
    await addDoc(BlogCollectionRef, {
      title,
      content,
      authorName: auth.currentUser.displayName,
      authorId: auth.currentUser.uid,
    });
    navigate("/blogs");
  };

  const [value, setValue] = useState("");
  useEffect(() => setValue(""), []);

  return (
    <>
      <div className="blog-page">
        <div className="blog-intro">
          <h1>Create blogs!</h1>
          <p className="para-small">
            Get started with with creating blogs by using our wide range of
            formatting tools. After writing your blog, simply click on "Publish"
            button to get your blog added.
          </p>
        </div>
        <label className="title-label" for="title">
          Title:
        </label>
        <input
          type="text"
          name="title"
          className="input-title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Editor
          className="blog-input"
          apiKey="4dmm3xu40at1e9gl89degd7yj4wr9ikpwsnini9r1rc616pn"
          onInit={(evt, editor) => (editorRef.current = editor)}
          onEditorChange={(newValue, e) => setContent(newValue)}
          init={{
            height: 800,
            width: 1000,
            menubar: true,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "link linkchecker | image" +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </div>
      {/* <JoditEditor
        // onChange={(e) => setContent(e.target.value)}
        onChange={(e) => {
          setContent((prev) => ({ ...prev, content: e }));
        }}
        className="rich-editor"
      /> */}
      <div className="publish-blogBtn">
        <button onClick={createBlog} className="btn-publish">
          Publish
        </button>
      </div>
    </>
  );
};

export { CreateBlog };
