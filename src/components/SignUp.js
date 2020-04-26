import React, {Component} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Button, Typography } from '@material-ui/core';
import axios from 'axios';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//       display: 'flex',
//       flexDirection: 'column',
//     },
//   },
//   container: {
//     display: 'flex',
//     alignItems: 'center',
//     flexDirection: 'column',
//     padding: 50
//   },
//   button: {
//     width: '100%'
//   }
// }));

export default class Signup extends Component {
  state = {
    username: '',
    password: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  createUser = e => {
    e.preventDefault();
    console.log(this.state);
    axios.post('/users', this.state)
      .then(res => console.log(res))
  }

  render(){
    return (
      <Container>
      <Typography variant='h3'>Sign Up</Typography>
      <form noValidate autoComplete="off" onSubmit={this.createUser}>
        <TextField id="username" label="Username" required onChange={this.handleChange} />
        <TextField id="password" label="Password" required onChange={this.handleChange} />
        <Button type="submit"> Submit </Button>
      </form>
    </Container>
    )
  }
}