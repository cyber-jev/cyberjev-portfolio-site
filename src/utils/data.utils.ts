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
    title: "Gridtactica",
    image: imagePortfolioGridtactica,
    techUsed: ["JavaScript", "React", "TailwindCss"],
    projectLink: "https://gridtactica.vercel.app",
    codeLink: "https://github.com/cyber-jev/gridTactica",
  },

  {
    id: 2,
    title: "Pathfinding Alorithm Visualizer",
    image: imagePortfolioPathfinder,
    techUsed: ["JavaScript", "React", "Css3"],
    projectLink: "https://pathfinding-algo-visualizer.vercel.app/",
    codeLink: "https://github.com/cyber-jev/pathfinding-visualizer",
  },

  {
    id: 3,
    title: "Recipe Space",
    image: imagePortfolioRecipeSpace,
    techUsed: ["Typescript", "JavaScript", "React", "Api", "TailwindCss"],
    projectLink: "https://recipespace.vercel.app/",
    codeLink: "https://github.com/cyber-jev/recipe-space",
  },

  {
    id: 4,
    title: "CT Skill Test V3",
    image: imagePortfolioCtTest,
    techUsed: ["Html5", "Css3", "JavaScript"],
    projectLink: "https://cyberjev-ct-skill-test-v3.vercel.app/",
    codeLink: "https://github.com/cyber-jev/CT_SkillTest_v3",
  },

  {
    id: 5,
    title: "School Managment System Design",
    image: imagePortfolio1,
    techUsed: ["JavaScript", "OOP"],
    projectLink:
      "https://replit.com/@cyber-jev/school-management-system0x1stableversion",
    codeLink: "https://github.com/cyber-jev/school-management-system",
  },
];
