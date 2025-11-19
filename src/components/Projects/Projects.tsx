import { Database } from "lucide-react";

const projectsData = [
  {
    title: "Development of an E-commerce Platform",
    description:
      "Designed and implemented the backend architecture using Node.js and Express, utilizing Prisma ORM for database management with PostgreSQL. Implemented a secure authentication system using JWT and user management with customer and administrator roles. Optimized database performance through efficient queries in Prisma, significantly reducing loading times. Adapted the payment system to support offline methods and payment gateways compatible with the Cuban market.",
    tech: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "PrismaORM",
      "JWT",
      "WebSockets",
      "Git",
    ],
  },
  {
    title: "Online Course Platform",
    description:
      "I developed the authentication and authorization system using NestJS and JWT, ensuring secure and appropriate access for students and teachers. Designed and managed the role and permission structure in MongoDB, facilitating efficient user administration. Implemented advanced security measures, including input validation and Role-Based Access Control (RBAC).",
    tech: ["Node.js", "NestJS", "MongoDB", "JWT", "Mongoose", "Git"],
  },
  {
    title: "Backend Development for a Social Network",
    description:
      "I built the backend with Node.js, Express, and Prisma, managing users, posts, and comments in PostgreSQL. I integrated an automatic image classification system using FastAPI (Python) and Machine Learning models with TensorFlow. I implemented real-time notifications through WebSockets, enhancing user interaction and experience.",
    tech: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "PrismaORM",
      "JWT",
      "WebSockets",
      "FastAPI",
      "TensorFlow",
      "Python",
      "Git",
    ],
  },
  {
    title: "Customer Management Module with FastAPI",
    description:
      "I developed a robust and scalable customer management system using Python and FastAPI, implementing a clean architecture to ensure maintainable, high-quality code. This module is part of a broader business management platform.",
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "JWT",
      "Pytest",
      "OpenAPI (Swagger)",
      "Git",
    ],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="mb-32">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 ">
        <Database className="w-8 h-8" />
        <span>$ ls projects/</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="border border-green-400/30 p-6 rounded bg-green-400/5 hover:bg-green-400/10 transition-all hover:border-green-400/50"
          >
            <h3 className="text-xl font-bold mb-3 text-green-400 ">
              {project.title}
            </h3>
            <p className="text-green-400/70 mb-4 ">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 border border-green-400/30 rounded bg-green-400/5 text-green-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
