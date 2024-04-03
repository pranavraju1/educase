import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import CreateAccount from './components/CreateAccount/CreateAccount';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Signin from './components/Signin/Signin';

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/create-account' element={<CreateAccount/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App