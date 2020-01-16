import React, { useEffect, SyntheticEvent } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { makeStyles, Theme } from "@material-ui/core/styles";
import lang from "../locale";
import { toggleDrawer, ForceUpdates } from "../redux/actions";
import { AppState } from "../redux";
import { IApplicationStates, IEnvConfig } from "../models/Interfaces";
import { RoutesLinks } from "./routes/RoutesLinks";
import { Router } from "./routes/Router";
import { ToolbarComponent } from "./toolbar/ToolbarComponent";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import UtilsAppInsights from "../utils/UtilsAppInsights";
import { SnackbarContentWrapper } from "./snackbar/SnackbarContentWrapper";
import Snackbar from "@material-ui/core/Snackbar";
/* tslint:disable no-var-requires */
const config: IEnvConfig = require("../../../env.json");
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24,
    color: "#fff",
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    color: "#fff",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    maxWidth: 600,
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  paperCenter: {
    padding: theme.spacing(2),
    display: "center",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  title: {
    flexGrow: 1,
    cursor: "pointer",
  },
  snackbarStyle: {
    cursor: "pointer",
  },
}));
export default function App() {
  const state: IApplicationStates = useSelector((stateInternal: AppState) => stateInternal.Item, shallowEqual);
  const open = state.drawerToogled;
  const dispatch = useDispatch();
  const classes = useStyles({});
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const updateAvailable = state.updatesAvailable;
  const azureAppInsightsKey = /*process.env.AZURE_APP_INSIGHTS_KEY ||*/config.AZURE_APP_INSIGHTS_KEY || "";
  UtilsAppInsights.init(azureAppInsightsKey);
  const handleDrawerClose = () => {
    dispatch(toggleDrawer(false));
  };
  const onMessageReceivedFromIServiceWorker = React.useCallback( (event: MessageEvent) => {
    if (event.data !== true) {
      return;
    }
    setOpenSnackbar(true);
    },
    [updateAvailable],
  );
  useEffect(() => {
    window.addEventListener("message", onMessageReceivedFromIServiceWorker);
    return () =>
      window.removeEventListener("message", onMessageReceivedFromIServiceWorker);
  }, [onMessageReceivedFromIServiceWorker]);
  const handleCloseSnackBar = (event?: SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
    /* tslint:disable no-console */
    console.log(event);
  };
  const handleClickUpdate = () => {
    dispatch(ForceUpdates(true));

    window.location.reload(true);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <ToolbarComponent />
      </AppBar>
      <Drawer
        variant="temporary"
        classes={{ paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose) }}
        open={open}
        onClose={handleDrawerClose}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <RoutesLinks />
      </Drawer>
      <section className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Router />
        </Container>
      </section>
      <Snackbar
        anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
        }}
        open={openSnackbar}
        autoHideDuration={null}
        onClose={handleCloseSnackBar}
        onClick={handleClickUpdate}
        className={classes.snackbarStyle}
      >
        <SnackbarContentWrapper
          onClose={handleCloseSnackBar}
          variant="info"
          message={lang(state.lang).update_available}
        />
      </Snackbar>
    </div>
  );
}
