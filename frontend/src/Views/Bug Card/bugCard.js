import React from 'react'
import './bugCard.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const {name, priority, version} = props.bug;

    function Clicked(){
        props.clicked(props.name);
    }

    return(
        <div className='bug-card' onClick={Clicked}>
            <h2 className='name'>{name}</h2>
            <h4 className='priority'>{priority}</h4>
            <h5 className='version'>{version}</h5>
        </div>
    )
}