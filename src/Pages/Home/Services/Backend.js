import React from "react";
import { AiOutlineCodeSandbox } from "react-icons/ai";

const Backend = () => {
  return (
    <>
      <div className="h-96 bg-[#252734] w-80 flex flex-col justify-around pl-10 service-box">
        <h3 className="text-3xl text-secondary my-2">Backend</h3>
        <AiOutlineCodeSandbox className="text-secondary text-6xl"></AiOutlineCodeSandbox>
        <div>
          <li className="my-3 hover:text-secondary">Node.js</li>
          <li className="my-3 hover:text-secondary">Express.jS</li>
          <li className="my-3 hover:text-secondary">MongoDB</li>
          <li className="my-3 hover:text-secondary">Mongoose</li>
          <li className="my-3 hover:text-secondary">JWT</li>
          <li className="my-3 hover:text-secondary">Stripe JS</li>
        </div>
      </div>
    </>
  );
};

export default Backend;
