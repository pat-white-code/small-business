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

const AddForm = (props) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant='h3'>Add Business</Typography>
      <form 
        className={classes.root} noValidate autoComplete="off" onSubmit={(e)=>{e.preventDefault(); props.addBusiness(props.parentState); props.addUserBusiness(props.parentState, props.userId); props.handleClose()}} >

        <TextField id="name" label="Name" onChange={props.onFormChange} />
        <TextField id="address" label="Address" onChange={props.onFormChange} onBlur={props.formUrl} />
        <TextField id="hours" label="Hours" onChange={props.onFormChange} />
        <TextField id="description" label="Description" onChange={props.onFormChange} />
        <iframe
          title='google map'
          width="200"
          height="200"
          frameBorder="0" style={{border: 0}}
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAzq7W-eXQNz0ptPkQqWi9LBluABETr7Zs
          ${props.mapUrl}`} allowFullScreen>
      </iframe>
        <Button type='submit' 
                className={classes.button}
                
                  >
            Add User Business
        </Button>
      </form>
    </Container>
  );
}

export default AddForm;