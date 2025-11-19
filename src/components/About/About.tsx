interface AboutProps {
  displayText: string;
}

export const About = ({ displayText }: AboutProps) => {
  return (
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
  );
};
