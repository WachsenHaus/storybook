import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { BrowserRouter as Router, Route, Switch, useLocation, Link as RouterLink, NavLink, NavLinkProps } from 'react-router-dom';

import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import HomeIcon from '@material-ui/icons/Home';
import WebIcon from '@material-ui/icons/Web';
import { WithStyles } from '@material-ui/core';

const styles = ({ palette }: Theme) =>
  createStyles({
    alignContent: {
      alignSelf: 'center',
    },
    activeListItem: {
      color: palette.primary.main,
    },
    drawerWidth: {},
  });

interface Props extends WithStyles<typeof styles> {
  Icon?: any;
  text?: any;
  active?: any;
  to?: any;
}

const NavListItem = withStyles(styles)(({ classes, Icon, text, active, to, ...other }: Props) => {
  const renderLink = React.useMemo(() => React.forwardRef((itemProps, ref: any) => <RouterLink to={to} ref={ref} {...itemProps} {...other} />), [to]);

  return (
    <li>
      <ListItem button component={renderLink} {...other}>
        <ListItemIcon
          classes={{
            root: clsx({ [classes.activeListItem]: active }),
          }}
        >
          <Icon />
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: clsx({
              [classes.activeListItem]: active,
            }),
          }}
        >
          {text}
        </ListItemText>
      </ListItem>
    </li>
  );
});
const NavItem = (props) => {
  return (
    <Switch>
      <Route exact path={props.to} render={() => <NavListItem to={props.to} active={true} {...props} />} />
      <Route render={() => <NavListItem to={props.to} {...props} />} />
    </Switch>
  );
};

const DrawerItemNavigation = withStyles(styles)(({ classes }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <Grid container justify="space-between">
      <Grid item className={classes.alignContent}>
        <Route exact path="/" render={() => <Typography>Home1</Typography>} />
        <Route exact path="/page2" render={() => <Typography>Page 2</Typography>} />
        <Route exact path="/page3" render={() => <Typography>Page 3</Typography>} />
      </Grid>
      <Grid item>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <List>
            <NavItem to="/" text="home" Icon={WebIcon} onClick={() => setOpen(false)} />
            <NavItem to="/page2" text="Page 2" Icon={WebIcon} onClick={() => setOpen(false)} />
            <NavItem to="/page3" text="Page 3" Icon={WebIcon} onClick={() => setOpen(false)} />
          </List>
        </Drawer>
      </Grid>
      <Grid item>
        <Button onClick={() => setOpen(!open)}>{open ? 'Hide' : 'Show'} Drawer</Button>
      </Grid>
    </Grid>
  );
});

export default DrawerItemNavigation;
