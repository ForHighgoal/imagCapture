import React, { Component, useState } from 'react';

import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
};

 const WebcamCapture = () => {
    const [image, setImage] = useState('');
    const capture = React.useCallback(

        () => {

            const imageSrc = webcamRef.current.getScreenshot();

            setImage(imageSrc)

        });

    const webcamRef = React.useRef(null);

    return (
        <div className="webcam-container">
            <Webcam
                audio={false}
                height={200}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={220}
                videoConstraints={videoConstraints}
            />
            <div>
                {image != '' ?

                    <button onClick={(e) => {

                        e.preventDefault();

                        setImage('')

                    }}

                        className="webcam-btn">

                        Retake Image</button> :

                    <button onClick={(e) => {

                        e.preventDefault();

                        capture();

                    }}

                        className="webcam-btn">Capture</button>

                }
            </div>
            <button
                onClick={(e) => { e.preventDefault(); capture() }}>
                Capture</button>
        </div>
    );
};

export default WebcamCapture