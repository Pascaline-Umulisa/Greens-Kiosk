import './App.css';
import Fruits from './Fruits';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Products from './Products';
import Vegetables from './Vegetables';


function App() {
  return (
    <div className="App">
        <h2 className='title'>WELCOME TO GREENS KIOSK</h2>
        <p className='title'>Various Fruits and Vegetables</p>
        <div className='kiosk'>
          <Products/>
          <div className='category'>
          <Fruits/>
          <Vegetables/>
          </div>
          </div>
    </div>
  );
}

export default App;
