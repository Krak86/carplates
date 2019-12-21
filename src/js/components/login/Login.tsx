import React, { Fragment } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import lang from "../../locale";
import { authoriseUser } from "../../redux/actions";
import { AppState } from "../../redux";
import { ApplicationStates, IFacebook, IEnvConfig } from "../../models/Interfaces";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { loggedInDefault } from "../../data/Data";
import { login } from "../../redux/actions";

const config: IEnvConfig = require("../../../../env.json");

const useStyles = makeStyles({
    avatar: {
      margin: 10,
      cursor: 'pointer',
    },
    bigAvatar: {
      margin: 10,
      width: 60,
      height: 60,
    },
    glHeight: {
        width: '100%',
        height: '40px',       
    },
    fbHeight: {
        backgroundColor: '#4267b2',
        color: '#fff',
        textAlign: 'center',
        margin: '5px 0',
        width: '100%',
        height: '40px',
        fontSize: '17px',
        borderRadius: '5px',
        padding: '12px',
        border: 'none',
        opacity: 0.9,
        display: 'inline-block',
        lineHeight: '20px',
        textDecoration: 'none',
    }
});

export const Login = () => {
    const state: ApplicationStates = useSelector((state: AppState) => state.Item, shallowEqual);
    const [anchorEl1, setAnchorEl] = React.useState<null | HTMLElement>(null);   
    const open = Boolean(anchorEl1);

    const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
    const openSettingsMenu = Boolean(anchorEl2);

    const dispatch = useDispatch();
    const classes = useStyles({});
    let appIdFacebook = ""; 
    let appIdGoogle = "";
    if(process.env.NODE_ENV === "development"){
        appIdFacebook = process.env.FACEBOOK_CLIENT_ID_DEV || config.FACEBOOK_CLIENT_ID_DEV;
        appIdGoogle = process.env.GOOGLE_CLIENT_ID_DEV || config.GOOGLE_CLIENT_ID_DEV;
    }
    else{
        appIdFacebook = /*process.env.FACEBOOK_CLIENT_ID ||*/ config.FACEBOOK_CLIENT_ID; 
        appIdGoogle = /*process.env.GOOGLE_CLIENT_ID ||*/ config.GOOGLE_CLIENT_ID;
    }    
    const handleMenu1 = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };    
    const handleClose1 = (): void => {
        setAnchorEl(null);
    };
    const responseFacebook = (response: IFacebook): void => {
        dispatch(authoriseUser({
            vendor: 1,
            avatar: response.picture.data.url,
            profileName: response.name,
            mail: response.email,
        },
        state.favorites));
    }
    const responseGoogle = (response: any): void => {
        dispatch(authoriseUser({
            vendor: 2,
            avatar: response.profileObj.imageUrl,
            profileName: response.profileObj.name,
            mail: response.profileObj.email,
        },
        state.favorites));
    }
    const handleFailure = () => {
        dispatch(authoriseUser(
            loggedInDefault, 
            state.favorites)
        );
    }
    const handleLogoutMenuClick = (): void => {
        setAnchorEl2(null);
        dispatch(login(loggedInDefault));
    };
    const handleMenu2 = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = (): void => {
        setAnchorEl2(null);
    };
    return (
    <Fragment>
        {state.loggedIn.vendor  === 0 ? 
        <div>
            <Button 
                color="inherit"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu1}
            >
            {lang(state.lang).login}
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
                    textButton={lang(state.lang).login_facebook}
                    cssClass={classes.fbHeight}
                    cookie={true}
                    autoLoad={false}
                />
            </MenuItem>
            <MenuItem onClick={handleClose1}>
                <GoogleLogin
                    clientId={appIdGoogle}
                    buttonText={lang(state.lang).login_google}
                    onSuccess={responseGoogle}
                    onFailure={handleFailure}
                />
            </MenuItem>
          </Menu>
          </div>
        :
        <div>           
            <Avatar 
                alt={state.loggedIn.profileName}
                src={state.loggedIn.avatar} className={classes.avatar}
                onClick={handleMenu2}
                //className={}
            />
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
                        open={openSettingsMenu}
                        onClose={handleClose2}
                    >
                        <MenuItem 
                            onClick={handleLogoutMenuClick}
                        >
                            {lang(state.lang).logout}
                        </MenuItem>
            </Menu>
        </div>
        }
    </Fragment>
  );
}