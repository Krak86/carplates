import React, { Fragment, useMemo, forwardRef } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { AppState } from "../store";
import { ApplicationStates} from "../models/Interfaces";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Lang } from "../models/Interfaces";
import lang from "../locale";
import { Link, LinkProps } from 'react-router-dom';
import { toggleDrawer, changeLang } from "../store/actions";
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import SearchIcon from '@material-ui/icons/Search';
import InfoIcon from '@material-ui/icons/Info';
import ChatIcon from '@material-ui/icons/Chat';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ShopIcon from '@material-ui/icons/Shop';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Divider from '@material-ui/core/Divider';

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
  callbackFunc?: Function;
  nestedElement?: React.ReactElement;
}
const ListItemLink = (props: ListItemLinkProps) => {
  const { icon, primary, to, callbackFunc, nestedElement } = props;
  const renderLink = useMemo(() => forwardRef<HTMLAnchorElement, Omit<LinkProps, 'innerRef' | 'to'>>(
        (itemProps, ref) => (
          <Link to={to} {...itemProps} innerRef={ref} />
        ),
      ),
    [to],
  );
  return (
    <li>
      <ListItem 
        button 
        component={renderLink} 
        onClick={() => callbackFunc()}
      >
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />{nestedElement}
      </ListItem>
    </li>
  );
}
const useStyles = makeStyles((theme: Theme) => createStyles({
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }),
);

export const routesLinks = () => {
  const state: ApplicationStates = useSelector((state: AppState) => state.Item, shallowEqual);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  //dispatch action creators
  const dispatch = useDispatch();
  const classes = useStyles({});

  const handleInstallClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ): void => {
    alert("Add to Home Screen");
    setSelectedIndex(index);
  };
  const handleDrawerClose = () => {
    dispatch(toggleDrawer(false));
  };
  const toggleSubMenu = () => {
    setOpen(!open);
  };
  const handleChangeLang = (val: Lang) => {
    dispatch(changeLang(val));
  }

  return (
    <Fragment>
      <List>
        <ListItemLink 
          to="/" 
          primary={lang(state.lang).url_search} 
          icon={<SearchIcon />}
          callbackFunc={handleDrawerClose}
        />
        <ListItemLink 
          to="/favorites" 
          primary={lang(state.lang).url_favs} 
          icon={<FavoriteIcon />} 
          callbackFunc={handleDrawerClose}
        />
        <ListItemLink 
          to="/notifications" 
          primary={lang(state.lang).url_notifications} 
          icon={<NotificationsIcon />} 
          callbackFunc={handleDrawerClose}
        />
        <ListItemLink 
          to="/about" 
          primary={lang(state.lang).url_about} 
          icon={<InfoIcon />} 
          callbackFunc={handleDrawerClose}
        />
      </List>
      <Divider />
      <List>
        <ListItemLink 
          to="/profile" 
          primary={lang(state.lang).url_profile} 
          icon={<PermIdentityIcon />} 
          callbackFunc={handleDrawerClose}
        />
        <ListItem
          button 
          onClick={toggleSubMenu}
        >
          <ListItemIcon>
            <GTranslateIcon />
          </ListItemIcon>
          <ListItemText primary={lang(state.lang).url_lang}  />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem 
              button 
              className={classes.nested}
              onClick={() => handleChangeLang(0)}
            >
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary="Українська" />
            </ListItem>
            <ListItem 
              button 
              className={classes.nested}
              onClick={() => handleChangeLang(1)}
            >
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary="Русский" />
            </ListItem>
            <ListItem 
              button 
              className={classes.nested}
              onClick={() => handleChangeLang(2)}
            >
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary="English" />
            </ListItem>
          </List>
        </Collapse>
        <ListItemLink 
          to="/disqus" 
          primary={lang(state.lang).url_disqus} 
          icon={<ChatIcon />} 
          callbackFunc={handleDrawerClose}
        />
      </List>
      <Divider />
      <List>
        <ListItemLink 
          to="/store" 
          primary={lang(state.lang).url_store} 
          icon={<ShopIcon />} 
          callbackFunc={handleDrawerClose}
        />
        <ListItem 
          button
          selected={selectedIndex === 0}
          onClick={event => handleInstallClick(event, 0)}
        >
          <ListItemIcon>
            <VerticalAlignBottomIcon />
          </ListItemIcon>
          <ListItemText 
            primary={lang(state.lang).url_install} 
          />
        </ListItem>
      </List> 
    </Fragment>
  );
}
