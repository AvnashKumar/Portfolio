// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile1.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import cpp from './assets/techstack/cpp.png';
import sql from "./assets/techstack/sql.png"
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import node from "./assets/techstack/node.png"
// Porject Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project6.png";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project4.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Avnash Kumar",
  tagline: "Final Year B.Tech Student at NITJ",
  img: profile,
  cvlink:"https://drive.google.com/file/d/1sR-WnOdfVmcpCoZq8QKKnmmTXP95v1jx/view?usp=drivesdk",
  about: `I am a final-year Electrical Engineering student at NIT Jalandhar with experience in full-stack web development, using technologies like ReactJS, Node.js, and Tailwind CSS. I’ve contributed to projects like CHEMCON2024 and PixelPulse, focusing on responsive design and user experience. I am passionate about coding, problem-solving, and mentoring junior students, and I’m eager to connect with professionals in tech and web development for new opportunities and collaborations.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/AvnashKumar",
  github: "https://www.github.com/AvnashKumar",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "XCEED NITJ",
    Company: `Full Stack Web Developer`,
    Location: "Jalandhar",
    Type: "Full Time",
    Duration: "Sep 2023 - Present",
  },
  {
    Position: "Bureau of Indian Standards (BIS)",
    Company: `Internship`,
    Location: "Chandigarh",
    Type: "Internship",
    Duration: "June 2021 - Dec 2021",
  }
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Dr. BR Ambedkar National Institute of Technology (NIT) Jalandhar",
    Company: "Bachelor of Technology (Electrical Enineering)",
    Location: "Jalandhar",
    Type: "CGPA 8.65",
    Duration: "Nov 2021 - June2025",
  },
  {
    Position: "Senior Secondary Residential School for Meritorious Students, Jalandhar",
    Company: `Secondary Education (12th)`,
    Location: "Jalandhar",
    Type: "98.6%",
    Duration: "2020-2021",
  },
  {
    Position: "Government High School Giganwal (Jalandhar)",
    Company: `Matriculation Education (10th)`,
    Location: "Jalandhar",
    Type: "97.23%",
    Duration: "2018-2019",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  cpp:cpp,
  sql:sql,
  node:node,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "CHEMCON2024 Website",
    image: projectImage1,
    description: `Crafted CHEMCON2024 website featuring over 10 frontend webpages using ReactJS and Tailwind CSS, now live. Developed admin panel for data entry using MERN, ensuring smooth content management by conference Oraganizers.`,
    techstack: "ReactJS, Tailwind CSS, NodeJS, ExpressJS, Chakra UI",
    previewLink: "https://chemcon2024.com/",
    githubLink: "https://github.com",
  },
  {
    title: "Pixel Perfect",
    image: projectImage2,
    description: `Crafted visually captivating conference website with seamless navigation, dynamic content presentation using ReactJS . Integrated external APIs for real-time data, incorporated immersive CSS animations, and ensured responsive design.`,
    techstack: " HTML, CSS, JavaScript, React.js",
    previewLink: "https://conferencesite.onrender.com/",
    githubLink: "https://github.com",
  },
  {
    title: "Parkinson’s Disease Detection System",
    image: projectImage3,
    description: `Designed an automated system for detecting Parkinson’s disease using hand-drawn spirals and waves. Implemented HOG for feature extraction and trained a Random Forest classifier, achieving 83.33% accuracy.`,
    techstack: ": OpenCV, NumPy, Scikit-learn, Python",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Human Emotion Detection System",
    image: projectImage4,
    description: `Developed a CNN-based system for human emotion detection, including data preprocessing and model training. Utilized soft computing techniques to assess model performance using a confusion matrix for accuracy measurement.`,
    techstack: "TensorFlow , Keras, Python",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
//   {
//     title: "Project title 5",
//     image: projectImage5,
//     description: `This is sample project description random things are here in description This is sample
// project lorem ipsum generator for dummy content`,
//     techstack: "HTML/CSS, JavaScript",
//     previewLink: "https://google.com",
//     githubLink: "https://github.com",
//   },
//   {
//     title: "Project title 6",
//     image: projectImage6,
//     description: `This is sample project description random things are here in description This is sample
// project lorem ipsum generator for dummy content`,
//     techstack: "HTML/CSS, JavaScript",
//     previewLink: "https://google.com",
//     githubLink: "https://github.com",
//   },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "avnash1461@gmail.com",
  phone: "+91 8699666285",
};
