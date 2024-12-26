import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios('http://localhost:8080/getSolution');
        if (response.status !== 200) {
          throw new Error('Failed to fetch data');
        }
        setData(response.data.data);
      } catch (error) {
        console.error('Fetch Error:', error);
      }
    };

    fetchdata();
  }, []);

  return (
    <div className='space-y-10 pb-10 sm:mt-0 font-roboto bg-[#F7F7FE]'>
      <div className='flex ml-2 mr-4 sm:ml-3 md:ml-3'>
        <h1 className='mx-auto md:my-10 my-5 font-bold md:text-3xl text-xl text-center'>
          Why choose Lead Management CRM for your real estate business?
        </h1>
      </div>
      <div className='grid grid-cols-1 md:mx-[100px] pb-7 gap-10 md:grid-cols-2 lg:grid-cols-3'>
        {data.map((item, index) => (
          <div key={index} className='w-[90%] bg-[#FFFFFF] border-2px shadow-sm rounded-md mx-auto p-2'>
            <img className='mx-auto mt-[22px] w-[58px] h-[58px]' src={`http://localhost:8080/uploads/${item.shortImage}`}/>
            <p className='text-center font-bold text-xl'>{item.title}</p>
            <p className='p-2 mt-2 text-[13px] text-center font-roboto'>{item.shortDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
