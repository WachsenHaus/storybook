import React, { Fragment, Component, useState } from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import { makeStyles, WithStyles } from '@material-ui/core';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import { FC } from 'react';

const styles = ({ palette }: Theme) =>
  createStyles({
    error: {
      backgroundColor: palette.error.main,
      color: palette.error.contrastText,
    },
  });

interface Props extends WithStyles<typeof styles> {
  children: JSX.Element;
}

const ErrorBoundary = withStyles(styles)(({ classes, children }: Props) => {
  const [error, setError] = useState<string | null>('?');

  const onClose = () => {
    setError(null);
  };
  return (
    <Fragment>
      {error === null && children}
      <Snackbar open={Boolean(error)} message={error !== null && error} ContentProps={{ classes: { root: classes.error } }} />
    </Fragment>
  );
});

const MyButton: FC<{
  label?: any;
  throwError?: any;
  children?: any;
}> = ({ label, throwError }) => {
  if (throwError) {
    throw new Error('Random error');
  }
  return <Button>{label}</Button>;
};

const ErrorBoundariesAndErrorSnackbars = () => (
  <Fragment>
    <h1>dd</h1>
    <ErrorBoundary>
      <MyButton label="First Button" />
    </ErrorBoundary>
    <ErrorBoundary>
      <MyButton label="Second Button" throwError />
    </ErrorBoundary>
  </Fragment>
);

export default ErrorBoundariesAndErrorSnackbars;
