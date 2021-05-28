import React, { Fragment, Component, FC } from 'react';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const styles = (theme) =>
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
    toolbarMargin: theme.mixins.toolbar,
  });

interface Props {
  classes: {
    root: string;
    flex: string;
    toolbarMargin: string;
    menuButton: string;
  };
  title?: string;
}
const MyToolbar = withStyles(styles)(({ classes, title }: Props) => {
  const [state, setState] = useState({
    anchor: null,
  });
  const MenuItems: FC = ({ closeMenu }) => (
    <Fragment>
      <MenuItem onClick={closeMenu}>Profile</MenuItem>
      <MenuItem onClick={closeMenu}>My account</MenuItem>
      <MenuItem onClick={closeMenu}>Logout</MenuItem>
    </Fragment>
  );
  const RightButton: FC = () => <Button color="inherit">Login</Button>;

  const closeMenu = () => {
    setState({ anchor: null });
  };
  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={(e) => setState({ anchor: e.currentTarget })}>
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={state.anchor} open={Boolean(state.anchor)} onClose={closeMenu}>
            <MenuItems closeMenu={closeMenu} />
          </Menu>
          <Typography variant="h6" color="inherit" className={classes.flex}>
            {title}
          </Typography>
          <RightButton />
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
});

const ToolbarAbstraction = withStyles(styles)(({ classes, ...props }: Props) => {
  return (
    <div className={classes.root}>
      <MyToolbar {...props} title={'툴바 추상화 입니다.'} />
    </div>
  );
});

export default ToolbarAbstraction;
