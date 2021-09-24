import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div>
      <div className="my-24 mx-20 lg:mx-44 grid justify-items-center grid-cols-1 gap-x-4 gap-y-16 sm:grid-cols-2  lg:grid-cols-3 lg:py-10 p-5 border-2 rounded bg-gray-500 opacity-70 hover:bg-gray-400">
        <ProjectCard LessonNum={1} />
        <ProjectCard LessonNum={2} />
        <ProjectCard LessonNum={3} />
        <ProjectCard LessonNum={4} />
        <ProjectCard LessonNum={5} />
        <ProjectCard LessonNum={6} />
        <ProjectCard LessonNum={7} />
        <ProjectCard LessonNum={8} />
        <ProjectCard LessonNum={9} />
        <ProjectCard LessonNum={10} />
        <ProjectCard LessonNum={11} />
        <ProjectCard LessonNum={12} />
      </div>
      <div className="p-3"></div>
    </div>
  );
};

export default Projects;
