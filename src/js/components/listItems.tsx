import React, { useMemo, forwardRef } from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link, LinkProps } from 'react-router-dom';

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

export const mainListItems = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  function handleListItemClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ): void {
    alert("yo");
    setSelectedIndex(index);
  }
  return (
    <List>
      <ListItemLink 
        to="/Dashboard" 
        primary="Dashboard" 
        icon={<DashboardIcon />} 
      />
      <ListItemLink 
        to="/about" 
        primary="About" 
        icon={<ShoppingCartIcon />} 
      />
      <ListItemLink 
        to="/settings" 
        primary="Settings" 
        icon={<PeopleIcon />} 
      />
      <ListItemLink 
        to="/language" 
        primary="Language" 
        icon={<BarChartIcon />} 
      />
      <ListItemLink 
        to="/favorites" 
        primary="Favorites" 
        icon={<LayersIcon />} 
      />
    </List>
  );
}

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);