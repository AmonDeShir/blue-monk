import { onCleanup, onMount } from 'solid-js';

import 'monaco-editor-vite-fix/esm/vs/editor/editor.all.js';
import 'monaco-editor-vite-fix/esm/vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp.js';

import * as monaco from 'monaco-editor-vite-fix';
import "./code-editor.scss";

type Props = {
  model: string;
  onClick?: () => void;
  onDblClick?: () => void;
};

export function CodeEditor(props: Props) {
  let dom: HTMLDivElement;
  let editor: monaco.editor.IStandaloneCodeEditor;

  onMount(() => {
    const model = monaco.editor.getModel(monaco.Uri.file(props.model))

    editor = monaco.editor.create(dom, { theme: 'default-dark' });
    editor.setModel(model);
  });

  onCleanup(() => {
    editor.dispose();
  })

  return (
    <div 
      ref={dom} 
      class="code-editor"
      onDblClick={props.onDblClick}
      onClick={props.onClick}
    />
  );
}