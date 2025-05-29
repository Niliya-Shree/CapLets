import NavScrollExample from './component/Navbar.js';
import Profile from './component/Profile.js';
import AlertMessage from './component/Alert.js';
import { useState} from "react";
import "./App.css";

function App() { 
  const [darkMode, setDarkMode] = useState(false);
  // changes body color
  document.body.className = darkMode ? 'dark' : ''; 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      message : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000)
  }

  return (
    <div>
      {/*changes navbar color*/}
      <NavScrollExample title="CapLets" darkMode={darkMode} setDarkMode={setDarkMode}/> 
      <AlertMessage alert={alert} showAlert={showAlert} />

      {/*changes Profile(textarea) color*/}
      <Profile darkMode={darkMode} showAlert={showAlert}/>
    </div>
  );
}

export default App;
