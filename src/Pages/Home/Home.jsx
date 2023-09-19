import { useContext } from "react";
import { Carousel } from "../../Components/Carousel/Carousel";
import { CarouselSmall } from "../../Components/CarouselSmall/CarouselSmall";

import { Landing } from "../../Components/Landing/Landing";
import { Segment1 } from "../../Components/Segment1/Segment1";
import { Segment2 } from "../../Components/Segment2/Segment2";
import { SiteContext } from "../../Context/Context";
import transition from "../../Transition";
import { Segment4 } from "../../Components/Segment4/Segment4";

const Home = () => {
  const info = {
    header: `Design Driven.`,
    header2: `Result Oriented.`,
    text: `My aim is to build quality websites that serve the clients
    needs.While I do have knowledge in many different frameworks and
    coding languages, I believe it is more important to master each tool
    and know what is appropriate for any given client. As a result, I
    deploy a more specialized approach using platforms and services I know
    and trust to build quality websites.`,
    button: "Contact",
  };

  const info2 = {
    header: `A Better way to build a website`,
    texts: [
      {
        header: "The #1 job board for design talent",
        text: ` Get your job listings in front of millions of top-rated designers
      looking for their next role with an average of 1.1K targeted clicks
      per month.`,
        button: "",
      },
      {
        header: "The #1 job board for design talent",
        text: ` Get your job listings in front of millions of top-rated designers
      looking for their next role with an average of 1.1K targeted clicks
      per month.`,
        button: "",
      },
      {
        header: "The #1 job board for design talent",
        text: ` Get your job listings in front of millions of top-rated designers
      looking for their next role with an average of 1.1K targeted clicks
      per month.`,
        button: "",
      },
    ],
  };

  const { test } = useContext(SiteContext);
  console.log(test);
  return (
    <div className="page-container flex flex-col gap-5">
      <Landing />
      <Carousel />
      <CarouselSmall />
      {/* <IconGallery /> */}
      <Segment1 info={info} />
      <Segment2 info={info2} />
      <Segment4 info={info} />
    </div>
  );
};

const HomePage = transition(Home);

export default HomePage;
