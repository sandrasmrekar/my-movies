import React,{useEffect} from 'react'
import Movie from './Movie.js'
import '../css/AllMovies.css'
import Button from 'react-bootstrap/Button';
import {NavLink} from 'react-router-dom'


const TvShows  =(props)=> {
  const API_KEY = '7d348f13ffbf0b9cea465289d2ce2967'
  var [renderMovies, setRenderMovies] = React.useState([]);
  var [page, setPage] = React.useState('1')

  //Fetch once on initial render.
  //Then only fetch when page is changed
  useEffect(() =>{
    fetch("https://api.themoviedb.org/3/tv/popular?api_key=" + API_KEY +"&language=en-US&page=" + page)
      .then(res => res.json())
      .then(res => {
        const fetchedMovies = res.results.map((movie,i) => {
              console.log(movie);
              // Return the element. Also pass key
              return (
                <NavLink exact to={{
                    pathname:'/MovieDetail' ,
                    state:{
                      clickedmovie:movie
                    }
                  }}

                  className='movieLink'
                  key={movie.id} >
                  <div className='movie'><Movie  title={movie.name} path={movie.poster_path} /></div>
                </NavLink>);
        });
        const totalMovies = renderMovies.concat(fetchedMovies);
        setRenderMovies(totalMovies);
      });
  },[page]);



  return (

        <div>
          <ul className='movie_list'>{renderMovies}</ul>
          <div className='button'>
            <Button onClick={() => setPage(++page)} variant="dark" block >Load more</Button>

          </div>
        </div>

  );
}

export default TvShows;
