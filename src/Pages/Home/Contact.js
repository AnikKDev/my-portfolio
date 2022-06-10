import React from 'react';
import HireMe from './HireMe';
import Social from './Social';

const Contact = () => {

    return (
        <div id='contact' className="sm:px-16 mt-10 lg:px-28 bg-[#252734]">
            <div className="grid md:grid-cols-1 items-start lg:grid-cols-2">
                <Social></Social>
                <HireMe></HireMe>
            </div>

        </div>
    );
};

export default Contact;