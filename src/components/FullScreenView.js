import React, {useEffect, useState} from 'react';

function FullScreenAd(props) {
    const {setShowAd, children} = props;
    const [showCloseBtn, setShowCloseBtn] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowCloseBtn(!showCloseBtn);
        }, 5000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [])
    return (
        <div className="full-screen-ad">
            {showCloseBtn && <button className="close-button" onClick={() => setShowAd(prev => !prev)}>
                X
            </button>}
            {children && children}
        </div>
    );
}

export default FullScreenAd;
