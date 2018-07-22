import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import HttpClient from '../communication/HttpClient';
import LedSetStatus from './LedSetStatus';

export default class LedSet extends React.Component {

    turnLedSetOn = () => HttpClient.get("aquarium/turnOnLedSet/".concat(this.props.id));

    turnLedSetOff = () => HttpClient.get("aquarium/turnOffLedSet/".concat(this.props.id));

    render() {
        return <Row>
            <Col><h5>{this.props.name}</h5></Col>
            <Col>
                <LedSetStatus ledSetId={this.props.id} ledStatus={true} />
            </Col>
            <Col>
                <Button color="success" block onClick={() => this.turnLedSetOn()}>Turn on</Button>
            </Col>
            <Col>
                <Button color="danger" block onClick={() => this.turnLedSetOff()}>Turn off</Button>
            </Col>
        </Row>
    }
}