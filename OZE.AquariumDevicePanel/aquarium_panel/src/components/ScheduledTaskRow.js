import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import * as Fa from "react-icons/lib/fa";
import HttpClient from "../communication/HttpClient";

export default class ScheduledTaskRow extends React.Component {

    restartService = (response) => {
        console.log("Service has been restarted");
    }

    remove = () => {
        HttpClient.get("scheduledTask/remove?taskId=".concat(this.props.taskJob.id), this.props.updateTasks)
    }

    run = () => {
        HttpClient.get("scheduledTask/run", this.restartService)
    }

    render() {
        return <Row>
            <Col><p>{this.props.taskJob.name}</p></Col>
            <Col><p>{this.props.taskJob.status}</p></Col>
            <Col><p>{this.props.taskJob.timeExecution}</p></Col>
            <Col><p>{this.props.taskJob.lastTimeExecution}</p></Col>
            <Col md="1"><Button onClick={() => this.props.edit(this.propstaskJob)} color="success" block><Fa.FaEdit /></Button></Col>
            <Col md="1"><Button onClick={() => this.run()} color="primary" block><Fa.FaBolt /></Button></Col>
            <Col md="1"><Button onClick={() => this.remove()} color="danger" block><Fa.FaTrash /></Button></Col>
        </Row>
    }
}
