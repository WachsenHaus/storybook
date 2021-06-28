import React, { Fragment } from 'react';

import { WithStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  contained: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },
  outlined: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  containedPrimary: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
});

interface Props extends WithStyles<typeof styles> {}

const ScopedComponentStyles = withStyles(styles)(({ classes }: Props) => (
  <Fragment>
    <Button classes={classes}>My Default Button</Button>
    <Button classes={classes} variant="outlined">
      My outlined Button
    </Button>
    <Button classes={classes} variant="contained">
      My Contained Button
    </Button>
    <Button classes={classes} variant="contained" color="primary">
      My Contained Primary Button
    </Button>
  </Fragment>
));

export default ScopedComponentStyles;
