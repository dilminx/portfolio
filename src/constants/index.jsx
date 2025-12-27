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

import image1 from "../assets/cargo png.jpg";
import image2 from "../assets/falcon_logo.png";
import image3 from "../assets/hospital.webp";
import image4 from "../assets/project4.jpeg";
import image5 from "../assets/project5.jpeg";
import image6 from "../assets/project6.jpeg";
import image7 from "../assets/poerfolio.jpg";
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
  { label: "Download Resume", href: "https://drive.google.com/file/d/1IQN5M6NoYsv-_9ipMhNMRJSSe0T2dJPg/view?usp=sharing" },
];

export const PROFILE = {
  name: "Pasindu Dilmin",
  info: "Full-stack developer",
};

export const ABOUT = {
  text1:
    "I build dynamic, responsive, and scalable web applications that combine creativity with performance.",
  text2:
    "Hello! I'm Pasindu Dilmin, an Associate Software Engineer at Metrocoding, contributing to the LearningERP system developed for HighTech Lanka. I specialize in Laravel-based full-stack development, using Livewire, AJAX, jQuery, Tailwind CSS, and MySQL to craft efficient and user-friendly solutions. I’ve also explored the MERN stack (MongoDB, Express.js, React.js, Node.js) and continuously expand my skills with modern tools like Firebase and AI-assisted development using ChatGPT, Cursor, and GitHub Copilot. Passionate about clean code, innovation, and continuous learning, I aim to create impactful software that solves real-world problems and delivers great user experiences. Feel free to explore my portfolio to see my projects and connect if you'd like to collaborate or discuss new opportunities!",
};


export const PROJECTS = [
 
{
  title: "Overo Cargo",
  subtitle:
    "A freight and logistics management system built with Laravel and MySQL. Features shipment tracking, invoice management, and payment handling with a modern responsive UI.",
  href: "https://www.linkedin.com/in/pasindu-dilmin-6b728927b/details/projects/",
  image: image1,
},
{
  title: "Falcon Ops Learning Hub",
  subtitle:
    "A training and learning management platform created with Laravel, Livewire, and MySQL. Includes course modules, reporting tools, and admin dashboards.",
  href: "https://www.linkedin.com/in/pasindu-dilmin-6b728927b/details/projects/",
  image: image2,
  },
 {
  title: "LearningERP System Hitech Lanka",
  subtitle:
    "An enterprise resource planning system developed for HighTech Lanka using Laravel, Livewire, AJAX, and MySQL. Includes modules for user, inventory, payment, and course–student management with role-based authentication.",
  href: "https://www.linkedin.com/in/pasindu-dilmin-6b728927b/details/projects/",
  image: image4,
},
{
  title: "Hospital & Lab Management System (HLMS – University Individual Project)",
  subtitle:
    "A university project built with Laravel, Bootstrap, and MySQL to manage appointments, lab reports, payments, and multi-role access (Admin, Doctor, Patient, Lab Assistant).",
  href: "",
  image: image3,
},
{
  title: "Procurement ERP – Chandisa Company (Internship)",
  subtitle:
    "Procurement management modules built during internship using Laravel, Livewire, and MySQL. Includes material requests, purchase orders, and supplier integration.",
  href: "https://www.linkedin.com/in/pasindu-dilmin-6b728927b/details/projects/",
  image: image5,
},
{
  title: "ERP System – Master Graphics Printers(Internship)",
  subtitle:
    "ERP system developed during internship featuring MIS reporting, cheque management, and payroll automation using Laravel and MySQL.",
  href: "https://www.linkedin.com/in/pasindu-dilmin-6b728927b/details/projects/",
  image: image6,
},
{
  title: "Personal Portfolio",
  subtitle:
    "A personal portfolio website designed with HTML, CSS, and JavaScript to showcase projects and experience.",
  href: "https://portfolio-psi-two-16.vercel.app/",
  image: image7,
},

];

export const SKILLS = [
  {
    icon: <FaPhp className="text-4xl text-green-600 lg:text-6xl" />,
    name: "PHP",
    experience: "1+ years",
  },
  {
    icon: <FaLaravel className="text-4xl text-green-600 lg:text-6xl" />,
    name: "LARAVEL",
    experience: "2+ years",
  },
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
