export interface IWorkerDefinition {
  label: string;
  entry: string;
}


export function languageWorkAttr(monacoPackage: string): IWorkerDefinition[] {
  return [
    {
      label: 'editorWorkerService',
      entry: `${monacoPackage}/esm/vs/editor/editor.worker`,
    },
    {
      label: 'css',
      entry: `${monacoPackage}/esm/vs/language/css/css.worker`,
    },
    {
      label: 'html',
      entry: `${monacoPackage}/esm/vs/language/html/html.worker`,
    },
    {
      label: 'json',
      entry: `${monacoPackage}/esm/vs/language/json/json.worker`,
    },
    {
      label: 'typescript',
      entry: `${monacoPackage}/esm/vs/language/typescript/ts.worker`,
    },
  ];
}

export function languageWorksByLabel(monacoPackage: string) {
  const languageWorksByLabel: { [language: string]: IWorkerDefinition } = {};

  languageWorkAttr(monacoPackage).forEach(
    (languageWork) => (languageWorksByLabel[languageWork.label] = languageWork)
  );

  return languageWorksByLabel;
}

export type EditorLanguageWorks = 'css' | 'html' | 'json' | 'typescript' | 'editorWorkerService'