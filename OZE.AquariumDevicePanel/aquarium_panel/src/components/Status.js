import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import LedSets from './LedSets';
import HttpClient from '../communication/HttpClient';


export default class Status extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            ledPins:[]
        }
    }

    getLedSets = () => {
        this.state.ledPins.map(ledSet => <LedSets id={ledSet.id} name={ledSet.id}/>)
    }

    turnOn = () => HttpClient.get("turnOn");

    turnOff = () => HttpClient.get("turnOff");

    async componentDidMount(){
        let response = await HttpClient.getAsync("aquarium/getLedPins");    

        this.setState({
            ledPins: response
        });
    }

    render() {
        return <Row>
            <Col>
                <br />
                <hr />
                <Row><Col><h2>Current Status</h2></Col></Row>
                {this.getLedSets()}
                <Row>
                    <Col><Button color="success" onClick={() => this.turnOn()} block>Turn on</Button></Col>
                    <Col><Button color="danger" onClick={() => this.turnOff()} block>Turn off</Button></Col>
                </Row>
            </Col>
        </Row>
    }
}