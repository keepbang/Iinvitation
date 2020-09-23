import React from 'react';
import '../css/App.scss';
import Main from './Main';
import Navi from './Navi';

import {
  HashRouter,
  Route
} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Navi/>
      <Route path="/" component={Main}/>
    </HashRouter>
  );
}

export default App;
