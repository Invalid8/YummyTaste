import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Routes path="/menu" element={<Menu />} />
        <Routes path="/about" element={<About />} />
        <Routes path="/blog" element={<Blog />} />
        <Routes path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
