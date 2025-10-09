import React, { Suspense } from 'react';
import App from '../App/App';
import { Link } from 'react-router';

const Apps = ({data}) => {
    return (
        <div className='bg-gray-100 p-8'>
            <h1 className='text-5xl text-center p-4 font-bold '>Trending Apps</h1>
            <p className='text-center p-4 text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
           <Suspense fallback={<span>loading...</span>}>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto  p-10'>
               {
                data.map((singleapp, index)=> <App key={index} singleapp={singleapp}></App>)
             }
          </div>
           </Suspense>
           <Link to={'/apps'}>
           <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-8 py-2 rounded-sm text-sm transition cursor-pointer flex mx-auto mt-4  ">Show All </button>
           </Link>
            
        </div>
    );
};

export default Apps;