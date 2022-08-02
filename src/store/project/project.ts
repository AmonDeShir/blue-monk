import { nanoid } from "nanoid";
import { createEffect, createSignal } from "solid-js";
import { Page, PageElement, Project, ProjectFile, State } from "./project.types";

const preloaded = loadFromStorage();

export const [projects, setProjects] = createSignal<Project[]>(preloaded.projects);
export const [pages, setPages] = createSignal<Page[]>(preloaded.pages);
export const [elements, setElements] = createSignal<PageElement[]>(preloaded.elements);
export const [files, setFiles] = createSignal<ProjectFile[]>(preloaded.files);

createEffect(saveToStorage);

export function loadFromStorage(): State {
  let state: State = undefined;
  
  try {
    const data = localStorage.getItem('state');

    if (data) {
      state = JSON.parse(data);
    }
  }
  catch {}

  if (state) {
    return state;
  }

  return { 
    elements: [], 
    files: [], 
    pages: [], 
    projects: [] 
  }
}

export function saveToStorage() {
  const state = {
    elements: elements(), 
    files: files(), 
    pages: pages(), 
    projects: projects()
  };

  localStorage.setItem('state', JSON.stringify(state));
}

export function createProject() {
  setProjects(projects => {
    const title = `Project ${projects.length}`;
    const elementId = nanoid();
    const pageId = nanoid();

    setElements(elements => [
      ...elements, 
      {
        id: elementId,
        position: 0,
        data: `**${title}**\n`,
        type: 'markdown'
      }
    ]);

    setPages(pages => [
      ...pages,
      {
        id: pageId,
        position: 0,
        title: 'Page 0',
        elements: [elementId]
      }
    ]);

    return [
      ...projects, 
      {
        id: nanoid(),
        title,
        files: [],
        pages: [pageId],
      }
    ]
  });
}
