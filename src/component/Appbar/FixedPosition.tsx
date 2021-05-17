import React from 'react';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
const styles = ({ palette, spacing, mixins }: Theme) =>
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
    toolbarMargin: string;
    menuButton: string;
    flex: string;
  };
}
const FixedPosition = withStyles(styles)(({ classes }: Props) => (
  <div className={classes.root}>
    <AppBar position="fixed">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.flex}>
          Title
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
    <div className={classes.toolbarMargin} />
    <ul>
      {new Array(500).fill(null).map((v, i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  </div>
));

export default FixedPosition;
