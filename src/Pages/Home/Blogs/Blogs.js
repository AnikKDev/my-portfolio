import React, { useEffect, useState } from "react";
import BlogCart from "./BlogCart/BlogCart";
import styles from "./Blogs.module.css";
const Blogs = () => {
  const [blogs, setBlogs] = useState(() => null);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/AnikKDev/my-portfolio/main/public/blogs.json"
    )
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  // handling view all
  const [showAll, setShowAll] = useState(() => false);

  const dataForDisplay = showAll ? blogs : blogs?.slice(0, 15);
  // console.log(blogs);
  return (
    <div className="">
      <h3 className="text-5xl text-center my-14">Blogs</h3>
      <div className="grid grid-cols-3 justify-items-center">
        {dataForDisplay?.map((blog) => (
          <BlogCart id={Math.random().toString()} blog={blog} />
        ))}
      </div>
      <button
        onClick={() => setShowAll(!showAll)}
        className="btn block mx-auto my-16 btn-primary"
      >
        {!showAll ? "Show All" : "Show Less"}{" "}
      </button>
    </div>
  );
};

export default Blogs;
