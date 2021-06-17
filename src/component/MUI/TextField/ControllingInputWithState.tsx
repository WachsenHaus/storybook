import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(2),
  },
}));

const ControllingInputWithState: FC = () => {
  const classes = useStyles();
  const [inputs, setInputs] = useState([
    { id: 'first', label: 'First', value: '' },
    { id: 'second', label: 'Second', value: '' },
    { id: 'third', label: 'Third', value: '' },
  ]);
  //
  const onChange1 = ({ target: { id, value } }) => {
    const newInputs = [...inputs];
    const index = inputs.findIndex((input) => input.id === id);

    newInputs[index] = { ...inputs[index], value };

    setInputs(newInputs);
  };

  const onChange = (e) => {
    console.log(e.target);
    const id = e.target.id;
    const value = e.target.value;
    const newInputs = [...inputs];
    const index = inputs.findIndex((input) => input.id === id);

    newInputs[index] = { ...inputs[index], value };

    setInputs(newInputs);
  };

  return (
    <Grid container spacing={4} className={classes.container}>
      {inputs.map((input) => (
        <Grid item key={input.id}>
          <TextField id={input.id} label={input.label} value={input.value} onChange={onChange} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ControllingInputWithState;
