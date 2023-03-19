import React, {useEffect, useState} from "react";
import {Row, Col} from "react-bootstrap";
import FullScreenAd from "./FullScreenView";

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
                {[...Array(30)].map((_, i) => {
                    if (divide / i === 0 || divide / i === 1) {
                        divide = divide + 7;
                        return (<Col md={12} lg={12} xxl={12} sm={12}>
                            <div className='add-card h-200'>
                                <iframe src="http://1117.set.qureka.com" title="Quiz" width="100%" height="100%"/>
                            </div>
                        </Col>)
                    } else {
                        return (<Col md={4} lg={4} xxl={4} sm={4}
                                     className="d-flex flex-column game-list-card p-3"
                                     onClick={() => setShowAd(!showAd)}>
                            <img
                                className='rounded shadow'
                                src='https://play-lh.googleusercontent.com/_Ub7v4j6_rVA26PX7KkAwCLaF6nfsrpwMfh1mfhukwp6FLNrc6vHqwn1CwffBR7PUuc=w416-h235-rw'
                                alt=''/>
                            <div className='mt-3 d-flex gap-3'>
                                <img
                                    className='rounded shadow'
                                    src='https://play-lh.googleusercontent.com/_dDFSU1PlfewLJHAeY8dd4xjUV5-7oBmCRZdLyIh-DV4q71NaeQsf8bNSv8S95lmCPs=s64-rw'
                                    alt=''/>
                                <div>
                                    <p className='m-0'><strong>Mobile Bank : Balance Checker</strong></p>
                                    <p className='m-0'><small>Soul Celestia Solutions</small></p>
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