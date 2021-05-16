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
//구성요소 추상화를 사용하면 과도한 구문을 제거 할 수 있다.
const Item = (props) => <Grid item xs={12} sm={6} md={3} {...props} />;

interface Props {
  classes: {
    root: string;
    paper: string;
  };
}
const AbstractingContainersAndItems = withStyles(styles)(({ classes }: Props) => (
  <Container spacing={4}>
    <Item>
      <h1>추상화를 사용하는 목적은 grid로 도배된 소스코드를 보기 힘들기 때문에 HOC패턴을 적용하여 사용합니다.</h1>
    </Item>
    <Item>
      <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
    </Item>
    <Item>
      <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
    </Item>
    <Item>
      <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
    </Item>
    <Item xs={12} sm={6} md={3}>
      <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
    </Item>
  </Container>
));
export default AbstractingContainersAndItems;
