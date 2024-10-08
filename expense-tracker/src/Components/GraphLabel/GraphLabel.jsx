import React from 'react';
import './GraphLabel.css';

const GraphLabel = ({ name, color }) => {
  return (
    <div className="graphLabel">
      <span className="label" style={{ backgroundColor: color }}></span>
      <span className="labelText">{name}</span>
    </div>
  );
};

export default GraphLabel;
