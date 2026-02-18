import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";

function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-black dark:text-white transition">

      {/* DARK / LIGHT BUTTON */}
      <button
        onClick={() => setDark(!dark)}
        className="fixed bottom-6 right-6 z-50 px-4 py-2 rounded-lg bg-blue-500 text-white"
      >
        {dark ? "🌞 Light" : "🌙 Dark"}
      </button>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <WhatsApp />
    </div>
  );
}

export default App;
