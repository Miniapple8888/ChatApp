import './FriendList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import {Convo} from './Convo'


function FriendList() {
    return (
      <div className="FriendList">
        <div className="tab-name" >
            <h2>Chats</h2>
            <a href="#" className="tab-options">
                <FontAwesomeIcon icon={faEllipsisV} />
            </a>
        </div>
        <div className="section">
            <h3 className="section-name">Pinned</h3>
            <Convo img="itperson.jpg" name="Emily Chiu" time="2d" message="Sent a photo" />
        </div>
        <div className="section">
            <h3 className="section-name">All contacts</h3>
            <Convo img="itperson.jpg" name="Emily Chiu" time="2d" message="Sent a photo" />
        </div>

      </div>
    );
  }
  
  export default FriendList;
  