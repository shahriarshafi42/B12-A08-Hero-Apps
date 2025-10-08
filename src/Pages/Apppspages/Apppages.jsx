import React from 'react';
import { useLoaderData } from 'react-router';
import Apppage from '../Apppage/Apppage';

const Apppages = () => {
    const data = useLoaderData()
    console.log(data);
    
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-5xl text-center pt-10 font-bold mt-10'> Our All Applications</h1>
            <p className='text-center p-4 mb-10 text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p> 
            <div className='flex justify-between'>
                <h2 className='font-bold ml-10 text-xl'>({data.length})Apps Found</h2>
                <div>
                    <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>
                </div>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto  p-10'>
             {
                data.map((singleapppage, index)=> <Apppage key={index} singleapppage={singleapppage}></Apppage>)
            }
           </div>
        </div>
    );
};

export default Apppages;