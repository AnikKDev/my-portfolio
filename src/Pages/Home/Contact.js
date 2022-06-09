import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_j1s0mrs', 'template_6z6xzzy', form.current, 'WiWDMEzH4OOTONo8R')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <div>
            <h1 className="text-4xl text-secondary">Contact Me</h1>
            <form ref={form} onSubmit={sendEmail} class="card-body mx-auto">
                <div class="form-control items-center">
                    <label class="label">
                    </label>
                    <input type="text" placeholder="Name" class="input input-bordered w-full max-w-md" name="user_name" />
                </div>
                <div class="form-control items-center">
                    <label class="label">
                    </label>
                    <input required type="email" placeholder="Email" class="input input-bordered w-full max-w-md" name="user_email" />
                </div>
                <div class="form-control items-center">
                    <label class="label">
                    </label>
                    <textarea placeholder="Message" class="input input-bordered w-full max-w-md" name="message" />
                    <label class="label">
                    </label>
                </div>
                <div class="form-control mt-6">
                    <button type="submit" class="btn btn-primary w-full max-w-md">Send</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;