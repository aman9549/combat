import React from 'react'
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'
import Hero from './component/hero/Hero'
import Aboutus from './component/about-us/Aboutus'
import OurServices from './component/ourServices/OurServices'

const App = () => {
  return (
    <>
   <Navbar />
   <Hero />
   <Aboutus />
   <OurServices />
   {/* <Footer /> */}
    </>
  )
}

export default App