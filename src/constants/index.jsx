import {
  
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaPhp,
  FaLaravel,
  FaServer,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaDatabase, FaNodeJs } from "react-icons/fa";

import image1 from "../assets/project1.jpeg";
import image2 from "../assets/project2.jpeg";
import image3 from "../assets/project3.jpeg";
import image4 from "../assets/project4.jpeg";
import image5 from "../assets/project5.jpeg";
import image6 from "../assets/project6.jpeg";
import image7 from "../assets/project7.jpeg";
import image8 from "../assets/project8.jpeg";

// import user1 from "../assets/profile-pictures/user1.jpg";
// import user2 from "../assets/profile-pictures/user2.jpg";
// import user3 from "../assets/profile-pictures/user3.jpg";
// import user4 from "../assets/profile-pictures/user4.jpg";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contactform" },
];

export const PROFILE = {
  name: 'Pasindu Dilmin', 
  info: "Full-stack developer",
};

export const ABOUT = {
  text1:
    "I create dynamic, responsive websites that blend creativity with efficiency",
  text2:
"Hello! I'm Pasindu Dilmin, a passionate software engineer currently pursuing a Bachelor's in Information Technology at the University of Colombo. With a keen interest in web development, I've honed my skills in the MERN stack and PHP Laravel. My journey has been marked by a dedication to creating efficient and scalable applications, from intuitive user interfaces to robust backend systems. I'm continuously exploring new technologies, including Firebase and advanced authentication methods with Node.js. As a problem-solver and lifelong learner, I'm eager to contribute to innovative projects and collaborate with like-minded professionals. Feel free to explore my portfolio to see some of the exciting projects I've worked on and get in touch if you'd like to discuss potential opportunities!"
};

export const PROJECTS = [
  {
    title: "E-commerce Platform",
    subtitle:"A full-stack e-commerce platform built with PHP and MYSQL",
    href:"https://github.com/dilminx/E-commerce-web-app",
    image: image1,
  },
  {
    title: "School Management System",
    subtitle:"A school management application developed using Laravel and mysql",
    image: image2,
    href:"https://github.com/dilminx/School-Management-System-Laravel-",
  },
  {
    title: "Currency Checker",
    subtitle: "A Cuurency Checker built with Ract and node express.",
    image: image3,
    href:"https://github.com/dilminx/Currency-checker",
  },
  {
    title: "Personal Portfolio",
    subtitle:
      "A personal portfolio website designed with HTML, CSS, and JavaScript.",
    image: image4,
    href:"",
  },
  {
    title: "Weather Dashboard",
    subtitle:
      "A weather dashboard application built with Vue.js and Express.js.",
    image: image5,
    href:"https://github.com/dilminx/whether-report",
  },
 
  {
    title: "Contact Manager",
    subtitle:"A Contact Manager application built with React using Props and hooks",
    image: image6,
    href:"https://github.com/dilminx/TP-Contact_manager",
  },
 
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    experience: "1+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-6xl" />,
    name: "Next.js",
    experience: "6+ months",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-6xl" />,
    name: "MongoDB",
    experience: "6+ months",
  },
 
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-6xl" />,
    name: "Node.js",
    experience: "1+ years",
  },
  {
    icon: <FaPhp className="text-4xl text-green-600 lg:text-6xl" />,
    name: "PHP",
    experience: "1+ years",
  },
  {
    icon: <FaLaravel className="text-4xl text-green-600 lg:text-6xl" />,
    name: "LARAVEL",
    experience: "6+ months",
  },
  {
    icon: <FaServer className="text-4xl text-green-600 lg:text-6xl" />,
    name: "Express.js",
    experience: "6+ months",
  },
  {
    icon: <FaDatabase className="text-4xl text-green-600 lg:text-6xl" />,
    name: "Mysql",
    experience: "1+ years",
  },

];



export const TESTIMONIALS = [
  {
    name: "Emily Johnson",
    title: "CEO, Tech Innovators",
    quote:
      "Working with Robert has been an incredible experience. His design sensibilities and technical expertise are top-notch, making him a valuable asset to any project.",
    // image: user1,
  },
  {
    name: "Michael Lee",
    title: "CTO, Creative Minds",
    quote:
      "Robert consistently delivers high-quality work, combining creativity and technical prowess. His ability to solve complex problems with elegant solutions is truly impressive.",
    // image: user2,
  },
  {
    name: "Sophia Martinez",
    title: "Lead Developer, Digital Solutions",
    quote:
      "Robert's dedication to his craft is evident in every project he undertakes. His innovative approach and attention to detail set him apart as a leading designer and developer.",
    // image: user3,
  },
  {
    name: "Daniel Thompson",
    title: "Project Manager, InnovateX",
    quote:
      "Robert's ability to understand client needs and translate them into beautiful, functional designs is remarkable. He is a true professional who always exceeds expectations.",
    // image: user4,
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.linkedin.com/in/pasindu-dilmin-6b728927b/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
     href: "https://github.com/dilminx",
     icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
   },
  {
    href: "https://web.facebook.com/pasindu.minipura/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
 
  {
    href: "https://www.instagram.com/pasindu_dilzz/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  }
];
