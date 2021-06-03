import React, { useState, Fragment, FC } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { createStyles, withStyles } from '@material-ui/core/styles';
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
  const [state, setState] = useState<{
    anchor: (EventTarget & HTMLButtonElement) | null;
  }>({
    anchor: null,
  });
  const MenuItems: FC = () => (
    <Fragment>
      <MenuItem component={Link} to="/">
        Home
      </MenuItem>
      <MenuItem component={Link} to="/page2">
        Page 2
      </MenuItem>
      <MenuItem component={Link} to="/page3">
        Page 3
      </MenuItem>
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
            <MenuItems />
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

const WithNavigation = withStyles(styles)(({ classes }: Props) => {
  return (
    <div className={classes.root}>
      {/* <Router> */}
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Fragment>
              <MyToolbar title="Home" />
              <Typography>Home</Typography>
            </Fragment>
          )}
        />
        <Route
          path="/page2"
          render={() => (
            <Fragment>
              <MyToolbar title="Page 2" />
              <Typography>Page 2</Typography>
            </Fragment>
          )}
        />
        <Route
          path="/page3"
          render={() => (
            <Fragment>
              <MyToolbar title="Page 3" />
              <Typography>Page 3</Typography>
            </Fragment>
          )}
        />
      </Switch>
      {/* </Router> */}
    </div>
  );
});

export default WithNavigation;
