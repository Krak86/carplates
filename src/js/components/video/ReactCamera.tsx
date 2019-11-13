import React, { Component } from 'react';
import Camera,  { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
//import 'react-html5-camera-photo/build/css/index.css';
 
class ReactCamera extends Component {
    onTakePhoto (dataUri) {
        // Do stuff with the photo...
        console.log('takePhoto');
    }
     
    onTakePhotoAnimationDone (dataUri) {
        // Do stuff with the photo...
        console.log('takePhoto');
    }
     
    onCameraError (error) {
        console.error('onCameraError', error);
    }
     
    onCameraStart (stream) {
        console.log('onCameraStart');
    }
     
    onCameraStop () {
        console.log('onCameraStop');
    }
    render () {
        return (
            <Camera
                     onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
                     onTakePhotoAnimationDone = { (dataUri) => { this.onTakePhotoAnimationDone(dataUri); } }
                     onCameraError = { (error) => { this.onCameraError(error); } }
                     idealFacingMode = {FACING_MODES.ENVIRONMENT}
                     idealResolution = {{width: 640, height: 480}}
                     imageType = {IMAGE_TYPES.JPG}
                     imageCompression = {0.97}
                     isMaxResolution = {false}
                     isImageMirror = {false}
                     isSilentMode = {true}
                     isDisplayStartCameraError = {true}
                     isFullscreen = {true}
                     sizeFactor = {1}
                     onCameraStart = { (stream) => { this.onCameraStart(stream); } }
                     onCameraStop = { () => { this.onCameraStop(); } }
            />
        );
    }
}
export default ReactCamera;