import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredapp, removeFromStoreDB } from '../Utility/addToDB';
import Installapp from './installapp';

const Installedapps = () => {
  const [applist, setapplist] = useState([]);
  const [sort, setSort] = useState('');
  const data = useLoaderData();

  useEffect(() => {
    const storeappdata = getStoredapp();
    const convertedstoreapp = storeappdata.map(id => parseInt(id));
    const myapplist = data.filter(app => convertedstoreapp.includes(app.id));
    setapplist(myapplist);
  }, []);

  const hanndlesort = (type) => {
    setSort(type);
    if (type === 'ascending') {
      const sorted = [...applist].sort((a, b) => a.downloads - b.downloads);
      setapplist(sorted);
    }
    if (type === 'descending') {
      const sorted = [...applist].sort((a, b) => b.downloads - a.downloads);
      setapplist(sorted);
    }
  };

 
  const handleUninstallApp = (id) => {
    removeFromStoreDB(id);
    const updatedList = applist.filter(app => app.id !== id);
    setapplist(updatedList);
  };

  return (
    <div className='bg-gray-100'>
      <h1 className='text-5xl text-center p-4 font-bold '>Your Installed Apps</h1>
      <p className='text-center p-4 text-gray-500'>
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center'>
          <h2 className='font-bold p-4 text-2xl'>{applist.length} Apps Found</h2>
          <div>
            <details className="dropdown">
              <summary className="btn m-1">Sort By Ratings: {sort ? sort : ""}</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a onClick={() => hanndlesort("ascending")}>Ascending</a></li>
                <li><a onClick={() => hanndlesort("descending")}>Descending</a></li>
              </ul>
            </details>
          </div>
        </div>

        {applist.length > 0 ? (
          applist.map((app, index) => (
            <Installapp key={index} app={app} onUninstall={handleUninstallApp} />
          ))
        ) : (
          <div className="text-center text-gray-500 text-lg mt-10">
            No installed apps found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Installedapps;
