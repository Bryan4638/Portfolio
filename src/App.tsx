import {
  Terminal,
  Code,
  Database,
  Server,
  Mail,
  Github,
  GraduationCap,
  Send,
  Phone,
} from "lucide-react";
import { useState, useEffect } from "react";

function App() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "> backend_developer.init()";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const skills = {
    languages: ["JavaScript", "TypeScript", "Python", "SQL"],
    frameworks: ["Node.js", "Express", "NestJS", "FastAPI"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    orms: ["PrismaORM", "TypeORM", "Mongoose", "SQLAlchemy"],
    other: ["REST APIs", "JWT", "OAuth2", "Microservices", "WebSockets"],
    tools: ["Docker", "Git", "AWS", "Linux"],
  };

  const education = [
    {
      type: "degree",
      title: "Computer Science Engineering",
      institution: "Universidad Camilo Cienfuegos Matanzas/Cuba",
      year: "2020 - 2024",
    },
  ];

  const courses = ["Robotics Course", "Programming Course", "Networks Course"];

  const languages = [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Basic" },
  ];

  const projects = [
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

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <header className="border-b border-green-400/30 bg-black/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6" />
            <span className="text-xl font-bold">~/developer</span>
          </div>
          <nav className="flex gap-6">
            <a href="#about" className="hover:text-green-300 transition-colors">
              about
            </a>
            <a
              href="#skills"
              className="hover:text-green-300 transition-colors"
            >
              skills
            </a>
            <a
              href="#projects"
              className="hover:text-green-300 transition-colors"
            >
              projects
            </a>
            <a
              href="#education"
              className="hover:text-green-300 transition-colors"
            >
              education
            </a>
            <a
              href="#languages"
              className="hover:text-green-300 transition-colors"
            >
              languages
            </a>
            <a
              href="#contact"
              className="hover:text-green-300 transition-colors"
            >
              contact
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <section className="mb-32" id="about">
          <div className="mb-8">
            <div className="text-green-500 mb-2 text-lg">
              {displayText}
              <span className="animate-pulse">_</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-green-400 crt-text-large">
              Backend Developer
            </h1>
            <p className="text-xl text-green-400/70 mb-8 ">
              Brayan Betancourt Cespedes
            </p>
          </div>

          <div className="border border-green-400/30 p-6 rounded bg-green-400/5">
            <div className="flex items-start gap-3">
              <span className="text-green-500">$</span>
              <div>
                <p className="text-green-400/90 leading-relaxed">
                  Backend Developer with solid experience in designing and
                  implementing RESTful APIs and server-side logic using Node.js,
                  Express, NestJS, and FastAPI. Specialized in database
                  management with PostgreSQL, MySQL, and MongoDB using various
                  ORMs, and in implementing security with JWT and access control
                  (RBAC). Passionate about performance optimization, complex
                  system integration, and developing clean, maintainable, and
                  scalable software.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mb-32">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Code className="w-8 h-8" />
            <span>$ cat skills.json</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="border border-green-400/30 p-6 rounded bg-green-400/5 hover:bg-green-400/10 transition-colors"
              >
                <div className="flex items-start gap-3 mb-4">
                  <h3 className="text-lg font-bold text-green-400 uppercase">
                    {category}
                  </h3>
                  <span className="text-green-500">{"{"}</span>
                </div>
                <div className="pl-6 space-y-2">
                  {items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-green-500">→</span>
                      <span className="text-green-400/90">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-start gap-3 mt-4">
                  <span className="text-green-500">{"}"}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-32">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 ">
            <Database className="w-8 h-8" />
            <span>$ ls projects/</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
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

        <section id="education" className="mb-32">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="w-8 h-8" />
            <span>$ cat education.log</span>
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-green-400 flex items-center gap-2">
              <span className="text-green-500">[</span>
              DEGREES
              <span className="text-green-500">]</span>
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="border border-green-400/30 p-6 rounded bg-green-400/5 hover:bg-green-400/10 transition-colors"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-green-500">$</span>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-green-400 mb-1">
                        {edu.title}
                      </h4>
                      <p className="text-green-400/70">{edu.institution}</p>
                      <p className="text-green-400/50 text-sm mt-1">
                        {edu.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400 flex items-center gap-2">
              <span className="text-green-500">[</span>
              CERTIFICATIONS & COURSES
              <span className="text-green-500">]</span>
            </h3>
            <div className="border border-green-400/30 p-6 rounded bg-green-400/5">
              <div className="grid md:grid-cols-2 gap-3">
                {courses.map((course, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-green-400/90">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="languages" className="mb-32">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Code className="w-8 h-8" />
            <span>$ cat languages.conf</span>
          </h2>
          <div className="border border-green-400/30 p-6 rounded bg-green-400/5">
            <div className="space-y-3">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border border-green-400/20 rounded hover:bg-green-400/5 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">→</span>
                    <span className="text-green-400 font-semibold">
                      {lang.name}
                    </span>
                  </div>
                  <span className="text-green-400/60 text-sm">
                    [{lang.level}]
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 ">
            <Server className="w-8 h-8" />
            <span>$ ./connect.sh</span>
          </h2>
          <div className="border border-green-400/30 p-8 rounded bg-green-400/5">
            <p className="text-green-400/70 mb-6">
              Available for freelance projects, collaborations or business
              ventures.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:brayancespedes57@gmail.com"
                className="flex items-center gap-2 px-6 py-3 border border-green-400/30 rounded hover:bg-green-400/10 transition-all hover:border-green-400"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              <a
                href="https://github.com/Bryan4638"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-green-400/30 rounded hover:bg-green-400/10 transition-all hover:border-green-400"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://t.me/mcGr3_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-green-400/30 rounded hover:bg-green-400/10 transition-all hover:border-green-400"
              >
                <Send className="w-5 h-5" />
                <span>Telegram</span>
              </a>
              <a
                href="https://wa.me/5354383812"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-green-400/30 rounded hover:bg-green-400/10 transition-all hover:border-green-400"
              >
                <Phone className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-green-400/30 py-8 text-center text-green-400/50">
        <p>$ echo "Made with ❤ by Backend Developer" | tee /dev/stdout</p>
      </footer>
    </div>
  );
}

export default App;
