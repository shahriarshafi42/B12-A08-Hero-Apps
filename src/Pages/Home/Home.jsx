import React from 'react';
import Bannar from '../Bannar/Bannar';
import Apps from '../Apps/Apps';
import { useLoaderData } from 'react-router';

const Home = () => {
  const data = useLoaderData()
  console.log(data);
  
    return (
        <div>
          <Bannar></Bannar>
         
          <Apps data={data}></Apps>
        
        </div>
    );
};

export default Home;