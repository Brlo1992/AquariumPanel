import React from 'react'
import { Row, Col, Button } from 'reactstrap';
import ScheduledTaskRow from './ScheduledTaskRow';
import HttpClient from '../communication/HttpClient';
import ScheduledTaskModal from './ScheduledTaskModal';

export default class ScheduledTasks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scheduledTasks: [],
            modal: false
        };
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    updateTasks = (tasks) => {
        this.setState({
            scheduledTasks: tasks
        });
    }

    getScheduledTasks = () => {
        let scheduledTasks = this.state.scheduledTasks.map(task => <ScheduledTaskRow taskJob={task} />)

        return <Row>
            <Col>
                <hr />
                <br />
                {scheduledTasks}
                <br />
            </Col>
        </Row>
    }

    async componentDidMount() {
        let response = await HttpClient.getAsync("scheduledTask/getAll")

        if (response && response.isValid) {
            this.setState({
                scheduledTasks: response.content
            });
        }
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
                {this.getScheduledTasks()}
                <Button color="success" onClick={this.toggle} s>Add new scheduled task</Button>
                <ScheduledTaskModal modal={this.state.modal} toggle={this.toggle} updateTasks={this.updateTasks} />
            </Col>
        </Row>
    }
}
