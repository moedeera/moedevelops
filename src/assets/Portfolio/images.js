import port1 from "./img1.png";
import port2 from "./img2.png";
import port3 from "./img3.png";
import port4 from "./img4.jpg";
import port5 from "./img5.jpg";
import port6 from "./img6.jpg";
import port7 from "./img7.png";
import port8 from "./img8.png";
import port9 from "./img9.png";
import proj2c from "./super-donair-mobile.png";
import proj2b from "./super-donair-p2.png";
import proj2a from "./super-donair.png";
import proj3a from "./p6.png";
import style440 from "../../Pages/Portfolio/p7.png";
import proj2d from "../../Pages/Portfolio/super-donair.png";
import vethalia1 from "./vethalia1.png";
import radiology1 from "./sc1.png";
import radiology2 from "./sc2.png";
import greenframe1 from "../../Pages/Portfolio/greenframe.png";
import greenframe2 from "../../Pages/Portfolio/greenframe2.png";
// import * as natural from "natural";
import { iconImages } from "../../Components/IconGallery/Icons";

const images = [
  port1, // 0
  port2, // 1
  port3, // 2
  port4, // 3
  port5, // 4
  port6, // 5
  port7, //6
  port8, // 7
  port9, // 8
  proj2a, // 9
  proj2b, // 10
  proj2c, // 11
  proj3a, //12
  radiology1, //13
  radiology2, //14
];

const imagesSorted = [
  { id: "all", images: images },
  {
    id: "stock",
    images: [port1, port2, port3, port4, port5, port6, port8, port9],
  },
  {
    id: "440styling",
    images: [
      style440,
      port7,
      "http://440styling.com/wp-content/uploads/2023/09/440styling.png",
    ],
  },
  { id: "deercoded", images: [proj3a, null] },
  { id: "radiology", images: [radiology2, radiology1] },
  { id: "superdonair", images: [proj2d, proj2a, proj2b, proj2c] },
  { id: "vethalia", images: [vethalia1, null] },
  {
    id: "greenframe",
    images: [
      greenframe2,
      greenframe1,
      "http://440styling.com/wp-content/uploads/2023/09/cp3.png",
      "http://440styling.com/wp-content/uploads/2023/09/cp4.png",
      "http://440styling.com/wp-content/uploads/2023/09/cp5.png",
      "https://www.moedevelops.com/static/media/deercoded.e71d49fd71af940e01be.png",
    ],
  },
  { id: "icons", images: iconImages },
  { id: "", images: [] },
  { id: "", images: [] },
];

function findImageSet(ref, imagesSorted) {
  let match;
  const found = imagesSorted.some((img) => img.id === ref);

  if (found) {
    match = imagesSorted.find((img) => img.id === ref);

    return match.images;
  } else {
    return imagesSorted.images[0];
  }
}

// function findClosestImageSource(source) {
//   const sourceKeys = Object.keys(images);
//   let bestMatch = { target: null, distance: Number.MAX_SAFE_INTEGER };
//   for (const key of sourceKeys) {
//     const distance = natural.JaroWinklerDistance(source, key);
//     if (distance < bestMatch.distance) {
//       bestMatch.target = key;
//       bestMatch.distance = distance;
//     }
//   }
//   if (bestMatch.distance < 0.5) {
//     // If a close match is found, use the matched key as the source
//     return images[bestMatch.target];
//   } else {
//     // If no close match is found, you can handle the error here
//     console.error(`No matching image source found for "${source}"`);
//     return null; // or return a default image source
//   }
// }

export {
  images as portfolioImages,
  findImageSet as findImageSet,
  imagesSorted as imagesSorted,
};
