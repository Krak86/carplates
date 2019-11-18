import React, { Fragment } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Login } from '../login/Login';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import lang from "../../locale";
import { login } from "../../redux/actions";
import { AppState } from "../../redux";
import { ApplicationStates  } from "../../models/Interfaces";
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { loggedInDefault } from "../../data/Data";

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
    const [anchorEl1, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const openSettingsMenu = Boolean(anchorEl1);
    const dispatch = useDispatch();
    const classes = useStyles({});
    const handleClose1 = (): void => {
        setAnchorEl(null);
    };
    const handleSettingsClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }
    const handleLogoutMenuClick = (): void => {
        setAnchorEl(null);
        dispatch(login(loggedInDefault));
    };
    return (
    <Fragment>
        {state.loggedIn.vendor === 0 ? 
            <Card className={classes.card}>
                <CardContent>
                    <Login />
                    <Typography className={classes.title} color="textSecondary">
                        {lang(state.lang).login_sync_text}
                    </Typography>
                </CardContent>
            </Card>
        :        
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar 
                        alt={state.loggedIn.profileName}
                        src={state.loggedIn.avatar}
                    />
                }
                action={
                    <IconButton 
                        aria-label="settings"
                        title={lang(state.lang).card_settings}
                        onClick={handleSettingsClick}
                    >
                        <MoreVertIcon />
                    </IconButton>
                }
                title={state.loggedIn.profileName}
                subheader={state.loggedIn.mail}
            />
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
                        open={openSettingsMenu}
                        onClose={handleClose1}
                    >
                        <MenuItem 
                            onClick={handleLogoutMenuClick}
                        >
                            {lang(state.lang).logout}
                        </MenuItem>
            </Menu>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" component="p">
                    {lang(state.lang).loggedInText}{' '}{state.loggedIn.vendor === 1 
                        ? "Facebook"
                        : "Google" }.
                </Typography>
                <Typography className={classes.title} color="textSecondary" component="p">
                    {lang(state.lang).logined_sync_text}
                </Typography>
            </CardContent>
        </Card>
        }
    </Fragment>
  );
}