import { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Education } from "./components/Education/Education";
import { Languages } from "./components/Languages/Languages";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

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

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Header displayText={displayText} />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <About displayText={displayText} />
        <Skills />
        <Projects />
        <Education />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
