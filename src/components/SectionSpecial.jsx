import React,{useState} from 'react'
import car1 from '../assets/pradoland.png'
import CarCollectionCard from './CarCollectionCard'
import {IoMdArrowForward} from 'react-icons/io'
import { v4 as uuidv4 } from 'uuid';
import {busData,carData,suvData} from '../data/CarData'
import {motion} from 'framer-motion'


const SectionSpecial = () => {
    // let carData = [
    //     {
    //         name:'Toyota Landcruiser',
    //         carImg: car1,
    //         price:'$500'
    //     },
    //     {
    //         name:'Toyota Prado',
    //         carImg: car1,
    //         price:'$500'
    //     },
    //     {
    //         name:'Lexus 570',
    //         carImg: car1,
    //         price:'$500'
    //     }, 
    //     {
    //         name:'Toyota Hilux',
    //         carImg: car1,
    //         price:'$500'
    //     }
    // ]

    const [selectedId, setSelectedId] = useState(null)

    const [currentTab, setCurrentTab] = useState(0)

    const handleCurrentTab = (x) => {
      setCurrentTab(x)
    }

    const btnStyle = 'text-[16px]y py-1 w-[80px]  border-2 border-r-[#D98E04] border-b-[#d98e04] rounded-mdy font-medium overflow-x-hidden'

  return (
    <div className='mb-20 md:mb-0 lg:h-[70vh] bg-inherit containerz bordery py-[4rem] flex flex-col gap-16 sectionSpecial ' id='fleet'>
       <div className='flex flex-col gap-4 md:flex-row md:justify-between'>
          <h1 className='text-[20px] font-semibold uppercase'>Car Collection</h1>
          <div className='flex gap-6 '>
            <button className={`text-[16px]y py-1 w-[80px]  border-2 border-r-[#D98E04] border-b-[#d98e04] rounded-mdy font-medium overflow-x-hidden ${currentTab === 0 ? 'bg-primaryYellow text-white ' : 'bg-transparent text-white ' }`} onClick={()=>handleCurrentTab(0)}>SUV</button>
            <button className={`${btnStyle} ${currentTab === 1 ? 'bg-primaryYellow text-white' : 'bg-transparent' }`} onClick={()=>handleCurrentTab(1)}>CAR</button>
            <button className={`${btnStyle} ${currentTab === 2 ? 'bg-primaryYellow text-white' : 'bg-transparent' }`} onClick={()=>handleCurrentTab(2)}>BUS</button>
          </div>
       </div>
       <div className={`${currentTab === 0 ?'grid grid-cols-2 lg:grid-cols-3 gap-4 flex-1': 'hidden'}`}>
         {
            suvData.map((carDatum, i)=>(
                <CarCollectionCard  carDatum={carDatum} key={uuidv4()}/>
            ))
         }
         
       </div>
       <div className={`${currentTab === 1 ?'grid grid-cols-2 lg:grid-cols-3 gap-4 flex-1': 'hidden'}`}>
         {
            carData.map((carDatum, i)=>(
                <CarCollectionCard carDatum={carDatum} key={uuidv4()}/>
            ))
         }
         
       </div>
       <div className={`${currentTab === 2 ?'grid grid-cols-2 lg:grid-cols-3 gap-4 flex-1': 'hidden'}`}>
         {
            busData.map((carDatum, i)=>(
                <CarCollectionCard carDatum={carDatum} key={uuidv4()}/>
            ))
         }
         
       </div>
    </div>
  )
}

export default SectionSpecial