import React from 'react'



function Watchlist(){
  const savedMovies = JSON.parse(localStorage.getItem('movies'));
  var movieTitles = "";
  for( var i = 0; i < savedMovies.length; i++){
    if(savedMovies[i].title === undefined){
      movieTitles += savedMovies[i].name + '   -     '
    }else {
      movieTitles += savedMovies[i].title;
    }

  }
  return(
    <h1>{movieTitles}</h1>
  );
}


export default Watchlist;
