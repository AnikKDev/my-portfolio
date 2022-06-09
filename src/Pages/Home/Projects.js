import React from 'react';
import project1 from '../../img/project-1.PNG';
import project2 from '../../img/project-2.PNG';
import project3 from '../../img/project-3.PNG';
import './Projects.css';
const Projects = () => {
    return (
        <div>
            <h1 clasName="text-8xl">My Complete Projects</h1>
            <div className="grid sm:grid-cols-1 gap-10 lg:grid-cols-2">
                <div className="project-container bg-[#252734] p-6">
                    <div className="image-container">
                        <img className="h-80" src={project1} alt="" />
                        <div className="image__overlay image__overlay--blur">
                            <span className="clickme__link">Live Preview</span>
                        </div>
                    </div>
                    <div className="my-5">
                        <h2 className="text-4xl">MyCarpentry</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates ducimus perspiciatis rerum ut voluptatibus tenetur?</p>
                    </div>
                </div>
                <div className="project-container bg-[#252734] p-6">
                    <div className="image-container">
                        <img className="h-80" src={project1} alt="" />
                        <div className="image__overlay image__overlay--blur">
                            <span className="clickme__link">Live Preview</span>
                        </div>
                    </div>
                    <div className="my-5">
                        <h2 className="text-4xl">MyCarpentry</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates ducimus perspiciatis rerum ut voluptatibus tenetur?</p>
                    </div>
                </div>
                <div className="project-container bg-[#252734] p-6">
                    <div className="image-container">
                        <img className="h-80" src={project1} alt="" />
                        <div className="image__overlay image__overlay--blur">
                            <span className="clickme__link">Live Preview</span>
                        </div>
                    </div>
                    <div className="my-5">
                        <h2 className="text-4xl">MyCarpentry</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates ducimus perspiciatis rerum ut voluptatibus tenetur?</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Projects;