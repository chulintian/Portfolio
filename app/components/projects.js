import React from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

function Tag({content}) {
  return (
    <div className="text-xs rounded-full bg-green text-dark-gray py-1 px-2">
      {content}
    </div>
  )
}

function ProjectCard({ height, title, description, skills, link }) {
  return (
    <div className={`w-full h-${height} p-5 z-10`}>
      <div className="relative bg-gray w-full h-full rounded-lg">
        {/* project content */}
        <Image
          src={`/${title}.png`}
          alt={`Image of ${title}`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          className=" rounded-lg"
        />

        {/* project overlay */}
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray bg-opacity-50 flex justify-start items-end text-white p-5 rounded-lg">
            <div>
              <h3 className="text-xl font-bold flex flex-row gap-2">
                {title}
                <FiArrowUpRight size={22} className="flex self-center"/>
              </h3>
              <p className="text-sm mt-1">{description}</p>
              <div className="flex flex-row gap-2 mt-3">
                {skills.map((skill, index) => (
                  <Tag content={skill} key={index} />
                ))}
              </div>
            </div>
          </div>
        </a>

      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    { height: "96", title: "ToTheCloset", description: "Clothing rental platform with image search functionality and AI-powered text search", skills: ["Next.js", "Javascript", "Tailwind CSS", "AWS"], link: "https://www.youtube.com/watch?v=mlw1beXC-eY" },
    { height: "72", title: "Insightify", description: "News screening tool for Know Your Customer (KYC) purposes", skills: ["Next.js", "FastAPI", "Javascript", "Azure"], link: "https://www.youtube.com/watch?v=c3nDIXG-2-A" },
    { height: "96", title: "Maia", description: "Call Center Solution to streamline response time and ensure consistency in ticket generation and classification", skills: ["React", "Javascript", "Django", "AWS"], link: "https://www.youtube.com/watch?v=GtgbgoAYab0" },
    { height: "72", title: "ExploreLah!", description: "All-in-one trip planner platform helping tourists by creating a curated itinerary to explore around Singapore", skills: ["HTML", "Boostrap", "Vue.js", "Javascript"], link: "https://www.youtube.com/watch?v=iiwGMP47M0k&t=180s" },
  ];

  return (
    <div id="projects" className="w-full min-h-screen flex flex-col py-5 px-32 gap-8">
      <div className="font-bold text-5xl text-center mt-32 mb-5">
        projects.
      </div>
      <div className="grid lg:grid-cols-2 gap-2">
        <div className="flex flex-col">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard
              key={index}
              height={project.height}
              title={project.title}
              description={project.description}
              skills={project.skills}
              link={project.link}
            />
          ))}
        </div>
        <div className="flex flex-col">
          {projects.slice(2, 4).map((project, index) => (
            <ProjectCard
              key={index + 2}
              height={project.height}
              title={project.title}
              description={project.description}
              skills={project.skills}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
