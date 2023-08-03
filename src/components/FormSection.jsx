import React from 'react'
import {FormContextProvider} from '../Context/FormData'
import FormInfo from './FormInfo'


const FormSection = () => {
  return (
    <FormContextProvider>
       <FormInfo />
    </FormContextProvider>
  )
}

export default FormSection