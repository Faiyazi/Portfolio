function Projects() {
  const projectList = [
    {
      title: "Odoo POS Customization",
      description: "Custom POS button and functionality using OWL in Odoo.",
      tech: "Odoo, Python, JavaScript",
      link: "https://github.com/Faiyazi",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React and Tailwind CSS.",
      tech: "React, Tailwind CSS",
      link: "https://github.com/Faiyazi",
    },
    {
      title: "Odoo Sales Module",
      description: "Customized sales workflow and reports in Odoo.",
      tech: "Odoo, Python",
      link: "https://github.com/Faiyazi",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      
      <h1 className="text-4xl font-bold text-center mb-12">
        My Projects
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-3">
              {project.title}
            </h2>

            <p className="text-gray-600 mb-4">
              {project.description}
            </p>

            <p className="text-sm text-blue-600 mb-4">
              {project.tech}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              View Project →
            </a>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Projects;