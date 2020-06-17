import React,{useEffect} from 'react'
import Movie from './Movie.js'
import '../css/AllMovies.css'
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination'
import {NavLink} from 'react-router-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MovieDetail from './MovieDetail'





const TvShows  =(props)=> {
  const API_KEY = '7d348f13ffbf0b9cea465289d2ce2967'
  var [renderMovies, setRenderMovies] = React.useState([]);
  var [page, setPage] = React.useState('1')

  function fetching(){
    fetch("https://api.themoviedb.org/3/tv/popular?api_key=" + API_KEY +"&language=en-US&page=" + page)
      .then(res => res.json())
      .then(res => {
        const fetchedMovies = res.results.map((movie,i) => {
              console.log(movie);
              // Return the element. Also pass key
              return (
                <NavLink exact to='/MovieDetail' classname='movieLink'>
                  <div className='movie' key={movie.id}><Movie  title={movie.name} path={movie.poster_path} /></div>
                </NavLink>);
        });
        const totalMovies = renderMovies.concat(fetchedMovies);
        setRenderMovies(totalMovies);
      });
  }

  //Fetch once on initial render.
  //Then only fetch when page is changed
  useEffect(() =>{
    fetching();
  },[page]);



  return (
    <Router>
      <Switch>
        <Route path="/MovieDetail"
               render={(props)=> (<MovieDetail {...props} title='title'/>)} >
        </Route>

        <div>
          <ul className='movie_list'>{renderMovies}</ul>
          <div className='button'>
            <Button onClick={() => setPage(++page)} variant="dark" block >Load more</Button>

          </div>
        </div>
      </Switch>



    </Router>

  );
}

export default TvShows;
