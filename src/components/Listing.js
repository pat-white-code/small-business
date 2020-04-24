import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Listing(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
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
          {props.businesses.map((business) => (
            <TableRow key={business.id}>
              <TableCell component="th" scope="row"><Link to={`/details/${business.id}`} > {business.name} </Link> </TableCell>
              <TableCell align="right">{business.description}</TableCell>
              <TableCell align="right">{business.hours}</TableCell>
              <TableCell align="right">{business.address}</TableCell>
              {props.isLoggedIn &&
                <TableCell align="center">DELETE</TableCell>
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}