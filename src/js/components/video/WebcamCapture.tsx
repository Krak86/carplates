import React, { Fragment } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { AppState } from "../../redux";
import { ApplicationStates, IWebcamCaptureProps, IDevicesState } from "../../models/Interfaces";
import { imageFetchData } from "../../redux/actions";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import SearchIcon from '@material-ui/icons/Search';
import { URLs } from "../../data/Data";
import UtilsAsync from "../../utils/UtilsAsync";
import lang from "../../locale";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
//import Webcam from "react-webcam";
import Webcam from './Webcam';

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
  const { close } = props;
  const serviceRecognizeImageUrl = process.env.AZURE_FUNC_PLATE_RECOGNIZER_URL || URLs.carPlateRecMlApiUrl;
  const state: ApplicationStates = useSelector((state: AppState) => state.Item, shallowEqual);
  const [deviceId, setDeviceId] = React.useState('3991eaf37b0a338f952e799f6c5c1fbf597bea79a397ba8401543510c2baa593');
  const classes = useStyles({});
  const dispatch = useDispatch();
  const webcamRef = React.useRef(null);

  const [devices, setVideoDevices] = React.useState<IDevicesState>({value: []});

  const handleDevicesChange = (values: MediaDeviceInfo[]) => {
    setVideoDevices({...devices, value: values});
  };

  const takeAPhoto = async () =>{
        const vDevices = await UtilsAsync.getVideoDevices();
        handleDevicesChange(vDevices);
  };

  const videoConstraints = {
    width: 1280,
    height: 720,
    deviceId: { exact: deviceId }
  };
  const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      //console.log(imageSrc);
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

  console.log(`deviceId: ${deviceId}`);
  console.log(`videoConstraints: ${videoConstraints.deviceId.exact}`);
   
  return (
      <Fragment>
        <Webcam
          audio={false}          
          ref={webcamRef}
          screenshotFormat="image/jpeg"          
          videoConstraints={videoConstraints}
          style={{
            height: "50vh",
            width: "100%",
         }}
        />
       <Button variant="contained" color="primary" className={classes.button} onClick={takeAPhoto}>
              <SearchIcon />
          </Button>
      <Button variant="contained" color="primary" className={classes.button} onClick={capture}>
              <PhotoCameraIcon />
          </Button>
        <FormControl component="fieldset" className={classes.formControl} key={Math.random()}>        
          <FormLabel key={Math.random()} component="legend">{lang(state.lang).messageTurnOnFrontCamera}</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={deviceId} onChange={handleChange} key={Math.random()}>
            {devices !== undefined 
              ? devices.value.map((d: MediaDeviceInfo) => <FormControlLabel 
                key={Math.random()} 
                value={d.deviceId} 
                control={<Radio key={Math.random()} />} 
                label={`${d.label} ${d.deviceId}`} 
              />)
              : null
            }
          </RadioGroup>
        </FormControl>
      </Fragment>          
    );
};