import {
  python,
  backend,
  web,
  javascript,
  html,
  api,
  django,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  starbucks,
  weshare,
  jobit,
  tripguide,
  threejs,
  rexremovals,
  brainwizzz,
  eatsmart,
  vellmag,
  code,
  rex
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Python developer",
    icon: python,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Javascript Frontend Developer",
    icon: javascript,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "API",
    icon: api,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full Stack Developer Volunteer",
    company_name: "Vell Magazine",
    icon: vellmag,
    iconBg: "#383E56",
    date: "Apr 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Django for backend and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer Student",
    company_name: "Code Institute",
    icon: code,
    iconBg: "#383E56",
    date: "Feb 2023 - April 2023",
    points: [
      "As a Full-Stack Developer graduate from Code Institute, I have a comprehensive skill set in front-end development with HTML, CSS, JavaScript, Python, and React,",
      "as well as back-end development using Django, Flask, Django-REST, API, PostgreSql.. During my time at Code Institute, I worked on several projects.",
      ".With experience in testing using React and Jest, I am confident in my ability to contribute to any team.",
    ],
  },
  {
    title: "E-Commerce co-founder",
    company_name: "Rex Gadgets",
    icon: rex,
    iconBg: "#383E56",
    date: "Feb 2023 - April 2023",
    points: [
      "Establishing from scratch an E-Commerce site with a partner , reaching 700+ orders per month, and generating traffic for over 1000 of clients.Managing 10000 pieces stock of Mobile accessories ,Researching mobile accessories products that sell best within the market and researched multiple Vendor Prices",
    ],
  },
];

const testimonials = [
  
];

const projects = [
  {
    name: "WeShare",
    description:"Developed a cutting-edge social media app using ReactJS, CSS, and React-Bootstrap for engaging posts and meaningful connections. Expertise in validation, API requests, and seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: weshare,
    source_code_link: "https://github.com/mihayounas/weshare-milestone5-code-institute",
    demo: "https://weshare-media.herokuapp.com/"
  },
  {
    name: "Brain Wizzz",
    description:"Created Brain Wizz, an immersive memory game leveraging advanced JavaScript logic and captivating visual design. Developed an interactive user interface that seamlessly handles user events and provides an engaging gaming experience.",
    tags: [
      {
        name: "vanilla-javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: brainwizzz,
    source_code_link: "https://github.com/mihayounas/javascript-project2-game",
    demo:"https://mihayounas.github.io/javascript-project2-game/",
  },
  {
    name: "EatSmart",
    description:"Work in progress - A app to count calories and eat healthy.Enhance the interface with intuitive user interactions and responsive design, optimizing the overall user experience for administrators managing articles on the platform.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: eatsmart,
    source_code_link: "https://github.com/mihayounas/calories-counter-django-app",
  },
  {
    name: "SecondScoop",
    description:"Developed SecondScoop, an imaginative dessert shop website, with event organization, reservation booking, and interactive blogging capabilities. Leveraged Python-Django, JavaScript, HTML, and CSS for a visually appealing platform.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/mihayounas/second-scoop-milestone-4",
    demo:"https://second-scoop.herokuapp.com/",
  },
  {
    name: "3D T-shirt design",
    description:"Vite + React and ThreeJs were used to build a 3d Model where you can customize your own shirt, upload pictures and change color .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "taildwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/mihayounas/threejs-3d-create-your-shirt",
    demo:"https://adorable-custard-af41e2.netlify.app/",
  },
  {
    name: "Rex Removals",
    description:"Developed Rex Removals, a captivating website connecting users with a premier furniture moving company. Leveraged HTML and CSS for an aesthetically pleasing design and showcased expertise in responsive web design for optimal user experience.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: rexremovals,
    source_code_link: "https://github.com/mihayounas/rexremovals",
    demo:"https://mihayounas.github.io/rexremovals/index.html",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
