import { Segment1 } from "../../Components/Segment1/Segment1";
import { Segment6 } from "../../Components/Segment6/Segment6";
// import transition from "../../Transition";

const About = () => {
  const info = {
    header: `Coding is not just a skill. It's My Passion`,
    text: `Hello there! My name is Moe. I started learning coding back in 2020 and immediately fell in love with it. Early on, I decided to focus on web development with an emphasis on design.
    After conducting thorough market research, I discovered a high demand for design-oriented websites. To enhance my design skills, I delved into WordPress, WebFlow, and Figma.
    
    After a few months of submitting applications, I secured a contract position with a digital marketing company as a web developer. This opportunity provided me with firsthand experience in using technologies such as React, Shopify, SquareSpace, Adobe Illustrator, and ChatGPT`,
    button: "Contact",
  };

  return (
    <div className="page-container">
      <Segment1 info={info} />
      <Segment6 />
    </div>
  );
};

// const AboutPage = transition(About);

export default About;
