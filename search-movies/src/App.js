import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchBox from './components/SearchBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={SearchBox} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
