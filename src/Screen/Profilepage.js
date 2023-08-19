import React from "react";
import SideNavBar from "../Component/Sidebar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Profilepage() {

    return (
        <div  >
            <Row>
                <Col sm={2}>
                    <SideNavBar />


                </Col>
                <Col sm={10}>

                    <div style={{ paddingLeft: '2vh', paddingTop: '2vh' }}>
                        <p style={{ fontSize: '30px' }}><Image src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8" style={{ width: '12%' }} roundedCircle={true} />
                            &nbsp; John Perea</p>
                        <div style={{ paddingTop: '2vh', paddingLeft: '25vh', paddingRight: '35vh' }}>

                            <Card style={{ backgroundColor: '#330A6A', borderRadius: '18px' }}>
                                <div style={{ paddingLeft: '2vh', paddingTop: '2vh' }}>
                                    <h5 style={{ color: 'white' }}>Change password</h5>
                                    <p style={{ color: '#8FE5FF' }}>Changing the login password frequently prevents unauthorized users from modifying configurations</p>
                                </div>
                                <div style={{ paddingLeft: '3vh', paddingRight: '3vh', paddingBottom: '4vh', paddingTop: '2vh' }}>
                                    <Form>
                                        <Row>

                                            <Col sm={3}>
                                                <p style={{ color: 'white' }}>Current Password</p>
                                            </Col>
                                            <Col sm={9}>
                                                <div style={{ paddingRight: '15vh' }}>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">

                                                        <Form.Control style={{ backgroundColor: '#D8B7FA', borderRadius: '18px' }} type="password" placeholder="Enter password" />
                                                    </Form.Group>
                                                </div>
                                            </Col>


                                            <Col sm={3}>
                                                <p style={{ color: 'white' }}>New Password</p>
                                            </Col>
                                            <Col sm={9}>
                                                <div style={{ paddingRight: '15vh' }}>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">

                                                        <Form.Control style={{ backgroundColor: '#D8B7FA', borderRadius: '18px' }} type="password" placeholder="Enter New Password" />
                                                    </Form.Group>
                                                </div>
                                            </Col>

                                            <Col sm={3}>
                                                <p style={{ color: 'white' }}>Confirm Password</p>
                                            </Col>
                                            <Col sm={9}>
                                                <div style={{ paddingRight: '15vh' }}>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">

                                                        <Form.Control style={{ backgroundColor: '#D8B7FA', borderRadius: '18px' }} type="password" placeholder="Confirm Password" />
                                                    </Form.Group>
                                                </div>
                                            </Col>
                                        </Row>


                                        <div style={{ paddingLeft: '40%', paddingTop: '8vh' }}>
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
            hello
        </div>
    );
}
