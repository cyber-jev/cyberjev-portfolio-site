import React from "react";
import { Btn } from "./btn.component";

type ProjectsType = {
  id: number;
  title: string;
  image: string;
  techUsed: string[];
  projectLink: string;
  codeLink: string;
};

type ProjectProps = {
  works: ProjectsType[];
};

//? single project
const Project: React.FC<{ work: ProjectsType }> = ({ work }) => {
  const { id, title, image, techUsed, projectLink, codeLink } = work;
  return (
    <div className="py-4 relative group ">
      <img src={image} alt={title} />
      <h3 className="text-xl font-bold py-2">{title}</h3>
      <div className="flex gap-2">
        {techUsed.map((tech) => (
          <p className="text-text2">{tech}</p>
        ))}
      </div>
      <div className="flex gap-2 lg:absolute lg:top-[30%] lg:left-[40%]  lg:text-center lg:hidden lg:group-hover:block  lg:hover:backdrop-filter lg:hover:backdrop-blur">
        <Btn title="VIEW PROJECT" url={projectLink} />
        <Btn title="VIEW CODE" url="codeLink" />
      </div>
    </div>
  );
};

// ? all projects
const Projects: React.FC<ProjectProps> = ({ works }) => {
  return (
    <section className="p-2.5 max-w-[1020px] m-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Projects</h2>
        <Btn title="CONTACT ME" />
      </div>
      <div className="py-6 md:grid md:grid-cols-2 gap-4">
        {works.map((work) => (
          <Project key={work.id} work={work} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
