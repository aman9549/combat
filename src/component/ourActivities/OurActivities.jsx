import './ourActivities.css';
import Sections from '../../utilities/sections/Sections';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ActivityCard from '../../utilities/activityCard/ActivityCard';

const OurActivities = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "20px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "0px",
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="our-activities">
      <Sections
        mainHeading="Our Activities"
        subHeading="Explore the excitement"
        content={
          <div className="slider-container">
            <Slider {...settings}>
              {[...Array(6)].map((_, index) => (
                <div key={index}>
                  <ActivityCard />
                </div>
              ))}
            </Slider>
          </div>
        }
      />
    </div>
  );
};

export default OurActivities;
