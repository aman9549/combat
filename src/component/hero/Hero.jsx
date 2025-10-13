import React from 'react'
import '../hero/hero.css'
import Button from '../../utilities/Button'

const Hero = () => {
  return (
   <section className='hero-section'>
<div className="hero-text">
    <h1>Come and fun with</h1>
    <h2>Extreme Surfing</h2>
    {/* <a href="">Get Started</a> */}
    <Button text={"Get Started"}/>
</div>
   </section>
  )
}

export default Hero