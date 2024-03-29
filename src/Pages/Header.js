import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import resume from "../file/Anik Kanti Dev- Web Developer Resume.pdf";
const Header = () => {
  const location = useLocation();
  const menuItems = (
    <>
      <li className="mx-2">
        <Link to="/">HOME</Link>
      </li>
      <li className="mx-2">
        <a href="#projects">PROJECTS</a>
      </li>
      <li className="mx-2">
        <a href="#services">SERVICES</a>
      </li>
      <li className="mx-2">
        <a href="#contact">CONTACT</a>
      </li>
      <li className="mx-2">
        <Link to="/blogs">BLOGS</Link>
      </li>
    </>
  );
  return (
    <div class="navbar my-6 bg-[#252734] md:px-16">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-3xl">PORTFOLIO</a>
      </div>
      <div class="navbar-center hidden h-20 lg:flex">
        <ul class="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div class="navbar-end">
        <a
          href={resume}
          download="Anik_dev.pdf"
          class="btn btn-outline rounded-full resume-link px-5"
        >
          Resume{" "}
          <AiOutlineArrowDown className="text-xl ml-2 resume-down-arrow"></AiOutlineArrowDown>
        </a>
      </div>
    </div>
  );
};

export default Header;
