import { useEffect } from 'react';
import './App.css';
import Router from './compo/Router';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div className="container mx-auto text-center ">
     <Router></Router>
    </div>
  );
}

export default App;
