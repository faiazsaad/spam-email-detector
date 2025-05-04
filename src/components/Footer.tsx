import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">About the Project</h4>
            <p className="text-gray-300 mb-4">
              Enhanced Spam Detection Using Random Forest and Feature Selection - an academic
              machine learning project focused on improving spam email detection through
              advanced algorithms and techniques.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/dataset" className="text-gray-300 hover:text-white transition">Dataset</Link>
              </li>
              <li>
                <Link to="/methodology" className="text-gray-300 hover:text-white transition">Methodology</Link>
              </li>
              <li>
                <Link to="/results" className="text-gray-300 hover:text-white transition">Results</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-white transition">Team</Link>
              </li>
              <li>
                <Link to="/report" className="text-gray-300 hover:text-white transition">Report</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-white transition" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition" aria-label="Email">
                <Mail size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition" aria-label="University">
                <ExternalLink size={24} />
              </a>
            </div>
            <p className="text-gray-300">
              Islamic University of Technology<br />
              Department of Electrical and Electronic Engineering<br />
              2025
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>A project by Team IDK | Islamic University of Technology | 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;