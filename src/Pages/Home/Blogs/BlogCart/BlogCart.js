import React from "react";
import "./BlogsCart.css";
import { BiLinkExternal } from "react-icons/bi";
const BlogCart = ({ blog }) => {
  const { title, thumb, link } = blog;
  return (
    <div className="card card-compact mx-4 my-8 shadow-[#0C090A] w-96 bg-[#1B1B1B] shadow-xl">
      <figure>
        <img src={thumb} alt="Shoes" />
      </figure>
      <div className="card-body flex justify-between">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end">
          <a href={link} target="_blank">
            <button className="btn hyperlink-container btn-primary bg-[#1B1B1B] text-white">
              Read Blog{" "}
              <span className="mx-2 hyperlink">
                <BiLinkExternal size={20} />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCart;
