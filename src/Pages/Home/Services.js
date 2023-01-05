import React from "react";
import "./Services.css";
import { AiOutlineAntDesign } from "react-icons/ai";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import Frontend from "./Services/Frontend";
import Backend from "./Services/Backend";

const Services = () => {
  return (
    <div className="py-10" id="services">
      <h2 className="text-5xl text-secondary">What I Can Provide</h2>
      <div className="grid sm:grid-cols-1 gap-y-10 my-16 lg:grid-cols-2 justify-items-center">
        <div>
          <Frontend />
        </div>
        <div>
          <Backend />
        </div>
      </div>
    </div>
  );
};

export default Services;
