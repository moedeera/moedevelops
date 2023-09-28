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
    headerSummary:
      "A quarterly, digital publication that pulls together the best articles about men's fashion",
    stack: ["wordpress"],
    pics: [
      {
        label: "landing",
        url: "http://440styling.com/wp-content/uploads/2023/09/selfcare.png",
        location: "",
      },
    ],
    info: [{ header: "", text: "" }],
    link: "",
  },
];

export { projectList as projectList };
