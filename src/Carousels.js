import './css/carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Avatar1 from './assets/Avatar-1.jpg';
import Avatar2 from './assets/Avatar-2.jpg';
import Avatar3 from './assets/Avatar-3.jpg';
import {Carousel} from 'react-responsive-carousel';
const Carousels = () =>{
    return(
        <div className="carousel-container">
            <Carousel className='Carouse' autoPlay={true} centerMode={true} centerSlidePercentage={50} infiniteLoop={true} showArrows={false} showStatus={false} showThumbs={false}>
                <div className="images">
                    <img src={Avatar1} alt="Avatar" />
                </div>
                <div className="images">
                    <img src={Avatar2} alt="Avatar" />
                </div>
                <div className="images">
                    <img src={Avatar3} alt="Avatar" />
                </div>
            </Carousel>
        </div>
    )
}
export default Carousels;