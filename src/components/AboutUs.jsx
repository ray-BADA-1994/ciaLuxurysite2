import React from 'react'
import aboutUsImg from '../assets/about_image.jpg'
// import iconImg from '../assets/iconbox.png'
// import iconImg2 from '../assets/iconbox03.png'
// import iconImg3 from '../assets/iconbox02.png'
import drive from '../assets/drive.png'
import { v4 as uuidv4 } from 'uuid';
import wcuImg from '../assets/display_car_image.png'
import {whychooseusBenefits,howItWorksData} from '../data/FleetData'
import {MdCall} from 'react-icons/md'

const AboutUs = () => {
    
  return (
    <div className='mt-[15vh] lg:mt-0 bg-blacke'>
       <div className="fleet-hero-section flex flex-col justify-center h-[35vh] lg:h-[45vh] px-2 lg:px-24 gap-4">
           <h1 className='font-bold text-3xl'>ABOUT US</h1>
           <p className='font-medium '>Home / <span className='text-primaryYellow'>About Us</span></p>
       </div>
       <div className='containerzr'>
            <div className='pt-10 flex flex-col lg:flex-row gap-4 lg:gap-10 containerz '>
            <img src={aboutUsImg} alt="" className='block lg:h-[70vh] object-cover'/>
            <div className='mt-4 flex flex-col gap-y-2'>
                <p className='font-medium text-xl'>About Company</p>
                <h2 className='text-[30px] font-bold capitalize'>You Start the <br/> Engine and the adventure starts</h2>
                <p className=' ptext text-base border-b pb-5 text-[rgba(255,255,255,0.7)] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam nesciunt quis harum dicta, facere ut? Voluptatum architecto ducimus labore qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vero eaque impedit, ea itaque natus nihil nostrum earum aspernatur harum error laborum veniam commodi nobis nam sint eos ipsum totam.</p>
            </div>
            </div>

            <div className='mt-20 flex flex-col gap-y-5 containerz'>
                <div className='flex flex-col items-center gap-y-4'>
                    <p className='font-medium text-2xl'>How it Works</p>
                    <h2 className='text-[35px] font-bold capitalize text-center'>Quick & easy rental service</h2>
                </div>
                <div className='howitworks_section gap-5'>
                 {
                  howItWorksData.map((datum) => (
                    <div key={uuidv4()} className='flex flex-col gap-3 items-center'>
                        <div className="imgdiv bg-inherent">
                            <img src={datum.image} alt="" className='block mix-blend-screen' />
                        </div>
                        <div className='flex flex-col gap-4 items-center'>
                            <h2 className='font-bold text-[28px] text-center'>{datum.title}</h2>
                            <p className='text-[rgba(255,255,255,0.7)] text-base text-center'>{datum.description}</p>
                        </div>
                    </div>
                  )) 
                 }
                </div>
            </div>

            <div className='aboutus_booknow mt-20 h-[30rem] flex flex-col items-center justify-center gap-y-3 containerz '>
                <h2 className='text-3xl font-bold text-center'>Save big with our cheap car rental!</h2> 
                <p className='text-xl font-medium capitalize text-center'>Airport Dropoff. Interstate travels 
                <br/> 24/7 support.</p>
                <button className='px-4 py-3 text-lg font-medium bg-primaryYellow shadow-md rounded-sm'>Book Ride</button>
            </div>

            <div className='mt-20 flex flex-col gap-y-5 containerz'>
                 <div className='w-full'>
                     <img src={wcuImg} alt="" className='block w-full object-cover' />
                 </div>

                 <div className='flex flex-col gap-16 lg:flex-row'>
                    <div className='flex flex-col gap-3 whychooseus_bg'>
                        <p className='text-xl font-medium'>Why Choose Us</p>
                        <h2 className='text-[2rem] font-bold leading-10 mb-2'>Best valued deals you will ever find</h2>
                        <p className=' text-base text-[rgba(255,255,255,0.7)]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloribus placeat quam suscipit eveniet aut numquam quia dolore mollitia sequi!</p>
                        <button className='px-4 py-3 text-lg font-medium bg-primaryYellow shadow-md rounded-sm w-fit'>Find Deals</button>
                    </div>
                    <div className='grid grid-cols-1 gap-y-16'>
                         {
                            whychooseusBenefits.map( benefits => (
                            <div className='grid grid-cols-3'>
                                <div className='col-span-1'>
                                    <img src={benefits.img} alt="" />
                                </div>
                                <div className="text-container col-span-2 flex flex-col gap-y-4">
                                    <h1 className='font-semibold text-[2rem]'>{benefits.title}</h1>
                                    <p>{benefits.content}</p>
                                </div>
                           </div>
                            ))
                         }
                        {/* <div className='grid grid-cols-3'>
                           <div className='col-span-1'>
                            <img src={drive} alt="" />
                           </div>
                           <div className="text-container col-span-2 flex flex-col gap-y-4">
                            <h1 className='font-semibold text-[2rem]'>Cross Country Drive</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quae blanditiis nobis nostrum mollitia molestiae adipisci commodi harum ex libero!</p>
                           </div>
                          
                        </div> */}
                    </div>
                 </div>
            </div>

            <div className="reach-us-bg flex flex-col lg:flex-row lg:justify-between h-[30rem] lg:px-[10%] justify-center items-center text-white mt-16 lg:h-[20rem]">
                <div>
                    <h2 className='font-bold text-[2rem] text-center lg:text-start capitalize '>Book a car by <br className='hidden lg:block'/> getting in touch with us</h2>
                </div>
                <div>
                    <p className='font-medium text-center flex items-center justify-center gap-1 text-lg'>
                        <MdCall/>
                        call to book
                    </p>
                    <h2 className='font-bold text-[2rem] text-primaryYellow'>(567) 498-4600</h2>
                </div>
            </div>
       </div>
    </div>
  )
}

export default AboutUs