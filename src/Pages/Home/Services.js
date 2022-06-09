import React from 'react';
import './Services.css';
const Services = () => {
    return (
        <div className="py-10" id="services">
            <h2 className="text-5xl">What I Can Provide</h2>
            <div className="grid sm:grid-cols-1 gap-y-10 my-16 lg:grid-cols-2 justify-items-center">
                <div >
                    <div className="h-96 bg-[#252734] w-80 flex flex-col justify-around pl-10 service-box">
                        <h3 className="text-5xl text-secondary my-2">Frontend</h3>
                        <div>
                            <li className="my-3 hover:text-secondary">HTML/HTML5</li>
                            <li className="my-3 hover:text-secondary">CSS/CSS3</li>
                            <li className="my-3 hover:text-secondary">CSS Frameworks</li>
                            <li className="my-3 hover:text-secondary">JavaScript</li>
                            <li className="my-3 hover:text-secondary">React</li>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="h-96 bg-[#252734] w-80 flex flex-col justify-around pl-10 service-box">
                        <h3 className="text-5xl text-secondary my-2">Backend</h3>
                        <div>
                            <li className="my-3 hover:text-secondary">Express JS</li>
                            <li className="my-3 hover:text-secondary">MongoDB</li>
                            <li className="my-3 hover:text-secondary">JWT</li>
                            <li className="my-3 hover:text-secondary">Stripe JS</li>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;