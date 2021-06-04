import React, { FC, useState, Fragment } from 'react';
import clsx from 'clsx';
import { BrowserRouter as Router, Route, Switch, useLocation, Link as RouterLink, NavLink, NavLinkProps } from 'react-router-dom';
import { WithStyles } from '@material-ui/core';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = ({ mixins, zIndex }: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    toolbarMargin: mixins.toolbar,
    aboveDrawer: {
      zIndex: zIndex.drawer + 1,
    },
  });

interface Props extends WithStyles<typeof styles> {
  //   classes?: string;
  title?: string;
  onMenuClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: any;
  open?: any;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onItemClick?: any;
}

const MyToolbar = withStyles(styles)(({ classes, title, onMenuClick }: Props) => (
  <Fragment>
    <AppBar className={classes.aboveDrawer}>
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.flex}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
    <div className={classes.toolbarMargin} />
  </Fragment>
));

const MyDrawer = withStyles(styles)(({ classes, variant, open, onClose, onItemClick }: Props) => (
  <Drawer variant={variant} open={open} onClose={onClose}>
    <div
      className={clsx({
        [classes.toolbarMargin]: variant === 'persistent',
      })}
    />
    <List>
      <ListItem button onClick={onItemClick('Home')}>
        <ListItemText>Home</ListItemText>
      </ListItem>
      <ListItem button onClick={onItemClick('Page 2')}>
        <ListItemText>Page 2</ListItemText>
      </ListItem>
      <ListItem button onClick={onItemClick('Page 3')}>
        <ListItemText>Page 3</ListItemText>
      </ListItem>
    </List>
  </Drawer>
));
const AppBarInteraction = withStyles(styles)(({ classes, variant }: Props) => {
  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState('Home');

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const onItemClick = (title) => () => {
    setTitle(title);
    setDrawer(variant === 'temporary' ? false : drawer);
  };
  return (
    <div className={classes.root}>
      <MyToolbar title={title} onMenuClick={toggleDrawer} />
      <MyDrawer open={drawer} onClose={toggleDrawer} onItemClick={onItemClick} variant={variant} />
    </div>
  );
});

export default AppBarInteraction;
