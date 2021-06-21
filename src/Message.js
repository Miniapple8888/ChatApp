import {React, Component} from 'react';
import './Message.css';

export class Message extends Component {

    constructor(props) {
        super(props)
        this.state = { message: props.message }
    }

    render() {
        return (
        <div className="Message">
            <p className="message">{this.state.message}</p>
        </div>
        );
    }
}