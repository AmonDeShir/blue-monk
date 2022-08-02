/* @refresh reload */
import { render } from 'solid-js/web';
import { initTextMate } from './components/code-editor/text-mate';
import { Route, Router, Routes, hashIntegration } from '@solidjs/router';
import { Projects } from './pages/projects/projects';
import "./theme/colors.scss";
import "./index.scss";
import "@fontsource/roboto";
import { Project } from './pages/project/project';

async function loadAssets() {
  await initTextMate();
};

function App() {
  return (
    <Router source={hashIntegration()}>
      <Routes>
        <Route path={["/", "/projects"]} component={Projects} />
        <Route path="/projects/:id" component={Project} />
        <Route path="/projects/:id/:page" component={Project} />
      </Routes>
    </Router>
  );
}


loadAssets().then(() => render(() => <App />, document.getElementById('root') as HTMLElement));
