import React, { FC } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';

import AddIcon from '@material-ui/icons/Add';
import { ReactNode } from 'react';

export type MyButtonTypes = {
  fab?: any;
  size: string;
  color: string;
  variant?: string;
};
const MyButton: FC<MyButtonTypes> = ({ fab, ...props }) => {
  const [child] = React.Children.toArray(props.children);
  let ButtonComponent;

  if (React.isValidElement(child) && fab) {
    ButtonComponent = Fab;
  } else if (React.isValidElement(child)) {
    ButtonComponent = IconButton;
  } else {
    ButtonComponent = Button;
  }
  return <ButtonComponent {...props} />;
};

const ButtonSizes: FC<MyButtonTypes> = ({ size, color }) => {
  return (
    <>
      <Grid container spacing={4} alignItems="center">
        <Grid item>
          <MyButton variant="contained" size={size} color={color}>
            Add
          </MyButton>
        </Grid>
        <Grid item>
          <MyButton size={size} color={color}>
            <AddIcon />
          </MyButton>
        </Grid>
        <Grid item>
          <MyButton fab size={size} color={color}>
            <AddIcon />
          </MyButton>
        </Grid>
      </Grid>
    </>
  );
};

export default ButtonSizes;
