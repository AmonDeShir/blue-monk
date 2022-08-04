import { ProjectFile } from "../../store/project/project.types";
import { Match, Switch } from "solid-js";
import { Markdown } from "../markdown/markdown";

export type ElementData = {
  id: string;
  position: number;
  data: string;
} & ({
  type: "asset";
  asset: ProjectFile;
} | {
  type: "markdown";
  asset?: ProjectFile;
})

type Props = {
  data: ElementData
}

export function Element(props: Props) {
  console.log('Element recreated!');

  return (
    <Switch fallback={<p>Error: Type: {props.data.asset?.type ?? props.data.type} is unsupported</p>}>
      <Match when={props.data.type === 'markdown'}>
        <Markdown data={props.data.data} id={props.data.id} />
      </Match>
    </Switch>
  );
};