import { Link } from "@solidjs/router";
import { For } from "solid-js";
import { createProject, projects } from "../../store/project/project";
import "./projects.scss";

export function Projects() {
  return (
    <div class="projects">
      <div class="projects__left-container">
        <div class="projects__logo" />
        <div class="projects__application-name" />
      </div>
      
      <div class="projects_right-container">
        <h1 class="project__title">Projects</h1>
        
        <div class="project__gird">      
          <For each={projects()}>{(project) =>
            <Link href={`/projects/${project.id}`} class="project_item">{project.title}</Link>
          }</For>

          <div 
            class="project_item project_item--plus"
            onClick={createProject}
          >+</div>
        </div>
      </div>

    </div>
  );
}