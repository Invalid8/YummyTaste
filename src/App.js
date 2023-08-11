import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import NavBar from './components/NavBar';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Analytics />
    </>
  );
}

export default App;
