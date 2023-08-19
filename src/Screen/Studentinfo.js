import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const data = [{
    name: 'John Perera',
    id: '12345678',
    status: 'in progress',
    image: 'https://preview.redd.it/anime-boy-not-sure-what-to-draw-v0-up4i92bytvea1.jpg?auto=webp&s=42aa6ad5a5eb452c6ac87c69bde3e1eb69b56313'
}, {
    name: 'Syman Perera',
    id: '12345678',
    status: 'in progress',
    image: 'https://preview.redd.it/anime-boy-not-sure-what-to-draw-v0-up4i92bytvea1.jpg?auto=webp&s=42aa6ad5a5eb452c6ac87c69bde3e1eb69b56313'
}, {
    name: 'Kamal Perera',
    id: '12345678',
    status: 'inprogress',
    image: 'https://preview.redd.it/anime-boy-not-sure-what-to-draw-v0-up4i92bytvea1.jpg?auto=webp&s=42aa6ad5a5eb452c6ac87c69bde3e1eb69b56313'
}, {
    name: 'Antan Perera',
    id: '12345678',
    status: 'in progress',
    image: 'https://preview.redd.it/anime-boy-not-sure-what-to-draw-v0-up4i92bytvea1.jpg?auto=webp&s=42aa6ad5a5eb452c6ac87c69bde3e1eb69b56313'
}, {
    name: 'Roy Perera',
    id: '12345678',
    status: 'in progress',
    image: 'https://preview.redd.it/anime-boy-not-sure-what-to-draw-v0-up4i92bytvea1.jpg?auto=webp&s=42aa6ad5a5eb452c6ac87c69bde3e1eb69b56313'
}


]

export default function Studentinfo() {
    const [show, setShow] = useState(false);
    const [name, setname] = useState("");
    const [image, setimage] = useState("");
    const [status, setstatus] = useState("");
    const [_id, setid] = useState(" ");
    const handleClose = () => setShow(false);
    const handleShow = (name, id, status, image) => {
        setShow(true);
        setid(id);
        setname(name);
        setimage(image);
        setstatus(status);
    }
    const [active, setActive] = useState(false);
    const [buttonText, setButtonText] = useState('Send a warning');

    const handleClick = () => {
        setActive(!active);
        setButtonText('Warning Sent');

    };


    return (
        <div  >

            <div style={{ paddingTop: '4vh', paddingLeft: '15vh', paddingRight: '15vh', paddingBottom: '3vh' }}>
                <a href="/profile"><img style={{ width: '3%' }} src=" https://res.cloudinary.com/iplus/image/upload/v1678620183/test/back_u1gfb1.png" alt="clock" /></a> <br /><br />

                <Card style={{ borderColor: 'white' }} >
                    <Row xs={1} md={4} className="g-4">
                        {data.map((data) => {
                            return (<Col>

                                <Card onClick={() => handleShow(data.name, data.id, data.status, data.image)} >
                                    <Card.Body>
                                        <Row>
                                            <Col sm={7}>
                                                <p>{data.name} <br />
                                                    {data.id}
                                                </p>
                                            </Col>
                                            <Col sm={5}>
                                                <Button style={{ backgroundColor: '#E9A800', borderColor: '#E9A800', color: 'black', borderRadius: '18px' }} size="sm"
                                                >
                                                    {data.status}
                                                </Button>
                                            </Col>
                                        </Row>
                                        <Card.Img style={{ width: '90%' }} variant="top" src={data.image}
                                        />

                                    </Card.Body>
                                </Card>

                            </Col>)
                        })}


                    </Row>
                </Card>

            </div>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Card  >
                    <Card.Body>
                        <Card.Img style={{ width: '90%' }} variant="top" src={image} />

                        <Row>
                            <Col sm={7}>
                                <p>{name} <br />
                                    {_id}
                                </p>
                                <Button style={{ backgroundColor: '#E9A800', borderColor: '#E9A800', color: 'black', borderRadius: '18px' }} size="sm">
                                    {status}
                                </Button>
                            </Col>
                            <Col sm={5}>
                                <div style={{ paddingTop: '3vh' }}>
                                    <Button style={{ backgroundColor: active ? "#51EF06" : "#EF0606" , borderColor: active ? "#51EF06" : "#EF0606" , color: 'black', borderRadius: '18px' }} size="lm" onClick={handleClick}>
                                        {buttonText}
                                    </Button>
                                </div>
                            </Col>
                        </Row>

                    </Card.Body>
                </Card>
            </Modal>
        </div>
    );
}
