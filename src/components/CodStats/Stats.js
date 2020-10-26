import React from 'react';
import './Stats.css';
import SectionHeader from '../SectionHeader';

function Stats(props) {

  return (
    <div className="row">
        <div className="col-1" />
        <div className="col-10" id="statsContainer">
            <SectionHeader header="Stats" />
        </div>
        <div className="col-1" />
    </div>
  );
}

export default Stats;