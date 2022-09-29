import './App.css';
import Fruits from './Fruits';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Vegetables from './Vegetables';
import Login from './Login';
import Products from './Products'


function App() {
  return (
    <div className="App">
        <div className='kiosk'>
          
          
            <Router>
              <div className='navigation'>
              <nav>
              <Link className='links' to="/"> <button className='nav' >Login</button> </Link>
            <Link className='links' to="/home"> <button className='nav' >Home</button> </Link>
              <Link className='links' to="/fruits"> <button className='nav' >Fruits</button> </Link>
              <Link className='links' to="/vegetables"> <button className='nav' >Vegetables</button> </Link>
              
              </nav>
              </div>


              <Routes>
                 <Route path='/' element={<Login/>} exact component ={Login} />
                 <Route path='/home' element={<Products/>} exact component={Products}/>
                <Route path='/Fruits' element={<Fruits/>} exact component={Fruits}/>
                <Route path='/vegetables' element={<Vegetables/>} exact component={Vegetables}/>
              </Routes>
            </Router>
            
          

          </div>
    </div>
  );
}

export default App;
