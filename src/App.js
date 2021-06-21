import './App.css';
import ChatUI from './ChatUI';
import FriendList from './FriendList';
import SideBar from './SideBar.js';

function App() {
  return (
    <div className="App">
      <SideBar />
      <FriendList />
      <ChatUI />
    </div>
  );
}

export default App;
