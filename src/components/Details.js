import React from 'react';
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

const Details = props => {
  let id = props.match.params.id;
  let business = rows.filter(business => business.id === parseInt(id))[0]

  return (
    <>
    <h1>{business.name}</h1>
    <h4>{business.address}</h4>
    <h4>{business.hours}</h4>
    <p>{business.description}</p>
    <p>MAP GOES HERE!</p>
    </>
  )
}

export default Details