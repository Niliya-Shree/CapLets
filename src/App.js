import NavScrollExample from './component/Navbar.js';
import Profile from './component/Profile.js';
import { useState} from "react";
import "./App.css";

function App() { 
  const [darkMode, setDarkMode] = useState(false);
  // changes body color
  document.body.className = darkMode ? 'dark' : ''; 

  return (
    // <div className={`${darkMode ? 'dark' : ''}`}>
<div>
      {/*changes navbar color*/}
      <NavScrollExample title="CapLets" darkMode={darkMode} setDarkMode={setDarkMode}/> 

      {/*changes Profile(textarea) color*/}
      <Profile darkMode={darkMode}/>
</div>
    // </div>
  );
}

export default App;
