import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaNpm,
  FaWhatsapp,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";

import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress, SiMongodb, SiMongoose, SiNetlify, SiPostman, SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { VscVscode } from "react-icons/vsc";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "HITESH SINGH KANWAL",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate full stack developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences, I am proficient in both front end and back-end programming languages",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage2,
    Link: "https://portfolio-hitesh-singh-kanwal.netlify.app/",
  },
  {
    id: 2,
    name: "Password Manager",
    description:
"Developed a secure password manager application that allows users to store and manage their passwords in an encrypted database. Created a user-friendly interface using React.js,allowing users to easily add, edit, and delete password entries",
    image: projectImage1,
    Link: "https://password-manager-by-hitesh.netlify",
  },
  
  {
    id: 3,
    name: "Spotify clone",
    description:
"A Basic Spotify clone that replicates core functionality such as music streaming , which also allows user to change songs , control volume.",
    image: projectImage3,
    Link: "https://spotifybyhiteshsinghkanwal.freewebhostmost.com/",
  },
  
  {
    id: 4,
    name: "Firebase contact app",
    description:
"Created a contact manager application that allows users to store and manage their contact details in a database. Created a user-friendly interface using React.js, firebase ,allowing users to easily add, edit, and delete contacts",
    image: projectImage4,
    Link: "https://save-contacts-firebase-app.netlify.app",
  },
  {
    id: 5,
    name: "Dice Game",
    description:
"An interactive dice game where users can roll virtual dice and compete to reach a certain score.",
    image: projectImage5,
    Link: "https://dice-game-by-hitesh.netlify.app",
  },
];

export const BIO = [
"As a driven and detail-oriented software engineer, I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) to build full-stack web applications. I have a strong foundation in JavaScript and a keen interest in creating responsive, user-friendly interfaces backed by robust, scalable back-end solutions. My academic projects have honed my skills in database management, API development, and front-end design, and I am eager to apply these skills in a professional setting.",
"I am always excited to learn new technologies and best practices, and I am ready to contribute to innovative projects while growing my expertise in the ever-evolving field of software development. I'm seeking opportunities where I can collaborate with experienced developers, contribute to meaningful projects, and continue to develop my technical skills."
]
export const SKILLS = [
  {
    icon: <FaHtml5  className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "Html 5",
  },
  {
    icon: <FaCss3Alt  className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "CSS",
  },
  {
    icon: <IoLogoJavascript  className="text-4xl text-yellow-600 lg:text-5xl" />,
    name: "JavaScript",
  },
  {
    icon: <FaBootstrap  className="text-4xl text-purple-600 lg:text-5xl" />,
    name: "Bootstrap",
  },
  {
    icon: <RiTailwindCssFill  className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "Tailwind CSS",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
  },
  {
    icon: <FaNpm    className="text-4xl text-orange-300 lg:text-5xl" />,
    name: "npm",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
  },
  {
    icon: <SiPostman    className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "Postman",
  },
  {
    icon: <SiMongoose    className="text-4xl  text-red-800 lg:text-5xl" />,
    name: "Mongoose",
  },
  {
    icon: <SiRedux  className="text-4xl text-purple-600 lg:text-5xl" />,
    name: "Redux",
  },
  {
    icon: <SiExpress   className="text-4xl text-cyan-600 lg:text-5xl" />,
    name: "ExpressJS",
  },
 
  {
    icon: <FaGitAlt  className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "Git",
  },
  {
    icon: <FaGithub    className="text-4xl lg:text-5xl" />,
    name: "Git Hub",
  },
  {
    icon: <SiNetlify    className="text-4xl text-cyan-700 lg:text-5xl" />,
    name: "Netlify",
  },

];

export const EDUCATION = [
  {
    degree: "Seconday School",
    institution: "Shri Daulat Ram Public Sr. Sec. School",
    duration: "2017 [CBSE] "
  },
    
  {
    degree: "Higher Seconday School",
    institution: "Shri Daulat Ram Public Sr. Sec. School",
    duration: "2019 [CBSE] ",
},
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "MAHARISHI DAYANAND UNIVERSITY",
    duration: "August 2019 - July 2023",
    description:
"Specialized in Human-Computer Interaction and Software Engineering.Participated in various projects involving frontend development, algorithms, and data structures."
  }
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://wa.me/918287032815",
    icon: <FaWhatsapp fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/hitesh2k_1/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/Hiteshs29989536",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/hitesh2k-1",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/hitesh-singh-813540253/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
