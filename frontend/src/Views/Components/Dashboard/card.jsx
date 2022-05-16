import React from "react";
import "./card.css";
import Priority from '../../../Controllers/priorityController';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const {level, color} = Priority(props.priority);

  return (
    <div className="dashboard-card" onClick={props.clicked} style={{color: color}}>
      <h2>Total: {props.count}</h2>
      <p>{level}</p>
    </div>
  );
};
