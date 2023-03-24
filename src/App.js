import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [toggle, setToggle] = useState(false);
  const onClick = () => setToggle(!toggle);
  const onCheck = () => {
    console.log(document.getElementById("blueimp-gallery"))
  }
  return (
    <div className="App">
      <header className="App-header">
        {toggle && <img src={logo} className="App-logo" alt="logo" />}
        <div onClick={onClick}>toggle</div>
        <div onClick={onClick}>check</div>
      </header>
    </div>
  );
}

export default App;
