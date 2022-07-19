import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <Carousel
        autoplay
        infiniteLoop
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
      >
        <div>
          <img loading="lazy" src="./Banner_Images/img1.jpg" alt="img1" />
        </div>
        <div>
          <img loading="lazy" src="./Banner_Images/img2.jpg" alt="img2" />
        </div>
        <div>
          <img loading="lazy" src="./Banner_Images/img3.jpg" alt="img3" />
        </div>
        <div>
          <img loading="lazy" src="./Banner_Images/img4.jpg" alt="img4" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
