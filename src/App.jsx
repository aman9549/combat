import React from 'react'
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'
import Hero from './component/hero/Hero'
import Aboutus from './component/about-us/Aboutus'
import OurServices from './component/ourServices/OurServices'
import RegisterSection from './component/registerSection/RegisterSection'
import OurActivities from './component/ourActivities/OurActivities'
import Statistics from './component/statistics/Statistics'
import JoinUs from './component/joinus/JoinUs'
import OurTeam from './component/ourTeam/OurTeam'

const App = () => {
  return (
    <>
   <Navbar />
   <Hero />
   <Aboutus />
   <OurServices />
   {/* <RegisterSection />
   <OurActivities /> */}
   <Statistics />
   <JoinUs />
   <OurTeam />
   <Footer />
    </>
  )
}

export default App