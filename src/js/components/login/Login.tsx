import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import lang from "../../locale";
import { login, loginFacebook, loginGoogle } from "../../store/actions";
import { AppState } from "../../store";
import { ApplicationStates, IFacebook, IGoogle } from "../../models/Interfaces";
import { facebookInit, googleInit } from "../../data/Data";

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const useStyles = makeStyles({
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      margin: 10,
      width: 60,
      height: 60,
    },
  });

export const Login = () => {
    //connect to state
    const state: ApplicationStates = useSelector((state: AppState) => state.Item, shallowEqual);
    //constructor, componentDidMounted, componentDidUpdated
    const [anchorEl1, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl1);
    const open2 = Boolean(anchorEl2);
    //dispatch action creators
    const dispatch = useDispatch();
    const classes = useStyles({});

    const appIdFacebook = process.env.FACEBOOK_CLIENT_ID || "";
    const appIdGoogle = process.env.GOOGLE_CLIENT_ID || "";
    
    const handleMenu1 = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };    
    const handleClose1 = (): void => {
        setAnchorEl(null);
    };    
    const handleMenu2 = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl2(event.currentTarget);
    };    
    const handleClose2 = (): void => {
        setAnchorEl2(null);
    };
    const responseFacebook = (response: IFacebook): void => {
        console.log(response);
        dispatch(login(1));
        dispatch(loginFacebook(response));
    }

    const responseGoogle = (response: any): void => {
        console.log(response);
        dispatch(login(2));
        dispatch(loginGoogle(response));
    }

    const handleFailure = () => {
        dispatch(login(0));
        dispatch(loginGoogle(googleInit));
        dispatch(loginFacebook(facebookInit))
    }

    return (
    <>
        {state.signedIn === 0 ? 
        <div>
            <Button 
                color="inherit"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu1}
            >
            {lang.login}
            </Button>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl1}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleClose1}
            >
            <MenuItem onClick={handleClose1}>
                <FacebookLogin
                    appId={appIdFacebook}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    onFailure={handleFailure}
                    textButton={lang.login_facebook}
                />
            </MenuItem>
            <MenuItem onClick={handleClose1}>
                <GoogleLogin
                    clientId={appIdGoogle}
                    buttonText={lang.login_google}
                    onSuccess={responseGoogle}
                    onFailure={handleFailure}
                />
            </MenuItem>
          </Menu>
          </div>
        :
        <div>
            {state.signedIn === 1 ?
            <Avatar 
                alt={state.facebookResponse.name}
                src={state.facebookResponse.picture.data.url} className={classes.avatar}
                onClick={handleMenu2}
            />
            :
            <Avatar 
                alt={state.googleResponse.profileObj.name}
                src={state.googleResponse.profileObj.imageUrl} className={classes.avatar}
                onClick={handleMenu2}
            />
            }
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl2}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open2}
                onClose={handleClose2}
              >
                <MenuItem onClick={handleClose2}>Profile</MenuItem>
                <MenuItem onClick={handleClose2}>My account</MenuItem>
            </Menu>
        </div>
        }
    </>
  );
}