import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import { Chip } from '@material-ui/core';

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
}

export const UnderstandingBreakpoints = withStyles(styles)(({ classes, spacing = 1 }: Props) => (
  <div className={classes.root}>
    <p>spacing이란 ? </p>
    <h5>spacing이란 요소들간의 간격을 띄어주는 헬퍼입니다. 기본적으로 spacing 1은 8px이고 2는 16px를 뜻합니다.</h5>
    <p>브레이크 포인트를 이해하기</p>
    <Chip label="xs => 0px" variant="outlined" />
    <Chip label="sm => 600px" variant="outlined" />
    <Chip label="md => 960px" variant="outlined" />
    <Chip label="lg => 1280px" variant="outlined" />
    <Chip label="xl => 1920px" variant="outlined" />
    <p>{`12를 폭의 100%로 이해하고 6은 50%로 이해하면 됩니다.`}</p>
    <Grid container spacing={spacing}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </Grid>
    </Grid>
  </div>
));
