import React, { Fragment } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { AppState } from "../../store";
import { ApplicationStates} from "../../models/Interfaces";
import { imageFetchData } from "../../store/actions";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import { URLs } from "../../data/Data";
import lang from "../../locale";
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Webcam from "react-webcam";

const useStyles = makeStyles((theme: Theme) => createStyles({
    button: {
        margin: theme.spacing(1),
        width: '50px'
    },
}));

export const WebcamCapture = (props: {close: any}) => {
  const serviceRecognizeImageUrl = process.env.AZURE_FUNC_PLATE_RECOGNIZER_URL || URLs.carPlateRecMlApiUrl;
  const state: ApplicationStates = useSelector((state: AppState) => state.Item, shallowEqual);
  const [frontCamera, setFrontCamera] = React.useState({
    checked: false,
  });
  const classes = useStyles({});
  const dispatch = useDispatch();
  const webcamRef = React.useRef(null);
   
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: frontCamera.checked === true
     ? "user" 
     :  { exact: "environment" }
  };

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

  const handleSwitchChange =  (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFrontCamera({ ...frontCamera, [name]: event.target.checked });
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
            height: "85vh",
            width: "100%",
            //objectFit: "fill",
            //position: "absolute"
         }}
        />
        <FormGroup row>
          <Button variant="contained" color="primary" className={classes.button} onClick={capture}>
              <PhotoCameraIcon />
          </Button>
          <FormControlLabel
            control={
              <Switch
                checked={frontCamera.checked}
                onChange={handleSwitchChange('checked')}
                value="checked"
                color="primary"
              />
            }
            label= {lang(state.lang).messageTurnOnFrontCamera}
          />
       </FormGroup>
      </Fragment>
    );
  };