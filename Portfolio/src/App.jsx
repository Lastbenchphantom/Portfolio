import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Academics from './pages/Academics';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-page">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/academics" element={<Academics />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
