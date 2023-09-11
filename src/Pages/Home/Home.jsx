import { Carousel } from "../../Components/Carousel/Carousel";
import { CarouselSmall } from "../../Components/CarouselSmall/CarouselSmall";
import { IconGallery } from "../../Components/IconGallery/IconGallery";
import { Landing } from "../../Components/Landing/Landing";
import { Segment1 } from "../../Components/Segment1/Segment1";

export const Home = () => {
  return (
    <div className="page-container">
      <Landing />
      <Carousel />
      <CarouselSmall />
      <IconGallery />
      <Segment1 />
    </div>
  );
};
