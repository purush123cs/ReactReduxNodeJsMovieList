import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import './Home.css';
import { onSubmit, } from './homeSlice';


export function Home() {  
  const dispatch = useDispatch();
  const history = useHistory();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      await dispatch(onSubmit());
      setValidated(true);
      history.push(`/movieList`);
    } else {
      setValidated(true);//after the component is unmounted using history.push, we cannot
        //perform a react state update. We will get memory leak warning. Hence validated state
        //update in 2 places 1)before component unmount and 2)here ie other flow
    }
  }

  return (
    <Container fluid className="Home-Container">
      <Row className="Home-Row1">
        <Col className="Home-Col1">
          <Card className="Home-Card">
          <Card.Header as="h3" className="Home-CardHeader">Welcome</Card.Header>
            <Card.Body>
              <Card.Title>
                <div className="HomeLogin">Login</div>
              </Card.Title>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control 
                    value={userName} 
                    onChange={e => setUserName(e.target.value)} 
                    required
                    autoComplete="off"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your username.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    required
                    autoComplete="off"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your password.
                  </Form.Control.Feedback>
                </Form.Group>
                <div className="submitBtn">
                  <Button variant="primary" type="submit" >
                    Submit
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
    </Container>
    
  );
}
