import {React, Component} from 'react';
import './Convo.css';

export class Convo extends Component {

    constructor(props) {
        super(props)
        this.state = { img: this.props.img, name: this.props.name, time: this.props.time, message: this.props.message }
    }

    render() {
        let bg = "url(" + this.state.img + ")"
        return (
        <div className="Convo">
            <div className="image">
                <div className="profile" style={{backgroundImage: bg}}></div>
            </div>
            
            <div className="text-info">
                <div className="up">
                   <h3 className="name">{this.state.name}</h3>
                    <p className="time">{this.state.time}</p> 
                </div>
                <p className="message">{this.state.message}</p>
            </div>
            
        </div>
        );
    }
}