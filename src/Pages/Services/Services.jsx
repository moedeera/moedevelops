import "./Services.css";
import { Segment2 } from "../../Components/Segment2/Segment2";

export const Services = () => {
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
  return (
    <div className="page-container">
      <Segment2 info={info2} />
    </div>
  );
};
