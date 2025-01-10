import React, { useState } from 'react'

import config from '../config.js'



import Form from "./Form";
import Card from './Card'
import Banner from './Banner'


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <>
    <div className='  text-center  mt-36 ml-5 sm:ml-4  lg:ml-0 font-roboto' >
    <div className=" ">

          <h2 className="text-lg md:text-2xl lg:text-4xl font-bold text-black shadow-black m-1">
            Real Estate Lead Management CRM Software to Boost Sales
          </h2>
          <p className="text-xs sm:text-[12.8px] md:text-base text-black  mt-2">
            Built for real estate agencies of all sizes, Lead Management CRM offers cutting-edge sales process management,
           <p className=' text-xs sm:text-[12.8px] md:text-base text-black  '> property management, and automation for real estate agents, real estate developers, and brokerage firms.</p>
          </p>
          <p className="text-xs sm:text-[12.8px]  md:text-base    text-black">
            Bring home more deals with the all-in-one real estate CRM platform crafted for your business.
          </p>
          {/* <button className="text-sm font-bold md:text-xl  mt-3  py-1 px-3 bg-[#FD89558C] border-1 border-[#FD8955] rounded-md hover:bg-[#FD8955] transition duration-300">
            Get a Demo
          </button> */}
           <div className="relative">
  
      <button
        onClick={togglePopup}
        className="text-sm font-bold md:text-xl mt-3 py-1 px-3 bg-[#FD89558C] border-1 border-[#FD8955] rounded-md hover:bg-[#FD8955] transition duration-300"
      >
        Get a Demo
      </button>

      {/* Popup */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <Form onClose={togglePopup} />
        </div>
      )}
    </div>
          <img className="w-full  "  src={config.logo} alt="Banner" />
 
      </div>
      </div>
<Card />
      <div className=' w-full overflow-hidden  md:overflow-hidden   bg-[#F6F2EF] mt-10 translate-y-[-40px] md:translate-y-[-0px]  md:mt-0  '>
        <div className=' font-roboto '>
          <div className=' mt-20'><h1 className='text-center font-bold text-lg sm:text-lg md:text-3xl ml-1 mr-2 md:mr-0 '> Revolutionize Your Real Estate Business with 
       </h1>
       <h1 className='text-center text-black font-bold  text-lg sm:text-2xl md:text-3xl'>   Smart CRM Solutions</h1>
       </div>
       </div>
        <div className='grid sm:grid-cols-1  md:grid-cols-7 my-5 sm:ml-5   lg:ml-28 lg:mr-5'>
        <div className=' text-center md:order-1 font-roboto '>
            <h2 className='    font-bold  sm:text-lg md:text-md lg:text-lg  '> Streamlining Lead 
            and Sales Management </h2>
            <p className='text-xs text-center ml-2 my-2 sm:ml-2 lg:ml-0 mr-2 lg:mr-0 '>Streamline your lead management and sales processes to improve efficiency, drive growth, and enhance client relationships in real estate.</p>
          
          </div>
          <div className='md:my-auto md:mb-20 mx-auto   md:order-2   rotate-90 md:rotate-0 '><img src={config.right} alt="" srcset="" />
          </div>
        <div className='  md:order-3  mx-auto my-0'>
          <img src={config.barChart} className='mx-auto font-roboto' alt="" srcset="" />
            <h1 className='text-center  font-bold  md:text-lg lg:text-lg'> Boost Sales with CRM </h1>
            <p className='text-xs text-center my-2'>Achieve Greater Sales with CRM Integration</p>
          
          </div>
          <div className='md:my-auto md:mb-20 mx-auto   md:order-4   rotate-90 md:rotate-0'><img src={config.right} alt="" srcset="" /></div>
        <div className='   md:order-5 font-roboto'>
          <img className='mx-auto' src={config.report} alt="" />
            <h2 className='text-center mx-auto font-bold    md:text-lg lg:text-lg'> Lead Management Made Easy</h2>
            <p className='text-xs text-center my-2'>Easily Organize and Manage Your Leads</p>
          
          </div>
          <div className=' md:my-auto md:mb-20 mx-auto   md:order-6  rotate-90 md:rotate-0  '><img src={config.right} alt="" srcset="" /></div>
        <div className=' md:order-7  font-roboto'>
    <img className='mx-auto ' src={config.target} alt="" /> 
            <h1 className='text-center mx-auto font-bold md:text-lg lg:text-lg '> Streamline Your Lead Pipeline</h1>
            <p className='text-xs text-center my-2'>Efficiently Manage and Streamline Leads </p>
          </div>
        </div>
      </div>
      <Banner />
   
      <div className=' w-full  mt-0 md:mt-0 lg:mt-0 font-roboto md:h-[483px] bg-[#F6F2EF] grid grid-cols-1 md:grid-cols-2 '>
        <div className=' my-10  md:my-auto '>   
        <div className='  order-1  flex ml-5 sm:ml-16 lg:ml-36'>
      <div className='  my-auto'>
      <img className='w-[72px] h-[72px]  ' src={config.Polygon} alt="" srcset="" /></div>
      <p className='mt-4 sm:ml-5   ml-5  text-[#F1C27C] mr-2 md:mr-0'>Revolutionize Your Workflow</p>
      </div>
       <div className=' lg:ml-24  ml-5 font-roboto  '>
       <h1 className=' font-bold text-3xl my-3   md:ml-10 md:w-[70%] '>Transform the Way You Manage Real Estate</h1>
       <p className='text-xs mt-4  md:ml-10 w-[80%]'>Simplify, streamline, and scale your real estate operations with our cutting-edge Real Estate Management Software. From lead tracking to property management and sales, our solution integrates all essential tools into one platform. Optimize your workflow, enhance client relationships, and make data-driven decisions to stay ahead in the competitive real estate market.</p>
       </div>
        </div>
        <div className='   order-2 lg:my-5  lg:ml-24   my-auto ' >
         <div className='flex ml-5 mr-2 md:mt-20 lg:mt-8 md:ml-0 font-roboto'>
         <img src={config.Domain} alt="" srcset="" />
         <h1 className='my-auto ml-5 sm:ml-5 text-[#F1C27C]'>Simplify Real Estate Operations</h1>
       
         </div>
         <div className='w-[90%] ml-5 mr-2  md:w-[70%] md:ml-0 font-roboto '>
         <h1 className=' font-bold text-3xl my-3 '>All-in-One Solution for Real Estate Professionals</h1>
         <p className='mt-3 text-xs fotne-roboto mb-5 md:mb-0'>Whether you're managing properties, tracking leads, or closing deals, our software is designed to meet your every need. With advanced features like automated lead distribution, property details organization, and real-time reporting, you can focus on growing your business while we handle the rest. Experience seamless management with a user-friendly and intuitive interface tailored for real estate success.</p>
         </div>
        </div>
      </div>
      <div className='   lg:h-[500px]   bg-[#F1F1F1]  font-roboto '>
        <div className=' grid grid-cols-1 ml-3'>
          <h1 className='font-bold text-xl md:text-3xl  text-center my-16 mr-2 md:mr-0'>Subscribe Now for Expert Insights, Tips, and Updates on Real Estate CRM</h1>
        
       <div className='  lg:ml-36  md:ml-10  order-1  grid  grid-cols-1 my-3 lg:grid-cols-2 ml-4 mr-2  font-roboto '>
         <div className='order-1'> <h1 className='font-bold text-xl md:text-3xl font-roboto mr-2 md:mr-0'>Stay Informed and Ahead in the Real Estate Market with Our Exclusive CRM News and Updates</h1>
         <p className='my-2 text-xs font-roboto mr-2 md:mr-0'>Get access to the latest industry trends, expert insights, and updates on how our CRM solutions can enhance your real estate business. Stay informed and take the lead in a competitive market with exclusive content designed to empower your success.
         Learn how to optimize your workflows, manage leads efficiently, and close deals faster. Our updates provide actionable tips and strategies to help you stay ahead. Don’t miss out on valuable insights tailored to meet the unique needs of real estate professionals.</p></div>
        <div className='  order-2  my-2  md:ml-[30%] lg:ml-32 mr-3 md:mr-0   md:my-auto space-y-3 grid font-roboto  grid-cols-1  '>

       <input type="text" placeholder='Full Name' className='md:w-[290px] rounded-md h-[50px] p-2' />
        <input type="email" placeholder='Email' className='md:w-[290px]  rounded-md h-[50px] p-2'/>
        <input type="text" placeholder='Mobile Number' className='md:w-[290px] h-[50px] rounded-md p-2'/>
        <button class="btn bg-[#E5ECF4] md:w-[290px]  h-[50px] rounded-md p-2" type="submit">Submit</button>
</div>
</div>
     </div>

      </div>
     

    </>
  )
}
