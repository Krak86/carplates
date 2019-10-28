import React, {Fragment } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

const useStyles = makeStyles((theme: Theme) => createStyles({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    button: {
        margin: theme.spacing(1),
        width: '200px'
    },
}));

const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
 });

export interface IDialogVideoWindowProps{
    title: string;
    openDialog: boolean;
    handleClickCloseDialog: any;
    Ids?: {
        player: string,
        canvas: string,
        captureButton: string,
    };
    stream: MediaStream;
}

export const DialogVideoWindow = (props: IDialogVideoWindowProps) => {
    const { openDialog, handleClickCloseDialog, title, stream } = props;
    //mapStateToProps
    const classes = useStyles({});

    const Ids = {
        player: 'player',
        canvas: 'canvas',
        captureButton: 'captureButton',
    }
    //let canvasContext;
    //const player = document.getElementById(Ids.player);
    //const canvas = document.getElementById(Ids.canvas);
    //const context = canvas.getContext('2d');
    //const captureButton = document.getElementById(Ids.captureButton);
    const srcTest = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4';
    
    //const srcVideoStream = URL.createObjectURL(stream);
    

    const colorStripClick = () => {
        //const context = canvas.getContext('2d');
        var imageData = this.context.getContext('2d');
    }

    const handleButtonClick = () => {
        //canvasContext.drawImage(player, 0, 0, '320', '240');
    }

  return (
    <Fragment>
        <Dialog fullScreen open={openDialog} onClose={handleClickCloseDialog} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleClickCloseDialog} aria-label="close">
                <CloseIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                {title}
                </Typography>
            </Toolbar>
            </AppBar>
            <video id={Ids.player} controls autoPlay >
                <source src={srcTest} ></source></video>            
            <Button variant="contained" color="primary" className={classes.button} id={Ids.captureButton} onClick={handleButtonClick}>
            {title}
            </Button>
            <canvas id={Ids.canvas} width='320' height='240'></canvas>
        </Dialog>
    </Fragment>
  );
}