import React, { useEffect } from "react";
import { Btn } from "./btn.component";

type ProjectsType = {
  id: number;
  title: string;
  image: string;
  techUsed: string[];
  projectLink: string;
  codeLink: string;
  description: string;
};

type ProjectProps = {
  works: ProjectsType[];
};

const Project: React.FC<{ work: ProjectsType }> = ({ work }) => {
  // ?scroll animation starts
  useEffect(() => {
    const handleScroll = () => {
      const trigger = (window.innerHeight / 5) * 4;
      const boxes = document.querySelectorAll(".animate-on-scroll");

      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < trigger) {
          box.classList.add("show");
        } else {
          box.classList.remove("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //?scroll animation ends

  const { id, title, image, techUsed, projectLink, codeLink, description } =
    work;
  return (
    <div className="py-4 my-5 relative group overflow-hidden animate-on-scroll">
      <div className="overflow-hidden ">
        <img
          src={image}
          alt={title}
          className="transition-transform duration-300 transform  hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-bold py-2">{title}</h3>
      <div className="flex gap-2">
        {techUsed.map((tech) => (
          <p className="font-bold text-accent" key={tech}>
            {tech}
          </p>
        ))}
      </div>
      <div className="my-2">
        <p>{description}</p>
      </div>
      <div className="lg:h-[100%] lg:w-full lg:hidden lg:absolute lg:top-0 lg:group-hover:block lg:hover:backdrop-filter lg:hover:backdrop-blur ">
        <div className="flex gap-2 lg:absolute lg:top-[30%] lg:left-[40%]  lg:text-center  lg:flex-col  lg:transition-transform lg:duration-300 lg:transform lg:hover:scale-110">
          {projectLink !== "" && (
            <Btn title="VIEW PROJECT" url={projectLink} id={1} />
          )}
          {codeLink !== "" && <Btn title="VIEW CODE" url={codeLink} id={1} />}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC<ProjectProps> = ({ works }) => {
  return (
    <section className="p-2.5 max-w-[1200px] m-auto ">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Projects</h2>
        <Btn title="CONTACT ME" url="#contact-me" />
      </div>
      <div className="py-6 md:grid md:grid-cols-2 gap-4 overflow-hidden">
        {works.map((work) => (
          <Project key={work.id} work={work} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
