import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ScheduledTaskModal extends React.Component {
  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
              I will add new scheduled tasks
              
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.addNewScheduledTask}>Add</Button>{' '}
            <Button color="danger" onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
