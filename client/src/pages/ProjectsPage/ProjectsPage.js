import React from "react";
import Project from "../../components/Project/Project";
import ProjectCarousel from "../../components/ProjectCarousel/ProjectCarousel";
import { UserState } from "../../context/LoggedInUserProvider";

export default function ProjectsPage() {
  const { focusedProject } = UserState();
  return (
    <div className="w-100 p-5">
      <div className="my-5">
        <p className="text-center">
          Welcome to my projects page. Here you can find out about what projects
          I've worked on, the technologies I used, and view the deployed
          applications.
        </p>
      </div>
      <div className="container">
        <div>
          <Project project={focusedProject}></Project>
        </div>
        <div className="mt-5">
          <ProjectCarousel></ProjectCarousel>
        </div>
      </div>
    </div>
  );
}
