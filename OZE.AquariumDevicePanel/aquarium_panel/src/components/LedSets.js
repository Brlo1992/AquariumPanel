import React from 'react';
import { Row, Col } from 'reactstrap';
import LedSetStatus from './LedSetStatus';

export default class LedSet extends React.Component {
    render() {
        return <Row>
            <Col>
                <Row>
                    <Col><h5>{this.props.name}</h5></Col>
                </Row>
                <Row>
                    <Col>
                        <LedSetStatus ledSetId={this.props.id} ledStatus={true} />
                    </Col>
                    <Col>
                        <a className="btn btn-success btn-block"
                            href={"http://192.168.8.133/turnOn/".concat(this.props.id)}>Turn On</a>
                    </Col>
                    <Col>
                        <a className="btn btn-danger btn-block"
                            href={"http://192.168.8.133/turnOff/".concat(this.props.id)}>Turn Off</a>
                    </Col>
                </Row>
            </Col>
        </Row>
    }
}