import React, { Component } from 'react';
import './App.css';
import {Container, Row, Col} from 'reactstrap';
import Status from './components/Status';
import ScheduledTasks from './components/ScheduledTasks';

class App extends Component {
  render() {
    return <Container>
        <Row>
          <Col><h1>Aquarium Panel</h1></Col>
        </Row>
        <Status />
        <hr />
        <ScheduledTasks />
        <hr />
      </Container>
  }
}

export default App;
