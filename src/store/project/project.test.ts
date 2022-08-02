import { createProject, elements, loadFromStorage, pages, projects, saveToStorage, setElements, setFiles, setPages, setProjects } from "./project";
import { EMPTY_STATE, STATE } from "./project.data";
import { describe, it, beforeEach, expect, vitest, afterAll } from 'vitest';

import "nanoid";
import * as nanoidImport from "nanoid";

vitest.mock('nanoid', () => ({
  nanoid: vitest.fn()
}));

const nanoid = vitest.mocked(nanoidImport.nanoid, false)

describe(`project`, () => {
  beforeEach(() => {
    setProjects([]);
    setPages([]);
    setElements([]);
    setFiles([]);
    localStorage.setItem('state', undefined);
    nanoid.mockClear();
  });

  afterAll(() => {
    nanoid.mockRestore();
  })

  describe(`loadFromStorage`, () => {
    it(`should load data from the storage`, () => {
      localStorage.setItem('state', JSON.stringify(STATE));
      expect(loadFromStorage()).toEqual(STATE);
    });

    it(`should create new empty state if the data saved in the storage is broken`, () => {
      localStorage.setItem('state', "Broken Data");
      expect(loadFromStorage()).toEqual(EMPTY_STATE);
    });

    it(`should create new empty state if the storage doesn't have saved state`, () => {
      localStorage.setItem('state', undefined);
      expect(loadFromStorage()).toEqual(EMPTY_STATE);
    });
  });

  describe(`saveToStorage`, () => {
    it(`should save the current state to the storage`, () => {
      setProjects(STATE.projects);
      setPages(STATE.pages);
      setElements(STATE.elements);
      setFiles(STATE.files);

      saveToStorage();
      expect(JSON.parse(localStorage.getItem('state'))).toEqual(STATE);
    });
  });

  describe(`createProject`, () => {
    it(`should create a new project with a default page`, () => {
      nanoid.mockReturnValueOnce('id_0');
      nanoid.mockReturnValueOnce('id_1');
      nanoid.mockReturnValueOnce('id_2');

      createProject();

      expect(projects()).toEqual([{
        id: 'id_2',
        title: `Project 0`,
        files: [],
        pages: ['id_1']
      }]);

      expect(pages()).toEqual([{
        id: 'id_1',
        position: 0,
        title: 'Page 0',
        elements: ['id_0']
      }]);

      expect(elements()).toEqual([{
        id: 'id_0',
        position: 0,
        data: '**Project 0**\n',
        type: 'markdown'
      }]);
    })
  })
})