import { useContext } from "react";
import { Carousel } from "../../Components/Carousel/Carousel";
import { CarouselSmall } from "../../Components/CarouselSmall/CarouselSmall";

import { Landing } from "../../Components/Landing/Landing";
import { Segment1 } from "../../Components/Segment1/Segment1";
import { Segment2 } from "../../Components/Segment2/Segment2";
import { SiteContext } from "../../Context/Context";
import transition from "../../Transition";
import { Segment4 } from "../../Components/Segment4/Segment4";
import { Segment5 } from "../../Components/Segment5/Segment5";
import { Segment6 } from "../../Components/Segment6/Segment6";

const Home = () => {
  const { test, info1, info2, info4, info5 } = useContext(SiteContext);
  console.log(test);
  return (
    <div className="page-container flex flex-col gap-5">
      <Landing />
      <Carousel />
      <CarouselSmall />
      {/* <IconGallery /> */}
      <Segment1 info={info1} />
      <Segment2 info={info2} />
      <Segment4 info={info4} />
      <Segment5 info={info5} />
      <Segment6 />
    </div>
  );
};

const HomePage = transition(Home);

export default HomePage;
