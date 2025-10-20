import React from 'react'
import './sections.css'

const Sections = ({mainHeading, subHeading, content, color, extra}) => {
  return (
    <>
    <div className={`sections ${extra}`}>
    <h2 className='sections-heading'>{mainHeading}</h2>
    <h3 className={`sections-sub-heading ${color}`}>{subHeading}</h3>
    <div className="">
        {content}
    </div>
    </div>
    </>
  )
}

export default Sections