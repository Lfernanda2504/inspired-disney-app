
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar} from './components';
import { Home } from './pages'

const UserProfile = ()=> <h2> User </h2>


function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/user' element={<UserProfile />}/>
      </Routes>
      
    </Router>
  )
}

export default App
