import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const CarAmount = ({data}) => {
    const [quantity, setQuantity] = useState(1)

    const addMore = () => {
        if(quantity === 10){
          return
        } else {
            setQuantity(prev => prev + 1)
        }
    }

    const minusMore = () => {
        if(quantity === 1){
          return
        } else {
            setQuantity(prev => prev - 1)
        }
    }

  return (
    <div className='flex justify-between items-center'>
    <h2 className='text-[15px] font-semibold'>{data}</h2>
    <div className='flex items-center'>
      <span 
      className='px-3 py-2 text-[rgba(0,0,0,0.5)]'
      onClick={addMore}
      >
        <AiOutlinePlus/>
    </span>
      <span className='px-3 py-1 border border-primaryBluet border-[rgba(0,0,0,0.5)] text-[15px] text-black font-semibold'>{quantity}</span>
      <span 
      className='px-3 py-2 text-[rgba(0,0,0,0.5)]'
      onClick={minusMore}
      >
        <AiOutlineMinus/>
      </span>
    </div>
 </div>
  )
}

export default CarAmount