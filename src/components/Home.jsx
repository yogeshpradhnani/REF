import React from 'react'
import image from '../assets/image.png'
import project from '../assets/project.png'
import thirdParty from '../assets/thirdParty.png'
import custom from '../assets/custom.png'
import recycle from '../assets/recycle.png'
import property from '../assets/property-.png'
import lead from '../assets/lead.png'
import projectmanager from '../assets/projectmanager.png'
import right from '../assets/right.png'
import barChart from '../assets/barChart.png'
import report from '../assets/report.png'
import target from '../assets/target.png'
import tpi from '../assets/tpi.png'
import completeCustom from '../assets/completeCustom.png'
import dataInput from '../assets/dataInput.png'
import propertyDetails from '../assets/propertyDetails.png'
import leadCap from '../assets/leadcap.png'
import Polygon from '../assets/Polygon.png'
import Domain from '../assets/Domain.png'




export default function Home() {
 
  return (
    <>
    <div className='  text-center w-full  mt-[200px] md:mt-0 translate-y-[-100px]  font-roboto' >
    <div className=" ">
        <img className="w-full  "  src={image} alt="Banner" />
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 md:px-0">
          <h2 className="text-sm md:text-4xl font-bold text-black shadow-black">
            Real Estate Lead Management CRM Software to Boost Sales
          </h2>
          <p className="text-xs md:text-base text-black mt-4">
            Built for real estate agencies of all sizes, Lead Management CRM offers cutting-edge sales process management,
           <p className='text-[13.8px] md:text-base text-black'> property management, and automation for real estate agents, real estate developers, and brokerage firms.</p>
          </p>
          <p className="text-[13.8px] md:text-base text-black">
            Bring home more deals with the all-in-one real estate CRM platform crafted for your business.
          </p>
          <button className="text-xl font-bold md:text-xl mt-4 md:my-4 py-2 px-3 bg-[#FD89558C] border-1 border-[#FD8955] rounded-md hover:bg-[#FD8955] transition duration-300">
            Get a Demo
          </button>
        </div>
      </div>
      </div>
      <div className='w-full  sm:h-[1000px] md:h-[1250px] lg:h-[740px] space-y-2 pb-10  font-roboto sm:translate-y-[-150px]  md:mt-0 md:translate-y-[-100px]  bg-[#F7F7FE] '>
        <div className=' flex'><h1 className='mx-auto md:my-10 my-10 font-bold md:text-3xl  mb-10 text-center'>Why choose Lead Management CRM for your real estate business?</h1></div>
        <div className='grid grid-cols-1   md:mx-[100px]    gap-10 md:grid-cols-2 lg:grid-cols-3 '>
        <div className='w-[90%] bg-[#FFFFFF] h-[100%] border-2px shadow-md mx-auto p-2 ' >
   <img className='mx-auto mt-[22px] w-[58px] h-[58px] ' src={project} alt="" srcset="" />
   <p className='text-center   font-bold text-xl'>Project & Team management</p>
   <p className='p-2 mt-2 text-[13px] text-centerfont-roboto'>A Real Estate CRM (Customer Relationship Management) system is designed to help real estate professionals manage interactions with clients, prospects, and leads while streamlining project management processes.</p>
        </div>
        
        <div className='w-[90%] bg-[#FFFFFF] border-2px shadow-md mx-auto md:mx-0 p-2' >
        <img className='mx-auto mt-[22px] w-[58px] h-[58px]' src={thirdParty} alt="" srcset="" />
        <p className='text-center  text-xl font-bold'>Third-party integrations</p>
        <p className='p-2 mt-2 text-[13px] text-centerfont-roboto'>Capture Enquiries from multiple sources, run messaging campaigns and integrate with IOT devices</p>
        </div>
        <div className='w-[90%] bg-[#FFFFFF] h-[100%] border-2px shadow-md mx-auto md:mx-0 p-2' >
        <img className='mx-auto mt-[22px] w-[50px] h-[50px]' src={custom} alt="" srcset="" />
        <p className='text-center p-2 text-xl font-bold'>Complete Customization</p>
        <p className='p-2 text-[13px] mt-2 text-centerfont-roboto'>Apply filters to view a precise Real Estate CRM Dashboard and view level based summary reports for executives and the management</p>

        </div>
        <div className='w-[90%] bg-[#FFFFFF] md:h-[100%] border-2px shadow-md mx-auto p-2' >
        <img className='mx-auto mt-[22px] w-[50px] h-[50px]' src={recycle} alt="" srcset="" />
        <p className='text-center p-2 text-xl font-bold'>Buyer and seller data input</p>
        <p className='text-[13px] mt-2 text-centerfont-roboto'>Manually recording buyer or seller details cuts into time spent closing or nurturing potential buyers. With real estate CRM software, you can input your contacts’ details, communication and activity automatically.</p>

        </div>
        <div className='w-[90%] bg-[#FFFFFF] h-[100%] border-2px shadow-md  mx-auto md:mx-0 p-2' >
        <img className='mx-auto mt-[22px] w-[50px] h-[50px]' src={property} alt="" srcset="" />
        <p className='text-center  p-2 text-xl font-bold'>Property details
        </p>
        <p className='text-[13px] mt-2 p-2 text-center font-roboto'>A real estate CRM can manage more than just your contacts. By collecting and organizing property details in your CRM, you’ll have all the information readily available whenever you (or a potential buyer) might need it.</p>

        </div>
        <div className='w-[90%] bg-[#FFFFFF] h-[100%] border-2px shadow-md mx-auto md:mx-0 p-2' >
        <img className='mx-auto mt-[22px] w-[58px] h-[50px]' src={lead} alt="" srcset="" />
        <p className='text-center p-1 text-xl font-bold'>Lead capture & Distribution</p>
        <p className='text-[13px] mt-2 p-2 text-centerfont-roboto'>Capture leads from all sources – website, Facebook, Google, lead providers, referrals – onto one platform with zero leakage.Easily organize data, track and distribute leads within and between your teams based on requirements, or other dynamic criteria.</p>

        </div>
        </div>
      </div>
      <div className='  overflow-hidden  md:overflow-hidden  bg-[#F6F2EF]  mt-[100px] md:mt-0 translate-y-[-100px] '>
        <div className=' font-roboto '>
          <div className=' my-4'><h1 className='text-center font-bold text-3xl'> Revolutionize Your Real Estate Business with 
       </h1>
       <h1 className='text-center text-black font-bold text-3xl'>   Smart CRM Solutions</h1>
       </div>
       </div>
        <div className='grid sm:grid-cols-1  md:grid-cols-7 my-2 w-full sm:px-0 md:px-10 mx-auto '>
        <div className=' text-center md:order-1 font-roboto '>
            <h1 className='    font-bold  text-[20px]'> Streamlining Lead 
            and SalesManagement </h1>
            <p className='text-xs text-center my-2'>Streamline your lead management and sales processes to improve efficiency, drive growth, and enhance client relationships in real estate.</p>
          
          </div>
          <div className='md:my-auto md:mb-20 mx-auto   md:order-2   rotate-90 md:rotate-0 '><img src={right} alt="" srcset="" />
          </div>
        <div className='  md:order-3  mx-auto my-0'>
          <img src={barChart} className='mx-auto font-roboto' alt="" srcset="" />
            <h1 className='text-center  font-bold   text-[20px]'> Boost Sales with CRM </h1>
            <p className='text-xs text-center my-2'>Achieve Greater Sales with CRM Integration</p>
          
          </div>
          <div className='md:my-auto md:mb-20 mx-auto   md:order-4   rotate-90 md:rotate-0'><img src={right} alt="" srcset="" /></div>
        <div className='   md:order-5 font-roboto'>
          <img className='mx-auto' src={report} alt="" />
            <h1 className='text-center mx-auto font-bold    text-[20px]'> Lead Management Made Easy</h1>
            <p className='text-xs text-center my-2'>Easily Organize and Manage Your Leads</p>
          
          </div>
          <div className=' md:my-auto md:mb-20 mx-auto   md:order-6  rotate-90 md:rotate-0  '><img src={right} alt="" srcset="" /></div>
        <div className=' md:order-7  font-roboto'>
    <img className='mx-auto ' src={target} alt="" /> 
            <h1 className='text-center mx-auto font-bold  text-[20px] '> Streamline Your Lead Pipeline</h1>
            <p className='text-xs text-center my-2'>Efficiently Manage and Streamline Leads </p>
          </div>
        </div>
      </div>
      <div className='  mx-auto md:h-[479px] bg-[#FFFFFF] grid grid-cols-1 md:grid-cols-2  md:mt-0 translate-y-[-50px] '>
        <div className='ml-5  sm:mx-auto  order-1  md:ml-40 font-roboto'>
       <h1 className='mt-24 font-bold text-3xl '> Project & Team management</h1>
       <p className='text-sm mt-4'>A Real Estate CRM is a powerful tool designed to streamline project workflows and team collaboration. It helps real estate professionals manage client interactions, track leads, and monitor sales progress in one centralized platform. With task assignment, performance tracking, and role-based access, it ensures efficient team management. Integrated communication tools and document sharing enhance collaboration, while real-time updates keep everyone aligned.
       The system simplifies task prioritization, ensuring timely follow-ups and project delivery. Analytics and reporting features provide insights into team performance and sales trends. With mobile-friendly access, it keeps teams connected on the go. Boost productivity and client satisfaction with this all-in-one CRM solution.</p>
        </div>
        <div className='  order-2 md:ml-24 '>
           <img className='w-[391px] h-[396px] ml-[20px]' src={projectmanager} alt="" srcset="" />
        </div>
      </div>
      <div className=' mt-[100px] md:mt-0 translate-y-[-50px]  md:h-[479px] bg-[#FFFFFF] grid grid-cols-1 md:grid-cols-2 md:mx-10  '>
        <div className='ml-5   sm:mx-auto sm:order-1 md:order-2  md:ml-20 font-roboto '>
       <h1 className=' font-bold text-3xl '> Third-Party Integrations</h1>
       <p className='text-sm mt-4 md:mr-10'>A Real Estate CRM is a powerful tool designed to streamline project workflows and team collaboration. It helps real estate professionals manage client interactions, track leads, and monitor sales progress in one centralized platform. With task assignment, performance tracking, and role-based access, it ensures efficient team management. Integrated communication tools and document sharing enhance collaboration, while real-time updates keep everyone aligned.
       The system simplifies task prioritization, ensuring timely follow-ups and project delivery. Analytics and reporting features provide insights into team performance and sales trends. With mobile-friendly access, it keeps teams connected on the go. Boost productivity and client satisfaction with this all-in-one CRM solution.</p>
        </div>
        <div className=' ml-10  md:order-1 sm:order-2 md:ml-36 '>
           <img className='w-[416px] h-[309px] ' src={tpi} alt="" srcset="" />
        </div>
      </div>
      <div className=' mt-[100px] md:mt-0 translate-y-[-50px]  md:h-[479px] bg-[#FFFFFF] grid grid-cols-1 md:grid-cols-2 md:mx-10   '>
        <div className='order-1 ml-5 md:ml-40 font-roboto'>
       <h1 className=' font-bold text-3xl '> Complete Customization</h1>
       <p className='text-sm mt-4'>A Real Estate CRM offers complete customization to tailor the system to your specific business needs. Apply filters to refine data and view a precise dashboard, providing relevant insights for each user. Customize lead pipelines, task management, and user roles to align with your workflow.
Executives and management can access level-based summary reports, allowing for a clear overview of performance metrics. This flexibility ensures the CRM adapts to your team’s operations while enhancing efficiency and providing actionable data at every level.
Create personalized views for individual teams and stakeholders, enabling them to focus on what matters most. The system can be adjusted as your business evolves, ensuring long-term relevance. Custom automation features reduce manual work, increasing productivity across all departments.</p>
        </div>
        <div className='   order-2  sm:mx-auto' >
           <img className='w-[422px] md:h-[291px] md:ml-[100px]' src={completeCustom} alt="" srcset="" />
        </div>
      </div>
      <div className='mt-[100px] md:mt-0 translate-y-[-50px] md:h-[479px] bg-[#FFFFFF] grid grid-cols-1 md:grid-cols-2 md:mx-10  '>
        <div className=' sm:order-1 md:order-2 ml-5 md:ml-24'>
       <h1 className=' font-bold text-3xl '> Buyer and Seller Data Input</h1>
       <p className='text-sm mt-4 md:mr-10'>Manually recording buyer or seller details can be time-consuming and takes away from valuable time spent closing deals or nurturing potential clients. With Real Estate CRM software, you can automate the process of inputting contact details, communication history, and activity logs.
This automated data capture allows you to focus on building relationships and driving sales, while the CRM ensures all information is accurately stored and easily accessible. The system streamlines your workflow, making it simpler to track interactions, follow up with leads, and maintain organized client records.
With real-time data syncing, all team members stay updated on client status and communication history. This reduces the risk of errors, avoids duplicate data entry, and enhances team collaboration. Efficient data input helps you build a comprehensive client profile, leading to more personalized service and improved conversion rates.</p>
        </div>
        <div className='  sm:order-2 md:order-1 sm:mx-auto  md:ml-36' >
           <img className='w-[374px] my-2 h-[374px] ml-[100px]' src={dataInput} alt="" srcset="" />
        </div>
      </div>
      <div className='  mt-[100px] md:mt-0 translate-y-[-50px] md:h-[479px] bg-[#FFFFFF] grid grid-cols-1 md:grid-cols-2 md:mx-10  '>
        <div className='order-1 ml-5 md:ml-40 font-roboto'>
       <h1 className=' font-bold text-3xl '>Property Details</h1>
       <p className='text-sm mt-4'>A Real Estate CRM goes beyond managing contacts by efficiently organizing and storing property details. By centralizing property information, such as listings, specifications, images, and pricing, the CRM ensures all data is readily available when you or a potential buyer need it.
This streamlined system allows agents to quickly match properties with buyer preferences, enhancing the client experience. Comprehensive property records also make it easier to track updates, manage availability, and share accurate details during client interactions.
With advanced search filters, you can easily find properties based on specific criteria like location, size, or budget. The CRM also integrates with listing platforms, automatically updating property details across channels. This level of organization boosts productivity and ensures you never miss an opportunity to close a deal.</p>
        </div>
        <div className=' order-2 mx-auto' >
           <img className='w-[356px] h-[300px] m-10' src={propertyDetails} alt="" srcset="" />
        </div>
      </div>
      <div className=' mt-[100px] md:mt-0 translate-y-[-50px] font-roboto  md:h-[479px] bg-[#FFFFFF] grid grid-cols-1 md:grid-cols-2 md:mx-10 '>
        <div className='ml-5 sm:order-1 md:order-2 font-roboto'>
       <h1 className=' font-bold text-3xl '>Lead Capture & Distribution</h1>
       <p className='text-sm mt-4 md:mr-10'>A Real Estate CRM simplifies lead management by capturing leads from all sources—website, Facebook, Google, lead providers, and referrals—onto a single, unified platform with zero leakage. This ensures no potential client is missed, streamlining your lead acquisition process.
The CRM enables you to easily organize and track incoming leads, ensuring they are categorized and prioritized effectively. Leads can be automatically distributed within or between teams based on specific requirements, availability, or other dynamic criteria.
Customizable rules allow you to assign leads based on geography, expertise, or urgency, ensuring the right team handles each client. With real-time updates and notifications, the system ensures fast responses, increasing the chances of conversion and fostering better client relationships.</p>
        </div>
        <div className='  sm:order-2 md:order-1 sm:ml-10 md:ml-24 ' >
           <img className='w-[521px] h-[347px]  ' src={leadCap} alt="" srcset="" />
        </div>
      </div>
      <div className=' w-full mt-[50px]  md:mt-0 translate-y-[-0px] font-roboto md:h-[483px] bg-[#F6F2EF] grid grid-cols-1 md:grid-cols-2 '>
        <div className='mx-auto   '>   
        <div className='  order-1  flex md:ml-24'>
      <div className='ml-10 mt-14'>
      <img className='w-[72px] h-[72px] ' src={Polygon} alt="" srcset="" /></div>
      <p className='mt-20 mx-10  text-[#F1C27C]'>Revolutionize Your Workflow</p>
      </div>
       <div className=' md:ml-24 sm:ml-10 font-roboto'>
       <h1 className=' font-bold text-3xl my-3 ml-4 md:ml-10 md:w-[70%] '>Transform the Way You Manage Real Estate</h1>
       <p className='text-sm mt-4 ml-4 md:ml-10 w-[80%]'>Simplify, streamline, and scale your real estate operations with our cutting-edge Real Estate Management Software. From lead tracking to property management and sales, our solution integrates all essential tools into one platform. Optimize your workflow, enhance client relationships, and make data-driven decisions to stay ahead in the competitive real estate market.</p>
       </div>
        </div>
        <div className='   order-2 my-5     ' >
         <div className='flex ml-4 mr-2  md:ml-0 font-roboto'>
         <img src={Domain} alt="" srcset="" />
         <h1 className='my-auto sm:ml-10 text-[#F1C27C]'>Simplify Real Estate Operations</h1>
       
         </div>
         <div className='w-[90%] ml-4 mr-2  md:w-[70%] md:ml-0 font-roboto '>
         <h1 className=' font-bold text-3xl my-3 '>All-in-One Solution for Real Estate Professionals</h1>
         <p className='mt-3'>Whether you're managing properties, tracking leads, or closing deals, our software is designed to meet your every need. With advanced features like automated lead distribution, property details organization, and real-time reporting, you can focus on growing your business while we handle the rest. Experience seamless management with a user-friendly and intuitive interface tailored for real estate success.</p>
         </div>
        </div>
      </div>
      <div className='w-full  md:h-[600px] mx-auto  bg-[#F1F1F1]  font-roboto '>
        <div className='mx-auto grid grid-cols-1 '>
          <h1 className='font-bold text-xl md:text-3xl  text-center my-20'>Subscribe Now for Expert Insights, Tips, and Updates on Real Estate CRM</h1>
        
       <div className='  md:ml-52    order-1  grid  grid-cols-1  md:grid-cols-2 ml-4 mr-2  font-roboto '>
         <div className='order-1'> <h1 className='font-bold text-xl md:text-3xl '>Stay Informed and Ahead in the Real Estate Market with Our Exclusive CRM News and Updates</h1>
         <p className='my-2 text-xsfont-roboto'>Get access to the latest industry trends, expert insights, and updates on how our CRM solutions can enhance your real estate business. Stay informed and take the lead in a competitive market with exclusive content designed to empower your success.
         Learn how to optimize your workflows, manage leads efficiently, and close deals faster. Our updates provide actionable tips and strategies to help you stay ahead. Don’t miss out on valuable insights tailored to meet the unique needs of real estate professionals.</p></div>
        <div className='w-[50%] mx-auto order-2  my-2  md:ml-32    md:my-auto space-y-3 grid font-roboto  grid-cols-1  '>

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
