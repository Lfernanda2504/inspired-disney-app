import Slider from "react-slick";
import '../../styles/header-slider.css'


const Header = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="header-slider">
            <Slider {...settings}>
                <div className="slide-item">
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/456A711C19899C881600F6247705E5253EB18C2471D75E5281E1FF6ACB6D2FBA/scale?width=1440&aspectRatio=1.78&format=jpeg"/>
                </div>
                <div className="slide-item">
                    <img src="https://disneyplusclone777.netlify.app/assets/images/slider-badging.jpg"/>
                </div>
                <div className="slide-item">
                    <img src="https://disneyplusclone777.netlify.app/assets/images/slider-badging.jpg"/>
                </div>
            </Slider>

        </div>
    )
}



export default Header;