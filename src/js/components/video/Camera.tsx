import React, { Fragment, useState, useRef, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { AppState } from "../../redux";
import { ApplicationStates, IWebcamCaptureProps, IEnvConfig } from "../../models/Interfaces";
import { imageFetchData } from "../../redux/actions";
import { URLs } from "../../data/Data";
import Utils from "../../utils/Utils";
import UtilsAsync from "../../utils/UtilsAsync";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const config: IEnvConfig = require("../../../../env.json");

const useStyles = makeStyles((theme: Theme) => createStyles({
  button: {
    margin: theme.spacing(1),
    width: '50px'
},
}));

declare global{
  interface Window {
    stream: MediaStream;
    deviceInfos: MediaDeviceInfo[];
  }
}

export const Camera = (props: IWebcamCaptureProps) => {
  const { close } = props;
  const serviceRecognizeImageUrl = process.env.AZURE_FUNC_PLATE_RECOGNIZER_URL || config.AZURE_FUNC_PLATE_RECOGNIZER_URL;
  const classes = useStyles({});
  const dispatch = useDispatch();
  let canvas: HTMLCanvasElement | null = null;
  let ctx: CanvasRenderingContext2D | null = null;
  let video: HTMLVideoElement | null = null;

  useEffect(() => {
    getDevices()
    .then(getStream)
    .then(gotStream)
    .catch(handleError);
    return function streamTrackStop(){
      if(window.stream){
        UtilsAsync.StreamTrackStop(window.stream);
      }
    };
  });

  const getDevices = (): Promise<MediaDeviceInfo[]> => {
    return UtilsAsync.getVideoDevices();
  };

  const getStream = (deviceInfos: MediaDeviceInfo[]): Promise<MediaStream> => {
    window.deviceInfos = deviceInfos;
    if(window.stream){
      UtilsAsync.StreamTrackStop(window.stream);
    }
    const videoSource: string = deviceInfos[deviceInfos.length-1].deviceId;
    const constraints = {
      video: {
        deviceId: {
          exact: videoSource
        },
        width: {min: 1280}, 
        height: {min: 720}
      }
    };
    return UtilsAsync.getMediaDevices(constraints);
  };

  const gotStream = (stream: MediaStream) => {
    window.stream = stream;
    try{
      if(stream && video){
        video.srcObject = stream;
      }
    }
    catch(error){
      console.error('Error: ', error);
    }
  };

  const handleError = (error) => {
    console.error('Error: ', error);
  }

  const getScreenshot = () => {
    canvas = getCanvas();
    return (
      canvas &&
      canvas.toDataURL("image/webp", 0.92)
    );
  };

  const getCanvas = () => {
    if (!video) {
      return null;
    }
    const canvas = document.createElement("canvas");
    const aspectRatio = video.videoWidth / video.videoHeight;
    canvas.width = video.clientWidth;
    canvas.height = canvas.width / aspectRatio;
    ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);    
    return canvas;
  };

  const capture = () => {
    const imageSrc = getScreenshot();
    if(Utils.isCameraPhotoEmpty(imageSrc)){
      if(window.stream){
        UtilsAsync.StreamTrackStop(window.stream);
      }
      close();
      return;
    }
    fetch(imageSrc)
    .then(res => {
      return res.blob();
    })
    .then(blob => {
      const file = new File([blob], "File name");
      dispatch(imageFetchData(file, serviceRecognizeImageUrl));
      if(window.stream){
        UtilsAsync.StreamTrackStop(window.stream);
      }
      close();
    });
  };

  return(
    <Fragment> 
      <video
        autoPlay
        muted
        playsInline
        ref={ref => {
          video = ref;
        }}
        style={{
          height: "80vh",
          width: "100%",
        }}
      />
      <Button variant="contained" color="primary" className={classes.button} onClick={capture}>
        <PhotoCameraIcon />
      </Button>
    </Fragment> 
  );
}