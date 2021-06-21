import './ChatUI.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faPaperclip, faMicrophone } from '@fortawesome/free-solid-svg-icons'
import {MessageGroup} from './MessageGroup'
import {MessageGroupYou} from './MessageGroupYou'

function ChatUI() {
    return (
      <div className="ChatUI">
        <div className="current-person">
            <div className="image">
                 <div className="profile"></div>
            </div>
            <div className="profile-text">
                <h2>Emily Chiu</h2>
                <p className="status">Typing</p>
            </div>
            <a href="#" className="profile-options">
                <FontAwesomeIcon icon={faEllipsisV} />
            </a>
        </div>
        <div className="chat">
            <div className="date">Today, June 21st</div>
            <MessageGroupYou />
            <MessageGroup />
        </div>
        <div className="chat-box">
            <a href="#" className="icon">
                <FontAwesomeIcon icon={faPaperclip} />
            </a>
            <input type="text" name="message" className="message" placeholder="Enter your message here..." />
            <a href="#" className="microphone">
                <FontAwesomeIcon icon={faMicrophone} />
            </a>
        </div>
      </div>
    );
  }
  
  export default ChatUI;
  