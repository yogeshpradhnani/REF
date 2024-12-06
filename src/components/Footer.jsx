import React from 'react'
import logo from '../assets/logo.png'
import facebook from '../assets/facebook.png'
import youtube from '../assets/youtube.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/lnkedin.png'
import call from '../assets/call.png'
import mail from '../assets/mail.png'

export default function Footer() {
  return (
    <>
      <div className='w-full md:h-[400px] overflow-x-hidden md:overflow-x-hidden bg-[rgb(255,242,236)] grid grid-cols-2 justify-between md:grid-cols-5  font-roboto'>
<div className='order-1  w-[100%]  ml-1  mt-24 md:mx-auto md:ml-20'>
<img src={logo} className='w-[220px] h-[112px]  md:mx-auto ' alt="" />
<p className='my-2 text-xs  md:ml-10 '>Techniajz is the Software Platform for Start-to-end process automation, information management system customized for Real Estate Industry.</p>
</div>
<div className='order-2    sm:mx-auto md:ml-40 '>
    <h1 className='font-bold mt-24 font-roboto'>Social Media</h1>
  <div className='flex '><a href="https://en-gb.facebook.com/TechniAjz/">
  <img src={facebook} className='my-3 w-[32px] h-[32px]' alt="" /> 
  </a><h1 className='my-auto ml-4 '>Facebook</h1>
  </div>
 
  <div className='flex '>   <img src={youtube} className='my-3 w-[32px] h-[32px]' alt="" /> 
   <h1 className='my-auto ml-2'>Youtube</h1></div>
 
  <div className='flex '> 
    <a href="https://www.instagram.com/techniajz/"> <img src={instagram} className='my-3 w-[32px] h-[32px]' alt="" />
    </a><h1 className='my-auto ml-2'>Instagram</h1> </div>
  <div className='flex '>
  <a className='' href="https://www.linkedin.com/company/techniajz/"><img src={linkedin} className='my-3 w-[32px] h-[32px]' alt="" />
 </a><h1 className='my-auto ml-2'>LinkedIn</h1>
   
   </div>

 
</div>
<div className='order-3 w-[20vw] sm:mx-auto md:ml-20'>
<h1 className='font-bold mt-24 mx-auto'>Company</h1>
<div className=' my-3'>
<button class="btn" >Features</button>
</div>
<div className=' my-3'>
<button class="btn" >Pricing</button>
</div>
<div className=' my-3'>
<button class="btn" >Customer</button>
</div>
<div className=' my-3'>
<button class="btn" >About Us</button>
</div>
</div>

<div className='order-4 w-[20vw] mr-5 mx-auto'>

<h1 className='font-bold mt-24 ml-5 '>Solution</h1>
<div className=' my-3'>
<h1>Project & Team management</h1>
</div>
<div className=' my-3'>
<h1>Third-party integrations</h1>
</div>
<div className=' my-3'>
<h1>Complete Customization</h1>
</div>
<div className=' my-3'>
<h1>Buyer and seller data input</h1>
</div>
<div className=' my-3'>
<h1>Property detail</h1>
</div>
<div className=' my-3'>
<h1>Lead capture & Distribution</h1>
</div>
</div>
<div className=' order-5 mx-auto text-center'>    
<h1 className='font-bold mt-24 sm:ml-36 md:ml-5 '>Get In Touch</h1>
<div className=' my-3 flex sm:ml-36 md:ml-12'>
    <img src={call} alt="" className='mr-2' />
<h1>+91-9166511765</h1>
</div>
<hr />
<div className=' my-3 flex sm:ml-36 md:ml-12  '>
<img src={mail} alt="" srcset="" className='mr-2'/>
    <h1>techniajz@gmail.com</h1>
</div>
</div>
 </div>
 <hr />
 <div className='w-full flex bg-[#FFF2EC]   '>
    <h1 className='mx-auto'>	&#169; Copyright 2018-2024 Techniajz | All Right Reserved</h1>
 </div>

    </>
  )
}
