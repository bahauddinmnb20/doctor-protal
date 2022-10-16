import React from 'react';
import bg from '../../../assets/images/appointment.png';


const Contact = () => {
    return (
        <section style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }} className="py-16">
            <div className="text-center">
                <h5 className='text-primary text-xl mb-3 font-bold'>Contact Us</h5>
                <h3 className='text-4xl text-white font-normal'>Stay connected with us</h3>
            </div>
                <form className=' lg:w-1/3 mx-auto mt-10 flex flex-col items-center '>
                    <input type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs my-5" />
                    <textarea className="textarea w-full max-w-xs" placeholder="Your message"></textarea>
                    <input className='btn bg-gradient-to-r from-secondary to-primary outline-none border-none font-bold mt-8' type="submit" value="Submit" />
                </form>
        </section>
    );
};

export default Contact;