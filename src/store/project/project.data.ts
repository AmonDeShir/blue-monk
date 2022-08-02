import { State } from "./project.types";

export const EMPTY_STATE: State = {
  projects: [],
  files: [],
  pages: [],
  elements: [],
}

export const STATE: State = {
  projects: [
    {
      id: "id_1",
      title: "Project 1",
      files: [
        "./image.png",
      ],
      pages: [
        "id_3",
        "id_4"
      ],
    },
    {
      id: "id_2",
      title: "Project 2",
      files: [
        "./index.ts"
      ],
      pages: [
        "id_5"
      ],
    }
  ],
  files: [
    {
      path: "./image.png",
      type: 'image',
      data: {
        src:  "Example Image in the base64 format",
        type: "image/png"
      }
    },
    {
      path: "./index.ts",
      type: 'code',
      data: {
        type: 'console',
        language: 'typescript',
        src: 'console.log(`Hello world!`);',
      }
    },
  ],
  pages: [
    {
      id: "id_3",
      title: "Page 1",
      position: 0,
      elements: [
        "id_6", "id_7"
      ]
    },
    {
      id: "id_4",
      position: 1,
      title: "Page 2",
      elements: [
       "id_8", "id_9" 
      ]
    },
    {
      id: "id_5",
      position: 0,
      title: "Page 1",
      elements: [
        "id_10", "id_11", "id_12" 
      ]
    }
  ],
  elements: [
    {
      id: "id_6",
      position: 0,
      type: "markdown",
      data: "**Page 1** \n ![img1](./image.png)",
    },
    {
      id: "id_7",
      position: 1,
      type: "markdown",
      data: "example text",
    },
    {
      id: "id_8",
      position: 0,
      type: "markdown",
      data: "**Page 2** \n ![img1](./image.png)",
    },
    {
      id: "id_9",
      position: 1,
      type: "asset",
      data: "./image.png",
    },
    {
      id: "id_10",
      position: 0,
      type: "markdown",
      data: "**Page 0**",
    },
    {
      id: "id_11",
      position: 1,
      type: "asset",
      data: "./index.ts",
    },
    {
      id: "id_12",
      position: 2,
      type: "asset",
      data: "./index.ts",
    },
  ],
}
