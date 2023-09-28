import port1 from "./img1.png";
import port2 from "./img2.png";
import port3 from "./img3.png";
import port4 from "./img4.jpg";
import port5 from "./img5.jpg";
import port6 from "./img6.jpg";
import port7 from "./img7.png";
import port8 from "./img8.png";
import port9 from "./img9.png";
// import * as natural from "natural";

const images = [port1, port2, port3, port4, port5, port6, port7, port8, port9];

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

export { images as portfolioImages };
