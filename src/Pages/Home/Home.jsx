import { Carousel } from "../../Components/Carousel/Carousel";
import { IconGallery } from "../../Components/IconGallery/IconGallery";
import { Landing } from "../../Components/Landing/Landing";
import { Segment1 } from "../../Components/Segment1/Segment1";

export const Home = () => {
  return (
    <div className="page-container">
      <Landing />
      <Carousel />
      <IconGallery />
      <Segment1 />
    </div>
  );
};
