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

  const rows = [
  {
    id: 1,
    name: 'Radio Coffee & Beer',
    address: '4204 Menchaca Rd, Austin, TX 78704',
    description: 'Hip spot for coffee, beer & pastries in wood-paneled digs, plus tables & a taco truck out back.',
    hours: '10 AM - 12AM',
    website: 'https://www.radiocoffeeandbeer.com/'
  }
]

export default function Listing() {
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
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row"><Link to={`/details/${row.id}`} > {row.name} </Link> </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.hours}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}