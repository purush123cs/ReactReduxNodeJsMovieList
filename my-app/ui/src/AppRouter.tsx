import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import { Home } from './features/home/Home';
import { MovieList } from './features/movieList/MovieList';
import { MovieDetail } from './features/movieDetail/MovieDetail';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/movieList">
          <MovieList />
        </Route>
        <Route exact path="/movieDetail">
          <MovieDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
