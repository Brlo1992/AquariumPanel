import React from 'react';
import { Row, Col } from 'reactstrap';
import LedSets from './LedSets';

export default class Status extends React.Component {
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
                    <Col><a className="btn btn-success btn-block" href="http://192.168.8.133/turnOn">Turn On</a></Col>
                    <Col><a className="btn btn-danger btn-block" href="http://192.168.8.133/turnOff">Turn Off</a></Col>
                </Row>
            </Col>
        </Row>
    }
}