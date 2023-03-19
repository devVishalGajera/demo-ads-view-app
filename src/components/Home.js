import React from "react";
import {useNavigate} from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';
import actionImg from '../assets/images/action.png';
import adventureImg from '../assets/images/adventure.jpg';

function Home() {
    const navigate = useNavigate();
    return (
        <div className="container mt-3">
            <div className='add-card h-200'>
                <iframe src="http://1117.set.qureka.com" title="Quiz" width="100%" height="100%"/>
            </div>
            <div className='d-flex flex-wrap my-5 align-items-center justify-content-evenly gap-3'>
                <Card className='game-cards'
                      style={{backgroundImage: `url(${actionImg})`, height: '250px', width: '250px'}}>
                    <Card.Body className='d-flex align-items-end'>
                        <Button className='w-100' variant="light" onClick={() => navigate('/action')}>Action</Button>
                    </Card.Body>
                </Card>
                <Card className='game-cards'
                      style={{backgroundImage: `url(${adventureImg})`, height: '250px', width: '250px'}}>
                    <Card.Body className='d-flex align-items-end'>
                        <Button className='w-100' variant="light" onClick={() => navigate('/adventure')}>Adventure</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='add-card h-200'>
                <iframe src="http://1117.set.qureka.com" title="Quiz" width="100%" height="100%"/>
            </div>
        </div>
    );
}

export default Home;
