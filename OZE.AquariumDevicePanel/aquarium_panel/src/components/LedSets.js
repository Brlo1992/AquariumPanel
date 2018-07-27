import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import HttpClient from '../communication/HttpClient';
import LedSetStatus from './LedSetStatus';

export default class LedSet extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            id: this.props.id,
            status: this.props.status
        };
    }

    changeSingleLedStatus = (response, status) => {
        if (response && response.isValid) {
            this.state.ledPins.find(ledPin => ledPin.id === this.state.id).status = status;
            this.forceUpdate();
        }
    }

    turnOnSingleLed = (response, id) => this.changeSingleLedStatus(response, "on");

    turnOffSingleLed = (response, id) => this.changeSingleLedStatus(response, "off");

    turnLedSetOn = () => HttpClient.get("aquarium/turnOnLedSet/".concat(this.props.id), this.turnOnSingleLed);

    turnLedSetOff = () => HttpClient.get("aquarium/turnOffLedSet/".concat(this.props.id), this.turnOffSingleLed);

    render() {
        return <Row>
            <Col><h5>{this.props.name}</h5></Col>
            <Col>
                <LedSetStatus ledSetId={this.state.id} ledStatus={this.state.status} />
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