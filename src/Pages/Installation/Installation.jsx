import React, { useState } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { IoCodeDownloadSharp } from 'react-icons/io5';
import { useLoaderData, useParams } from 'react-router';
import { Bar, BarChart, CartesianGrid, LabelList, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { addtostoreDB } from '../../Utility/addToDB';
import { MdReviews } from 'react-icons/md';
import { Bounce, ToastContainer, toast } from 'react-toastify';



const Installation = () => {
    const { id } = useParams()
    const appid = parseInt(id)
    const data = useLoaderData()
    const [isInstalled, setIsInstalled] = useState(false);

    console.log(data);

    const singeleapp = data.find(app => app.id === appid)
    console.log(singeleapp);
    const { companyName, image, ratings, ratingAvg, reviews, size, description, title, downloads } = singeleapp;

    const ratingsData = ratings.map(rating => {
        const rattings = {
            name: rating.name,
            count: rating.count,
        }
        return rattings
    })

    const hanndleinstalledapp = id => {

        addtostoreDB(id)
        setIsInstalled(true)

        toast.success(' "app successfully installed"!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });


    }

    return (
        <div className='max-w-7xl mx-auto '>
            <div className="flex flex-wrap items-center gap-15 p-10">
                <img src={image} alt="App Icon" className="w-100 h-100" />
                <div>
                    <div>
                        <h2 className="text-2xl font-semibold">{title}</h2>
                        <p className="text-gray-600">
                            Developed by <span className="text-blue-600">{
                                companyName}</span>
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-10 mt-6  ">
                        <div className='flex gap-5 '>
                            <div className="min-w-[100px]">
                                <p className="text-3xl font-bold flex items-center gap-1.5 text-green-500">{downloads} <IoCodeDownloadSharp /> <img src="icon-downloads.png" alt="" /></p>
                                <p className="text-sm text-gray-500">Downloads</p>
                            </div>
                            <div className="min-w-[100px]">
                                <p className="text-3xl font-bold flex items-center gap-1.5 text-orange-400">{ratingAvg} <FaRegStar /></p>
                                <p className="text-sm text-gray-500">Average Ratings</p>
                            </div>
                            <div className="min-w-[100px]">
                                <p className="text-3xl font-bold flex items-center gap-1.5 text-purple-500">{reviews} <MdReviews /></p>
                                <p className="text-sm text-gray-500">Total Reviews</p>
                            </div>
                        </div>

                    </div>
                    <button
                        onClick={() => hanndleinstalledapp(id)}
                        disabled={isInstalled}
                        className={`px-5 py-2 rounded-md font-medium transition cursor-pointer my-10 
    ${isInstalled ? 'bg-green-500 text-white cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 text-white'}`}
                    >
                        {isInstalled ? 'Installed' : 'Install Now (291 MB)'}
                    </button>

                </div>
            </div>

            <div className="w-full  mt-10 bg-white p-4 rounded ">
                <h3 className="text-3xl  mb-4 font-bold ">Ratings</h3>
                <div>
                    <BarChart
                        layout="vertical"
                        width={1800}
                        height={400}
                        data={ratingsData}

                    >

                        <XAxis type="number" />
                        <YAxis type="category" dataKey="name" />
                        <Tooltip />
                        <Bar className='text-gray-300' dataKey="count" fill="orange" />
                    </BarChart>
                </div>
            </div>
            <div className=' p-10'>
                <h2 className='font-bold text-3xl py-2 '>Description</h2>
                <p>{description}</p>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    );
};

export default Installation;