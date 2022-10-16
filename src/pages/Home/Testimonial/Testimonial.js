import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png';
import  people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import TsSingle from './TsSingle';

const Testimonial = () => {
    const TestimonialData =[
        {
            id : 1,
            name: "winson Herry",
            info: "California",
            img: people1

        },
        {
            id : 2,
            name: "winson Herry",
            info: "California",
            img: people2

        },
        {
            id : 3,
            name: "winson Herry",
            info: "California",
            img: people3

        },
    ]
    return (
        <section>
            <div className=" flex justify-between items-center mb-16">
                <div className="text-left">
                    <h5 className=' text-primary text-xl font-bold mb-3'>Testimonial</h5>
                    <h3 className=' text-3xl text-accent font-normal'>What Our patients Says</h3>
                </div>
                <img className=' w-48' src={quote} alt="" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-36 justify-items-center">

                {
                    TestimonialData.map(review => <TsSingle
                    key={review.id}
                    review = {review}
                    ></TsSingle>
                        )
                }
            </div>
        </section>
    );
};

export default Testimonial;