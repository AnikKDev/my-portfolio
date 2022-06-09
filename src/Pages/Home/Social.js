import React from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
// import { AiOutlinePhone } from 'react-icons/ai';
const Social = () => {
    return (
        <div className="my-20">
            <h1 className="text-4xl text-secondary mb-20">Connect With Me</h1>
            <div>
                <div className="flex items-center">
                    <AiOutlinePhone className="text-2xl mx-4"></AiOutlinePhone>
                    <p className="my-4">+8801521370824</p>
                </div>
                <div className="flex items-center">
                    <AiOutlineWhatsApp className="text-2xl mx-4"></AiOutlineWhatsApp>
                    <p className="my-4">+8801521370824</p>
                </div>
                <div className="flex items-center">
                    <AiOutlineMail className="text-2xl mx-4"></AiOutlineMail>
                    <p className="my-4">anikdev2016@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Social;