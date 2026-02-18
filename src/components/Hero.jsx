import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="px-10 py-24 overflow-hidden">

      {/* NAME */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        Hi, I’m <span className="text-blue-400">Nadeem</span> 👋
      </motion.h1>

      {/* PROFESSIONAL TITLE */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        className="relative inline-block mb-6"
      >
        <span className="text-xl md:text-2xl font-semibold text-white">
          Frontend Developer
        </span>

        {/* UNDERLINE ANIMATION */}
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute left-0 -bottom-1 h-[2px] bg-blue-400 rounded-full"
        />

        <div className="text-gray-400 mt-2">
          React | Tailwind CSS
        </div>
      </motion.div>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex gap-4 mt-6"
      >
        <a
          href="/Nadeem-Resume.pdf"
          target="_blank"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg
          hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30
          transition-all duration-300"
        >
          Download CV
        </a>

        <a
          href="#contact"
          className="border border-blue-400 text-blue-400 px-6 py-2 rounded-lg
          hover:bg-blue-400 hover:text-white hover:shadow-lg hover:shadow-blue-400/30
          transition-all duration-300"
        >
          Contact Me
        </a>
      </motion.div>

    </section>
  );
};

export default Hero;
  