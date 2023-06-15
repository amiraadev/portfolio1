// import images
//import Hero_person from "./assets/images/Hero/person.png";
import Hero_person from "./assets/images/Hero/bg_2.png";

// import figma from "./assets/images/Skills/figma.png";
// import sketch from "./assets/images/Skills/sketch.png";
// import ps from "./assets/images/Skills/ps.png";

import reactjs from "./assets/images/Skills/react.png";
// import express from "./assets/images/Skills/express.png";
// import next from "./assets/images/Skills/next.png";

import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import php from "./assets/images/Skills/php.png";


import postgres from "./assets/images/Skills/postgres.png";
import mongoDb from "./assets/images/Skills/mongoDb.png";
import mysql from "./assets/images/Skills/mysql.png";


import docker from "./assets/images/Skills/docker.png";
// import kubernetes from "./assets/images/Skills/kubernetes.png";
import jenkins from "./assets/images/Skills/jenkins.png";

// import azure from "./assets/images/Skills/azure.png";
import aws from "./assets/images/Skills/aws.png";


import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Full stack software engineer",
    firstName: "AMIRA",
    LastName: "ALLAGUI",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "4+",
        text: "Years of Experience in Web Development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "php",
        para: "Skilled in PHP for developing dynamic and feature-rich web applications.",
        logo: php,
       },
      // {
      //   name: "Figma",
      //   para: "Lorem ipsum text  dummy",
      //   logo: figma,
      // },
      {
        name: "Node js",
        para: "Building efficient and dynamic web applications",
        logo: nodejs,
      },
      {
        name: "Python",
        para: "Basic knowledge in Python for programming tasks and application development.",
        logo: python,
      },
      // {
      //   name: "Adobe Photoshop",
      //   para: "Lorem ipsum text  dummy",
      //   logo: ps,
      // },
      {
        name: "React js",
        para: "Creating interactive and responsive user interfaces",
        logo: reactjs,
      },
      {
        name: "postgres",
        para: "Skilled in PostgreSQL for effective data management.",
        logo: postgres,
      },
       {
        name: "mongoDb",
        para: "Utilizing its powerful document database for efficient data storage",
        logo: mongoDb,
      },
      {
        name: "mysql",
        para: "Effective data organization and retrieval.",
        logo: mysql,
      },
      {
        name: "docker",
        para: " Application deployment and management using containerization",
        logo: docker,
      },
       {
        name: "aws",
        para: "Scalable and reliable cloud infrastructure solutions",
        logo: aws,
      },
       {
        name: "jenkins",
        para: "Automated continuous integration and deployment.",
        logo: jenkins,
      },
      
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "allagui_amira@yahoo.com",
        icon: GrMail,
        link: "mailto:allagui_amira@yahoo.com",
      },
      {
        text: "+216 58226493",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "allaguiamiraa",
        icon: BsGithub,
        link: "https://github.com/allaguiamiraa",
      },
      {
        text: "allagui-amira",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/allagui-amira",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
