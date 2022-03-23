import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom'


function NavBar({ settitleSearch, showModal, setRating }) {
  const ratingChanged = (newRating) => {
    setRating(newRating)
  };
  return (
    <Navbar bg="light" expand="lg" sticky="top" >
      <Container fluid>
        <Navbar.Brand>Movies Checkpoint</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <Link to='/' className='NavLinks'> <Nav>Home</Nav> </Link>
           <Link to='/movies' className='NavLinks'><Nav>Movies</Nav></Link>
            <NavDropdown title="Add Movies" id="navbarScrollingDropdown" className="dropdown">
              <NavDropdown.Item onClick={() => showModal(true)}>Add Movies</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
          />
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => settitleSearch(e.target.value)}
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavBar 