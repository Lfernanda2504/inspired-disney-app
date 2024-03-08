import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar} from './components';
import { Home } from './pages'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
