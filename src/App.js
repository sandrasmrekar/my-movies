import React from 'react';
import './App.css';
import Navbar from './components/Nav.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllMovies from './components/AllMovies.js';
import TvShows from './components/Tv-Shows';
import Watchlist from './components/Watchlist';



function App() {


  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/Moives" component={AllMovies}></Route>
        <Route path="/TvShows" component={TvShows}></Route>
        <Route path="/Watchlist" component={Watchlist}></Route>
      </Switch>

    </Router>

  );
}

export default App;
