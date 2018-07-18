import React from 'react';
import {Badge} from 'reactstrap';

export const LetSetStatus = (props) => {
    let status = <Badge color="danger">Off</Badge>;

    if(props.ledStatus){
        status = <Badge color="success">On</Badge>;
    }

    return <div>
        <h3>{status}</h3>
    </div>
}

export default LetSetStatus