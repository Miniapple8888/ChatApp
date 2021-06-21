import {React, Component} from 'react';
import './MessageGroup.css';
import {Message} from './Message';

export class MessageGroup extends Component {
    render() {
        return (
        <div className="MessageGroup">
            <div className="image">
                <div className="profile"></div>
            </div>
            
            <div className="profile-message">
            <Message message="Sure! Let's meet at Rue 1234 Ave St-Lawrence!" />
            </div>
        </div>
        );
    }
}