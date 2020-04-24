import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      display: 'flex',
      flexDirection: 'column',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 50
  },
  button: {
    width: '100%'
  }
}));

export default function Login(props) {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant='h3'>Login</Typography>
      <form onSubmit={()=>{props.login()}} className={classes.root} noValidate autoComplete="off">
        <TextField id="username" label="Username" required />
        <TextField id="password" label="Password" required />
        <Button className={classes.button}>Submit</Button>
      </form>
    </Container>
  );
}