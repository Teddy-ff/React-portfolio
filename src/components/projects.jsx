import React from "react";
import squidGame from "../assets/squid-game.jpeg";
import portfolioScreenshot from "../assets/portfolio-screenshot.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "My Portfolio Website",
      description: "A personal portfolio website built with React, showcasing my projects and skills.",
      image: portfolioScreenshot,
      demoLink: "https://your-portfolio-url.vercel.app",  // 🔁 Replace with actual live link
      codeLink: "https://github.com/Teddy-ff/React-portfolio",   // 🔁 Replace with your GitHub repo
    },
    {
      id: 2,
      title: "Squid Game Event Website",
      description: "A Django-based event registration site with player ID generation and modern UI.",
      image: squidGame,
      demoLink: "https://squid-game-event.vercel.app",     // 🔁 Replace with actual link
      codeLink: "https://github.com/Teddy-ff/tenet-belief-event",  // 🔁 Replace with GitHub repo
    },
  ];

  return (
    <section id="projects" className="w-full py-16 bg-[#0a192f] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#112240] rounded-xl shadow-lg p-6 hover:scale-105 duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex justify-between">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-800"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
