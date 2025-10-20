import React from 'react'
import './activityCard.css'
import img1 from '../../assets/imgi_13_activity-image1.jpg'

const ActivityCard = () => {
  return (
    <>
    <div className="activity-card">
        <img src={img1} alt="" />
        <div className="activity-text">
            <h1>Lorem, ipsum.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur...</p>
        </div>
    </div>
    </>
  )
}

export default ActivityCard