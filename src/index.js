import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

export default () => {
  <HashRouter>
    <Switch>
      <Route exact path="/App" />
    </Switch>
  </HashRouter>

}
ReactDOM.render(<App />, document.getElementById('root'));
