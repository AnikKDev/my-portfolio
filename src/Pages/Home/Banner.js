import React from 'react';
import profile from '../../img/profile.png';
import circleBg from '../../img/Circle design.svg';
import './Banner.css';
const Banner = () => {
    return (
        <div className="md:px-28 mt-10">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 justify-items-center items-center">
                <div>
                    <h3 className="text-secondary text-4xl my-3">Hello! I'm</h3>
                    <h1 className="text-secondary text-8xl my-2">Anik Dev</h1>
                    <p className="mt-5">
                        Web Developer | Content Writer | Student
                    </p>
                    <button className="rounded-full btn-outline border-2 my-16 capitalize hire-me-btn">Hire Me</button>
                </div>
                <div>
                    <img src={circleBg} className="absolute" alt="" />
                    <img src={profile} className="relative" alt="profile.png" />
                </div>
            </div>
        </div>
    );
};

export default Banner;