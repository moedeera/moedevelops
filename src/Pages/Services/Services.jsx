import "./Services.css";
import { Segment2 } from "../../Components/Segment2/Segment2";

export const Services = () => {
  const info2 = {
    header: `Need help with anything Web Related? `,
    texts: [
      {
        header: "Consulting",
        text: ` Get your job listings in front of millions of top-rated designers
          looking for their next role with an average of 1.1K targeted clicks
          per month.`,
        button: "",
      },
      {
        header: "Personal Websites",
        text: ` Get your job listings in front of millions of top-rated designers
          looking for their next role with an average of 1.1K targeted clicks
          per month.`,
        button: "",
      },
      {
        header: "Business Websites",
        text: ` Get your job listings in front of millions of top-rated designers
          looking for their next role with an average of 1.1K targeted clicks
          per month.`,
        button: "",
      },
      {
        header: "eCommerce",
        text: ` Get your job listings in front of millions of top-rated designers
          looking for their next role with an average of 1.1K targeted clicks
          per month.`,
        button: "",
      },
      {
        header: "Web Application",
        text: ` Get your job listings in front of millions of top-rated designers
          looking for their next role with an average of 1.1K targeted clicks
          per month.`,
        button: "",
      },
      {
        header: "Digital Marketing",
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
