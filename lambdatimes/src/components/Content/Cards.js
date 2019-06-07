import React, { Component } from 'react';
import Card from './Card';
import uuid from "uuid";

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

export default Cards;