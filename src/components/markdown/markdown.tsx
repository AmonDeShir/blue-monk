import DOMPurify from "dompurify";
import { marked } from "marked";
import { createEffect, createSignal, onCleanup, onMount, Show } from "solid-js";
import { CodeEditor } from "../code-editor/code-editor";
import * as monaco from "monaco-editor-vite-fix";
import { setElementValue } from "../../store/project/project";
import { nanoid } from "nanoid";
import "./markdown.scss";

type Props = {
  data: string;
  id: string;
}

export function Markdown(props: Props) {
  let ref: HTMLDivElement;
  const [editMode, setEditMode] = createSignal(false);


  console.log(`XDDD to fajny ten solid XDD`)

  createEffect(() => {
    //Recreate div dom after edit mode.
    editMode();

    const out = DOMPurify.sanitize(marked.parse(props.data));

    if (ref) {
      ref.innerHTML = out;
    }
  })

  const handleEdit = (value: string) => {
    setElementValue(props.id, value);
  } 

  return (
    <Show 
      when={editMode()}
      fallback={<div class="markdown" ref={ref} onDblClick={() => setEditMode(true)} />}
    >
      <MarkdownEditor 
        initValue={props.data}
        onEdit={handleEdit}
        onDblClick={() => setEditMode(false)}
      />
    </Show>
  );
}


type EditorProps = {
  onEdit: (value: string) => void;
  onDblClick?: () => void;
  initValue: string;
}

function MarkdownEditor(props: EditorProps) {
  let timeout: number;
  const modelId = `/markdown/${nanoid()}`;
  const model = monaco.editor.createModel(props.initValue, 'markdown', monaco.Uri.file(modelId));

  model.onDidChangeContent(() => {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => props.onEdit(model.getValue()), 250);    
  });

  onCleanup(() => {
    model.dispose();
  });

  return (
    <CodeEditor 
      model={modelId}
      onDblClick={props.onDblClick} 
    />
  );
}