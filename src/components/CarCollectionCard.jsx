import React from 'react'
import car1 from '../assets/pradoland.png'
import {IoMdArrowForward} from 'react-icons/io'
import {useGlobalContext} from '../Context/GlobalContext'


const CarCollectionCard = ({carDatum}) => {
    const {name, img, price} = carDatum
    const {handleBookNow} = useGlobalContext()
  return (
    <div className='bordery flex flex-col gap-y-3 h-[100%] items-center'>
            {/* img-container */}
            <div className='h-[50%]'>
               <img src={img} alt="toyota prado 2022" className='h-[100%]' />
            </div>
            {/* info div */}
            <div className='flex-1 items-center flex flex-col gap-2'>
                <h2 className='font-medium tracking-normal'>{name}</h2>
                <p>{price}</p>
                <div >
                <button 
                className='flex items-center gap-1 btn-bookNow'
                onClick={()=> handleBookNow()}
                >
                    <span>Book Now</span> 
                    <span className='icon'>
                        <IoMdArrowForward className='mt-1 text-[#D98E04]'/>
                    </span>
                </button>
                </div>
            </div>
         </div>
  )
}

export default CarCollectionCard