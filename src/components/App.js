import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieList from 'containers/MovieListContainer';
import MoviePage from 'containers/MoviePageContainer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component ={MovieList} exact />
        <Route path ="/page/:id" component ={MoviePage} exact /> 
      </Switch>
    </Router>
  );
}

export default App;