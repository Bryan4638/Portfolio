import { Code } from "lucide-react";

const languagesData = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Basic" },
];

export const Languages = () => {
  return (
    <section id="languages" className="mb-32">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <Code className="w-8 h-8" />
        <span>$ cat languages.conf</span>
      </h2>
      <div className="border border-green-400/30 p-6 rounded bg-green-400/5">
        <div className="space-y-3">
          {languagesData.map((lang, index) => (
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
  );
};
