import React from "react";
import { PROJECTS } from "../constants";
import {MdArrowOutward} from "react-icons/md";

const Projects = () => {
  return (
    <section className="pt-20" id="projects">
      <h2 className="mb-8 text-center font-bold text-3xl lg:text-4xl">Projects</h2>
      <div className="grid grid-col-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-3xl "
          >
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 items-center justify-center flex flex-col text-white lg:opacity-0 backdrop-blur-lg transition-opacity duration-1000 group-hover:opacity-100 ">
              <h3 className="mb-2  font-bold text-2xl sm:text-3xl "> {project.name}</h3>
              <p className="mb-8 p-2">{project.description} </p>
              <a
                href={project.Link}
                target="_blank"
                rel="nopener noreferrer"
                className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
              >
              <div className="flex font-semibold items-center">
                <span>Go to app</span>
                <MdArrowOutward/>
              </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
