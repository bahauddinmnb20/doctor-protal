import React from 'react';
import img from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'

const Bannar = () => {
    return (
        <div className="hero min-h-screen  relative" >
            <img className="absolute w-full  object-cover opacity-70"
                src={bg}
                alt="" />
            <div className="hero-content flex-col lg:flex-row-reverse" >
                <img className="w-full lg:w-1/2 rounded-lg shadow-2xl"
                    src={img}
                    alt="" />
                <div className=" text-left " >
                    <h1 className="text-5xl font-bold" > Your New Smile Starts Here < /h1>
                        <p className="py-6" > Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the </p>
                        <button className="btn bg-gradient-to-r from-secondary to-primary outline-none border-none font-bold " > Get Started < /button>
                        </div>
                </div>

            </div>

            );
};

            export default Bannar;