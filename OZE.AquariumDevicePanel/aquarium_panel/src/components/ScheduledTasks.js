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
            modal: false,
            id: "",
            name: "",
            urlAction: "",
            status: "",
            timeExecution: "",
            isEdit: false
        };
    }

    toggle = (task) => {
        this.setState({
            modal: !this.state.modal,
            isEdit: false
        });
        if (task) {
            this.setState({
                modal: !this.state.modal,
                id: task.id,
                name: task.name,
                urlAction: task.urlAction,
                status: task.status,
                timeExecution: task.timeExecution,
                isEdit: true
            });
        }
    }

    getUrl = () => {
        if(this.state.isEdit)
            return "scheduledTask/update";
        else
            return "scheduledTask/add";
    }

    updateTasks = (tasks) => {
        this.setState({
            scheduledTasks: tasks
        });
    }

    validateResponseAndGetTasks = (response) => {
        if (response && response.isValid) {
            this.updateTasks(response.content);
        }
    }

    getScheduledTasks = () => {
        let scheduledTasks = this.state.scheduledTasks.map(task => <ScheduledTaskRow edit={() => this.toggle(task)} taskJob={task} updateTasks={this.validateResponseAndGetTasks} />)

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
                <Button color="success" onClick={this.toggle}>Add new scheduled task</Button>
                <ScheduledTaskModal
                    modal={this.state.modal}
                    toggle={this.toggle}
                    id={this.state.id}
                    name={this.state.name}
                    urlAction={this.state.urlAction}
                    status={this.state.status}
                    timeExecution={this.state.timeExecution}
                    url={this.getUrl} />
            </Col>
        </Row>
    }
}
