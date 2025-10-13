import React from 'react'
import './sections.css'

const Sections = ({mainHeading, subHeading, content}) => {
  return (
    <>
    <div className="sections">
    <h2 >Our Services</h2>
    <h3>What We Offer</h3>
    <div className="">
        {content}
    </div>
    </div>
    </>
  )
}

export default Sections