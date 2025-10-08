import React from 'react';
import { FaArrowAltCircleDown, FaRegStar, FaStar } from 'react-icons/fa';

const Installapp = ({app}) => {
    const {title, image,downloads,ratingAvg}= app
    return (
        <div className='flex justify-between items-center p-4 shadow-md rounded-lg bg-white mb-4    '>
    <div className='flex gap-10 items-center'>
        <img className='h-[80px] w-[80px] m-3' src={image} alt="" />
        <div>
        <h2 className='font-bold'>{title}</h2>  
        <div className='flex gap-4'>
            <p className='flex items-center gap-2 font-semibold text-green-500'>
            <FaArrowAltCircleDown />{downloads}
            </p>
            <span className='flex items-center gap-2 font-semibold text-orange-500'>
            <FaStar />{ratingAvg}
            </span>
        </div>
        </div>
    </div>
    <button className="bg-green-600 text-white px-5 py-2 rounded-md font-medium hover:bg-green-700 transition cursor-pointer">
        Uninstall
    </button>
    </div>

    );
};

export default Installapp;