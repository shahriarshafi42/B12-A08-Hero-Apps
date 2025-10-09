import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Apppage from '../Apppage/Apppage';

const Apppages = () => {
  const data = useLoaderData()
  console.log(data);
  const [search, setSearch] = useState('')

  const term = search.trim().toLocaleLowerCase()
  const searchedproduct = term? data.filter(dat=>dat.title.toLocaleLowerCase().includes(term)): data
  console.log(searchedproduct);
  

  return (
    <div className='bg-gray-100'>
      <div className='max-w-7xl mx-auto '>
        <h1 className='text-5xl text-center pt-10 font-bold '> Our All Applications</h1>
        <p className='text-center p-4 mb-10 text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
        <div className='flex justify-between'>
          <h2 className='font-bold ml-10 text-xl'>({searchedproduct.length})Apps Found</h2>
          <div>
            <label className="relative w-full max-w-sm">
  
  <svg
    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 opacity-70 pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
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

 
  <input
    type="search"
    value={search}
    onChange={e => setSearch(e.target.value)}
    placeholder="Search here..."
    required
    className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition duration-200 text-sm shadow-sm"
  />
</label>

          </div>
        </div>
       <div className='grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto p-10'>
  {searchedproduct.length > 0 ? (
    searchedproduct.map((singleapppage, index) => (
      <Apppage key={index} singleapppage={singleapppage} />
    ))
  ) : (
    <div className="col-span-full text-center text-5xl text-gray-500 font-bold  p-2 ">
      No apps Found
      <img className='flex mx-auto mt-5' src="App-Error.png" alt="" />
     
    </div>
    
  )}
</div>
      </div>
    </div>
  );
};

export default Apppages;