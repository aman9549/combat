import React from 'react'
import './joinUs.css'
import Sections from '../../utilities/sections/Sections'
import Button from '../../utilities/Button'

const JoinUs = () => {
  return (
    <>
    <section className="join-us-section">
        <Sections mainHeading={"Join Us"} color={"color"} subHeading={"Come and Have Fun With Our Surfing Lessons"} content={<>
            <Button text={"get started"} />
            </>} />
    </section>
    </>
  )
}

export default JoinUs