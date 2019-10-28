import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { imageFetchData } from "../../store/actions";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import { URLs } from "../../data/Data";
import Webcam from "react-webcam";

const useStyles = makeStyles((theme: Theme) => createStyles({
    button: {
        margin: theme.spacing(1),
        width: '50px'
    },
}));

const videoConstraints = {
    width: 640,
    height: 360,
    facingMode: "environment"
};
   
export const WebcamCapture = (props: {close: any}) => {
    const serviceRecognizeImageUrl = process.env.AZURE_FUNC_PLATE_RECOGNIZER_URL || URLs.carPlateRecMlApiUrl;
    const classes = useStyles({});
    const dispatch = useDispatch();
    const webcamRef = React.useRef(null);
   
    const capture = React.useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(imageSrc);
        fetch(imageSrc)
        .then(res => {
           return res.blob();})
        .then(blob => {
            const file = new File([blob], "File name");
            dispatch(imageFetchData(file, serviceRecognizeImageUrl));
            props.close();
        });
      },
      [webcamRef]
    );
   
    return (
      <Fragment>
        <Webcam
          audio={false}
          height={360}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={640}
          videoConstraints={videoConstraints}
        />
        <Button variant="contained" color="primary" className={classes.button} onClick={capture}>
            <PhotoCameraIcon />
        </Button>
      </Fragment>
    );
  };