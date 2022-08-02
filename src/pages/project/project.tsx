import { createMemo, For } from "solid-js";
import { useParams } from "@solidjs/router";
import { Navigation } from "../../components/navigation/navigation"
import { projects, files, pages, elements } from "../../store/project/project";
import "./project.scss";

export function Project() {
  const { id, page } = useParams();

  const project = createMemo(() => {
    return projects().find((project) => project.id === id);
  });

  const assets = createMemo(() => {
    const assets = project()?.files ?? [];
    
    return assets
      .map((file) => files().find(({ path }) => path === file))
      .filter((file) => file);
  });

  const projectPages = createMemo(() => {
    const ids = project()?.pages ?? [];
  
    return ids
      .map((id) => pages().find((page) => page.id === id))
      .filter((page) => page)
      .sort((a, b) => a.position - b.position);
  });

  const pageData = createMemo(() => {
    if (page) {
      return projectPages().find(({ id }) => id === page);
    }
    
    return projectPages()[0];
  });

  const pageElements = createMemo(() => {
    const ids = pageData()?.elements ?? [];

    return ids
      .map((id) => elements().find((element) => element.id === id))
      .filter((element) => element)
      .map((element) => ({ ...element, asset: assets().find(asset => element.data === asset.path) }))
      .filter((element) => element.type === 'markdown' || element.asset)
      .sort((a, b) => a.position - b.position)
  });


  return (
    <div class="project">
      <Navigation project={id} pages={projectPages()} />
      <div class="project__content">
        <For each={pageElements()}>{({ data }) =>
          <div>{data}</div>
        }</For>
      </div>
    </div>
  );
}