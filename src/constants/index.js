import {
  mobile,
  backend,
  creator,
  web,
} from "../assets"; // Keeping these imports if needed, but we will strictly use new ones for content.

// Importing new assets directly
import mechanical from "../assets/mechanical.png";
import industrial from "../assets/industrial.png";
import automation from "../assets/automation.png";
import management from "../assets/management.png";

import solidworks from "../assets/tech/solidworks.png";
import autocad from "../assets/tech/autocad.png";
import matlab from "../assets/tech/matlab.png";
import ansys from "../assets/tech/ansys.png";
import plc from "../assets/tech/plc.png";

import ruhuna from "../assets/company/ruhuna.png";
import ansell from "../assets/company/ansell.png";
import hayleys from "../assets/company/hayleys.png";

import dipline from "../assets/dipline.png";
import weighing from "../assets/weighingbin.png";
import glove from "../assets/glovepacking.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mechanical Engineer",
    icon: mechanical,
  },
  {
    title: "Industrial Designer",
    icon: industrial,
  },
  {
    title: "Automation Engineer",
    icon: automation,
  },
  {
    title: "Project Management",
    icon: management,
  },
];

const technologies = [
  {
    name: "SolidWorks",
    icon: solidworks,
  },
  {
    name: "AutoCAD",
    icon: autocad,
  },
  {
    name: "MATLAB",
    icon: matlab,
  },
  {
    name: "Ansys",
    icon: ansys,
  },
  {
    name: "PLC Programming",
    icon: plc,
  },
];

const experiences = [
  {
    title: "Student Instructor",
    company_name: "Faculty of Engineering, University of Ruhuna",
    icon: ruhuna,
    iconBg: "#383E56",
    date: "Aug 2025 - Oct 2025", // Future dates in CV? I'll use them as is.
    points: [
      "Assisted undergraduate students in understanding engineering drawing fundamentals, CAD practices, and technical drafting techniques.",
      "Guided students through exercise and assignment sessions, supporting their drawing accuracy and overall CAD competency.",
    ],
  },
  {
    title: "Trainee Mechanical Engineer",
    company_name: "Global Engineering, Ansell Lanka (Pvt) Ltd",
    icon: ansell,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Mar 2025",
    points: [
      "Gained hands-on experience in automation and manufacturing processes, including CAD design, PLC programming, and robot programming.",
      "Designed an automated Liquid Texturing Tank using SolidWorks equations.",
      "Developed, fabricated, and installed a flow control system for liquid texturing tanks.",
      "Performed line balancing on the Smart Dip Production Line.",
      "Designed components and programmed PLCs for units in the new Printing Machine project.",
      "Designed and fabricated a new Glove Former for Ansell Vietnam.",
    ],
  },
  {
    title: "Trainee Mechanical Engineer",
    company_name: "Hayleys Fabric PLC",
    icon: hayleys,
    iconBg: "#383E56",
    date: "Oct 2023 - Jan 2024",
    points: [
      "Hands-on exposure to industrial maintenance, condition-based monitoring, boiler/utility systems, and engineering documentation.",
      "Designed a bucket elevator to increase biomass storage capacity and operational efficiency.",
      "Designed and fabricated an oil filter machine to clean and improve furnace oil quality.",
      "Designed an automated hopper weighing system to monitor biomass usage accurately.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Contact: +94 74 291 0842 | Email: gogullan.amirthakulasingam@ansell.com",
    name: "Mr. Gogullan Amirthakulasingam",
    designation: "Associate Manager",
    company: "Ansell Lanka",
    image: "https://randomuser.me/api/portraits/men/4.jpg", // Placeholder
  },
  {
    testimonial:
      "Contact: +94 77 756 2560 | Email: arjuna.dayaratne@hayleysfabric.com",
    name: "Mr. Arjuna Dayaratne",
    designation: "Deputy General Manager",
    company: "Hayleys Fabric PLC",
    image: "https://randomuser.me/api/portraits/men/5.jpg", // Placeholder
  },
];

const projects = [
  {
    name: "Dip Line Automation",
    description:
      "Developed an automated glove-dipping process with robotic and PLC integration to reduce headcount and enhance productivity. Applied line balancing, custom robot tooling, simulations and pneumatic systems.",
    tags: [
      {
        name: "automation",
        color: "blue-text-gradient",
      },
      {
        name: "robotics",
        color: "green-text-gradient",
      },
      {
        name: "solidworks",
        color: "pink-text-gradient",
      },
    ],
    image: dipline,
    source_code_link: "https://github.com/", // Placeholder
  },
  {
    name: "Smart Weighing Bin",
    description:
      "Designed an automated weighing bin with load-cell integration, microcontroller control and a feedback-based dispensing mechanism. Developed CAD models and simulations to improve accuracy.",
    tags: [
      {
        name: "CAD",
        color: "blue-text-gradient",
      },
      {
        name: "microcontroller",
        color: "green-text-gradient",
      },
      {
        name: "design",
        color: "pink-text-gradient",
      },
    ],
    image: weighing,
    source_code_link: "https://github.com/",
  },
  {
    name: "Glove Packing Automation",
    description:
      "Collaborated with Ansell to develop a glove-packing automation demonstration. Utilized PLC programming, robot and SCARA arm programming, 3D/2D vision systems and AMR technology.",
    tags: [
      {
        name: "PLC",
        color: "blue-text-gradient",
      },
      {
        name: "vision-systems",
        color: "green-text-gradient",
      },
      {
        name: "SCARA",
        color: "pink-text-gradient",
      },
    ],
    image: glove,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
