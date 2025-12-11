import Image1 from './image1.png'
import Image3 from './image3.png'
import image2 from './image2.png'

const sampleProjects = [
    {
        id: 1,
        title: "Rate Limited Caching System",
        description: "An Implementation of Rate Limited Caching system, created on front of the URL shortener app.",
        // link: "https://example.com/portfolio",
        github:"https://github.com/PJiyush/Design-RateLimited-Cached-system",
        tech:["FastAPI","Redis","PostgreSQL", 'Docker', 'Python'],
        img: image2
    },
    {
        id: 2,
        title: "Strapi-React App",
        description: "A fullstack application created with headerless CMS",
        // link: "https://example.com/portfolio",
        github:"https://github.com/PJiyush/strapi-project",
        tech:["Strapi","ReactJS","TypeScript"],
        img: Image1
    },
    {
        id: 3,
        title: "coverage-planning",
        description: "A FastAPI + Vanilla JS project that visualizes boustrophedon coverage with obstacle avoidance.",
        // link: "ttps://example.com/portfolioh",
        github:"https://github.com/PJiyush/coverage-planning",
        tech:["FastAPI","JavaScript",'Python'],
        img: Image3
    }
];

export {sampleProjects}