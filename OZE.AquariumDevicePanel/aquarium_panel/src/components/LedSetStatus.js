import React from 'react';
import { Badge } from 'reactstrap';

export const LetSetStatus = (props) => {
    let status;

    if (props.ledStatus === "on") {
        status = <Badge color="success">On</Badge>;
    }
    else if (props.ledStatus === "off") {
        status = <Badge color="danger">Off</Badge>;
    }
    else {
        status = <Badge color="primary"> - </Badge>;
    }

    return <div>
        <h3>{status}</h3>
    </div>
}

export default LetSetStatus