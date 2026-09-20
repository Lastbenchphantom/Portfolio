import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

// Placeholder components for your other pages
const About = () => <div className="p-12 text-vintage-cream max-w-6xl mx-auto">About Page Coming Soon!</div>;
const Projects = () => <div className="p-12 text-vintage-cream max-w-6xl mx-auto">Projects Page Coming Soon!</div>;
const Academics = () => <div className="p-12 text-vintage-cream max-w-6xl mx-auto">Academics Page Coming Soon!</div>;

export default function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/academics" element={<Academics />} />
      </Routes>
    </Router>
  );
}
