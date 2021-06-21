import {React, Component} from 'react';
import './MessageYou.css';

export class MessageYou extends Component {

    constructor(props) {
        super(props)
        this.state = { message: props.message, time: props.time, checked: props.checked }
    }

    render() {
        return (
        <div className="MessageYou">
            <p className="message">{this.state.message}</p>
            <div className="small-detail">
                <p className="time">{this.state.time}</p>
                <p className="checked">{this.state.checked ? '√√' : '  '}</p>
            </div>
            
        </div>
        );
    }
}