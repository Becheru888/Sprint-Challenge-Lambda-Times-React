import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import uuid from "uuid";

const Cards = props => {
 
  return (
    <div className="cards-container">
      { props.cards.map( card => (
         < Card card ={card} key={uuid()} />
         
      ))
        
        /* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
         
    </div>
  )
}

// Make sure you include prop types for all of your incoming props


Cards.propTypes = {
  cardData: PropTypes.shape({
    headline:PropTypes.string,
    tab:PropTypes.string,
    img:PropTypes.string,
    author:PropTypes.string,
  })
}
export default Cards;