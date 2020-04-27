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
      <form onSubmit={()=> props.userLogin(props.parentState)} className={classes.root} noValidate autoComplete="off">
        <TextField id="username" label="Username" onChange={props.handleFieldChange} required />
        <TextField id="password" label="Password" onChange={props.handleFieldChange} required />
        <Button className={classes.button} onClick={()=>props.userLogin(props.parentState)}>Submit</Button>
      </form>
    </Container>
  );
}