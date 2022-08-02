import { onMount } from 'solid-js';

import 'monaco-editor-vite-fix/esm/vs/editor/editor.all.js';
import 'monaco-editor-vite-fix/esm/vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp.js';

import * as monaco from 'monaco-editor-vite-fix';
import "./code-editor.scss";

type Props = {
  model: monaco.editor.ITextModel;
};

export function CodeEditor({ model }: Props) {
  let dom: HTMLDivElement;
  let editor: monaco.editor.IStandaloneCodeEditor;

  onMount(() => {
    editor = monaco.editor.create(dom, { theme: 'default-dark' });
    editor.setModel(model);
  });

  return (
    <div ref={dom} class="code-editor" />
  );
}