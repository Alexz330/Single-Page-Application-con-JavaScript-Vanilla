import React,{useState} from 'react';
import Header from './components/Header';
import Characters from './components/Characters';
import './App.css';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const handleClick = ()=>{
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? "App" : "App_Dark "}>
 
      <Header
        darkMode={darkMode}
        onClick={handleClick}
      ></Header>
      <Characters darkMode={darkMode}/>
     
    </div>
  );
}

export default App;
