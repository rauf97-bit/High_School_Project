import './App.css';
import Home from './views/Home';
import {
   BrowserRouter as Router,
   Routes,
   Route
 } from 'react-router-dom';
import Signup from './views/Signup';
import Login from './views/Login';
import Dashboard from './views/Dashboard'
function App() {
  return (
    <Router>
      <Routes>

      <Route path='/' exact element={<Home/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
