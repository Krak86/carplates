import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Route, Switch, Link, useHistory } from "react-router-dom";
import { Login } from "./login/Login";
import lang from "../locale";
import { toggleDrawer, ResetBadge } from "../redux/actions";
import { AppState } from "../redux";
import { ApplicationStates } from "../models/Interfaces";
import { routesLinks } from './routes/routesLinks';
import { SearchPage } from './routes/SearchPage';
import { FavoritesPage } from "./routes/FavoritesPage";
import { AboutPage } from './routes/AboutPage';
import { ProfilePage } from './routes/ProfilePage';
import { DisqusPage } from './routes/DisqusPage';
import { StorePage } from './routes/StorePage';
import { NotificationPage } from './routes/NotificationPage';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24,
    color: "#fff",
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    color: "#fff",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    maxWidth: 600,
  },
  paper: {
    padding: theme.spacing(2),
    //marginBottom: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  paperCenter: {
    padding: theme.spacing(2),
    display: 'center',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  title: {
    flexGrow: 1,
    cursor: 'pointer',
  },
}));

export default function App() {
  const state: ApplicationStates = useSelector((state: AppState) => state.Item, shallowEqual);
  const open = state.drawerToogled;
  const dispatch = useDispatch();
  const classes = useStyles({});
  const history = useHistory();

  const handleDrawerOpen = () => {
    dispatch(toggleDrawer(true));
  };
  const handleDrawerClose = () => {
    dispatch(toggleDrawer(false));
  };
  const handleOnBadgeClick = () => {
    dispatch(ResetBadge());
  }
  const handleClickHome = () => {
    history.push(`/`);
  }
  const badges = state.badges;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
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
          <Typography component="h1" display="initial"  variant="h6" noWrap className={classes.title} onClick={handleClickHome}>           
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
      </AppBar>
      <Drawer
        variant="temporary"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
        onClose={handleDrawerClose}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider /> 
        {routesLinks()}
      </Drawer>
      <section className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Switch>
            <Route exact path="/" component={SearchPage} />
            <Route path="/favorites" component={FavoritesPage} />
            <Route path="/notifications" component={NotificationPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/disqus" component={DisqusPage} />
            <Route path="/store" component={StorePage} />
            <Route component={SearchPage} />
          </Switch>
        </Container>
      </section>
    </div>
  );
}
