export default function projectDetails(id: string) {
  switch (id) {
    case "1":
      return [
        "=== Portfolio Website ===",
        "",
        "This website showcases my skills and projects using modern web technologies.",
        "",
        "• Technologies: Next.js, TypeScript, Tailwind CSS",
        "• Features:",
        "  - Interactive terminal interface",
        "  - Responsive design for all devices",
        "  - Dark/light mode toggle",
        "  - Animation and transition effects",
        "",
        "• GitHub: github.com/piyushjhamnani/portfolio",
        "• Live Demo: https://piyush-jhamnani.vercel.app/",
      ];

    case "2":
      return [
        "=== Quizzing Platform ===",
        "",
        "Creating a Quizzing platform for making and taking quizzes.",
        "",
        "• Technologies: Vue, Firebase, Vercel",
        "• Features:",
        "  - Interactive quiz creation interface",
        "  - User authentication",
        "  - Dark/light mode toggle",
        "",
        "• GitHub: https://github.com/PJiyush/Quizzing",
        "• Live Demo: https://quizzing-eta.vercel.app/",
      ];

    case "3":
      return [
        "=== TypeQuick ===",
        "",
        "Created a typing speed test application to help users improve their typing skills.",
        "",
        "• Technologies: React, TypeScript, TailwindCSS",
        "• Features:",
        "  - Randomized typing tests",
        "  - Real-time tracking of typing speed",
        "  - Past history of typing tests",
        "  - Dark/light mode toggle",
        "",
        "• GitHub: https://github.com/PJiyush/TypeQuick",
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
