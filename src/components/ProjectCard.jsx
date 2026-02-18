const ProjectCard = ({ title, description, liveLink }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>

      <a
        href={liveLink}
        target="_blank"
        rel="noreferrer"
        className="text-blue-400 hover:underline"
      >
        View Project →
      </a>
    </div>
  );
};

export default ProjectCard;
