import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import LedSets from './LedSets';
import HttpClient from '../communication/HttpClient';


export default class Status extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ledPins: []
        }
    }

    getLedSets = () => {
        return this.state.ledPins.map(ledPin => <LedSets id={ledPin.id} name={ledPin.id} key={ledPin.id} status={ledPin.status}/>)
    }

    turnOn = () => {
        let response = HttpClient.get("aquarium/turnOn");

        if (response && response.isValid) {
            this.state.ledPins.forEach(ledPin => ledPin.status = "on");
            this.forceUpdate();
        }
    }

    turnOff = () => HttpClient.get("aquarium/turnOff", this.turnOffLeds);

    turnOffLeds = (response) => {
        if (response && response.isValid) {
            this.state.ledPins.forEach(ledPin => ledPin.status = "off");
            this.forceUpdate();
        }
    }

    async componentDidMount() {
        let response = await HttpClient.getAsync("aquarium/getLedPins");

        if (response && response.isValid) {
            this.setState({
                ledPins: response.content
            });
        }
    }

    render() {
        return <Row>
            <Col>
                <br />
                <hr />
                <Row><Col><h2>Current Status</h2></Col></Row>
                <br />
                {this.getLedSets()}
                <hr />
                <Row>
                    <Col><Button color="success" onClick={() => this.turnOn()} block>Turn on</Button></Col>
                    <Col><Button color="danger" onClick={() => this.turnOff()} block>Turn off</Button></Col>
                </Row>
            </Col>
        </Row>
    }
}