import React,{useEffect} from 'react'
import '../css/MovieDetail.css'


function Detail(props) {
  var [movie,setMovie] = React.useState("");
  var [title,setTitle] = React.useState("");
  useEffect(() =>{
      const {clickedmovie} = props.location.state;
      if(clickedmovie.title === undefined){
        setTitle(clickedmovie.name);
      }else{
        setTitle(clickedmovie.title);
        console.log(title);
      }
      setMovie(clickedmovie)

  },[props.location.state]);

  function saveMovie(){
    var savedMovies = JSON.parse(localStorage.getItem("movies"));
    if(savedMovies === null){
      savedMovies = [];
    }
    const newSave = savedMovies.concat(movie)
    localStorage.setItem('movies', JSON.stringify(newSave))

  }


  return(
    <div className='container'>
      <div id='imageContainer'>
        <img id='image' src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt="poster" />
      </div>
      <div className='header'>
        <h1 id='title'>{title}</h1>
        <img id='logo' src="bookmark.png" alt="save" onClick={()=> saveMovie()} />
      </div>
      <h2 id='sub'>{'Vote: ' + movie.vote_average}</h2>
      <h1 id='sub'>{'Release date: ' + movie.release_date}</h1>
      <h3 id='summary'>Summary</h3>

      <h1 id='overview'>{movie.overview}</h1>

    </div>
  );


}



export default Detail;
