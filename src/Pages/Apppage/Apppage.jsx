import React from 'react';

const Apppage = ({singleapppage}) => {
      const {downloads, ratingAvg,title,id, image,ratings} = singleapppage
    return (
         <div>
         <div className="card bg-base-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out w-full max-w-[425px] mx-auto cursor-pointer">
  <figure className="overflow-hidden rounded-t-2xl">
    <img
      className="h-[250px] w-full object-cover sm:h-[280px] md:h-[300px] lg:h-[316px] transition-transform duration-300 ease-in-out hover:scale-110 p-7"
      src={image}
      alt="App Preview"
    />
  </figure>

  <div className="card-body p-5">
    <h2 className="card-title text-lg sm:text-xl font-semibold">{title}</h2>

    <div className="card-actions flex justify-between items-center mt-3">
      <div className="badge badge-outline text-green-500 font-bold flex items-center gap-1 px-3 py-2">
        <img className="w-4 h-4" src="icon-downloads.png" alt="Downloads" />
        <span>{downloads}</span>
      </div>

      <div className="badge badge-outline bg-orange-100 text-orange-500 font-bold flex items-center gap-1 px-3 py-2">
        <img className="w-4 h-4" src="icon-ratings.png" alt="Ratings" />
        <span>{ratingAvg}</span>
      </div>
    </div>
  </div>
  
</div>

    </div>
    );
};

export default Apppage;