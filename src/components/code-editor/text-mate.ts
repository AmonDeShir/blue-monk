import { loadWASM } from 'onigasm'
import { IGrammarDefinition, Registry } from 'monaco-textmate'
import { wireTmGrammars } from 'monaco-editor-textmate';
import { DARK_THEME } from './dark-theme';
import { TYPESCRIPT } from './typescript.json';
import * as monaco from 'monaco-editor-vite-fix';
import onigasm from "../../assets/onigasm.wasm";

export async function getGrammarDefinition(): Promise<IGrammarDefinition> {
  return Promise.resolve({
    format: 'json',
    content: TYPESCRIPT
  });
}

export async function initTextMate() {
  await loadWASM(onigasm);

  const registry = new Registry({ getGrammarDefinition })

  // map of monaco "language id's" to TextMate scopeNames
  const grammars = new Map()
  grammars.set('css', 'source.css')
  grammars.set('html', 'text.html.basic')
  grammars.set('typescript', 'source.ts')

  // Load text mate to editor
  monaco.editor.defineTheme('default-dark', DARK_THEME);
  await wireTmGrammars(monaco, registry, grammars);
}