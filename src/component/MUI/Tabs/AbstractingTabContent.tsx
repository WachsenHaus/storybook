import React, { Fragment, Children, useState } from 'react';
import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const styles = (theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgounrdColor: theme.palette.background.paper,
    },
    tabContent: {
      padding: theme.spacing(2),
    },
  });

const TabContainer = ({ children, value: valueProp }) => {
  const [value, setValue] = useState();

  const onChange = (e, value) => {
    setValue(value);
  };

  if (value === undefined) {
    setValue(valueProp);
  }

  return (
    <Fragment>
      <Tabs value={value} onChange={onChange}>
        {Children.map(children, (child) => (
          <Tab label={child.props.label} />
        ))}
      </Tabs>
      {Children.map(children, (child, index) => (index === value ? child : null))}
    </Fragment>
  );
};

interface Props extends WithStyles<typeof styles> {
  tabContent?: string;
  children?: any;
  label?: string;
}

const TabContent = withStyles(styles)(({ classes, children }: Props) => {
  return (
    <Typography component="div" className={classes.tabContent}>
      {children}
    </Typography>
  );
});

const AbstractingTabContent = withStyles(styles)(({ classes }: Props) => (
  <div className={classes.root}>
    <TabContainer value={1}>
      <TabContent label="Item One">Item One Content</TabContent>
      <TabContent label="Item Two">Item Two Content</TabContent>
      <TabContent label="Item Three">Item Three Content</TabContent>
    </TabContainer>
  </div>
));

export default AbstractingTabContent;
