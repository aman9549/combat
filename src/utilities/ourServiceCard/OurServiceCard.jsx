import Button from '../Button';
import './ourServiceCard.css'
import { MdKitesurfing } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

const OurServiceCard = () => {
  return (
    <>
    <div className="service-card">
        <div className="card-icon">
            <MdKitesurfing />
        </div>
        <h2>Surf Lessons</h2>
        <p>Rolestiae non recusandae itaque earum rerum hic tenetur a sapiente delectus aut reiciendis...</p>
        <a className='our-service-btn' href="">Learn More <FaArrowRightLong /> </a>
    </div>
    </>
  )
}

export default OurServiceCard