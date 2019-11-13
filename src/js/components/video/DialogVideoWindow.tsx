import React, { Fragment} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { IDialogVideoWindowProps } from "../../models/Interfaces";
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { WebcamCapture } from "./WebcamCapture";

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
        width: '50px'
    },
}));

const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const DialogVideoWindow = (props: IDialogVideoWindowProps) => {
    const { openDialog, handleClickCloseDialog, title } = props;
    const classes = useStyles({});
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
                <WebcamCapture 
                    close={handleClickCloseDialog}
                    //videoDevices={videoDevices}
                />
            </Dialog>
        </Fragment>
  );
}