import { Carousel } from "../../Components/Carousel/Carousel";
import { Landing } from "../../Components/Landing/Landing";

export const Home = () => {
  return (
    <div className="page-container">
      <Landing />
      <Carousel />
    </div>
  );
};
