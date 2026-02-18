const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"];

const Skills = () => {
  return (
    <section className="px-10 py-20">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-slate-800 rounded-full hover:bg-blue-500 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
