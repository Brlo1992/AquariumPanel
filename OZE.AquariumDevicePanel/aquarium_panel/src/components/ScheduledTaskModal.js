import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, } from 'reactstrap';
import HttpClient from '../communication/HttpClient';

export default class ScheduledTaskModal extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: "",
            urlAction: "",
            status: "",
            executionTime: ""
        }
    }

    handleChangeExecutionTime = (event) => {
        this.state({executionTime: event.target.value})
    }

    handleChangeStatus = (event) => {
        this.state({status: event.target.value})
    }

    handleChangeName= (event) => {
        this.state({name: event.target.value})
    }

    handleChangeUrlAction= (event) => {
        this.state({urlAction: event.target.value})
    }

    afterSubmit = (response) => {
        
    }

    handleForm = () => {
        let url = "";
        
        let data = {
            name: this.state.name,
            status: this.state.status,
            executionTime: this.state.executionTime,
            urlAction: this.state.urlAction
        };

        HttpClient.Post(url, data, this.afterSubmit);
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
                    <ModalHeader toggle={this.toggle}>New Scheduled Task</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label>Name</Label>
                                <Input type="text" name="name" id="name" value={this.state.name} placeholder="Scheduled task name" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Url action</Label>
                                <Input type="url" name="urlAction" id="urlAction" value={this.state.urlAction} placeholder="Scheduled task url action" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Status</Label>
                                <Input type="select" name="status" id="status" value={this.state.status} placeholder="Scheduled task status">
                                    <option>ON</option>
                                    <option>OFF</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Execution time</Label>
                                <Input onChange={this.hanldeChangeExecutionTime} type="time" name="executionTime" id="executionTime" value={this.state.executionTime} placeholder="Scheduled task execution time" />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.addNewScheduledTask}>Add</Button>
                        <Button color="danger" onClick={this.props.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
