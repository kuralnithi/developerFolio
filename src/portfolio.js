/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Kuralnithi",
  title: "Hi all, I'm Kuralnithi",
  subTitle: emoji(
    "A passionate Full Stack Web Developer 🚀 with 1.5 years of experience building robust web applications using MERN Stack, Django, PostgreSQL, and modern UI frameworks like MUI, Bootstrap, and Tailwind."
  ),
  resumeLink: "https://drive.google.com/file/d/1I1b3ZkW-CJ-JQfZIuwn18QkT1hASQSXv/view?usp=sharing", // Add your resume link here
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/kuralnithi",
  linkedin: "https://www.linkedin.com/in/kural-nithi-0b967122b",
  gmail: "kuralnithi1999@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE FULL STACK DEVELOPER WHO BUILDS MODERN WEB APPS",
  skills: [
    emoji("⚡ Develop responsive web UIs with React.js, Bootstrap, and Tailwind"),
    emoji("⚡ Build robust backend services using Node.js, Express.js and Django"),
    emoji("⚡ Integrate secure third-party APIs and payment gateways like BillDesk and PayU")
  ],
  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "postgresql", fontAwesomeClassname: "fas fa-database" },
    { skillName: "mongodb", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "django", fontAwesomeClassname: "fab fa-python" },
    { skillName: "git", fontAwesomeClassname: "fab fa-git" },
    { skillName: "bootstrap", fontAwesomeClassname: "fab fa-bootstrap" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "GUVI, IITM Research Park",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Full Stack Web Development Course",
      duration: "2023",
      desc: "Completed MERN stack & Django-based full stack development training."
    },
    {
      schoolName: "Shanmuganathan Engineering College",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "B.E. Civil Engineering",
      duration: "2016 – 2020",
      desc: "Graduated in Civil Engineering with strong fundamentals in problem solving and logical thinking."
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "85%" },
    { Stack: "Backend", progressPercentage: "80%" },
    { Stack: "Database", progressPercentage: "75%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Developer",
      company: "Praathee Technologies Pvt. Ltd.",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "2024 – Present",
      desc: "Worked on multiple high-impact projects including MHCET and VISE portals with React, Node.js, PostgreSQL, and Keycloak.",
      descBullets: [
        "Designed and developed dynamic user interfaces using React and MUI",
        "Created secure and scalable RESTful APIs using Node.js and Express.js",
        "Integrated authentication and authorization using Keycloak",
        "Worked with complex PostgreSQL queries and functions for data handling",
        "Implemented Excel export and reporting features with custom filters"
      ]
      
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};
const bigProjects = {
  title: "Major Projects",
  subtitle: "KEY PROJECTS CONTRIBUTED TO AT PRAATHEE TECHNOLOGIES",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "MHCET Admission Portal",
      projectDesc: "End-to-end admission platform for Maharashtra CET exams including centralized CAP module, payment, and seat allocation.",
      footerLink: []
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "VISE – VIBGYOR Scholarship Exam",
      projectDesc: "Web application for student scholarship registration and online fee payment via BillDesk.",
      footerLink: []
    },
    {
      image: require("./assets/images/nandanam.png"),
      projectName: "NANDANAM Milk Procurement System",
      projectDesc: "Frontend React dashboard to manage milk collection, vendor payments, and delivery schedules.",
      footerLink: []
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements and Certifications 🏆"),
  subtitle: "Certifications and notable recognitions in full stack development.",
  achievementsCards: [],
  display: false
};

const blogSection = {
  title: "Blogs",
  subtitle: "Coming soon: Blogs on Full Stack Development and Django APIs.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji("Will be updated with tech talks and webinars."),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Coming soon...",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or want to connect? I’m open to work!",
  number: "+91 6380701533",
  email_address: "kuralnithi1999@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
