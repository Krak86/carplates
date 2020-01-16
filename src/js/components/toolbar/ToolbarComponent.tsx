import React, { Fragment } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { AppState } from "../../redux";
import { toggleDrawer } from "../../redux/actions";
import { IApplicationStates } from "../../models/Interfaces";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Login } from "../login/Login";
import clsx from "clsx";
import lang from "../../locale";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles(() => ({
    menuButtonHidden: {
        display: "none",
      },
    menuButton: {
        marginRight: 36,
    },
    title: {
      flexGrow: 1,
      cursor: "pointer",
    },
    toolbar: {
      paddingRight: 24,
      color: "#fff",
    },
}));
export const ToolbarComponent = () => {
    const state: IApplicationStates = useSelector((stateInternal: AppState) => stateInternal.Item, shallowEqual);
    const dispatch = useDispatch();
    const classes = useStyles({});
    const history = useHistory();
    const open = state.drawerToogled;
    const handleDrawerOpen = () => {
        dispatch(toggleDrawer(true));
    };
    const handleClickHome = () => {
        history.push(`/`);
    };
    const badges = state.badges;
    return (
        <Fragment>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" display="initial" variant="h6" noWrap={true} className={classes.title} onClick={handleClickHome}>
              {lang(state.lang).dashBoradTitle}
            </Typography>
            <Link to="/notifications">
              <IconButton>
                <Badge badgeContent={badges} color="secondary">
                    <NotificationsIcon  color="action" />
                </Badge>
              </IconButton>
            </Link>
            <Login />
          </Toolbar>
        </Fragment>
   );
};
