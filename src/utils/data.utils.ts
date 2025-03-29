import picGray from "../assets/profile_picture_gray-removebg-preview.png";
import profilePic from "../assets/Profile_picture_44_-removebg-preview.png";
import pictureCyberjev from "../assets/picture-cyberjev.png";
import iconJavascript from "../assets/icon-javascript.svg";
import iconTypescript from "../assets/icon-typescript.svg";
import iconReact from "../assets/icon-react.svg";
import iconTailwind from "../assets/icon-tailwind.svg";
import iconPython from "../assets/icon-python.svg";
import iconLinkGithub from "../assets/icon-github.svg";
import iconLinkPhone from "../assets/icon-phone.svg";
import iconLinkLinkedin from "../assets/icon-linkedin.svg";
import iconLinkTwitter from "../assets/icon-twitter.svg";
import imagePortfolio1 from "../assets/school-managment-system.png";
import imagePortfolioRecipeSpace from "../assets/imagePortfolioRecipeSpace.png";
import imagePortfolioGridtactica from "../assets/imageGritactica.png";
import imagePortfolioPathfinder from "../assets/imagePathfinderVisualizer.png";
import imagePortfolioObakpo from "../assets/imagePortfolioObakpo.png";
import imagePortfolioRisingcoin from "../assets/imagePortfolioRisingcoin.png";
import imagePortfolioCtTest from "../assets/img-CT_SkillTest_v3.jpg";
import patterCircle from "../assets/pattern-circle.svg";
import patterRings from "../assets/pattern-rings.svg";

/**
 *    --bg-body: hsl(0, 0%, 8%);
  --bg-body2: hsl(0, 0%, 14%);
  --accent: hsl(153, 71%, 59%);
  --text1: hsl(0, 0%, 100%);
  --text2: hsl(0, 0%, 85%);
  --invalid: hsl(7, 100%, 68%);
 */

export const images = {
  pictureCyberjev: pictureCyberjev,
  profilePictureGray: picGray,
  profilePicture: profilePic,
  patterCircle: patterCircle,
  patterRings: patterRings,
};

export const stackItems = [
  {
    id: 1,
    title: "JavaScript",
    icon: iconJavascript,
    rating: "2",
  },
  {
    id: 2,
    title: "TypeScript",
    icon: iconTypescript,
    rating: "2",
  },
  {
    id: 3,
    title: "React",
    icon: iconReact,
    rating: "2",
  },
  {
    id: 4,
    title: "Tailwind Css",
    icon: iconTailwind,
    rating: "2",
  },
  {
    id: 5,
    title: "Python",
    icon: iconPython,
    rating: "1",
  },
];

export const contactLinks = [
  {
    id: 1,
    title: "Github",
    icon: iconLinkGithub,
    url: "https://github.com/cyber-jev",
  },
  {
    id: 2,
    title: "Linkedin",
    icon: iconLinkLinkedin,
    url: "https://www.linkedin.com/in/johnny-ekparam/",
  },
  {
    id: 3,
    title: "Twitter",
    icon: iconLinkTwitter,
    url: "https://twitter.com/cyber_jev",
  },

  // {
  //   id: 4,
  //   title: "Phone",
  //   icon: iconLinkPhone,
  //   url: "tel:+2347034889296",
  // },
];

export const projects = [
  {
    id: 1,
    title: "Obakpo Offshore",
    image: imagePortfolioObakpo,
    techUsed: ["Php", "Wordpress", "Css"],
    projectLink: "https://www.obakpooffshoreinternational.com/",
    codeLink: "",
    description:
      "A stunning website built on WordPress for Obakpo Offshore Integrated Nigeria Limited, a leading ship manufacturer. The site showcases their impressive portfolio and provides clear information about their services.",
  },
  {
    id: 2,
    title: "Rising Coin",
    image: imagePortfolioRisingcoin,
    techUsed: ["JavaScript", "React", "TailwindCss"],
    projectLink: "https://risingcoin.io/",
    codeLink: "",
    description:
      "In this collaborative project, I played a key role in developing the user-friendly frontend for a cryptocurrency exchange platform built with React. I focused on crafting an intuitive interface that prioritizes ease of use.",
  },
  {
    id: 3,
    title: "Gridtactica",
    image: imagePortfolioGridtactica,
    techUsed: ["JavaScript", "React", "TailwindCss"],
    projectLink: "https://gridtactica.vercel.app",
    codeLink: "https://github.com/cyber-jev/gridTactica",
    description:
      "This project marked my foray into React development. Building upon the official React documentation tutorial, I expanded the functionality by implementing different board sizes. This hands-on experience allowed me to solidify my understanding of core React concepts, including state management, component structure, and user interaction.",
  },

  {
    id: 4,
    title: "Pathfinding Algorithm Visualizer",
    image: imagePortfolioPathfinder,
    techUsed: ["JavaScript", "React", "Css3"],
    projectLink: "https://pathfinding-algo-visualizer.vercel.app/",
    codeLink: "https://github.com/cyber-jev/pathfinding-visualizer",
    description:
      "A simple yet effective visualization of Dijkstra's algorithm, which identifies the shortest paths between nodes in a weighted graph. I developed this project using React and CSS to provide a clear and interactive demonstration of the algorithm's functionality.",
  },

  {
    id: 5,
    title: "Recipe Space",
    image: imagePortfolioRecipeSpace,
    techUsed: ["Typescript", "JavaScript", "React", "Api", "TailwindCss"],
    projectLink: "https://recipespace.vercel.app/",
    codeLink: "https://github.com/cyber-jev/recipe-space",
    description:
      "This React-based project, a recipe finder, served as a valuable learning ground for consuming external APIs using best practices. I implemented search functionality that leverages an API to retrieve recipes based on user input",
  },
  {
    id: 6,
    title: "School Managment System Design",
    image: imagePortfolio1,
    techUsed: ["JavaScript", "OOP"],
    projectLink:
      "https://replit.com/@cyber-jev/school-management-system0x1stableversion",
    codeLink: "https://github.com/cyber-jev/school-management-system",
    description:
      "This project served as a foundation for my Object-Oriented Programming (OOP) journey. By designing a simple school management system with Javascript, I gained hands-on experience with various OOP best practices, including the SOLID principles",
  },
  // {
  //   id: 7,
  //   title: "CT Skill Test V3",
  //   image: imagePortfolioCtTest,
  //   techUsed: ["Html5", "Css3", "JavaScript"],
  //   projectLink: "https://cyberjev-ct-skill-test-v3.vercel.app/",
  //   codeLink: "https://github.com/cyber-jev/CT_SkillTest_v3",
  //   description: "",
  // },
];
