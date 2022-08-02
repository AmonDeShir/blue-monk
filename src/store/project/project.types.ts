export type Project = {
  id: string;
  title: string;
  files: string[];
  pages: string[];
}

export type Page = {
  id: string;
  position: number;
  title: string;
  elements: string[];
}

export type PageElement = {
  id: string;
  position: number;
  type: "markdown" | "asset";
  data: string;
};

export type ProjectFile = {
  path: string;
} & (
  {
    type: "video"
    data: {
      src: string,
      type: "video/ogg" | "video/mp4" | "video/webm"
    };
  } |
  {
    type: "audio",
    data: {
      src: string,
      type: "audio/wav" | "audio/mp3" | "audio/wma"
    };
  } |
  {
    type: "image",
    data: {
      src: string,
      type: "image/apng" | "image/avif" | "image/gif" | "image/png" | "image/jpeg" | "image/svg+xml" | "image/webp" | "image/bmp" | "image/x-icon"
    };
  } |
  {
    type: "code",
    data: {
      src: string,
      language: string,
      type: "console" | "html" | "canvas" | "chart"
    };
  } |
  {
    type: "pdf",
    data: string
  }
)

export type State = {
  projects: Project[],
  pages: Page[],
  elements: PageElement[],
  files: ProjectFile[],
}

export type ProjectSave = {
  project: Project,
  pages: Page[],
  elements: PageElement[],
  files: ProjectFile[],
}