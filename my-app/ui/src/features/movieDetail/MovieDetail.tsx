import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { selectMovieSelected, } from '../home/homeSlice';
import './MovieDetail.css';

export function MovieDetail() {  

  const selectedMovie:any = useSelector(selectMovieSelected);

  return (
    <Container fluid className="Home-Container">
      <Row className="Home-Row1">
        <Col className="Home-Col1">
          <Jumbotron>
            <div className="MovieDetail-Name">
            <h1>
              Name: {selectedMovie.Title}
            </h1>
            </div>
            <div>
              <p>
              Year: {selectedMovie.Year}
              </p>
            </div>
            <div>
              <p>
              ImdbID: {selectedMovie.imdbID}
              </p>
            </div>
          </Jumbotron>
          <Link to ='/movieList' className="d-flex justify-content-center">Back to Movie List</Link>
        </Col>
      </Row>
    </Container>
  );
}
