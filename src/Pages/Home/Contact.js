import React from 'react';
import HireMe from './HireMe';
import Social from './Social';

const Contact = () => {

    return (
        <div className="grid md:grid-cols-1 items-start lg:grid-cols-2">
            <Social></Social>
            <HireMe></HireMe>
        </div>
    );
};

export default Contact;