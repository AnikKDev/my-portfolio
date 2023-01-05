import React from "react";
import { AiOutlineAntDesign } from "react-icons/ai";

const Frontend = () => {
  return (
    <>
      <div className="h-96 bg-[#252734] w-80 flex flex-col justify-around pl-10 service-box">
        <h3 className="text-3xl text-secondary my-2">Frontend</h3>
        <AiOutlineAntDesign className="text-secondary text-6xl"></AiOutlineAntDesign>
        <div>
          <li className="my-3 hover:text-secondary">HTML/HTML5</li>
          <li className="my-3 hover:text-secondary">CSS/CSS3</li>
          <li className="my-3 hover:text-secondary">CSS Frameworks</li>
          <li className="my-3 hover:text-secondary">JavaScript</li>
          <li className="my-3 hover:text-secondary">React</li>
        </div>
      </div>
    </>
  );
};

export default Frontend;
