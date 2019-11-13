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

const gotDevices = (deviceInfos: MediaDeviceInfo[]) => {
  window.deviceInfos = deviceInfos; // make available to console
  console.log('Available input and output devices:', deviceInfos);
}

const getDevices = (): Promise<MediaDeviceInfo[]> => {
  // AFAICT in Safari this only gets default devices until gUM is called :/
  return navigator.mediaDevices.enumerateDevices();
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

  const canvas: HTMLCanvasElement | null = null;
  const ctx: CanvasRenderingContext2D | null = null;  
  const stream: MediaStream | null = null;  
  const video: HTMLVideoElement | null = null;

  let src: string = null;
  let videoSource: string = "";

  const devices: MediaStream[] = [];

  const getStream = (videoSource: string) => {
    if (window.stream){
      window.stream.getTracks().forEach((track: MediaStreamTrack) => {
        track.stop();
      });
    }
    const constraints = {
      video: {deviceId: videoSource ? {exact: videoSource} : undefined}
    };
    return navigator.mediaDevices.getUserMedia(constraints).
      then(gotStream).catch(handleError);
  }

  const gotStream = (stream: MediaStream) => {
    window.stream = stream;
    devices.push(stream);
    video.srcObject = stream;
  }

  const handleError = (error: string) => {
    console.error('Error: ', error);
  }

  getStream(videoSource).then(getDevices).then(gotDevices);
    
  return(
          <video
            autoPlay
            muted={false}
            src={src}
            playsInline
            /*ref={ref => {
            this.video = ref;
            }}*/
            style={{
                height: "50vh",
                width: "100%",
            }}
            />
    );
  }