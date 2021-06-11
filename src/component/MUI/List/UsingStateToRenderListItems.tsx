import React, { useState, FC, Fragment } from 'react';

import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import { Chip, LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const MaybeProgress = ({ loading }) => (loading ? <LinearProgress /> : null);

const useStyles = makeStyles((theme) => ({
  panelDetails: { flexDirection: 'column' },
}));

const fecthPanelContent = (index) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(['First panel content...', 'Second panel content...', 'Third panel content...', 'Fourth panel content...'][index]), 1000)
  );

const UsingStateToRenderListItems: FC = () => {
  UsingStateToRenderListItems.displayName = '상태를 사용한 리스트 항목 렌더링';
  const [items, setItems] = useState([
    { name: 'First Item', timestamp: new Date(), selected: false },
    { name: 'Second Item', timestamp: new Date(), selected: false },
    { name: 'Third Item', timestamp: new Date(), selected: false },
  ]);

  const onClick = (index) => () => {
    const item = items[index];
    const newItems = [...items];

    newItems[index] = { ...item, selected: !item.selected };
    setItems(newItems);
  };

  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={index} button dense selected={item.selected} onClick={onClick(index)}>
          <ListItemText
            primary={item.name}
            secondary={item.timestamp.toLocaleString()}
            primaryTypographyProps={{
              color: item.selected ? 'primary' : undefined,
            }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default UsingStateToRenderListItems;
