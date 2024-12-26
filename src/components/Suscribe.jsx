import React from 'react'

export default function Suscribe() {
  return (
    <div>
         <div className='  lg:h-[500px]   bg-[#F1F1F1]  font-roboto '>
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
    </div>
  )
}
