import React from 'react'
import { Row, Col, Button } from 'reactstrap';
import * as Fa from "react-icons/lib/fa";


export default class ScheduledTasks extends React.Component {
    render() {
        return <Row>
            <Col>
                <Row><Col><h2>Scheduled Tasks</h2></Col></Row>
                <br />
                <Row>
                    <Col><h4>Action name</h4></Col>
                    <Col><h4>Status</h4></Col>
                    <Col><h4>Execution time</h4></Col>
                    <Col><h4>Last execution</h4></Col>
                    <Col md="3"><h4>Possible actions</h4></Col>
                </Row>
                <hr />
                <Row>
                    <Col><p>Turn on all leds</p></Col>
                    <Col><p>On</p></Col>
                    <Col><p>09:15:01</p></Col>
                    <Col><p>12/12/2017 09:15:01</p></Col>
                    <Col md="1"><Button  color="success" block><Fa.FaEdit/></Button></Col>
                    <Col md="1"><Button  color="primary" block><Fa.FaBolt/></Button></Col>
                    <Col md="1"><Button  color="danger" block><Fa.FaTrash/></Button></Col>
                </Row>
                <br />
                <Row>
                    <Col><p>Turn on all leds</p></Col>
                    <Col><p>On</p></Col>
                    <Col><p>09:15:01</p></Col>
                    <Col><p>12/12/2017 09:15:01</p></Col>
                    <Col md="1"><Button  color="success" block><Fa.FaEdit/></Button></Col>
                    <Col md="1"><Button  color="primary" block><Fa.FaBolt/></Button></Col>
                    <Col md="1"><Button  color="danger" block><Fa.FaTrash/></Button></Col>
                </Row>
                <br />
            </Col>
        </Row>
    }
}
