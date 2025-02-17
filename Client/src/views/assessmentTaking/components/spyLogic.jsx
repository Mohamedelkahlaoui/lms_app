import React, { useRef, useCallback, useState, useEffect } from 'react'
import ReactS3 from 'react-s3';
import Webcam from 'react-webcam'
import { ReactMic } from '@cleandersonlobo/react-mic'
import { uploadFile } from 'react-s3'
import { useSelector } from 'react-redux'
import './../styles.css'
import cheatingService from '../../../services/cheatingService'
import ReactCountdownClock from 'react-countdown-clock'
import { useHistory } from 'react-router-dom'

const SpyLogic = (props) => {
  const history = useHistory();
  const webcamRef = useRef(null);
  const user = useSelector((state) => state.auth.user);
  const [cnt, setCnt] = useState(1);
  const [record, setRecord] = useState(false);
  const [frst, setFrst] = useState(true);

  const { examId, timeRemaining } = props;

  // AWS S3 Configuration
  const S3_BUCKET = ''; // Replace with your actual S3 bucket name
  const REGION = '';    // Replace with your actual AWS region
  const ACCESS_KEY = ''; // Replace with your actual AWS access key ID
  const SECRET_ACCESS_KEY = ''; // Replace with your actual AWS secret access key

  const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    dirName: user.name + ':' + user._id,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY
  };


  const handleUpload = async (file) => {
    try {
      const response = await ReactS3.uploadFile(file, config);
      console.log(response);
      // Handle successful upload here (e.g., update UI, store data)
    } catch (error) {
      console.error(error);
      // Handle upload error here
    }
  };

  const startRecording = () => {
    setRecord(true);
  };

  const stopRecording = () => {
    setRecord(false);
  };

  const eventHandler = () => {
    document.title = document.hidden ? window.close() : "DON'T go away";
  };

  useEffect(() => {
    let intervalId;
    if (!frst){
      intervalId = setInterval(() => {
        capture(); // Call capture directly
      }, 1500);
    }

    return () => clearInterval(intervalId);
  }, [webcamRef, cnt, frst]); // Add all dependencies to the array

  useEffect(() => {
    document.addEventListener('visibilitychange', eventHandler);
    try {
      cheatingService.clear();
    } catch {
      console.log('no pre counter found');
    }
  }, []); // Empty dependency array ensures this runs only once

  useEffect(() => {
    return () => {
      document.removeEventListener('visibilitychange', eventHandler);
      stopRecording();
      history.goBack();
    };
  }, [history]);


  const onStop = async (recordedBlob) => {
    console.log('recordedBlob is: ', recordedBlob);
    const blob = await fetch(recordedBlob.blobURL).then((res) => res.blob());
    blob.name = 'recording.mp3';
    handleUpload(blob);
  };
  const capture = useCallback(async () => {
    if (frst) {
      setFrst(false);
    } else {
      if (cnt === 1) {
        startRecording();
      }
      setCnt(cnt + 1);
      const imageSrc = webcamRef.current.getScreenshot();
      const blob = await fetch(imageSrc).then((res) => res.blob());
      blob.name = cnt.toString() + '.jpeg';
      if (cnt === 7) {
        setCnt(1);
        stopRecording();
      }
      console.log(blob);
      handleUpload(blob);
      cheatingService.batchInc(examId);
    }
  }, [webcamRef, cnt, frst]); // Include all dependencies

  return (
    <div className="container">
      <Webcam
        audio={false}
        width={240}
        height={240}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={{
          width: 240,
          height: 240,
          facingMode: 'user'
        }}
      />
      {/*<button onClick={capture}>Capture</button>*/}
      <ReactMic
        record={record}
        className="sound-wave"
        mimeType="audio/mp3"
        onStop={onStop}
        echoCancellation={true}
        autoGainControl={true}
        noiseSuppression={true}
      />
      <ReactCountdownClock
        seconds={timeRemaining}
        color="#000"
        alpha={0.9}
        size={240}
        onComplete={() => {
          stopRecording()
          cheatingService.clear()
          document.removeEventListener('visibilitychange', eventHandler)
          window.close()
        }}
      />
    </div>
  )
}

export default SpyLogic
