import { afterAll, beforeEach, describe, expect, it, vitest } from "vitest";

import "onigasm";
import 'monaco-editor-vite-fix';
import 'monaco-editor-textmate';

import * as onigasmImport from "onigasm";
import * as monacoImport from 'monaco-editor-vite-fix';
import * as textmateImport from 'monaco-editor-textmate';
import { getGrammarDefinition, initTextMate } from "./text-mate";
import onigasm from "../../assets/onigasm.wasm";
import { DARK_THEME } from "./dark-theme";
import { Registry } from "monaco-textmate";
import { TYPESCRIPT } from "./typescript.json";

vitest.mock('onigasm', () => ({
  loadWASM: vitest.fn()
}));

vitest.mock('monaco-editor-vite-fix', () => ({
  editor: {
    defineTheme: vitest.fn()
  }
}));

vitest.mock('monaco-editor-textmate', () => ({
  wireTmGrammars: vitest.fn()
}));

const loadWASM = vitest.mocked(onigasmImport.loadWASM, false);
const defineTheme = vitest.mocked(monacoImport.editor.defineTheme, false);
const wireTmGrammars = vitest.mocked(textmateImport.wireTmGrammars, false);

describe(`text-mate`, () => {
  beforeEach(() => {
    loadWASM.mockClear();
    defineTheme.mockClear();
    wireTmGrammars.mockClear();
  });

  afterAll(() => {
    loadWASM.mockRestore();
    defineTheme.mockRestore();
    wireTmGrammars.mockRestore();
  });

  describe(`initTextMate`, () => {

    it(`should load the onigasm.wasm file`, async () => {
      await initTextMate();

      expect(loadWASM).toBeCalledWith(onigasm);
    });

    it(`should define a new text-mate compatible theme`, async () => {
      await initTextMate();

      expect(defineTheme).toBeCalledWith('default-dark', DARK_THEME);
    });

    it(`should wire text-mate with monaco (textmate should load grammar)`, async () => {
      await initTextMate();

      const grammars = new Map()
      grammars.set('css', 'source.css')
      grammars.set('html', 'text.html.basic')
      grammars.set('typescript', 'source.ts')

      expect(wireTmGrammars).toBeCalledWith(monacoImport, expect.any(Registry), grammars);
    });

  });

  describe(`getGrammarDefinition`, () => {
    it(`should return typescript definition`, async () => {
      const result = await getGrammarDefinition();

      expect(result).toEqual({
        format: 'json',
        content: TYPESCRIPT
      })
    })
  })
})