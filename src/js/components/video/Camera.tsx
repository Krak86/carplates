import React, { SyntheticEvent, Fragment, useState, useRef, useEffect } from 'react';
import Utils from "../../utils/Utils";
import UtilsAsync from "../../utils/UtilsAsync";
import lang from "../../locale";
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
}));

declare global{
  interface Window {
    stream: MediaStream;
    deviceInfos: MediaDeviceInfo[];
  }
}

export const Camera = () => {
  const classes = useStyles({});

  const defaultProps = {
        audio: true,
        imageSmoothing: true,
        mirrored: false,
        onUserMedia: () => {},
        onUserMediaError: () => {},
        screenshotFormat: "image/webp",
        screenshotQuality: 0.92,
  };

  const [deviceId, setDeviceId] = React.useState("");
  const [streamObj, setStream] = React.useState("");
  const [errorObj, setError] = React.useState("");

  let canvas: HTMLCanvasElement | null = null;
  let ctx: CanvasRenderingContext2D | null = null;
  let stream: MediaStream | null = null;
  let video: HTMLVideoElement | null = null;
  let src: string = null;
  let videoSource: string = "";

  const getDevices = (): Promise<MediaDeviceInfo[]> => {
    return UtilsAsync.getVideoDevices();
  }

  const getStream = (deviceInfos: MediaDeviceInfo[]): Promise<MediaStream> => {
    window.deviceInfos = deviceInfos;
    if(window.stream){
      window.stream.getTracks().forEach((track: MediaStreamTrack) => {
        track.stop();
      });
    }
    videoSource = deviceInfos[deviceInfos.length-1].deviceId;
    const constraints = {
      video: {
        deviceId: {
          exact: videoSource
        }
      }
    };
    return navigator.mediaDevices.getUserMedia(constraints);
  }
  const gotStream = (stream: MediaStream) => {
    window.stream = stream;
    video.srcObject = stream
    try{
     
      if(stream && video){
        video.srcObject = stream;
      }
      setStream(`${streamObj}`);
      setDeviceId(`'Available devices:' ${JSON.stringify(window.deviceInfos)}`);
      setError("");
      console.log('Available devices:', window.deviceInfos);
      console.log('MediaStream: ', window.stream);
    }
    catch(error){
      console.error('Error: ', error);
      setError(`Error: ${JSON.stringify(error)}`);
    }
  }

  const handleError = (error) => {
    console.error('Error: ', error);
  }

  getDevices()
  .then(getStream)
  .then((stream: MediaStream) => new Promise((resolve) => setTimeout(() => {resolve(stream)}, 2000)))
  .then(gotStream)
  .catch(handleError);
    
  return(
    <Fragment> 
          <video
            autoPlay
            muted
            //src={src}
            playsInline
            ref={ref => {
              video = ref;
            }}
            style={{
                height: "50vh",
                width: "100%",
            }}
          />
          <p>{deviceId}</p>
          <p>{streamObj}</p>
          <p>{errorObj}</p>
    </Fragment> 
  );
}