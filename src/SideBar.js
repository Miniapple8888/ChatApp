import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWaveSquare, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { faCalendar, faClock, faComment } from '@fortawesome/free-regular-svg-icons'

function SideBar() {
  return (
    <div className="SideBar">
      <div className="top">
          <a href="#" className="nav-element">
            <FontAwesomeIcon icon={faCircleNotch} />
          </a>
      </div>
      <div className="middle">
          <a href="#" className="nav-element">
            <FontAwesomeIcon icon={faWaveSquare} />
          </a>
          <a href="#" className="nav-element">
            <FontAwesomeIcon icon={faClock} />
          </a>
          <a href="#" className="nav-element">
            <FontAwesomeIcon icon={faCalendar} />
          </a>
          <a href="#" className="nav-element">
            <FontAwesomeIcon icon={faComment} />
          </a>
      </div>
      <div className="bottom">
          <a href="#" className="nav-element">
              <div className="profile" />
          </a>
      </div>
    </div>
  );
}

export default SideBar;
