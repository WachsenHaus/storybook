import React, { useState } from 'react';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const styles = () =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  });

interface Props {
  classes: {
    root: string;
  };
  variant?: 'permanent' | 'persistent' | 'temporary';
}

const DrawerTypes = withStyles(styles)(({ classes, variant }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Grid container justify="space-between">
      <Grid item>
        <Drawer variant={variant} open={open} onClose={() => setOpen(false)}>
          <List>
            <ListItem button onClick={() => setOpen(variant !== 'temporary')}>
              <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem button onClick={() => setOpen(variant !== 'temporary')}>
              <ListItemText>Page 2</ListItemText>
            </ListItem>
            <ListItem button onClick={() => setOpen(variant !== 'temporary')}>
              <ListItemText>Page 3</ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </Grid>
      <Grid item>
        <Button onClick={() => setOpen(!open)}>{open ? 'Hide' : 'Show'} Drawer</Button>
      </Grid>
    </Grid>
  );
});

export default DrawerTypes;
