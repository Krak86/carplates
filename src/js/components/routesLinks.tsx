import React, { Fragment, useMemo, forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import InfoIcon from '@material-ui/icons/Info';
import ChatIcon from '@material-ui/icons/Chat';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ShopIcon from '@material-ui/icons/Shop';
import Divider from '@material-ui/core/Divider';

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

const ListItemLink = (props: ListItemLinkProps) => {
  const { icon, primary, to } = props;
  const renderLink = useMemo(() => forwardRef<HTMLAnchorElement, Omit<LinkProps, 'innerRef' | 'to'>>(
        (itemProps, ref) => (
          <Link to={to} {...itemProps} innerRef={ref} />
        ),
      ),
    [to],
  );
  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

export const routesLinks = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  function handleInstallClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ): void {
    alert("Add to Home Screen");
    setSelectedIndex(index);
  }
  return (
    <Fragment>
      <List>
        <ListItemLink 
          to="/" 
          primary="Search" 
          icon={<SearchIcon />} 
        />
        <ListItemLink 
          to="/favorites" 
          primary="Favorites" 
          icon={<FavoriteIcon />} 
        />
        <ListItemLink 
          to="/about" 
          primary="About" 
          icon={<InfoIcon />} 
        />
      </List>
      <Divider />
      <List>
        <ListItemLink 
          to="/profile" 
          primary="Profile" 
          icon={<PermIdentityIcon />} 
        />
        <ListItemLink 
          to="/language" 
          primary="Language" 
          icon={<GTranslateIcon />} 
        />
        <ListItemLink 
          to="/disqus" 
          primary="Disqus" 
          icon={<ChatIcon />} 
        />
      </List>
      <Divider />
      <List>
        <ListItemLink 
          to="/store" 
          primary="Store"
          icon={<ShopIcon />} 
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
            primary="Install App" 
          />
        </ListItem>
      </List> 
    </Fragment>
  );
}
