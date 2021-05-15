import { Grid, Paper, Theme, withStyles } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';

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

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

interface Props {
  classes: {
    root: string;
    paper: string;
  };
}
const AbstractingContainersAndItems = withStyles(styles)(({ classes }: Props) => (
  <Container spacing={4}>
    <Item xs={12} sm={6} md={3}>
      <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
    </Item>
    <Item xs={12} sm={6} md={3}>
      <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
    </Item>
    <Item xs={12} sm={6} md={3}>
      <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
    </Item>
    <Item xs={12} sm={6} md={3}>
      <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
    </Item>
  </Container>
));
export default AbstractingContainersAndItems;
