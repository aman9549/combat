import './ourActivities.css';
import Sections from '../../utilities/sections/Sections';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurServiceCard from '../../utilities/ourServiceCard/OurServiceCard';
import ActivityCard from '../../utilities/activityCard/ActivityCard';

const OurActivities = () => {

    var settings = {
       className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      dots:true,
      gap:"60px",
      autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="our-activities">
      <Sections
        mainHeading={"Our Activities"}
        subHeading={"Explore the excitement"}
        content={
          <>
         <div className="slider-container">
      <Slider {...settings}>
        <div>
          <ActivityCard />
        </div>
        <div>
           <ActivityCard />
        </div>
        <div>
           <ActivityCard />
           
        </div>
        <div>
           <ActivityCard />
        </div>
        <div>
           <ActivityCard />
        </div>
        <div>
         <ActivityCard />
        </div>
      </Slider>
    </div>
          </>
        }
      />
    </div>
  );
};

export default OurActivities;
