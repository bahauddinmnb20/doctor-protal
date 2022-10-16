import React from 'react';

const InfoItme = ({ img, title, text, bgClass }) => {
  return (
    <div className={` card lg:card-side shadow-xl pl-6 pt-6 ${bgClass} `}>
      <figure><img src={img} alt="Album" /></figure>
      <div className="card-body text-white text-left">
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default InfoItme;