import React from 'react';
import img from '../../../assets/images/doctor-small.png';
import bg from '../../../assets/images/appointment.png';


const Appointment = () => {
    return (
       
            <div className="hero mb-36 " style={{
             background: `url(${bg})`,
             backgroundSize:"cover",
            }} >
                <div className="hero-content flex-col p-0  lg:flex-row">
                    <img src={img} className=" hidden lg:block -mt-24 " alt=''/>

                    <div className='text-left text-white'>
                        <h4 className="text-xl font-bold text-primary mb-3">Appointment</h4>
                        <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn bg-gradient-to-r from-secondary to-primary outline-none border-none font-bold">Get Started</button>
                    </div>
                </div>
            </div>
    );
};

export default Appointment;