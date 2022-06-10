import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import project1 from '../../img/project-1.PNG';
import project2 from '../../img/project-2.PNG';
import project3 from '../../img/project-3.PNG';
import project4 from '../../img/project-4.PNG';
import './Projects.css';
const Projects = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#252734]" id="projects">
            <h2 className="text-4xl text-secondary py-2 my-2">My Complete Projects</h2>
            <div className="grid sm:grid-cols-1 gap-10 lg:grid-cols-2">
                <div className="project-container bg-base-100 p-6">
                    <div className="image-container">
                        <img className="h-80" src={project1} alt="" />
                        <div className="image__overlay image__overlay--blur">
                            <a href="https://tool-manufacture-client.web.app/" className="clickme__link">Live Preview</a>
                            <a href="https://github.com/AnikKDev/my-carpentry" className="clickme__link">Github - Client</a>
                            <a href="https://github.com/AnikKDev/my-carpentry-server" className="clickme__link">Github - Server</a>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-4xl">MyCarpentry</h2>
                        <p className=" mt-6">This website based on carpentry tool manufacturer. In here User and and Admin can see two different UI. An Admin can perform CRUD operations. And a user can buy, remove, pay for a tool he/she chooses. There are some authentication that user or admin can not do some action without login.</p>
                        <h5 className="mt-6"><strong><span className="text-white">TOOLS: </span></strong>React, React Router, DaisyUI, Tailwind CSS, Google Firebase, Axios, React Query, React Stripe etc.</h5>
                        <button onClick={() => navigate('/project/1')} className="btn btn-primary">Details</button>
                    </div>
                </div>
                <div className="project-container bg-base-100 p-6">
                    <div className="image-container">
                        <img className="h-80" src={project2} alt="" />
                        <div className="image__overlay image__overlay--blur">
                            <a href="https://laptop-mania-client-side.web.app/" className="clickme__link">Live Preview</a>
                            <a href="https://github.com/AnikKDev/laptop-mania" className="clickme__link">Github - Client</a>
                            <a href="https://github.com/AnikKDev/laptop-mania-server" className="clickme__link">Github - Server</a>
                        </div>
                    </div>
                    <div className="my-5">
                        <h2 className="text-4xl">Laptop Mania</h2>
                        <p className=" mt-6">This site based on inventory management of Laptop. User must need to login to access all the functionality of this site. User can enter amount how much does he need to supply or he supplied. And the data will be saved in Backend.</p>
                        <h5 className="mt-6"><strong><span className="text-white">TOOLS: </span></strong>React JS, React bootstrap, React Router, MongoDB, Express JS, Google Firebase and some more React Component Libraries.</h5>
                        <button onClick={() => navigate('/project/2')} className="btn btn-primary">Details</button>
                    </div>
                </div>
                <div className="project-container bg-base-100 p-6">
                    <div className="image-container">
                        <img className="h-80" src={project3} alt="" />
                        <div className="image__overlay image__overlay--blur">
                            <a href="https://pixieco-react.web.app/" className="clickme__link">Live Preview</a>
                            <a href="https://github.com/AnikKDev/pixieco" className="clickme__link">Github - Client</a>

                        </div>
                    </div>
                    <div className="my-5">
                        <h2 className="text-4xl">Pixieco</h2>
                        <p className=" mt-6">This site based on single service provider. User needs to be logged in to use service from the provider. User can not put random url hashtags or pathname in addressbar or else he will get an Error 404.</p>
                        <h5 className="mt-6"><strong><span className="text-white">TOOLS: </span></strong>React JS, React Bootstrap, Google Firebase, React Icons etc.</h5>
                        <button onClick={() => navigate('/project/3')} className="btn btn-primary">Details</button>
                    </div>
                </div>
                <div className="project-container bg-base-100 p-6">
                    <div className="image-container">
                        <img className="h-80" src={project4} alt="" />
                        <div className="image__overlay image__overlay--blur">
                            <a href="https://rad-cobbler-4cf684.netlify.app/ " className="clickme__link">Live Preview</a>
                            <a href="https://github.com/AnikKDev/proxima-inc" className="clickme__link">Github - Client</a>
                        </div>
                    </div>
                    <div className="my-5">
                        <h2 className="text-4xl">Proxima Inc.</h2>
                        <p className=" mt-6">This site is based on a gadget providing company. Where you can see the monthly/yearly profits. You can see the customer reviews and so on etc.</p>
                        <h5 className="mt-6"><strong><span className="text-white">TOOLS: </span></strong>React, React Router, React Bootstrap etc.</h5>
                        <button onClick={() => navigate('/project/4')} className="btn btn-primary">Details</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Projects;