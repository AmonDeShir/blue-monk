import { Link } from "@solidjs/router";
import { For } from "solid-js";
import { Page } from "../../store/project/project.types";
import "./navigation.scss";

type Props = {
  project: string;
  pages: Page[];
}


export function Navigation({ project, pages }: Props) {
  return (
    <nav class="navigation">
      <div class="navigation__logo" />
      <div class="navigation__text" />
      <ul class="navigation__list">
        <li class="navigation__item">
          <Link href="/projects" class="navigation__item">Projects</Link>
        </li>
        
        <For each={pages}>{({ id, title }) =>
          <li class="navigation__item">
            <Link href={`/projects/${project}/${id}`} class="navigation__item">{title}</Link>
          </li>
        }</For>
      </ul>
    </nav>
  );
}