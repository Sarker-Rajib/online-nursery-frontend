import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import c1 from '/cacti-cactus-succulent-flower.jpg';
import c2 from '/greenhouse-hanging-baskets-seedlings.jpg';


const Hero = () => {
    var settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "ease",
        pauseOnHover: false,
        arrows: false,
    };

    return (
        <Slider {...settings}>
            <div className="h-[70vh] overflow-hidden">
                <img src={c1} alt="c image" className="w-full h-full object-cover" />
            </div>
            <div className="h-[70vh] overflow-hidden">
                <img src={c2} alt="c image" className="w-full h-full object-cover" />
            </div>
        </Slider>
    );
};

export default Hero;