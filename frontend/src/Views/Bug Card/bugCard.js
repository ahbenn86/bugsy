import React from 'react'
import './bugCard.css'
import PriorityController from '../../Controllers/priorityController';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const {name, priority, version} = props.bug;
    const {level, color} = PriorityController(priority);

    function Clicked(){
        props.clicked(name);
    }

    return(
        <div className='bug-card' onClick={Clicked} style={{color:color}}>
            <h2 className='name' id="ticket_details">{name}</h2>
            <h3 className='priority' id="ticket_details">{level}</h3>
            <h4 className='version' id="ticket_details">{version}</h4>
        </div>
    )
}