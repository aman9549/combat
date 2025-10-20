import React from 'react'
import './ourTeamCard.css'
import img1 from '../../assets/imgi_20_team-image1.jpg'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const OutTeamCard = ({}) => {
  return (
 <>
 
 <div className="our-team-card">
    <img src={img1} alt="" />
    <h1>Marvin Joner</h1>
    <p>Instructor</p>

    <div className="team-card-icons">
    <span><FaFacebookF /></span>
    <span><FaInstagram /></span>
    <span><FaTwitter /></span>
    </div>

 </div>
 
 </>
  )
}

export default OutTeamCard