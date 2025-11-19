import { GraduationCap } from "lucide-react";

const educationData = [
  {
    type: "degree",
    title: "Computer Science Engineering",
    institution: "Universidad Camilo Cienfuegos Matanzas/Cuba",
    year: "2020 - 2024",
  },
];

const coursesData = ["Robotics Course", "Programming Course", "Networks Course"];

export const Education = () => {
  return (
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
          {educationData.map((edu, index) => (
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
            {coursesData.map((course, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-green-400/90">{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
