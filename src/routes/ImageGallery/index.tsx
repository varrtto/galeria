import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "./Image";

const ImageGallery = () => {
  return (
    <Carousel
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      autoPlay
      transitionTime={2}
      swipeable
      infiniteLoop
    >
      <Image src="/imagenes/1.jpeg" />
      <Image src="/imagenes/2.jpeg" />
      <Image src="/imagenes/3.jpeg" />
      <Image src="/imagenes/4.jpeg" />
    </Carousel>
  );
};

export default ImageGallery;
