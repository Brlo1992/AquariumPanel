import React from 'react';
import {Col} from 'reactstrap';

export const LetSetStatus = (props) => {
    return <Col>
        <span>{props.ledSetName}</span>
        <span>{props.ledSetStatus}</span>
    </Col>
}

export default LetSetStatus