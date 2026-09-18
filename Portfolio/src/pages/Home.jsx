import { Link } from 'react-router-dom'; // Add this if you use react-router
import profilePic from '../assets/profile.png';

export default function Home() {
  return (
    <div className="min-h-screen py-12 px-6 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-vintage-amber uppercase bg-vintage-amber/10 rounded-full border border-vintage-amber/20">
            CSE Student • International Islamic University
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-vintage-cream mb-6">
            Building software with a touch of <span className="text-vintage-amber">classic precision</span>.
          </h1>
          <p className="text-stone-400 text-lg mb-8 leading-relaxed">
            Hi, I’m a full-stack developer and AI enthusiast crafting robust applications from frontend interfaces to PostgreSQL database architectures.
          </p>
          <div className="flex flex-wrap gap-4">
            {/* Swapped to Link component for smooth routing */}
            <Link to="/projects" className="px-6 py-3 bg-vintage-amber text-stone-950 font-medium rounded-lg hover:bg-amber-400 transition-colors">
              Explore Projects
            </Link>
            <Link to="/about" className="px-6 py-3 border border-stone-700 text-vintage-cream font-medium rounded-lg hover:border-stone-500 transition-colors">
              About Me
            </Link>
          </div>
        </div>

        {/* Profile Image with Cinematic Frame */}
        <div className="relative group flex justify-center">
          <div className="absolute -inset-1 bg-gradient-to-r from-vintage-amber to-rose-900 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
          <div className="relative bg-vintage-card p-2 rounded-xl border border-stone-800">
            <img 
              src={profilePic} 
              alt="Profile" 
              className="rounded-lg object-cover w-full max-w-md h-[400px] filter saturate-[0.9] contrast-[1.05]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
