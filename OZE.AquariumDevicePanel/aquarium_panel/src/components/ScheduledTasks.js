import React from 'react'
import { Row, Col, Button } from 'reactstrap';
import ScheduledTaskRow from './ScheduledTaskRow'


export default class ScheduledTasks extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            taskJobs : []
        };
    }
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
                <br />
                    <ScheduledTaskRow />
                    <ScheduledTaskRow />
                    <ScheduledTaskRow />
                <br />
            </Col>
        </Row>
    }
}
