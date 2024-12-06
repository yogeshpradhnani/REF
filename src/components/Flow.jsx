import React from 'react'

export default function Flow() {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-9 my-2 w-full md md:ml-20 '>
  <div className='w-[230px] mx-auto order-1 my-2 '>
      <h1 className='s mt-10  text-center mx-auto font-bold  text-xl'> Streamlining Lead 
      and SalesManagement </h1>
      <p className='text-sm text-center my-2'>Streamline your lead management and sales processes to improve efficiency, drive growth, and enhance client relationships in real estate.</p>
    
    </div>
    <div className=' mt-15 md:mt-20 md:ml-20 rotate-90 md:rotate-0 order-2'><img src={right} alt="" srcset="" />
    </div>
  <div className='w-[230px]  order-3 mx-auto my-3'>
    <img src={barChart} className='mx-auto ' alt="" srcset="" />
      <h1 className='text-center  font-bold  text-xl'> Boost Sales with CRM </h1>
      <p className='text-sm text-center my-2'>Achieve Greater Sales with CRM Integration</p>
    
    </div>
    <div className='mt-10 md:my-auto order-4 md:ml-20 rotate-90 md:rotate-0'><img src={right} alt="" srcset="" /></div>
  <div className='w-[230px] mx-auto  order-5'>
    <img className='mx-auto' src={report} alt="" />
      <h1 className='text-center mx-auto font-bold   text-xl'> Lead Management Made Easy</h1>
      <p className='text-sm text-center my-2'>Easily Organize and Manage Your Leads</p>
    
    </div>
    <div className='my-10 md:my-auto order-6 md:ml-20 rotate-90 md:rotate-0  '><img src={right} alt="" srcset="" /></div>
  <div className='w-full md:w-[230px] mx-auto my-4 md:my-2 md:order-7  '>
<img className='mx-auto ' src={target} alt="" />
      <h1 className='text-center mx-auto font-bold  text-xl'> Streamline Your Lead Pipeline</h1>
      <p className='text-sm text-center my-2'>Efficiently Manage and Streamline Leads </p>
    </div>
  </div>
    </div>
  )
}
