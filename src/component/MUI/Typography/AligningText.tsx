import React, { FC } from 'react';

import { WithStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
  paper: {
    width: 200,
    height: 200,
    padding: theme.spacing(1),
  },
});
interface Props extends WithStyles<typeof styles> {
  horizontalAlign?: any;
  verticalAlign?: any;
}

const MyPaper = withStyles(styles)(({ horizontalAlign, verticalAlign, classes, ...props }: Props) => (
  <Grid container component={Paper} className={classes.paper} alignContent={verticalAlign} justify={horizontalAlign} {...props} />
));

const MyTypography: FC<any> = ({ horizontalAlign, verticalAlign, ...props }) => <Grid item component={Typography} {...props} />;

const AligningText = ({ ...props }) => (
  <MyPaper {...props}>
    <MyTypography {...props}>Text</MyTypography>
  </MyPaper>
);

export default AligningText;
