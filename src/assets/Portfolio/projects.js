const template = {
  id: null,
  slug: "",
  ref: null,
  orientation: "",
  title: "",
  headerSummary: "",
  stack: [],
  pics: [{ label: "", url: "", location: "" }],
  info: "",
  img1: "",
  img2: null,
  img3: null,
  link: "",
  color: "#f9c349",
};

import { portfolioImages } from "./images";

const projectList = [
  {
    id: 0,
    slug: "440styling",
    ref: null,
    orientation: "Fashion",
    title: "440styling",
    headerSummary: `A digital publication store selling
      articles about men's fashion`,
    stack: ["wordpress", "elementor", "css", "html", "javascript"],
    pics: [
      {
        label: "landing",
        url: "http://440styling.com/wp-content/uploads/2023/09/selfcare.png",
        location: "",
      },
    ],
    info: `Inspired by a shot on the website Dribbble.com,
    this was created using wordpress and the free version of Elementor.
    The original shot had to be redesigned to adjust for spacing and color.
    The final product is a stylish, sleek-looking website geared for getting client attention.
    CSS, HTML and JavaScript were used to create the landing page.
    The rest of the design was a modified version of an original template`,

    link: "https://440styling.com",
    img1: "http://440styling.com/wp-content/uploads/2023/09/440styling.png",
    img2: "http://440styling.com/wp-content/uploads/2023/09/Screenshot-2023-09-28-030818.png",
    img3: null,
  },
  {
    id: 2,
    slug: "superdonair",
    ref: null,
    orientation: "Restaurant",
    title: "Super-Donair",
    headerSummary: `A simple but highly ranked website that gets the job done.`,
    stack: ["css", "html", "javascript"],
    pics: [
      {
        label: "landing",
        url: `${portfolioImages[0]}`,
        location: "",
      },
    ],
    info: `
    A Website built for the Super-Donair diner in Saskatoon,
    This was built using CSS, HTML and JavaScript,
    The client insisted on a simple design without any advanced features.
    The website is maintained and updated manually by me.    
    The website is highly ranked in the google search algorithm and is the
    first diner to show up for the  “donair search” in Saskatoon.
    `,

    link: "https://super-donair.com/",
    img1: `${portfolioImages[9]}`,
    img2: `${portfolioImages[10]}`,
    img3: `${portfolioImages[11]}`,
    color: "crimson",
  },
  {
    id: 3,
    slug: "greenframe",
    ref: null,
    orientation: "Construction",
    title: "Greenframe Design ",
    headerSummary: `Renovation company website that bolsters
         a sturdy professional look coupled with an easy-to-navigate interface.`,
    stack: ["wordpress", "elementor", "CSS", "HTML"],
    pics: [
      {
        label: "",
        url: "http://440styling.com/wp-content/uploads/2023/09/cp3.png",
        location: "",
      },
    ],
    info: `Built using WordPress, It was meant to work as a professional
    website for a mock client in the renovation sector.
   
    The structure was a standard corporate setup with various custom sections
    that were manually designed. It was built with Elementor using a theme
    from Astra as a starting point. Multiple custom blocks were used to finish
    up the final draft and a custom domain was bought to give a sense of realism.`,
    img1: "http://440styling.com/wp-content/uploads/2023/09/cp3.png",
    img2: "http://440styling.com/wp-content/uploads/2023/09/cp4.png",
    img3: "http://440styling.com/wp-content/uploads/2023/09/cp5.png",
    link: "https://greenframedesign.com/",
    color: "#23A455",
  },
];

export { projectList as projectList };
