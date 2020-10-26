import React from 'react';
import './SectionHeader.css';

function SectionHeader(props) {

  return (
    <div className="row">
        <div className="col-3 sectionHeader">
            {props.header}
        </div>
        <div className="col-9">
        </div>
    </div>
  )
}

export default SectionHeader;