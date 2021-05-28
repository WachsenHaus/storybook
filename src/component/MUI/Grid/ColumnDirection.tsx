import { Grid, GridDirection, GridSize, GridSpacing, Hidden, Paper, Typography } from '@material-ui/core';
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
  grid?: GridDirection;
}
export const ColumnDirection = withStyles(styles)(({ classes, grid }: Props) => (
  <div className={classes.root}>
    <Grid container justify="space-around" spacing={4}>
      <Grid item xs={3} style={{ backgroundColor: 'red' }}>
        <Grid container direction={grid} spacing={2}>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography>One</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography>Two</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3} style={{ backgroundColor: 'blue' }}>
        <Grid container direction={grid} spacing={2}>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography>Three</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography>Four</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3} style={{ backgroundColor: 'orange' }}>
        <Grid container direction={grid} spacing={2}>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography>Five</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography>Six</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Hidden smDown>
        <Grid item xs={3} style={{ backgroundColor: 'yellow' }}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Paper className={classes.paper}>
                <Typography>Seven</Typography>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <Typography>Eight</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </Grid>
  </div>
));

export default ColumnDirection;
