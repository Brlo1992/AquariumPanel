import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import * as Fa from "react-icons/lib/fa";

export default class ScheduledTaskRow extends React.Component {
    render() {
        return <Row>
            <Col><p>{this.props.name}</p></Col>
            <Col><p>{this.props.status}</p></Col>
            <Col><p>{this.props.timeExecution}</p></Col>
            <Col><p>{this.props.lastTimeExecution}</p></Col>
            <Col md="1"><Button color="success" block><Fa.FaEdit /></Button></Col>
            <Col md="1"><Button color="primary" block><Fa.FaBolt /></Button></Col>
            <Col md="1"><Button color="danger" block><Fa.FaTrash /></Button></Col>
        </Row>
    }
}
