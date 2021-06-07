import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link as RouterLink } from 'react-router-dom';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const styles = (theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.backgorund,
      value: 0,
    },
    tabContent: {
      padding: theme.spacing(2),
    },
  });
interface Props extends WithStyles<typeof styles> {
  to?: any;
  label?: any;
  value?: any;
}
const TabContainer = withStyles(styles)(({ classes, value, to, ...other }: Props) => {
  const renderLink = React.useMemo(() => React.forwardRef((itemProps, ref: any) => <RouterLink to={to} ref={ref} {...itemProps} {...other} />), [to]);

  return (
    <AppBar position="static">
      <Tabs value={value}>
        <Tab label="Item One" component={RouterLink} to="/" />
        <Tab label="Item Two" component={RouterLink} to="/page2" />
        <Tab label="Item Three" component={RouterLink} to="/page3" />
      </Tabs>
    </AppBar>
  );
});
const TabNavigationWithRoutes = withStyles(styles)(({ classes }: Props) => {
  return (
    <div className={classes.root}>
      <Route
        exact
        path="/"
        render={() => (
          <Fragment>
            <TabContainer value={0} />
            <Typography component="div" className={classes.tabContent}>
              Item One
            </Typography>
          </Fragment>
        )}
      />
      <Route
        exact
        path="/page2"
        render={() => (
          <Fragment>
            <TabContainer value={1} />
            <Typography component="div" className={classes.tabContent}>
              Item Two
            </Typography>
          </Fragment>
        )}
      />
      <Route
        exact
        path="/page3"
        render={() => (
          <Fragment>
            <TabContainer value={2} />
            <Typography component="div" className={classes.tabContent}>
              Item Three
            </Typography>
          </Fragment>
        )}
      />
    </div>
  );
});

export default TabNavigationWithRoutes;
