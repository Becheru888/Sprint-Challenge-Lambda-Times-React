import React from 'react';
import Tab from './Tab';
import uuid from "uuid";


const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(tab=>(
          <Tab selectedTab ={props.selectedtab} selectTabhandler={props.selectTabHandler} tab ={tab} key={uuid()}/>
        ))}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
