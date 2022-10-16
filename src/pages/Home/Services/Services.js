import React from 'react';
import Service from './Service';
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";

const Services = () => {
    return (
        <div className=' mt-32 text-center'>
            <h4 className='text-xl font-bold text-primary mb-3'>OUR SERVICES</h4>
            <h3 className=' text-4xl font-normal text-accent mb-8'>Services We Provide</h3>
            <div className=" grid grid-cols-1 gap-8  md:gap-5  lg:grid-cols-3">
                <Service img={fluoride} title ="Fluoride treatment"/>
                <Service img={cavity} title ="cavity Filling"/>
                <Service img={whitening} title ="Teeth Whitening"/>
            </div>
        </div>
    );
};

export default Services;