import React from 'react';

const TsSingle = ({ review }) => {
    return (
        <div className=" lg:max-w-lg card p-8 shadow-xl">
            <p className='text-justify mb-9'> Ut quod quibusdam maiores, aperiam repellat, nesciunt dolores tempora quas eaque eos tenetur reprehenderit vitae qui. Cupiditate numquam aliquam consectetur totam unde?</p>

            <div className=" flex items-center">
                <div className=" w-20 rounded-full ring ring-primary ring-offset-2 mr-6">
                    <img src={review.img} alt=""/>
                </div>
                <div className="text-left ">
                    <h2 className="card-title text-xl">{review.name}</h2>
                    <p>{review.info}</p>
                </div>
            </div>
        </div>
    );
};

export default TsSingle;