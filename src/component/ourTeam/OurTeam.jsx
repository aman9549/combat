import React from 'react'
import './ourTeam.css'
import Sections from '../../utilities/sections/Sections'
import OutTeamCard from '../../utilities/outTeam/OutTeamCard'

const OurTeam = () => {
  return (
    <>
    <section className="our-team-section">
        <Sections mainHeading={"Our Team"} subHeading={"Meet Our Coaches"} content={<>
            <div className="our-team-container">
            <OutTeamCard />
            <OutTeamCard />
            <OutTeamCard />
            </div>
            </>} />
    </section>
    </>
  )
}

export default OurTeam