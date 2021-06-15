import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation, Link as RouterLink, NavLink, NavLinkProps } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(2),
  },
  content: {
    marginTop: theme.spacing(1),
  },
}));

const NavButton: FC<{
  color?: string;
  to?: any;
}> = ({ color, ...props }) => {
  const renderLink = React.useMemo(() => React.forwardRef((itemProps, ref: any) => <RouterLink to={props.to} ref={ref} {...itemProps} />), [props.to]);

  return (
    <Switch>
      <Route exact path={props.to} render={() => <Button color="primary" component={renderLink} {...props} />} />
      <Route path="/" render={() => <Button component={renderLink} {...props} />} />
    </Switch>
  );
};

const LinkButtons: FC = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item>
        <Grid container>
          <Grid item>
            <NavButton to="/">Home</NavButton>
          </Grid>
          <Grid item>
            <NavButton to="/page1">Page 1</NavButton>
          </Grid>
          <Grid item>
            <NavButton to="/page2">Page 2</NavButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.content}>
        <Switch>
          <Route exact path="/" render={() => <Typography>home content</Typography>} />
          <Route path="/page1" render={() => <Typography>page 1 content</Typography>} />
          <Route path="/page2" render={() => <Typography>page 2 content</Typography>} />
        </Switch>
      </Grid>
    </Grid>
  );
};

export default LinkButtons;
