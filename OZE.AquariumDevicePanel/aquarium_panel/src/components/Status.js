import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import LedSets from './LedSets';
import HttpClient from '../communication/HttpClient';


export default class Status extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            ledSets:[]
        }
    }

    getLedSets = () => {
        this.state.ledSets.map(ledSet => <LedSets id={ledSet.id} name={ledSet.id}/>)
    }

    turnOn = () => HttpClient.get("turnOn");

    turnOff = () => HttpClient.get("turnOff");

    async componentDidMount(){

    }

    render() {
        return <Row>
            <Col>
                <br />
                <hr />
                <Row><Col><h2>Current Status</h2></Col></Row>
                <LedSets id={1} name={"Pierwszy"}/>
                <br />  
                <LedSets id={2} name={"Drugi"}/>                    
                <br />
                <LedSets id={3} name={"Trzeci"}/>                    
                <br />
                <Row>
                    <Col><Button color="success" onClick={() => this.turnOn()} block>Turn on</Button></Col>
                    <Col><Button color="danger" onClick={() => this.turnOff()} block>Turn off</Button></Col>
                </Row>
            </Col>
        </Row>
    }
}