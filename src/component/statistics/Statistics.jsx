import React from 'react'
import './statistics.css'
import Sections from '../../utilities/sections/Sections'
import StatisticsCard from '../../utilities/statisticsCard/StatisticsCard'


const Statistics = () => {
  return (
    <>

    <div className="statistics-section">
     <Sections mainHeading={"Statistics"} subHeading={"Our Achievements"} content={<>
    
    <div className="achivements-con">
     
        <StatisticsCard />
        <StatisticsCard />
        <StatisticsCard />
        <StatisticsCard />
        
    </div>

    </>} />
    </div>
    </>
   
  )
}

export default Statistics