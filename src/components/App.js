import React from 'react';
import '../css/App.scss';
import Main from './Main';
import Navi from './Navi';
import Road from './Road';
import Photo from './Photo';
import Intro from './Intro';
import Footer from './Footer';

import {
  HashRouter,
  Route
} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Navi/>
      <Route path="/" exact={true} component={Main}/>
      <Route path="/intro" component={Intro}/>
      <Route path="/road" component={Road}/>
      <Route path="/photo"  component={Photo}/>
      <Footer/>
    </HashRouter>
  );
}

export default App;
