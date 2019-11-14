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
  let canvas: HTMLCanvasElement | null = null;
  let ctx: CanvasRenderingContext2D | null = null;
  let stream: MediaStream | null = null;
  let video: HTMLVideoElement | null = null;
  let src: string = null;
  let videoSource: string = "";

  const devices: MediaStream[] = [];

  const getStream = async (videoSource: string): Promise<void> => {
    const deviceInfos: MediaDeviceInfo[] = await UtilsAsync.getVideoDevices();
    window.deviceInfos = deviceInfos;
    //3991eaf37b0a338f952e799f6c5c1fbf597bea79a397ba8401543510c2baa593
    //videoSource = deviceInfos.filter(d => d.label === "Logitech QuickCam S5500")[0].deviceId;
    videoSource = deviceInfos[deviceInfos.length-1].deviceId;
    setDeviceId(videoSource);
    console.log('Available devices:', deviceInfos);

    if(stream){
      stream.getTracks().forEach((track: MediaStreamTrack) => {
        track.stop();
      });
    }
    const constraints = {
      video: {deviceId: videoSource ? {exact: videoSource} : undefined}
    };
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    window.stream = stream;
    console.log('MediaStream: ', stream);

    try{
      if(video){
        video.srcObject = stream;
      }
    }
    catch(error){
      src = window.URL.createObjectURL(stream);
      console.error('Error: ', error);
    }
  }

  getStream(videoSource);
    
  return(
    <Fragment> 
          <video
            autoPlay
            muted
            src={src}
            playsInline
            ref={ref => {
              video = ref;
            }}
            style={{
                height: "50vh",
                width: "100%",
            }}
          />
          {deviceId}
    </Fragment> 
  );
}