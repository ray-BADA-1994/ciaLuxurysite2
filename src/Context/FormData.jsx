import React,{createContext,useState,useEffect,useContext} from "react";


export const formContext = createContext()

export const FormContextProvider = ({children}) => {
    const [formDatum, setFormDatum] = useState({
        firstname:'',
        lastname:'',
        email:'',
        pickUpLocation:'',
        dropOffLocation:'',
        startDates:'',
        endDate:'',
        carSelected:[]
     })

     const handleFormDatum = (e) => {
        setFormDatum({...formDatum, [e.target.name]: e.target.value})
      }

      const handleReset = () => {
        setFormDatum({
        firstname:'',
        lastname:'',
        email:'',
        pickUpLocation:'',
        dropOffLocation:'',
        startDates:'',
        endDate:'',
        carSelected:[] 
        })
      }
    return(
        <formContext.Provider value={{
            formDatum, setFormDatum,handleFormDatum,handleReset
        }}>
            {children}
        </formContext.Provider>
    )
}

export const useFormDatum = () => {
    return useContext(formContext)
}
