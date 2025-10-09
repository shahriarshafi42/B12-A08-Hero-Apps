import React from 'react';
import { FaArrowAltCircleDown, FaRegStar, FaStar } from 'react-icons/fa';

const Installapp = ({app}) => {
    const {title, image,downloads,ratingAvg}= app
    return (
       <div className="flex flex-col md:flex-row justify-between items-center p-4 shadow-md rounded-lg bg-white mb-4 hover:shadow-lg hover:scale-[1.02] transition-transform duration-200">
  
  <div className="flex items-center gap-4 w-full md:w-auto mb-4 md:mb-0">
    <img
      className="h-20 w-20 object-cover rounded-md"
      src={image}
      alt={title}
    />
    <div>
      <h2 className="font-bold text-lg">{title}</h2>
      <div className="flex gap-4 mt-1 flex-wrap">
        <p className="flex items-center gap-2 font-semibold text-green-500">
          <FaArrowAltCircleDown /> {downloads}
        </p>
        <span className="flex items-center gap-2 font-semibold text-orange-500">
          <FaStar /> {ratingAvg}
        </span>
      </div>
    </div>
  </div>

  
  <div className="w-full md:w-auto">
    <button className="w-full md:w-auto bg-green-600 text-white px-5 py-2 rounded-md font-medium hover:bg-green-700 transition duration-200">
      Uninstall
    </button>
  </div>
</div>

    );
};

export default Installapp;