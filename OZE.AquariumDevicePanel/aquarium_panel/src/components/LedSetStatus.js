import React from 'react';
import {Col} from 'reactstrap';

export const LetSetStatus = (props) => {
    return <div>
        <span>{props.ledSetName}</span>
        <span> Status: </span>
        <span>{props.ledSetStatus}</span>
    </div>
}

export default LetSetStatus