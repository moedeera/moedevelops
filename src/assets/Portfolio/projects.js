const template = {
  id: null,
  ref: null,
  orientation: "",
  title: "",
  headerSummary: "",
  stack: [],
  pics: [{ label: "", url: "", location: "" }],
  info: [{ header: "", text: "" }],
  link: "",
};

const projectList = [
  {
    id: 0,
    ref: null,
    orientation: "Fashion",
    title: "440Styling",
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
    img3: "",
  },
];

export { projectList as projectList };
