import React, { Component } from 'react';
import Card from './Card';
import uuid from "uuid";
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      { props.cards.map(card => (
      <Card card={card} key={uuid()}/>
      
      ))}

    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cardData: PropTypes.shape({
    headline:PropTypes.string,
    img:PropTypes.string,
    author:PropTypes.string,
  })
}


export default Cards;