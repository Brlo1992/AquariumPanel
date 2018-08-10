import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, } from 'reactstrap';
import HttpClient from '../communication/HttpClient';

export default class ScheduledTaskModal extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name:"",
            urlAction:"",
            executionTime: "",
            status: ""
        }
    }

    handleChangeExecutionTime = (event) => {
        this.setState({ executionTime: event.target.value })
    }

    handleChangeStatus = (event) => {
        this.setState({ status: event.target.value })
    }

    handleChangeName = (event) => {
        this.setState({ name: event.target.value })
    }

    handleChangeUrlAction = (event) => {
        this.setState({ urlAction: event.target.value })
    }

    afterSubmit = (response) => {
        if (response.isValid) {
            this.props.toggle();
            this.props.updateTasks(response.content);
        }
    }

    handleForm = () => {
        let url = "scheduledTask/add";

        let data = {
            name: this.props.name,
            status: this.props.status,
            executionTime: this.props.execTime,
            urlAction: this.props.url
        };

        HttpClient.post(url, data, this.afterSubmit);
    }

    editExistingTask = () => {
        console.log(this.props.taskJob);
        if (this.props.taskJob) {
            this.setState({
                name: this.props.name,
                urlAction: this.props.url,
                status: this.props.status,
                executionTime: this.props.execTime
            });
        }
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
                    <ModalHeader toggle={this.toggle}>New Scheduled Task</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label>Name</Label>
                                <Input onChange={this.handleChangeName} type="text" name="name" id="name" value={this.props.name} placeholder="Scheduled task name" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Url action</Label>
                                <Input onChange={this.handleChangeUrlAction} type="url" name="urlAction" id="urlAction" value={this.props.url} placeholder="Scheduled task url action" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Status</Label>
                                <Input onChange={this.handleChangeStatus} type="select" name="status" id="status" value={this.props.status} placeholder="Scheduled task status">
                                    <option>ON</option>
                                    <option>OFF</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Execution time</Label>
                                <Input onChange={this.handleChangeExecutionTime} type="time" name="executionTime" id="executionTime" value={this.props.execTime} placeholder="Scheduled task execution time" />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.handleForm}>Add</Button>
                        <Button color="danger" onClick={this.props.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
