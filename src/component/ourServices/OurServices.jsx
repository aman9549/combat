import OurServiceCard from "../../utilities/ourServiceCard/OurServiceCard";
import Sections from "../../utilities/sections/Sections";
import "./ourServices.css";

const OurServices = () => {
  return (
    <>
    <div className="our-service-section">

       <Sections mainHeading={"Our Services"} subHeading={"What We Offer"} content={
        <> 

        <div className="our-services-container">
      
              
                <OurServiceCard />
                <OurServiceCard />
                <OurServiceCard />
    
        </div>
        </>
        
        } />

    </div>
     
    </>
  );
};

export default OurServices;
