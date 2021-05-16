import { Grid, GridSize, GridSpacing, Paper } from '@material-ui/core';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';

const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: spacing(2),
      textAlign: 'center',
      color: palette.text.secondary,
    },
  });
export interface Props {
  classes: {
    root: string;
    paper: string;
  };
  spacing?: GridSpacing;
  width?: GridSize;
}

export const FixedColumnLayout = withStyles(styles)(({ classes, width = 6 }: Props) => (
  <div className={classes.root}>
    <Grid container spacing={4}>
      <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>
      </Grid>
      <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>
      </Grid>
      <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>
      </Grid>
      <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>
      </Grid>
      <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>
      </Grid>
      <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>
      </Grid>
      <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>
      </Grid>
      <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>
      </Grid>
    </Grid>
  </div>
));

export default FixedColumnLayout;
