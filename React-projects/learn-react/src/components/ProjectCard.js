import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ LessonNum }) => {
  return (
    <Link to={`/content/${LessonNum}`}>
      <div className="p-12 lg:p-16 w-44 h-36 lg:w-52 lg:h-44 rounded shadow-2xl opacity-70 bg-white border-2 cursor-pointer hover:bg-blue-400 mix-blend-screen text-center shadow-lg">
        <h1 className="font-bold text-center ">Project {LessonNum}</h1>
      </div>
    </Link>
  );
};

export default ProjectCard;
