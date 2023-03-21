import React, {useEffect, useState} from "react";
import {Row, Col} from "react-bootstrap";
import FullScreenAd from "./FullScreenView";
import {action1, action2, action3, action4, action5, action6, action7, action8, action9} from '../assets/images'

const gamesList = [{
    id: 1,
    mainBanner: action1,
    logoBanner: action1,
    appName: '',
    companyName: ''
}, {
    id: 2,
    mainBanner: action2,
    logoBanner: action2,
    appName: '',
    companyName: ''
}, {
    id: 3,
    mainBanner: action3,
    logoBanner: action3,
    appName: '',
    companyName: ''
}, {
    id: 4,
    mainBanner: action4,
    logoBanner: action4,
    appName: '',
    companyName: ''
}, {
    id: 5,
    mainBanner: action5,
    logoBanner: action5,
    appName: '',
    companyName: ''
}, {
    id: 6,
    mainBanner: action6,
    logoBanner: action6,
    appName: '',
    companyName: ''
}, {
    id: 7,
    mainBanner: action7,
    logoBanner: action7,
    appName: '',
    companyName: ''
}, {
    id: 8,
    mainBanner: action8,
    logoBanner: action8,
    appName: '',
    companyName: ''
}, {
    id: 9,
    mainBanner: action9,
    logoBanner: action9,
    appName: '',
    companyName: ''
},];

const GameListPage = (props) => {
    const {isFrom} = props;
    const [showAd, setShowAd] = useState(false);
    let divide = 6;

    useEffect(() => {
        if (showAd) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [showAd]);
    return (
        <div className="container mt-3">
            {showAd && <FullScreenAd setShowAd={setShowAd}>
                <iframe src="https://play561.atmequiz.com/" title="Quiz" width="100%" height="100%"/>
            </FullScreenAd>}
            <div className='add-card h-200'>
                <iframe src="http://1117.set.qureka.com" title="Quiz" width="100%" height="100%"/>
            </div>
            <Row>
                {[...gamesList].map((item, i) => {
                    if (divide / i === 0 || divide / i === 1) {
                        divide = divide + 7;
                        return (<><Col md={12} lg={12} xxl={12} sm={12}>
                                <div className='add-card h-200'>
                                    <iframe src="http://1117.set.qureka.com" title="Quiz" width="100%" height="100%"/>
                                </div>
                            </Col>
                                <Col md={4} lg={4} xxl={4} sm={4}
                                     className="d-flex flex-column game-list-card p-3"
                                     onClick={() => setShowAd(!showAd)}>
                                    <img
                                        className='rounded shadow h-100 w-100'
                                        style={{maxHeight: '220px', maxWidth: '350px'}}
                                        src={item?.mainBanner}
                                        alt=''/>
                                    <div className='mt-3 d-flex gap-3'>
                                        <img
                                            className='rounded shadow'
                                            src={item?.logoBanner}
                                            style={{height: '90px', width: '90px', objectFit: 'cover'}}
                                            alt=''/>
                                        <div>
                                            <p className='m-0'><strong>{item?.appName}</strong></p>
                                            <p className='m-0'><small>{item?.companyName}</small></p>
                                        </div>
                                    </div>
                                </Col>
                            </>
                        )
                    } else {
                        return (<Col md={4} lg={4} xxl={4} sm={4}
                                     className="d-flex flex-column game-list-card p-3"
                                     onClick={() => setShowAd(!showAd)}>
                            <img
                                className='rounded shadow h-100 w-100'
                                style={{maxHeight: '220px', maxWidth: '350px'}}
                                src={item?.mainBanner}
                                alt=''/>
                            <div className='mt-3 d-flex gap-3'>
                                <img
                                    className='rounded shadow'
                                    src={item?.logoBanner}
                                    style={{height: '90px', width: '90px', objectFit: 'cover'}}
                                    alt=''/>
                                <div>
                                    <p className='m-0'><strong>{item?.appName}</strong></p>
                                    <p className='m-0'><small>{item?.companyName}</small></p>
                                </div>
                            </div>
                        </Col>)
                    }
                })}
            </Row>
        </div>
    )
};
export default GameListPage;
