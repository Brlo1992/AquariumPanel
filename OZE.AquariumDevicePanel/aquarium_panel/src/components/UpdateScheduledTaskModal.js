import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, } from 'reactstrap';
import HttpClient from '../communication/HttpClient';

export default class ScheduledTaskModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            urlAction: "",
            timeExecution: "",
            status: "",
            id: ""
        }
    }

    handleChangeExecutionTime = (event) => {
        this.setState({ timeExecution: event.target.value })
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

    handleChangeId = (event) => {
        this.setState({ id: event.target.value })
    }

    afterSubmit = (response) => {
        if (response.isValid) {
            this.props.toggle();
            this.props.updateTasks(response.content);
        }
    }

    getId = () => {
        if (this.state.id) {
            return this.state.id;
        }
    }

    handleForm = () => {
        let url = this.props.url;

        let data = {
            id: this.getId(),
            name: this.state.name,
            status: this.state.status,
            timeExecution: this.state.timeExecution,
            urlAction: this.state.url
        };

        HttpClient.post(url, data, this.afterSubmit);
    }

    showIdIfExist = () => {
        if (this.props.id) {
            return <FormGroup>
                <Label>Id</Label>
                <Input onChange={this.handleChangeId} type="text" name="id" id="id" value={this.props.id} placeholder="Edited task id" />
            </FormGroup>
        }
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
                    <ModalHeader toggle={this.props.toggle}>New Scheduled Task</ModalHeader>
                    <ModalBody>
                        <Form>
                            {this.showIdIfExist()}
                            <FormGroup>
                                <Label>Name</Label>
                                <Input onChange={this.handleChangeName} type="text" name="name" id="name" value={this.props.name} placeholder="Scheduled task name" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Url action</Label>
                                <Input onChange={this.handleChangeUrlAction} type="url" name="urlAction" id="urlAction" value={this.props.urlAction} placeholder="Scheduled task url action" />
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
                                <Input onChange={this.handleChangeExecutionTime} type="time" name="executionTime" id="executionTime" value={this.props.timeExecution} placeholder="Scheduled task execution time" />
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
