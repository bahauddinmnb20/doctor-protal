import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Footer from './pages/Shear/Footer';
import NavBar from './pages/Shear/NavBar';

function App() {
  return (
    <div className="App container mx-auto">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
