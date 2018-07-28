import React from 'react'
import { Row, Col, Button } from 'reactstrap';


export default class ScheduledTasks extends React.Component {
    render() {
        return <Row>
            <Col>
                <Row><Col><h2>Scheduled Tasks</h2></Col></Row>
                <br />
                <Row>
                    <Col><h5>Action name</h5></Col>
                    <Col><h5>Status</h5></Col>
                    <Col><h5>Execution time</h5></Col>
                    <Col><h5>Last execution</h5></Col>
                    <Col md="3"><h5>Possible actions</h5></Col>
                </Row>
                <hr />
                <Row>
                    <Col>Turn on all leds</Col>
                    <Col>On</Col>
                    <Col>09:15:01</Col>
                    <Col>12/12/2017 09:15:01</Col>
                    <Col md="1"><Button  color="danger" block>D</Button></Col>
                    <Col md="1"><Button  color="primary" block>R</Button></Col>
                    <Col md="1"><Button  color="success" block>E</Button></Col>
                </Row>
                <br />
                <Row>
                    <Col>Turn on all leds</Col>
                    <Col>On</Col>
                    <Col>09:15:01</Col>
                    <Col>12/12/2017 09:15:01</Col>
                    <Col md="1"><Button color="danger" block>D</Button></Col>
                    <Col md="1"><Button color="primary" block>R</Button></Col>
                    <Col md="1"><Button color="success" block>E</Button></Col>
                </Row>
            </Col>
        </Row>
    }
}
