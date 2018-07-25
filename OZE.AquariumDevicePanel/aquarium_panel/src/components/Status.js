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
        return this.state.ledPins.map(ledSet => <LedSets id={ledSet.id} name={ledSet.id} key={ledSet.id} status={ledSet.status}/>)
    }

    turnOn = () => {
        let response = await HttpClient.getAsync("aquarium/turnOn");

        if (response.isValid) {
            this.state.ledPins.find(x => x.id === response.content.id).status = response.content.status;
            this.forceUpdate();
        }
    }

    turnOff = () => {
        let response = await HttpClient.getAsync("aquarium/turnOff");
        
        if (response.isValid) {
            this.state.ledPins.find(x => x.id === response.content.id).status = response.content.status;
            this.forceUpdate();
        }
    }

    async componentDidMount() {
        let response = await HttpClient.getAsync("aquarium/getLedPins");

        if (response.isValid) {
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