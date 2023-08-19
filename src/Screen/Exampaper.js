import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
                 
{/* Dataset  */}
const data = [{
    questionnum: 'Question 1',
    question: '  In Python, how do you create a variable “a” that is equal to 2? ',
    answer1: 'a. var a= 2',
    answer2: 'b. variable a = 2',
    answer3: 'c. int a = 2',
    answer4: 'd. a = 2'

},
{
    questionnum: 'Question 2',
    question: '  In Python, how do you create a variable “a” that is equal to 2? ',
    answer1: 'a. var a= 2',
    answer2: 'b. variable a = 2',
    answer3: 'c. int a = 2',
    answer4: 'd. a = 2'
}]
export default function Exampaper() {
    const handleClick = () => {
        alert('Successfully Submitted');
    };
    return (
        <div  >
            <div style={{ paddingTop: '9vh', paddingLeft: '10vh', paddingRight: '10vh' }}>
                <p>

                    <img style={{ width: '3%' }} src="https://res.cloudinary.com/iplus/image/upload/v1678614875/test/clock_mnayva.png" alt="clock" />
                    {/* time  */}
                    &nbsp; 20 Minites Remaning
                </p>
            </div>
            <div style={{ paddingTop: '1vh', paddingLeft: '10vh', paddingRight: '10vh' }}>
                <Card >
                    <div>
                        <div style={{ paddingTop: '5vh', paddingLeft: '15vh', paddingRight: '3vh' }}>
                            <Row>

                                <Col sm={9}>
                                    <h2 >Formative Test 1</h2>
                                    <div style={{ paddingTop: '4vh' }}>
                                        <div style={{ paddingTop: '1vh' }}>
                                            {/* Card  */}

                                            {data.map((data) => {
                                                return (
                                                    <Card style={{ borderColor: 'white' }}>
                                                <h4>{data.questionnum}</h4>
                                                <h6>
                                                {data.question}
                                                </h6>

                                                <p> {data.answer1}<br />
                                                {data.answer2}<br />
                                                {data.answer3}<br />
                                                {data.answer4}
                                                </p>
                                            </Card>
                                                )
                                            })}

                                        </div>

                                    </div>

                                </Col>
                                <Col sm={3}>
                                    <img style={{ width: "200px", height: "173px" }} src='https://preview.redd.it/anime-boy-not-sure-what-to-draw-v0-up4i92bytvea1.jpg?auto=webp&s=42aa6ad5a5eb452c6ac87c69bde3e1eb69b56313' alt="user" />
                                </Col>
                            </Row>
                        </div>

                        <div style={{ paddingTop: '1vh', paddingBottom: '2vh', paddingLeft: '80%' }}>
                            <Button style={{ backgroundColor: '#9E9CA0', borderColor: '#9E9CA0', color: 'black', paddingLeft: '7vh', paddingRight: '7vh', borderRadius: '18px' }} variant="primary" size="lm"
                                onClick={handleClick}
                            >
                                ~ Submit ~
                            </Button>
                        </div>
                    </div>

                </Card>
            </div>

        </div>
    );
}
