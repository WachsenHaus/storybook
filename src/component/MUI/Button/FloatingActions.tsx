// import React, { FC, ReactNode } from 'react';

// import { createStyles, makeStyles, WithStyles, withStyles } from '@material-ui/core/styles';
// import { Fab } from '@material-ui/core';
// import AddIcon from '@material-ui/icons/Add';

// const useStyle = makeStyles((theme) => ({
//   fab: {
//     margin: 0,
//     top: 'auto',
//     left: 'auto',
//     bottom: 20,
//     right: 20,
//     position: 'fixed',
//   },
// }));

// const ExtendedFab: FC<{
//   variant?: any;
//   color?: any;
//   href?: any;
//   disabled?: any;
// }> = (props) => {
//   const classes = useStyle();
//   const isExtended = React.Children.toArray(props.children).find((child) => typeof child === 'string');

//   return <Fab className={classes.fab} variant={isExtended && 'extended'} {...props} />;
// };

// const FloatingActions = ({ fabColor }) => (
//   <>
//     <Fab />
//     <ExtendedFab color={fabColor}>
//       Add
//       <AddIcon />
//     </ExtendedFab>
//   </>
// );

// export default FloatingActions;
