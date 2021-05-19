// React imports
import React from 'react';

// Styles & Assets
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.dkBlueGrey,
    width: '100%',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return <Footer className={classes.footer}>Example Footer</Footer>;
}
