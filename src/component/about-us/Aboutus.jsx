import React from 'react'
import '../about-us/aboutUs.css'
import pic1 from '../../assets/imgi_3_about-image1.jpg'
import pic2 from '../../assets/imgi_4_about-image2.jpg'
import pic3 from '../../assets/imgi_5_about-image3.jpg'
import pic4 from '../../assets/imgi_6_about-image4.jpg'
import Button from '../../utilities/Button'

const Aboutus = () => {
  return (
    <section className="about-section">
      <div className="about-images">
       
         <img src={pic2} alt="" />
            <img src={pic4} alt="" />
              <img src={pic3} alt="" />
             <img src={pic1} alt="" />
      
       
        
    
      </div>
      <div className="about-text">
        <h2>About Us</h2>
        <h3>Get TOP SURF LESSONS With Us</h3>
        <p>Quis autem vel eum iure reprehenderit rui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat ruo voluptas nulla pariatur</p>
        <p>Reiciendis voluptatibus maiores alias consequatur aut perfe rendis doloribus asperiores repellat</p>
        <Button text={"Learn More"}  btns={"btns"} />
      </div>
    </section>
  )
}

export default Aboutus