import './App.css';
import Fruits from './Fruits';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Vegetables from './Vegetables';
import Login from './Login';


function App() {
  return (
    <div className="App">
        <h2 className='title'>WELCOME TO GREENS KIOSK</h2>
        <p className='title'>Various Fruits and Vegetables</p>
        <div className='kiosk'>
            <Router>
              {/* <Link to="/" >Login</Link> */}
              <Link to="/fruits">Fruits</Link>
              <Link to="/vegetables">Vegetables</Link>
              {/* <Link to="/products">Fruits</Link> */}

              <Routes>
                 <Route path='/' element={<Login/>} exact component ={Login} />
                <Route path='/Fruits' element={<Fruits/>} exact component={Fruits}/>
                <Route path='/vegetables' element={<Vegetables/>} exact component={Vegetables}/>
                {/* <Route path='/Fruits' element={<Fruits/>} exact component={Fruits}/> */}

              </Routes>
            </Router>
            
          

          </div>
    </div>
  );
}

export default App;
