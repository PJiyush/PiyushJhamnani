export default function projectDetails(id: string) {
  switch (id) {
    case "1":
      return [
        "=== Rate Limited Caching System ===",
        "",
        "An Implementation of Rate Limited Caching system, created on front of the URL shortener app.",
        "",
        "• Technologies: FastAPI, Redis, PostgreSQL, Docker, Python",
        "• GitHub: github.com/PJiyush/Design-RateLimited-Cached-system",
        // "• Live Demo: https://piyush-jhamnani.vercel.app/",
      ];

    case "2":
      return [
        "=== Strapi-React App ===",
        "",
        "A fullstack application created with headerless CMS",
        "",
        "• Technologies: trapi, ReactJS, TypeScript",
        "• GitHub: github.com/PJiyush/strapi-project",
        // "• Live Demo: https://quizzing-eta.vercel.app/",
      ];

    case "3":
      return [
        "=== coverage-planning ===",
        "",
        "A FastAPI + Vanilla JS project that visualizes boustrophedon coverage with obstacle avoidance.",
        "",
        "• Technologies: FastAPI, JavaScript, Python",
        "",
        "• GitHub: github.com/PJiyush/coverage-planning",
        "• Live Demo: https://type-quick.vercel.app/",
      ];

    case "4":
      return [
        "=== HashConsistent ===",
        "",
        "This project implements a consistent hashing algorithm to distribute data across multiple nodes.",
        "",
        "• Technologies: TypeScript",
        "• Features:",
        "  - Consistent hashing algorithm implementation",
        "  - Data distribution across nodes",
        "",
        "• GitHub: https://github.com/PJiyush/HashConsistent",
      ];

    default:
      return ["Project number not found. Please choose a number between 1–4."];
  }
}
