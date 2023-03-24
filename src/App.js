import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [toggle, setToggle] = useState(false);
  const onClick = () => setToggle(!toggle);
  return (
    <div className="App">
      <header className="App-header">
        {toggle && <img src={logo} className="App-logo" alt="logo" />}
        <div onClick={onClick}>toggle</div>
      </header>
    </div>
  );
}

export default App;
