import React, { useState } from 'react';
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

const Add = (props) => {
  const classes = useStyles();
  const [ name, setName ] = useState('');
  const [ address, setAddress ] = useState('');

  const onNameChange = e => {
    setName(e.target.value)
  }
  const onAddressChange = e => {
    setAddress(e.target.value)
  }

  return (
    <Container className={classes.container}>
      <Typography variant='h3'>Add Business</Typography>
      <form onSubmit={()=>{props.addBusiness(this.state.business)}} className={classes.root} noValidate autoComplete="off">
        <TextField id="name" label="Name" onChange={onNameChange} />
        <TextField id="address" label="Address" onChange={onAddressChange} />
        <TextField id="hours" label="Hours" />
        <TextField id="description" label="Description" />
        <Button type="submit" className={classes.button} >Save</Button>
      </form>
    </Container>
  );
}

export default Add;