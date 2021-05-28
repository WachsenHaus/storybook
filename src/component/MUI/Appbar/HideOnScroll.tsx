import { AppBar, Button, Fade, IconButton, Toolbar, Typography } from '@material-ui/core';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';

const styles = ({ mixins }: Theme) =>
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
  });

interface Props {
  classes: {
    root: string;
    menuButton: string;
    flex: string;
    toolbarMargin: string;
  };
}
const ScrolledAppBar = withStyles(styles)(({ classes }: Props) => {
  const [state, setState] = useState({
    scrolling: false,
    scrollTop: 0,
  });

  const onScroll = useCallback(
    (e) => {
      console.log('..');
      setState((prev) => ({
        scrollTop: e.target.documentElement.scrollTop,
        scrolling: e.target.documentElement.scrollTop > state.scrollTop,
      }));
    },
    [state]
  );

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
    <Fade in={!state.scrolling}>
      <AppBar>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.flex}>
            My Title
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Fade>
  );
});

const AppBarWithButtons = withStyles(styles)(({ classes }: Props) => {
  return (
    <div className={classes.root}>
      <ScrolledAppBar />
      <div className={classes.toolbarMargin} />
      <ul>
        {new Array(500).fill(null).map((v, i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
});
export default AppBarWithButtons;
