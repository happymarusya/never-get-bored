import './App.css';
import { useEffect, useState } from 'react';
import Button from './Button';
import 'animate.css';

function App() {

  const [myTip, setMyTip] = useState("");

      const getTip = async() => {
      const response = await fetch (`http://www.boredapi.com/api/activity/`);
      const data = await response.json();
      setMyTip(data.activity)
    }
    useEffect(() => {
    getTip();  
  }, []);

  return (
    <div className="App">
      <div className="center">
        <h1>Never Get Bored!</h1>
      </div>
      <div className="center animate__animated animate__backInLeft animate__delay-1s">  
        <h3>Here are some tips...</h3>
      </div> 
      <section id="section06" className="demo center animate__animated animate__backInLeft animate__delay-2s">
        <a href="#section07"><span></span></a>
      </section>
      <div className="text animate__animated animate__backInLeft animate__delay-3s">
        <p>{myTip}</p>
      </div>
        <Button getTip={getTip}/>
    </div>
  );
}

export default App;
