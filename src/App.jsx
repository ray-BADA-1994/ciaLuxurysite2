import React from 'react'
import Footer from './components/Footer'
import FormInfo from './components/FormInfo'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import SectionAboutUs from './components/SectionAboutUs'
import SectionSpecial from './components/SectionSpecial'
import {useGlobalContext} from './Context/GlobalContext'
import Carcards from './components/Carcards'
import FormSection from './components/FormSection'
import AboutUs from './components/AboutUs'
import Fleet from './components/Fleet'
import MemberCard from './components/Teams/MemberCard'
import TeamLayout from './components/Teams/TeamLayout'


// routing
import {createBrowserRouter,Route,RouterProvider,createRoutesFromElements} from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import NotFound from './components/NotFound'
import Home from './Pages/Home'


const routerz = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home />}/>
      <Route path='about' element={<AboutUs />}/>
      <Route path='fleet' element={<Fleet/>} />
      <Route path='team' element={<TeamLayout />}  />
      <Route path='*' element={<NotFound/>} />
    </Route>
  )
)


const App = () => {
  const {bookNow} = useGlobalContext()
  return (
   <RouterProvider router={routerz}/>
  )
}

export default App
