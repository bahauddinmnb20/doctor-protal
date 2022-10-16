import React from 'react';
import Appointment from './Appointment/Appointment';
import Bannar from './Bannar';
import Bannar2 from './Bannar2';
import Contact from './Contact/Contact';
import Info from './Info/Info';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='p-4'>
            <Bannar />
            <Info />
            <Services />
            <Bannar2 />
            <Appointment />
            <Testimonial />
            <Contact />
        </div>
    );
};

export default Home;