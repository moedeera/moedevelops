import "./Services.css";
import { Segment2 } from "../../Components/Segment2/Segment2";

export const Services = () => {
  const info2 = {
    header: `Need help with anything Web Related? `,
    texts: [
      {
        header: "Consulting",
        text: ` Whether you are planning to build a website from scratch or attempting to improve your
        current one, I can give you the insight you need to make an informed decision. Send me a message
        today for a free 20 minute consultation.`,
        button: "Contact",
        link: "/contact",
      },
      {
        header: "Personal Websites",
        text: ` Personal website can be for as simple as one page bio or as complex as an interactive
         portfolio website. Regardless of the website, I can help you get it up and running as soon as possible`,
        button: "See Portfolio",
        link: "/portfolio",
      },
      {
        header: "Business Websites ",
        text: ` Starting a business is hard. If you need a simple, quick, and cost-effective website to
        launch the digital side of your venture, I can help. I will give you a 30 minute consultation followed
        with a website mockup in short order. Once we get it running, I offer 24/7 maintenance and monitoring
        to make sure your website is always running and up-to-date`,
        button: "Read More",
        link: "/portfolio",
      },
      // {
      //   header: "eCommerce",
      //   text: ` Get your job listings in front of millions of top-rated designers
      //     looking for their next role with an average of 1.1K targeted clicks
      //     per month.`,
      //   button: null,
      // },
      // {
      //   header: "Web Applications",
      //   text: ` Get your job listings in front of millions of top-rated designers
      //     looking for their next role with an average of 1.1K targeted clicks
      //     per month.`,
      //   button: null,
      // },
      // {
      //   header: "Digital Marketing",
      //   text: ` Get your job listings in front of millions of top-rated designers
      //     looking for their next role with an average of 1.1K targeted clicks
      //     per month.`,
      //   button: null,
      // },
    ],
  };
  return (
    <div className="page-container">
      <Segment2 info={info2} />
    </div>
  );
};
