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
  { label: "Download Resume", href: "https://drive.google.com/file/d/1vRW3GSuSFSF0qPH21MzP3oWlGO4K5PPk/view?usp=drive_link" },
];

export const PROFILE = {
  name: "Pasindu Dilmin",
  info: "Full-stack developer",
};

export const ABOUT = {
  text1:
    "I create dynamic, responsive websites that blend creativity with efficiency",
  text2:
    "Hello! I'm Pasindu Dilmin, a passionate software engineer currently pursuing a Bachelor's in Information Technology at the University of Colombo. With a keen interest in web development, I've honed my skills in the MERN stack and PHP Laravel. My journey has been marked by a dedication to creating efficient and scalable applications, from intuitive user interfaces to robust backend systems. I'm continuously exploring new technologies, including Firebase and advanced authentication methods with Node.js. As a problem-solver and lifelong learner, I'm eager to contribute to innovative projects and collaborate with like-minded professionals. Feel free to explore my portfolio to see some of the exciting projects I've worked on and get in touch if you'd like to discuss potential opportunities!",
};

export const PROJECTS = [
  {
    title: "E-commerce Platform",
    subtitle: "A full-stack e-commerce platform built with PHP and MYSQL",
    href: "https://github.com/dilminx/E-commerce-web-app",
    image: image1,
  },
  {
    title: "School Management System",
    subtitle:
      "A school management application developed using Laravel and mysql",
    image: image2,
    href: "https://github.com/dilminx/School-Management-System-Laravel-",
  },
  {
    title: "Currency Checker",
    subtitle: "A Cuurency Checker built with Ract and node express.",
    image: image3,
    href: "https://github.com/dilminx/Currency-checker",
  },
  {
    title: "Personal Portfolio",
    subtitle:
      "A personal portfolio website designed with HTML, CSS, and JavaScript.",
    image: image4,
    href: "",
  },
  {
    title: "Restuarent Web App",
    subtitle:
      "A Restuarent Web App built with Next.js",
    image: image5,
    href: "https://github.com/dilminx/Restuarent-web-app",
  },

  {
    title: "Contact Manager",
    subtitle:
      "A Contact Manager application built with React using Props and hooks",
    image: image6,
    href: "https://github.com/dilminx/TP-Contact_manager",
  },
  {
    title: "Live Chat App",
    subtitle:
      "A live chat application built with React using socket.io and node.js",
    image: image7,
    href: "https://react-chat-app-frontend-eight.vercel.app/",
  },
  {
    title: "Next js ToDo",
    subtitle:
      "A Todo App built with Next using MonogoDb",
    image: image8,
    href: "https://next-js-todo-lime.vercel.app/",
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
  },
];
