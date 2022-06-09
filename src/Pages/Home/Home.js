import React from 'react';
import Banner from './Banner';
import Projects from './Projects';

const Home = () => {
    return (
        <div className="md:px-24">
            <Banner />
            <Projects />
        </div>
    );
};

export default Home;