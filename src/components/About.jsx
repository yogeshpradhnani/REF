import React from 'react'
import NavBar from './NavBar'
import Suscribe from './Suscribe'

import config from '../config'

function About() {
  return (
    <>
       <div className='mt-[100px]  md:h-[479px] bg-[#F7FCFF] grid grid-cols-1  md:grid-cols-2  md:mt-[40px]   '>
             <div className='ml-5  md:mx-auto sm:mt-10  order-1 md:ml-5 lg:ml-40 font-roboto  my-auto'>
            <h1 className=' font-bold text-2xl md:text-3xl  '>About Us</h1>
            <p className='text-xs mt-3 mr-3 md:mr-0'>At Techniajz, we believe in revolutionizing the way the real estate industry manages its operations, connects with clients, and achieves sales goals. Our mission is to empower real estate professionals with cutting-edge CRM solutions that streamline workflows, improve productivity, and drive growth.
            With years of experience in the real estate and technology sectors, we understand the unique challenges you face. From project management and lead tracking to seamless integrations and data insights, our platform is designed to provide you with the tools you need to stay ahead in a competitive market.</p>
             </div>
             <div className='  order-2  md:my-auto '>
                <img className='w-[291px] md:w-[391px]  mx-auto  my-4 md:my-auto' src={config.about} alt="" srcset="" />
             </div>
           </div>
       <div className='mt-3  md:h-[479px] bg-[#FFFFFF] grid grid-cols-1  md:grid-cols-2  md:mt-0   '>
             <div className='ml-5  md:mx-auto sm:mt-10 md:mt-0 order-1 md:order-2 md:ml-5 lg:ml-40 font-roboto my-auto'>
            <h1 className=' font-bold text-2xl md:text-3xl  '>Our Vision</h1>
            <p className='text-xs mt-3 mr-3 md:mr-0'>To become the most trusted partner for real estate businesses globally by delivering innovative and reliable CRM solutions tailored to their specific needs.

<ul className='my-1'>Our Values</ul> 
<li className='my-1'>Innovation: We continually evolve to provide the latest technological advancements for our clients.</li>
<li className='my-1'>Customer-Centric Approach: Your success is at the heart of everything we do.</li>
<li className='my-1'>Simplicity: We design intuitive tools that are easy to use and highly effective.</li>

Join the thousands of professionals who trust Techniajz to transform their real estate business into a seamless and profitable operation. Let’s build success together.</p>
             </div>
             <div className='order-2  md:order-1  md:my-auto '>
                <img className='w-[291px] md:w-[391px]  mx-auto  my-4 md:my-auto' src={config.vision} alt="" srcset="" />
             </div>
           </div>
       <div className='my-3  md:h-[479px] bg-[#FFFFFF] grid grid-cols-1  md:grid-cols-2  md:my-0   '>
             <div className='ml-5  md:mx-auto sm:mt-10  order-1 md:ml-5 lg:ml-40 font-roboto md:my-auto '>
            <h1 className=' font-bold text-2xl md:text-3xl  '>Our Story</h1>
            <p className='text-xs mt-3 mr-3 md:mr-0'>At Techniajz, our journey began with a simple idea: to bridge the gap between technology and real estate. As professionals in the real estate industry ourselves, we saw firsthand how complex and fragmented processes could hinder growth and productivity. We envisioned a solution that would bring everything together—leads, clients, teams, and data—into one cohesive and user-friendly platform.
What started as a small project has now grown into a comprehensive CRM software trusted by real estate professionals everywhere. Driven by innovation and inspired by our users, we continue to evolve, making sure our platform stays ahead of industry trends and supports businesses of all sizes.
With [Your CRM Software Name], you're not just getting software—you're gaining a partner dedicated to your success.</p>
             </div>
             <div className='  order-2  md:my-auto '>
                <img className='w-[291px] md:w-[391px] mx-auto my-4 md:my-auto' src={config.story} alt="" srcset="" />
             </div>
           </div>
    <Suscribe />
    </>
  )
}

export default About