import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




import '../Screen/signin.css';


export default function Signin(){

    return (
        <div style={{ backgroundColor: '#330A6A' }} >
            <Container>
                <Row>
                    <Col>
                        <div>

                            <img src="https://res.cloudinary.com/iplus/image/upload/v1678459363/test/new_tszsox.png" alt='cover' style={{ float: 'right', width: '120%' }} />
                        </div>

                    </Col>

                    <Col>
                        <div>
                            <img src="https://res.cloudinary.com/iplus/image/upload/v1678534187/test/logo_gxle55.png" alt='logo' style={{ width: '85%', paddingTop: '13vh', paddingLeft: '35vh', }} />
                        </div>
                        <div style={{ paddingLeft: '5vh ', paddingTop: '3vh' }}>
                        <li class='li'><input class='input' type="checkbox" id="cb1"  />
                            <label class='label1' for="cb1" style={{width:'100%'}}>
                            <Card style={{ backgroundColor: '#330A6A', border: "2px solid #57B9DD" }}>
                                            <div style={{ paddingTop: '1vh', paddingLeft: '1vh', paddingRight: '1vh', paddingBottom: '1vh' }}>
                                                <Row>
                                                    <Col sm={4}><img src='https://res.cloudinary.com/iplus/image/upload/v1678536815/test/user_izpqdu.png' alt='user' style={{ width: '160%' }} /></Col>
                                                    <Col sm={8}>
                                                        <div style={{ paddingLeft: '1vh', color: '#57B9DD',paddingTop:'1vh' }}>
                                                            <h5>Join as</h5>
                                                            <h5>Student</h5>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                            </label>
                        </li>
                        <li class='li'><input class='input' type="checkbox" id="cb2"  />
                            <label class='label1' for="cb2" style={{width:'100%'}}>
                            <Card style={{ backgroundColor: '#330A6A', border: "2px solid #57B9DD" }}>
                                            <div style={{ paddingTop: '1vh', paddingLeft: '1vh', paddingRight: '1vh', paddingBottom: '1vh' }}>
                                                <Row>
                                                    <Col sm={4}><img src='https://res.cloudinary.com/iplus/image/upload/v1678536815/test/user_izpqdu.png' alt='user' style={{ width: '160%' }} /></Col>
                                                    <Col sm={8}>
                                                        <div style={{ paddingLeft: '1vh', color: '#57B9DD',paddingTop:'1vh' }}>
                                                            <h5>Join as</h5>
                                                            <h5>Teacher</h5>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                            </label>
                        </li>
                        </div>

                        <div>
                            <div style={{ paddingLeft: '5vh', color: '#57B9DD', paddingTop: '3vh', paddingBottom: '1vh' }}>
                                <h4>Sign In</h4>
                            </div>
                            <div style={{ paddingLeft: '5vh', paddingRight: '10vh' }}>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control type="email" 
                                        placeholder="email" 
                                        style={{ backgroundColor: '#330A6A', border: "2px solid #57B9DD" ,color:'white'}} />

                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="password" 
                                        placeholder="Password" 
                                        style={{ backgroundColor: '#330A6A', border: "2px solid #57B9DD",color:'white' }} />
                                    </Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                                                <Form.Check type="checkbox" label="Check me out" style={{ backgroundColor: '#330A6A', color: '#57B9DD' }} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <div style={{ paddingLeft: '10vh' }}>
                                                <a href="/#" style={{ color: '#57B9DD', float: 'left' }} ><p>Forgot Password?</p></a>
                                            </div>
                                        </Col>


                                    </Row>
                                    <div style={{ paddingLeft: '3vh', paddingRight: '3vh' }}>
                                        <div  className="d-grid gap-2">
                                            <Button  type="submit" size="lg" style={{ backgroundColor: '#57B9DD', color: '#330A6A' }}>
                                                Login
                                            </Button>
                                        </div>
                                    </div>
                                    <div style={{ color: 'white', paddingTop: '2vh', paddingLeft: '30%' }}>
                                        Log in using your acount on
                                    </div>
                                    <div  style={{  paddingLeft: '45%',paddingTop:'2vh' }}>
                                    
                                        <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 0C9.17717 0 0 8.955 0 20C0 31.045 9.17717 40 20.5 40C31.8211 40 41 31.045 41 20C41 8.955 31.8211 0 20.5 0ZM20.7392 31.6967C14.1313 31.6967 8.78083 26.4633 8.78083 20C8.78083 13.5367 14.1313 8.30333 20.7392 8.30333C23.9679 8.30333 26.6671 9.465 28.7376 11.3517L25.3653 14.6483V14.6417C24.1097 13.4717 22.5175 12.8717 20.7392 12.8717C16.7929 12.8717 13.5864 16.1317 13.5864 19.9933C13.5864 23.8517 16.7929 27.1217 20.7392 27.1217C24.3198 27.1217 26.7559 25.1183 27.2582 22.3683H20.7392V17.8067H31.9885C32.1389 18.59 32.2192 19.4067 32.2192 20.2633C32.2192 26.9467 27.646 31.6967 20.7392 31.6967Z" fill="white" />
                                    </svg>
                                  
                                    </div>
                                    


                                </Form>
                            </div>
                        </div>




                    </Col>
                </Row>
            </Container>
            
        </div>
    );
    }
