import React from 'react';
import InfoItme from './InfoItme';
import clock from "../../../assets/icons/clock.svg";
import phone from "../../../assets/icons/phone.svg";
import marker from "../../../assets/icons/marker.svg";

const Info = () => {
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <InfoItme img={clock} bgClass='bg-gradient-to-r from-secondary to-primary' title="Opening Hours" text="Lorem Ipsum is simply dummy text of the pri" />
            <InfoItme img={marker} bgClass='bg-accent' title="Visit our location" text="Brooklyn, NY 10036, United States" />
            <InfoItme img={phone} bgClass='bg-gradient-to-r from-secondary to-primary' title="Contact us now" text="+000 123 456789" />
        </div>
    );
};

export default Info;