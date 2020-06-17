import React from 'react'
import Card from 'react-bootstrap/Card';
import '../css/AllMovies.css'

function Movie(props){

  return(
    <Card border='light' style={{ width: '18rem' }}>
    <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + props.path} />
      <Card.Body style={{ height: '100px' }}>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
  </Card>
  );

}

export default Movie;
