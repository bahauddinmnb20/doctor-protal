import React from 'react';
import img from '../../assets/images/treatment.png'


const Bannar2 = () => {
  return (
    <div className="hero  bg-base-100 lg:p-36 my-32 ">
      <div className="hero-content flex-col gap-24 lg:flex-row">
        <img src={img} className=" lg:w-4/12 rounded-lg shadow-2xl" alt=''/>
        <div className='text-left'>
          <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
          <button className="btn bg-gradient-to-r from-secondary to-primary outline-none border-none font-bold">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Bannar2;