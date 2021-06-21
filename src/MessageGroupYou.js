import {React, Component} from 'react';
import './MessageGroupYou.css';
import {MessageYou} from './MessageYou';

export class MessageGroupYou extends Component {
    render() {
        return (
        <div className="MessageGroupYou">
            <MessageYou message="Hey, want to catch up with some coffee?" time="13:52" checked="true" />
        </div>
        );
    }
}