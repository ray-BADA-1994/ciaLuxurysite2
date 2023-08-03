import React, { useRef } from 'react'
import AboutImg1 from '../assets/aboutUs.jpg'
import ServiceImg from '../assets/service1.jpg'
import {motion, useScroll, useTransform,useInView } from 'framer-motion'

const SectionAboutUs = () => {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  // const ref3 = useRef(null)
  const isInView = useInView(ref2, { amount:0.45, once: true})
  let {scrollYProgress} = useScroll({
    target:ref1,
    offset:["start start", "end start"]
  })
  let y = useTransform(scrollYProgress, [0,1], ["0%", "10%"])

  return (
    <div ref={ref2} className='mb-20 md:h-[60vh] lg:h-[140vh] grid md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-y-5 md:gap-0'>
        {/* IMG CONTAINER */}
       <motion.div 
         style={{
          transform: isInView ? "none" : "translateX(-20px)",
          opacity: isInView ? 1 : 0.5,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
         }} 
         className='bg-about'>
           {/* <img src={AboutImg1} alt="about us image" className='object-cover object-right-bottom' /> */}
       </motion.div>
       {/* ABOUT US */}
       <motion.div ref={ref1} style={{y}} className='relative pl-10 pt-10 pr-[10%] flex justify-center items-center' id='aboutUs'>
         <div className='hidden absolute h-[100px] w-[50px] bg-[#d98e04] top-[20%] left-[-25px] lg:flex flex-col items-center'>
          </div>
          <div className='xl:w-[80%] flex flex-col gap-3 '>
            <h2 className='text-[30px] font-medium '>ABOUT <span className='text-[#d98e04]'>US</span></h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quos molestiae excepturi cum. Quasi architecto ratione suscipit reprehenderit, numquam, similique rem libero adipisci quisquam omnis quis at vitae soluta accusamus.
            </p>
          </div>
       </motion.div>
       {/* SERVICES */}
       <motion.div style={{y}} className='flex flex-end px-20 items-center order-1 md:order-[0]' id='services'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam est adipisci numquam quidem corrupti ex itaque sunt iusto, magni vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam culpa obcaecati tempora adipisci, corporis ut eveniet non animi velit voluptatibus.
          </p>
       </motion.div>
       {/* SERVICE IMG */}
       <motion.div 
        style={{
          transform: isInView ? "none" : "translateX(20px)",
          opacity: isInView ? 1 : 0.5,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
         }}  
       className='bg-service relative md:right-[10%] z-[-1]'>
           {/* <img src={ServiceImg} alt="about us image" className='object-cover object-right-bottom' /> */}
       </motion.div>
    </div>
  )
}

export default SectionAboutUs