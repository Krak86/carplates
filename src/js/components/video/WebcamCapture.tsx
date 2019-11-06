import React, { Fragment } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { AppState } from "../../redux";
import { ApplicationStates, IWebcamCaptureProps } from "../../models/Interfaces";
import { imageFetchData } from "../../redux/actions";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import { URLs } from "../../data/Data";
import lang from "../../locale";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Webcam from "react-webcam";

const useStyles = makeStyles((theme: Theme) => createStyles({
    button: {
        margin: theme.spacing(1),
        width: '50px'
    },
    formControl: {
      margin: theme.spacing(3),
    },
}));

export const WebcamCapture = (props: IWebcamCaptureProps) => {
  const { close, videoDevices } = props;
  const serviceRecognizeImageUrl = process.env.AZURE_FUNC_PLATE_RECOGNIZER_URL || URLs.carPlateRecMlApiUrl;
  const state: ApplicationStates = useSelector((state: AppState) => state.Item, shallowEqual);
  const [deviceId, setDeviceId] = React.useState('');
  const classes = useStyles({});
  const dispatch = useDispatch();
  const webcamRef = React.useRef(null);
   
  const videoConstraints = {
    width: 1280,
    height: 720,
    deviceId: { exact: deviceId }
  };
  const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log(imageSrc);
      fetch(imageSrc)
      .then(res => {
        return res.blob();
      })
      .then(blob => {
        const file = new File([blob], "File name");
        dispatch(imageFetchData(file, serviceRecognizeImageUrl));
        close();
      });
    },
    [webcamRef]
  );  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeviceId((event.target as HTMLInputElement).value);
  };
   
  return (
      <Fragment>
        <Webcam
          audio={false}
          //height={720}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          //width={1280}
          videoConstraints={videoConstraints}
          style={{
            height: "50vh",
            width: "100%",
            //objectFit: "fill",
            //position: "absolute"
         }}
        />
        <Button variant="contained" color="primary" className={classes.button} onClick={capture}>
              <PhotoCameraIcon />
          </Button>
        <FormControl component="fieldset" className={classes.formControl} key={Math.random()}>        
          <FormLabel key={Math.random()} component="legend">{lang(state.lang).messageTurnOnFrontCamera}</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={deviceId} onChange={handleChange} key={Math.random()}>
            {videoDevices !== undefined 
              ? videoDevices.map((d: MediaDeviceInfo) => <FormControlLabel key={Math.random()} value={d.deviceId} control={<Radio key={Math.random()} />} label={d.label} />)
              : null
            }
          </RadioGroup>
        </FormControl>
      </Fragment>
    );
};