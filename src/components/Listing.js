import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    minWidth: 500,
    maxWidth: 900
  },
  container: {
    paddingTop: 30,
    display: 'flex',
    justifyContent: 'center'
  }
});

export default function Listing(props) {
  const classes = useStyles();

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Hours</TableCell>
            <TableCell align="center">Address</TableCell>
            {props.isLoggedIn &&
              <TableCell align="center">Delete</TableCell>
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {props.businesses.map((business, index) => (
            <TableRow key={business.id}>
              <TableCell component="th" scope="row"><Link to={`/details/${business.id}`} > {business.name} </Link> </TableCell>
              <TableCell align="center">{business.description}</TableCell>
              <TableCell align="center">{business.hours}</TableCell>
              <TableCell align="center">{business.address}</TableCell>
              {props.isLoggedIn &&
                <TableCell align="center">
                  <Button onClick={()=>props.deleteBusiness(business)}>DELETE</Button>
                </TableCell>
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}