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

import image_lanka from "../assets/lanka_essentials.png";
import image1 from "../assets/cargo png.jpg";
import image2 from "../assets/falcon_logo.png";
import image3 from "../assets/hospital.webp";
import image4 from "../assets/project4.jpeg";
import image5 from "../assets/project5.jpeg";
import image6 from "../assets/project6.jpeg";
import image7 from "../assets/profpic.jpg";
import image8 from "../assets/project1.jpeg";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contactform" },
  { label: "Download Resume", href: "https://drive.google.com/file/d/1fwYecASVI84IXzdGehZyGGg9LXZgGKJ8/view?usp=sharing" },
];

export const PROFILE = {
  name: "Pasindu Dilmin",
  info: "Full-stack developer",
};

export const ABOUT = {
  text1:
    "I build dynamic, responsive, and scalable web applications that combine creativity with performance.",
  text2:
    "Hello! I'm Pasindu Dilmin, an Associate Software Engineer at Metrocoding. I specialize in crafting high-impact digital experiences using Laravel and the MERN stack. Recently, I developed the 'Lanka Essentials' E-commerce platform, focusing on seamless user journeys and robust backend architecture. My expertise spans across Livewire, React, and modern CSS frameworks, with a passion for clean code and AI-integrated development. I thrive on solving complex problems and delivering premium software solutions that drive real-world value.",
};

export const PROJECTS = [
  {
    category: "Self Projects",
    projects: [
      {
        title: "Glenexa Business Platform",
        subtitle:
          "Built and deployed a professional business platform for Glenexa Ltd using Next.js and Resend API, featuring an automated inquiry system and optimized infrastructure on Hostinger.",
        href: "https://glenexa.co.uk/",
        image: image8,
      },
      {
        title: "Lanka Essentials E-commerce Platform",
        subtitle:
          "A comprehensive essentials delivery platform built with Laravel, Livewire, and MySQL. Features include optimized search, secure checkout, and a sleek modern UI.",
        href: "http://lankanessentials.run.place/",
        image: image_lanka,
      },
      {
        title: "Hospital & Lab Management System",
        subtitle:
          "A university project built with Laravel, Bootstrap, and MySQL to manage appointments, lab reports, and role-based access.",
        href: "https://hospitalandlabsl.run.place./",
        image: image3,
      },
      {
        title: "Personal Portfolio",
        subtitle:
          "A personal portfolio website designed with React and Tailwind CSS to showcase projects and experience.",
        href: "https://portfolio-psi-two-16.vercel.app/",
        image: image7,
      },
    ],
  },
  {
    category: "Associate Software Career Projects",
    projects: [
      {
        title: "Overo Cargo",
        subtitle:
          "A freight and logistics management system built with Laravel and MySQL. Features shipment tracking, invoice management, and payment handling.",
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
          "An enterprise resource planning system developed for HighTech Lanka using Laravel, Livewire, AJAX, and MySQL.",
        href: "https://www.linkedin.com/in/pasindu-dilmin-6b728927b/details/projects/",
        image: image4,
      },
    ],
  },
  {
    category: "Internship Career Projects",
    projects: [
      {
        title: "Procurement ERP – Chandisa Company",
        subtitle:
          "Procurement management modules built during internship using Laravel, Livewire, and MySQL. Includes material requests and supplier integration.",
        href: "https://www.linkedin.com/in/pasindu-dilmin-6b728927b/details/projects/",
        image: image5,
      },
      {
        title: "ERP System – Master Graphics Printers",
        subtitle:
          "ERP system developed during internship featuring MIS reporting, cheque management, and payroll automation.",
        href: "https://www.linkedin.com/in/pasindu-dilmin-6b728927b/details/projects/",
        image: image6,
      },
    ],
  },
];

export const SKILLS = [
  {
    icon: <FaPhp className="text-4xl text-green-600 lg:text-6xl" />,
    name: "PHP",
    experience: "2+ years",
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
    experience: "2+ years",
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
    href: "https://web.facebook.com/pasi.dilmin",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },

  {
    href: "https://www.instagram.com/pasindu_dilzz/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
];
