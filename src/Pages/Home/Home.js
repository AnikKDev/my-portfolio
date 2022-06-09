import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects';
import Services from './Services';

const Home = () => {
    return (
        <div className="md:px-24">
            <Banner />
            <Services></Services>

            <Projects />
            <Contact />
        </div>
    );
};

export default Home;