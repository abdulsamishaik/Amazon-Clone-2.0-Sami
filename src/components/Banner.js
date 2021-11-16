import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function Banner() {
    return (
        <div className="relative">
          <div className='absolute z-20 w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0'/>
            <Carousel 
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={2700}
            >

            <div>
            <img loading="lazy" src="https://links.papareact.com/6ff"/>
            </div>

            <div>
            <img loading="lazy" src="https://links.papareact.com/7ma"/>
            </div>

            <div>
            <img loading="lazy" src="https://links.papareact.com/gi1"/>
            </div>
                
            </Carousel>
        </div>
    );
}

export default Banner
