import React from 'react';
import { Link } from 'react-router-dom';

const Details = props => {
  let id = props.match.params.id;
  console.log('props.match.params.id:__ ',id)
  let business = props.businesses.filter(business => business.id === parseInt(id))[0]

  return (
    <>
    <h1>{business.name}</h1>
    <h4>{business.address}</h4>
    <h4>{business.hours}</h4>
    <p>{business.description}</p>
    <p>MAP GOES HERE!</p>
    <Link to='/'>Back</Link>
    </>
  )
}

export default Details