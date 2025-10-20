import React from 'react'
import './statisticsCard.css'
import { MdOutlineSportsKabaddi } from "react-icons/md";


const StatisticsCard = ({}) => {
  return (
    <>
    <div className="statis-card">

        <div className="statis-card-icon">
            <MdOutlineSportsKabaddi />
        </div>
        <h2>100%</h2>
        <p>Happy Clients</p>

    </div>
    </>
  )
}

export default StatisticsCard