import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Import your assets
import logoPlaceholder from '../assets/logo.png'; // Fallback logo
import facebook from '../assets/facebook.png';
import youtube from '../assets/youtube.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/lnkedin.png';
import call from '../assets/call.png';
import mail from '../assets/mail.png';

export default function Footer() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [solution, setSolution] = useState([]);

  useEffect(() => {
    const fetchSolution = async () => {
      try {
        const response = await axios('http://localhost:8080/getSolution');
        if (response.status !== 200) {
          throw new Error('Failed to fetch data');
        }

        
        setSolution(response.data.data); // Adjust according to your API structure
      } catch (error) {
        console.error('Fetch Error:', error);
      }
    };

    fetchSolution();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Bypass JWT by skipping authentication in development
        const response = await axios.get('http://localhost:3001/user/getWebData'
        // , {
          // headers: {
          //   Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzM1OTY3NTg0YWU1ZGI2YWVmNDU1YWMiLCJlbWFpbCI6IjhhZGl0eWFtaXNocmExQGdtYWlsLmNvbSIsImlhdCI6MTczNDkzODYzNjAwMCwicm9sZSI6IkFkbWluIn0.CSdlIcAwmoclZ0yFiRxEHDud0Hq2KKZvsG7ipWveeK4`, // Replace <mock-token> with a valid or mocked JWT
          // },
        // }
      );
  
        setData(response.data.Data);
      } catch (err) {
        console.error('Error fetching data:', err.message || err);

        setData({
          logo: logoPlaceholder,
          siteName: 'Techniajz',
        });
        setError('There was an error fetching the data. ');
      }
    };

    fetchData();
  }, []);
  if (!data) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <>
      <div className="w-full bg-[rgb(255,242,236)] grid grid-cols-1 md:grid-cols-5 lg:h-[400px] text-sm font-roboto overflow-hidden">
        <div className="order-1 ml-6 mt-10 md:mt-24 lg:ml-20 md:ml-4">
          {/* Dynamically load logo from backend */}
          <img src={`http://localhost:3001/${data.logo}` }className="w-[220px] mx-auto" alt="Logo" />
          <p className="my-2 text-xs mx-2">
            {data.description}
          </p>
        </div>

        <h1 className="font-bold mt-10 text-center md:hidden">Social Media</h1>
        <div className="order-3 mt-10 md:mt-0 grid grid-cols-5 md:grid-cols-1 ml-[15%] sm:ml-32 md:ml-9 lg:ml-32 w-[100vw] md:w-[20vw]">
          <h1 className="font-bold mt-24 hidden md:block">Social Media</h1>
          <div className="flex">
            <a href="https://en-gb.facebook.com/TechniAjz/">
              <img src={facebook} className="my-auto w-[32px]" alt="Facebook" />
            </a>
            <h1 className="hidden md:block ml-2 my-2">Facebook</h1>
          </div>
          <div className="flex">
            <img src={youtube} className="w-[40px] h-[32px]" alt="YouTube" />
            <h1 className="hidden md:block ml-2 my-2">YouTube</h1>
          </div>
          <div className="flex">
            <a href="https://www.instagram.com/techniajz/">
              <img src={instagram} className="w-[32px]" alt="Instagram" />
            </a>
            <h1 className="hidden md:block ml-2 my-2">Instagram</h1>
          </div>
          <div className="flex">
            <a href="https://www.linkedin.com/company/techniajz/">
              <img src={linkedin} className="w-[32px]" alt="LinkedIn" />
            </a>
            <h1 className="hidden md:block ml-2 my-2">LinkedIn</h1>
          </div>
        </div>

        <div className="order-3 mt-9 md:mt-24 text-center ">
          <h1 className="font-bold">Company</h1>
          <div className="my-3">
            <button className="btn">Features</button>
          </div>
          <div className="my-3 ">
            <button className="btn ">Pricing</button>
          </div>
          <div className="my-3">
            <button className="btn">Customer</button>
          </div>
          <div className="my-2">
            <button className="btn">About Us</button>
          </div>
        </div>

        <div className="order-4 mt-10 md:mt-24 text-center">
          <h1 className="font-bold md:text-left">Solution</h1>
          {solution.map((item, index) => (
    <div
      key={index}
      className="my-3 md:text-left cursor-pointer"
      onClick={() => {
        document.getElementById(`solution-${index}`).scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
        });
      }}
    >
      {item.title}
    </div>
  ))}
        </div>
     

        <div className="order-5 mt-10 md:mt-24 mr-3">
          <h1 className="font-bold text-center">Get In Touch</h1>
          <div className="my-3 flex justify-center">
            <img src={call} alt="Call" className="mr-2" />
            <h1>{data.mobile}</h1>
          </div>
          <hr className="mx-auto w-[90%] lg:w-[70%]" />
          <div className="my-3 flex justify-center">
            <img src={mail} alt="Mail" className="mr-2" />
            <h1>{data.email}</h1>
          </div>
        </div>
      </div>

      <hr />
      <div className="flex bg-[#FFF2EC] h-[50px] justify-center items-center">
        <h1 className="text-center">
          &copy; Copyright 2018-2024 <span className="text-[#45BAFF]">Techniajz</span> | All Rights Reserved
        </h1>
      </div>
    </>
  );
}
