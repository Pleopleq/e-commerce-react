import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const DividedLayoutButtons = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
        {props.children}
    </div>
  )
}

export default DividedLayoutButtons