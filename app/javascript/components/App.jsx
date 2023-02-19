import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './Greeting';
import store from '../store';

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Greeting} />
      </div>
    </Router>
  </Provider>
);

export default App;
