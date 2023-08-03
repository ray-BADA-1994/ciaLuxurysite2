import { useScroll, useTransform, motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import { ImPinterest2 } from 'react-icons/im'

const Footer = () => {
    // let {scrollYProgress} = useScroll()
    // let y = useTransform(scrollYProgress, [0,1], ["0%","10%"])

   const fullnameRef = useRef()
   const EmailnameRef = useRef()
   const MessageRef = useRef()

   const validateAndSubmit = (e) => {
    if(
        fullnameRef.current.value == '' ||
        EmailnameRef.current.value == '' ||
        MessageRef.current.value == ''
     ) return

     e.preventDefault()

      let message = {
        fullname: fullnameRef.current.value,
        Emailname: EmailnameRef.current.value,
        Message: MessageRef.current.value,
      }

      console.log(message);
     
   }
  return (
    <motion.div className='containerz py-10 sm:h-[40vh] lg:h-[70vh] footer relative flex justify-between items-center overflow-x-hidden md:overflow-x-visible  mt-10' id='contactUs'>
        <div className='flex flex-wrap items-center justify-center gap-10 gap-y-20 md:justify-between md:items-start w-full'>

        {/* <div className='flex items-center'> */}
            <div className=' py-1 px-2 border-2 border-ry-[#D98E04] border-white font-[450] text-xl flex flex-col items-center lg:mr-10'>
                <span className='text-[16px] leading-tight'>CIA</span>
                <span className='text-[14px] leading-tight font-bold'>Luxury</span>
                <span className='text-[12px] leading-tight italic'>Fleet</span>
            </div>
            <ul className='font-medium flex flex-col gap-3'>
                <li className='hover:text-[rgb(255,255,255,0.7)] transition-all cursor-pointer'>Fleet Management</li>
                <li className='hover:text-[rgb(255,255,255,0.7)] transition-all cursor-pointer'>About Us</li>
                <li className='hover:text-[rgb(255,255,255,0.7)] transition-all cursor-pointer'>Speak with an agent</li>
                <li className='flex gap-4'>
                    <span title='Twitter' className='cursor-pointer'><FiTwitter/></span>
                    <span title='Instagram' className='cursor-pointer'><FaInstagram/></span>
                    <span title='Whatsapp' className='cursor-pointer'><FaWhatsapp/></span>
                    <span title='Pinterest' className='cursor-pointer'><ImPinterest2/></span>
                </li>
            </ul>
        {/* </div> */}
       <form  className='flex flex-col gap-3 ml-autou'>
        <input 
        type="text"  
        className='py-1 rounded-sm border-2 bg-transparent px-2' placeholder='Fullname'
        ref={fullnameRef}
        required 
        title='Enter Your Full name'
        />

        <input 
        type="email"  
        className='py-1 rounded-sm border-2 bg-transparent px-2' placeholder='Email'
        ref={EmailnameRef}
        required 
        />

        <textarea 
        name="" 
        id="" 
        cols="30" 
        rows="5" 
        className='bg-transparent border-2 text-white px-2 py-2' placeholder='Leave a message'
        ref={MessageRef}
        required 
        >
        </textarea>

        <button 
        className='bg-[#D98E04] py-2 hover:bg-[#d98e04bd] transition-all'
         onClick={(e) => validateAndSubmit(e)}
        >
            Submit
        </button>
       </form>
        </div>
    </motion.div>
  )
}

export default Footer