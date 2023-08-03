import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from '../components/Footer'
import FormSection from '../components/FormSection'
import Navbar from '../components/Navbar'
import { useGlobalContext } from '../Context/GlobalContext'

const RootLayout = () => {
  const {bookNow} = useGlobalContext()

  return (
    <div>
        <Navbar />

        <main>
           <Outlet />
        </main>

        {bookNow && <FormSection />}
        
        <Footer />
    </div>
  )
}

export default RootLayout