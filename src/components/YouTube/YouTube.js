import React from 'react';
import './YouTube.css';
import SectionHeader from '../SectionHeader';

function YouTube() {

  return (
    <div className="row">
        <div className="col-1" />
        <div className="col-10" id="youtubeContainer">
            <SectionHeader header="Youtube" />
        </div>
        <div className="col-1" />
    </div>
  );
}

export default YouTube;