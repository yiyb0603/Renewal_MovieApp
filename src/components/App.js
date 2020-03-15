import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieList from 'containers/MovieListContainer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component ={MovieList} />
      </Switch>
    </Router>
  );
}

export default App;