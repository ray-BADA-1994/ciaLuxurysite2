import React from 'react'
import {useFormDatum} from '../Context/FormData'
import {AiOutlineEdit,AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid';
import CarAmount from './CarAmount';
import { useGlobalContext } from '../Context/GlobalContext';

const InfoView = ({setInputType}) => {

    const {formDatum} = useFormDatum()

    const {setNextForm} = useGlobalContext()

    const handleFocusInFormInputs = (inputname, num) => {
        setNextForm(num)
        setInputType(inputname)
    }

  return (
    <div className='pb-5 pt-3 px-3 md:px-6 flex flex-col items-centerr w-full text-[rgba(0,0,0,0.8)] gap-y-5'>
      {/* Name */}
      <div className='border-primaryBlue border-b-2 flex flex-col gap-y-2'>
        <div className='flex justify-between items-center'>
           <h2 className='font-semibold text-[15px] '>Name:</h2>
           <span onClick={()=> handleFocusInFormInputs('name',0)}><AiOutlineEdit/></span>
        </div>
        <p className='font-medium text-[16px] text-[rgba(0,0,0,1)] uppercase'>{`${formDatum.firstname}  ${formDatum.lastname}`}</p>
      </div>
      {/* Email */}
      <div className='border-primaryBlue border-b-2 flex flex-col gap-y-2'>
        <div className='flex justify-between items-center'>
           <h2 className='font-semibold text-[15px] '>Email:</h2>
           <span onClick={()=> handleFocusInFormInputs('email',0)}><AiOutlineEdit/></span>
        </div>
        <p className='font-medium text-[16px] text-[rgba(0,0,0,1)] uppercase'>{`${formDatum.email}`}</p>
      </div>
      {/* PICKUPLOCATION */}
      <div className='border-primaryBlue border-b-2 flex flex-col gap-y-2'>
        <div className='flex justify-between items-center'>
           <h2 className='font-semibold text-[15px] '>Pick-Up Location:</h2>
           <span onClick={()=> handleFocusInFormInputs('pickup',0)}><AiOutlineEdit/></span>
        </div>
        <p className='font-medium text-[16px] text-[rgba(0,0,0,1)] uppercase'>{`${formDatum.pickUpLocation}`}</p>
      </div>
      {/* DROPOFFLOCATION */}
      <div className='border-primaryBlue border-b-2 flex flex-col gap-y-2'>
        <div className='flex justify-between items-center'>
           <h2 className='font-semibold text-[15px] '>Drop-Off Location:</h2>
           <span onClick={()=> handleFocusInFormInputs('dropoff',0)}><AiOutlineEdit/></span>
        </div>
        <p className='font-medium text-[16px] text-[rgba(0,0,0,1)] uppercase'>{`${formDatum.dropOffLocation}`}</p>
      </div>
      {/* START DATE */}
      <div className='border-primaryBlue border-b-2 flex flex-col gap-y-2'>
        <div className='flex justify-between items-center'>
           <h2 className='font-semibold text-[15px] '>Start Date:</h2>
           <span onClick={()=> setNextForm(0)}><AiOutlineEdit/></span>
        </div>
        <p className='font-medium text-[16px] text-[rgba(0,0,0,1)] uppercase'>{`${formDatum.startDates}`}</p>
        {/* <p className='font-medium text-[16px] text-[rgba(0,0,0,1)] uppercase'>{`${formDatum.startDates.toJSON().slice(0,10).split('-').reverse().join('/')}`}</p> */}
      </div>
      {/* END DATE */}
      <div className='border-primaryBlue border-b-2 flex flex-col gap-y-2'>
        <div className='flex justify-between items-center'>
           <h2 className='font-semibold text-[15px] '>End Date:</h2>
           <span onClick={()=> setNextForm(0)}><AiOutlineEdit/></span>
        </div>
        <p className='font-medium text-[16px] text-[rgba(0,0,0,1)] uppercase'>{`${formDatum.endDate}`}</p>
        {/* <p className='font-medium text-[16px] text-[rgba(0,0,0,1)] uppercase'>{`${formDatum.endDate.slice(0,10).split('-').reverse().join('/')}`}</p> */}
      </div>
       {/* CARS SELECTED */}
      <div className='border-primaryBlue border-b-2 flex flex-col gap-y-2 pb-2'>
        <div className='flex justify-between items-center'>
           <h2 className='font-semibold text-[15px] '>Cars Selected:</h2>
           <span onClick={()=> setNextForm(1)}><AiOutlineEdit/></span>
        </div>
        {/* <p className='font-medium text-[16px] text-[rgba(0,0,0,1)] uppercase'>{`${formDatum.carSelected.join()}`}</p> */}
        <div className='flex flex-col gap-y-2'>
            {
                formDatum.carSelected.map((veh) => (
                    // <div className='flex justify-between items-center'>
                    //    <h2 className='text-[15px] font-semibold'>{veh}</h2>
                    //    <div className='flex items-center'>
                    //      <span className='px-3 py-2 text-[rgba(0,0,0,0.5)]'><AiOutlinePlus/></span>
                    //      <span className='px-3 py-1 border border-primaryBluet border-[rgba(0,0,0,0.5)] text-[15px] text-black font-semibold'>1</span>
                    //      <span className='px-3 py-2 text-[rgba(0,0,0,0.5)]'><AiOutlineMinus/></span>
                    //    </div>
                    // </div>
                    <CarAmount data={veh} key={uuidv4()}/>
                ))
            }
        </div>
      </div>
      {/* Submit Button */}
      <div className='flex justify-center items-center mt-4'>
        <button type="submit" className='py-2 px-4 rounded text-white font-semibold text-xl bg-primaryBlue uppercase'>Make The Order</button>
      </div>
    </div>
  )
}

export default InfoView