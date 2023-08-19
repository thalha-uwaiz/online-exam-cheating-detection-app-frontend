import React from "react";
import SideNavBar from "../Component/Sidebar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Teacherexam() {

    return (
        <div  >
            <Row>
                <Col sm={2}>
                    <SideNavBar />


                </Col>
                <Col sm={10}>

                    <div style={{ paddingLeft: '2vh', paddingTop: '8vh' }}>
                        <div style={{ paddingLeft: '30vh' }}>
                            <p style={{ fontSize: '30px' }}><Image src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8" style={{ width: '10%' }} roundedCircle={true} />
                                &nbsp; <b>Hello John Perea</b></p>
                        </div>

                        <div style={{ paddingTop: '2vh', paddingLeft: '30vh', paddingRight: '45vh' }}>

                            <Card style={{ backgroundColor: '#330A6A', borderRadius: '18px' }}>
                                <div style={{ paddingLeft: '6vh', paddingTop: '4vh', paddingBottom: '3vh' }}>
                                    <h3 style={{ color: 'white' }}>Please select your exam and click on
                                        Attempt to begin.</h3>
                                </div>
                                <div style={{ paddingLeft: '30%', paddingRight: '30vh', paddingBottom: '4vh', paddingTop: '5vh' }}>
                                    <Form>
                                        <Row>
                                            <Form.Group className="mb-3" style={{ borderRadius: '18px'}}>
                                                <Form.Select style={{ borderRadius: '18px',backgroundColor:'#D8B7FA'}} >
                                                    <option >Select Exam</option>
                                                    <option> Exam 1</option>
                                                    <option>Exam 2</option>
                                                    <option>Exam 3</option>

                                                </Form.Select>
                                            </Form.Group>
                                           
                                        </Row>


                                        <div style={{ paddingLeft: '20%', paddingTop: '8vh' }}>
                                            <Button style={{ backgroundColor: '#8FE5FF', color: 'black', paddingLeft: '7vh', paddingRight: '7vh', borderRadius: '18px' }} variant="primary" size="lm">
                                                ~ Save ~
                                            </Button>
                                        </div>

                                    </Form>
                                </div>
                            </Card>
                        </div>
                    </div>
                </Col>
            </Row>
            
        </div>
    );
}
