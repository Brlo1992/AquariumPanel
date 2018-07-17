import React from 'react';
import { Row, Col } from 'reactstrap';
import LedSetStatus from './LedSetStatus';

export default class LedSet extends React.Component {
    render() {
        return <div>
            <Row>
                <LedSetStatus ledSetName="Set one" letSetStatus={true}/>
                <Col><a className="btn btn-success btn-block" href="http://192.168.8.133/turnOn">Turn On</a></Col>
                <Col><a className="btn btn-danger btn-block" href="http://192.168.8.133/turnOff">Turn Off</a></Col>
            </Row>
            <Row>
                <LedSetStatus ledSetName="Set two" letSetStatus={true} />
                <Col><a className="btn btn-success btn-block" href="http://192.168.8.133/turnOn">Turn On</a></Col>
                <Col><a className="btn btn-danger btn-block" href="http://192.168.8.133/turnOff">Turn Off</a></Col>
            </Row>
            <Row>
                <LedSetStatus ledSetName="Set three" letSetStatus={true}/>
                <Col><a className="btn btn-success btn-block" href="http://192.168.8.133/turnOn">Turn On</a></Col>
                <Col><a className="btn btn-danger btn-block" href="http://192.168.8.133/turnOff">Turn Off</a></Col>
            </Row>
        </div>
    }
}