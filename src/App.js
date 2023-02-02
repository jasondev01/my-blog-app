import './App.css';
import Home from './components/Home';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {

  return (

      <Routes>

        <Route element={<MainLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

      </Routes>

  )
}

export default App;
