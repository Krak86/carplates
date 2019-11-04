import React, { Fragment } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Login } from '../login/Login';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import lang from "../../locale";
import { login, loginFacebook, loginGoogle } from "../../store/actions";
import { AppState } from "../../store";
import { ApplicationStates, IFacebook, IGoogle } from "../../models/Interfaces";
import { facebookInit, googleInit } from "../../data/Data";
import CardContent from '@material-ui/core/CardContent';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const useStyles = makeStyles((theme: Theme) => createStyles({
    card: {
      maxWidth: 500,
      marginTop: theme.spacing(2),
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    link: {
        display: 'none',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

export const Profile = () => {
    const state: ApplicationStates = useSelector((state: AppState) => state.Item, shallowEqual);
    const dispatch = useDispatch();
    const classes = useStyles({});
    let name = "", mail = "", url= "", loggedIn = "";
    if(state.signedIn === 1){
        name = state.facebookResponse.name;
        mail = state.facebookResponse.email;
        url = state.facebookResponse.picture.data.url;
        loggedIn = "Facebook";
    }
    if(state.signedIn === 2){
        name = state.googleResponse.profileObj.name;
        mail = state.googleResponse.profileObj.email;
        url = state.googleResponse.profileObj.imageUrl;
        loggedIn = "Google";
    }
    return (
    <Fragment>
        {state.signedIn === 0 ? 
            <Login />
        :        
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar 
                        alt={name}
                        src={url}
                    />                            
                }
                title={name}
                subheader={mail}
            />
            <CardContent>
                <Typography className={classes.title} color="textSecondary">
                    You are logged in using {loggedIn}.
                </Typography>
            </CardContent>
        </Card>
        }
    </Fragment>
  );
}