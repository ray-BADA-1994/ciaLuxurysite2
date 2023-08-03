import React from 'react'
// import FormOneDate from './FormOneDate'
import TextInput from './TextInput'
import { useState, forwardRef,useRef,useImperativeHandle } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {EndDateElement,ExampleDateContainer} from './FormInfoLogic'
import {useGlobalContext} from '../Context/GlobalContext'
import {useFormDatum} from '../Context/FormData'

const FormInputs = (props,ref) => {

    const firstnameRef = useRef()
    const lastnameRef = useRef()
    const emailRef = useRef()
    const pickUpRef = useRef()
    const dropOffRef = useRef()

    useImperativeHandle(
      ref,
      () => {
        return {
            focusFirstname:()=> firstnameRef.current.focus(),
            focusLastname: ()=>lastnameRef.current.focus(),
            focusEmail: ()=>emailRef.current.focus(),
            focusPickUp: ()=>pickUpRef.current.focus(),
            focusDropOff: ()=>dropOffRef.current.focus(),
          }
      }
    )

    const {setNextForm} = useGlobalContext()

    const {formDatum, setFormDatum,handleFormDatum} = useFormDatum()

    const inputStartRef = useRef();
   
    const [show, setShow] = useState('return')
    // THIS USESTATE IS USED FOR CONDITIONALLY RENDERING THE RETURN DATE IN THE UI
    const [returnDate, setReturnDate] = useState(true)

    // const {toggle, handleToggle} = useToggle(true)
    // THE FUNCTION IS USED TO HANDLE THE RETURNDATE VALUE
    const handleReturn = () => {
        setShow('return')
        setReturnDate(true)
    }

    const handleOneway = () => {
        setShow('oneway')
        setReturnDate(false)
    }
    
    // THE DATEPICKER IMPLEMENTATION
    const [startDate, setStartDate] = useState(null)

    const [endDates, setEndDate] = useState(null)
    
    // THIS IS DONE TO GET THE AMOUNT OF DAYS BETWEEN THE CURRENT DATE AND THE LAST DAY OF THE YEAR 
    // SO AS TO SET THE INCLUDED DAYS LEFT IN THE CALENDAR

    // const oneDay = 1000 * 60 * 60 * 24
    // const presentDay = new Date()
    // const yearEnd = new Date(presentDay.getFullYear, 11, 31)
    // const amountOfDaysLeft = Math.round(yearEnd.getTime() - presentDay.getTime()) / oneDay
    // const finalResult = amountOfDaysLeft.toFixed(0)
    //console.log(formData);

    const handleSubmit = (e) => {
        if(
           formDatum.firstname == '' ||
           formDatum.lastname == '' ||
           formDatum.email == '' ||
           formDatum.pickUpLocation == '' ||
           formDatum.dropOffLocation == ''
        ) return

        e.preventDefault()
        
        setNextForm(1)
    }

  return (
    <form className='pb-10 pt-3 flex flex-col items-center w-full text-[rgba(0,0,0,0.8)] gap-y-3' >
              <TextInput 
              type='text' 
              className='py-2 px-2 w-full' 
              label='First Name' 
              placeholder='Please Enter Your First Name'
              errorMessage='Please Enter Your Name'
              value={formDatum.firstname}
              name='firstname'
              autofocus
              onChange={(e) => handleFormDatum(e)}
              ref={firstnameRef}
              />
            <TextInput 
              type='text' 
              className='py-2 px-2 w-full' 
              label='Last Name' 
              placeholder='Please Enter Your Last Name'
              errorMessage='Please Enter Your Last Name'
              value={formDatum.lastname}
              name='lastname'
              onChange={(e) => handleFormDatum(e)}
              ref={lastnameRef}
              />
              <TextInput 
              type='email' 
              className='py-2 px-2 w-full' 
              label='Email' 
              placeholder='Please Enter Your Email'
              errorMessage='Please Enter Your Email'
              value={formDatum.email}
              name='email'
              onChange={(e) => handleFormDatum(e)}
              ref={emailRef}
              />
              <TextInput 
              type='text' 
              className='py-2 px-2 w-full' 
              label='Pick up Location' 
              placeholder='Enter Your Pick-up Location'
              errorMessage='Enter Your Pick-up Location'
              value={formDatum.pickUpLocation}
              name='pickUpLocation'
              onChange={(e) => handleFormDatum(e)}
              ref={pickUpRef}
              />
               <TextInput 
              type='text' 
              className='py-2 px-2 w-full' 
              label='Drop-off Location' 
              placeholder='Enter Your Drop-off Location'
              errorMessage='Enter Your Drop-off Location'
              value={formDatum.dropOffLocation}
              name='dropOffLocation'
              onChange={(e) => handleFormDatum(e)}
              ref={dropOffRef}
              />

              {/* <FormOneDate /> */}
              <div className='flex flex-col gap-y-4 w-[90%] mt-4'>
                    <div className='flex gap-x-2'>
                        <div>
                            <label 
                            htmlFor="returnBack" 
                            className={ show === 'return' ?'border py-1 px-3 bgy-[rgb(34,64,114)] bg-[#384a59] text-white hover:rounded-md': 'border py-1 px-3 bg-white text-[rgb(34,64,114)] hover:rounded-md'}
                            onClick={handleReturn}
                            
                            >
                            Return
                            </label>
                            <input type="radio" name="return" id="returnBack"  className='hidden' value={show === 'return'} disabled={show === 'return'} onChange={handleReturn} />
                        </div>

                        <div>
                            <label 
                            htmlFor="oneWay" 
                            className={ show === 'oneway' ?'border py-1 px-3 bgy-[rgb(34,64,114)] bg-[#384a59] text-white hover:rounded-md' : 'border py-1 px-3 bg-white text-[rgb(34,64,114)] hover:rounded-md'}
                            onClick={handleOneway}
                            >
                                One Way
                            </label>
                            <input type="radio" name="return" id="oneWay"  className='hidden' value={show === 'oneway'} onChange={handleOneway} />
                        </div>
                    </div>

                     <DatePicker
                            selected={startDate}
                            onChange={(date) => {
                                setStartDate(date)
                                setFormDatum({...formDatum, startDates:date})   
                            }}
                            customInput={<ExampleDateContainer />}
                            minDate= {new Date()}
                       />

                    { returnDate &&
                        <DatePicker 
                            selected={endDates}
                            onChange={(date) => {
                                setEndDate(date)
                                setFormDatum({...formDatum, endDate:date})
                            }}
                            customInput={<EndDateElement />}
                            disabled={formDatum.startDates === '' ? true : false}
                            minDate= {formDatum.startDates} // The minimum start dates which is derived from the formInfo.startDates which saves the value of the input start date
                        />  
                    }
               </div>
               <button 
               className='py-3 mt-2 font-semibold text-lg uppercase rounded-sm text-white bg-[#011F26] w-[90%]'
               onClick={(e)=> handleSubmit(e)}
               >
                Select A Car
              </button>
           </form> 
  )
}

export default React.forwardRef(FormInputs)