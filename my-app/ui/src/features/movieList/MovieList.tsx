import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { selectMovieDetails, saveSelectedMovieId, } from '../home/homeSlice';
import './MovieList.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export function MovieList() {  
  const dispatch = useDispatch();
  const history = useHistory();
  const movieDetailsObj:any = useSelector(selectMovieDetails);
  const movieDetails:any = movieDetailsObj.data;
  
  function handleMoreDtlsClk(selectedMovieId: string) {
    dispatch(saveSelectedMovieId(selectedMovieId || "0"));
    history.push(`/movieDetail`);
  }

  return (
    <Container fluid className="Home-Container">
      <Row className="Home-Row1">
        <Col className="Home-Col1">
          
        <Carousel responsive={responsive} >
        {
          movieDetails.map((movieDetail:any) => (
            <Card className="MovieList-Card" key={movieDetail.imdbID}>
              <Card.Header className="MovieList-Header d-flex justify-content-center">
                <Card.Title>{movieDetail.Title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  A short description will come here shortly
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center">
                <Button variant="primary" 
                  onClick={() => handleMoreDtlsClk(movieDetail.imdbID)}
                >
                  More Details
                </Button>
              </Card.Footer>
            </Card>
          ))
        }
        </Carousel>

        </Col>
      </Row>
    </Container>
  );
}
