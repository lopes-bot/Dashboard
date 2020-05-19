import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <Router>
    <Switch>

      <Route path="/" exact={true} component={App} />
       

    </Switch>
  </Router>,
  document.getElementById('root')
);


