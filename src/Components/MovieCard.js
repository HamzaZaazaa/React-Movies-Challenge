import {Card, Button} from "react-bootstrap"
function MovieCard({movie}) {
    return (
        
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterUrl} className="moviesimg" />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
     {movie.description}
    </Card.Text>
    <Button variant="primary" className="moviebtn">Watch Movie</Button>
  </Card.Body>
</Card>

        
    )
}
export default MovieCard