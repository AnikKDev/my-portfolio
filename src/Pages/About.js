import React from "react";

const About = () => {
  return (
    <div>
      <h3 className="text-3xl my-10 text-white">About Me</h3>
      <p>
        Hello, I am Anik Kanti Dev. I am a student of chemical engineering in
        Changzhou University, China. Though my hobby is building web based
        applications. Currently I am working as a MERN stack developer. Have
        some skills on HTML, CSS, React, JavaScript, ES6, React Component-base
        libraries such as React Router, React Bootstrap, Tailwind CSS, DaisyUI,
        Flowbite, Rechart, Carousels, Icons etc. I can do CRUD operations on
        MongoDB as per users demand. Got idea and knowledge about Node Js,
        Express Js, JWT, Netlify, Heroku, Git etc.
      </p>

      <h5 className="text-white text-xl my-6">
        Wanna talk with me?{" "}
        <button className="btn btn-outline btn-sm">
          <a href="#contact">Click here</a>
        </button>
      </h5>
    </div>
  );
};

export default About;
