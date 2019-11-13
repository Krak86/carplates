import React, { SyntheticEvent, Fragment, useState, useRef, useEffect } from 'react';
import Utils from "../../utils/Utils";
import UtilsAsync from "../../utils/UtilsAsync";
import lang from "../../locale";
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
}));

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
    
    return (
      <Fragment>
          {video === null
          ?<video
            autoPlay
            muted={false}
            src={src}
            playsInline
            ref={ref => {
            this.video = ref;
            }}
            style={{
                height: "50vh",
                width: "100%",
            }}
            />
        : ""}
        
      </Fragment>
    );
  }