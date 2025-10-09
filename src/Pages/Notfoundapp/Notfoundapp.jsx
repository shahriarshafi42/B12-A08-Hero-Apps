import React from 'react';
import Navber from '../../Componanats/Header/Navber';
import Footer from '../../Componanats/Footter/Footer';
import { Link } from 'react-router';

const Notfoundapp = () => {
    return (
        <>
         <Navber />
         <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
           <main>
             <div className="flex flex-col items-center justify-center py-10">
               <img src="App-Error.png" alt="404 Error" className="max-w-xs" />
               <h1 className="text-5xl font-bold text-center mt-6">
                 Oops, App not found!
               </h1>
               <p className="text-center text-gray-500 mt-2">
                 The page you are looking for is not available.
               </p>
               <Link to={'/'}>
               <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm transition cursor-pointer">
                 Go Back!
               </button>
               </Link>
             </div>
           </main>
           <Footer />
         </div>
       </>
       
    );
};

export default Notfoundapp;