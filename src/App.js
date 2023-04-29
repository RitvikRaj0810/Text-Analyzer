import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
function App() {
  const [mode,setMode]= useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert =(message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-warning')
  // }
  const toggleMode = ()=>{
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#111';
      showAlert("DarkMode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("LightMode has been enabled","success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Text Analyser" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          < Route exact path="/" element={<TextForm heading="Enter the text to analyse: " mode={mode}/>}/>
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
