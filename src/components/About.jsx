const About = () => {
  return (
    <section className="px-10 py-20">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-800 p-6 rounded-xl transform transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">

          💻
          <h3 className="font-semibold mt-2">Frontend Developer</h3>
          <p className="text-gray-400 text-sm">
            I build modern and responsive user interfaces.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl transform transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">

          ⚛️
          <h3 className="font-semibold mt-2">React Developer</h3>
          <p className="text-gray-400 text-sm">
            Component based architecture & hooks.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl transform transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">

          🎨
          <h3 className="font-semibold mt-2">UI Focused</h3>
          <p className="text-gray-400 text-sm">
            Clean, minimal and user-friendly design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
