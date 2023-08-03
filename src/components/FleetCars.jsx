import React from 'react'
import merc from '../assets/merc.png'

const FleetCars = ({carDatum}) => {
  return (
    <div 
    className=' p-2 rounded-lg border h-[300px] bg-[rgba(1,14,37,0.8)y] bg-[#0D0D0D]r bg-[#D98E04]u bg-[#BFBDBA] min-w-[350px] max-w-[500px] relative'
    // className='strudf' 
    // id='carcards'
    >
        <div className=' flex justify-center h-[70%] relative' 
        id='carcard' 
        data-descr ={carDatum.name}
        >
          <img src={carDatum.img} alt="" className='h-[100%]'/>
        </div>

        <div className=''>
            <p className='hidden' ></p>
            <p className='pb-2 border-b-2 border-[rgba(255,255,255,0.2)] m-0 text-black font-semibold'>
                {/* Toyota LandCruiser */}
                {carDatum.name}
            </p>

            <div className='flex justify-between items-center py-2'>
                    <div className='flex gap-x-2 items-center text-white'>
                        <div>
                            <input 
                            className='hidden' 
                            type="checkbox" 
                            name="selectedCar" 
                            id='input1' 
                            value='reserved'
                            // checked={isdone} 
                            />
                            <label htmlFor='input1' className='font-semibold px-4 py-1 border-2t rounded bg-black flex  labelCheckbox' 
                            >
                            Book Now
                            </label>
                        </div>
                    </div>
                    
                    
                    <p className='text-black m-0 font-medium'>
                            {carDatum.price}
                            {/* $100 */}
                            <span className='text-sm text-[rgba(255,255,255,0.7)]'> / Day</span>
                    </p>
                    
            </div>
        </div>
    </div>
  )
}

export default FleetCars