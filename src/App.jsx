import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Stay from './pages/Stay/Stay';
import Home from './pages/Home/Home';

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/stay' element={<Stay />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
