import React from 'react';
import { Row, Col } from 'reactstrap';

export default class Status extends React.Component {
    render() {
        return <Row>
            <Col>
                <Row>
                    <h2>Current Status</h2>
                </Row>
                <Row>
                    <Col>
                        <span>Led set one</span>
                        <span>enabled</span>
                    </Col>
                    <Col>
                        <span>Led set one</span>
                        <span>enabled</span>
                    </Col>
                    <Col>
                        <span>Led set one</span>
                        <span>enabled</span>
                    </Col>
                </Row>
                <Row>
                    <Col><a className="btn btn-success btn-block" href="http://192.168.8.133/turnOn">Turn On</a></Col>
                    <Col><a className="btn btn-danger btn-block" href="http://192.168.8.133/turnOff">Turn Off</a></Col>
                </Row>
            </Col>
        </Row>
    }
}