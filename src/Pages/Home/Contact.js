import React from 'react';
import HireMe from './HireMe';
import Social from './Social';

const Contact = () => {

    return (
        <div id='contact'>
            <div className="grid md:grid-cols-1 items-start lg:grid-cols-2">
                <Social></Social>
                <HireMe></HireMe>
            </div>
            <footer class="footer footer-center p-4 text-base-content">
                <div>
                    <p>Copyright © 2022 - All right reserved by Anik Dev</p>
                </div>
            </footer>
        </div>
    );
};

export default Contact;