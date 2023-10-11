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
  color: "",
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
  {
    id: 4,
    slug: "radiologymanual",
    ref: null,
    orientation: "Radiology Website",
    title: "Radiology Manual",
    headerSummary: "Full Stack Academic website",
    stack: ["React", "CSS", "HTML"],
    pics: [{ label: "", url: "", location: "" }],
    info: `The Radiology Manual is a website that I developed using the powerful MERN stack (MongoDB, Express.js, React, and Node.js).
    Inspired by a video showcased on "dribbble.com",
    the website features a visually appealing layout and user-friendly
    interface. The styling, although accomplished using basic CSS, provides an 
    elegant and intuitive user experience.
     The primary objective of The Radiology Manual is to serve as a centralized repository for articles related to radiology, making it a valuable resource for anyone interested in the field. With a commitment to offering free radiology learning materials, it aims to empower enthusiasts, students, and professionals alike, fostering a vibrant community of knowledge sharing and skill development.`,
    img1: `${portfolioImages[14]}`,
    img2: `${portfolioImages[13]}`,
    img3: null,
    link: "https://radiologymanual-420b89f04c5f.herokuapp.com",
    color: "black",
  },
  {
    id: 5,
    slug: "deercoded",
    ref: null,
    orientation: "Coding Bootcamp",
    title: "DeerCoded",
    headerSummary: "UI Design For A Coding Bootcamp",
    stack: ["Javascript", "html", "css"],
    info: `A Design oriented website built as a theme for a coding bootcamp. It was built using CSS, JavaScript and HTML.
    The focus of the website is to experiment with new design trends involving landing page lottie animations and bubbly 3d illustrations.
    It also uses a landing page countdown timer that visually channels urgency in a potential customer.`,
    img1: `${portfolioImages[12]}`,
    img2: "https://www.moedevelops.com/static/media/deercoded.e71d49fd71af940e01be.png",
    img3: null,
    link: "https://deercoded.com",
    color: "#256EFF",
  },
  {
    id: 6,
    slug: "Vethalia",
    ref: null,
    orientation: "Natural Health Website",
    title: "DeerCoded",
    headerSummary: "UI Design For A Coding Bootcamp",
    stack: ["Javascript", "html", "css"],
    info: `A Design oriented website built as a theme for a coding bootcamp. It was built using CSS, JavaScript and HTML.
    The focus of the website is to experiment with new design trends involving landing page lottie animations and bubbly 3d illustrations.
    It also uses a landing page countdown timer that visually channels urgency in a potential customer.`,
    img1: `${portfolioImages[12]}`,
    img2: "https://www.moedevelops.com/static/media/deercoded.e71d49fd71af940e01be.png",
    img3: null,
    link: "https://deercoded.com",
    color: "#256EFF",
  },
];

export { projectList as projectList };
