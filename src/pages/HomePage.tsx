import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, FlaskRound as Flask, BarChart2, Users, FileText } from 'lucide-react';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-indigo-900/95 z-0"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/7130469/pexels-photo-7130469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
          }}
        ></div>
        <div className="container relative z-10 text-white pt-24">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg" style={{ color: '#1E3A8A' }}>
  Enhanced Spam Detection
</h1>
<h2 className="text-2xl md:text-3xl mb-8 drop-shadow-lg" style={{ color: '#1E3A8A' }}>
  Using Random Forest and Feature Selection
</h2>
<p className="text-xl mb-10 max-w-2xl drop-shadow-lg" style={{ color: '#171717' }}>
  An academic ML project focused on detecting spam emails using machine learning techniques with improved accuracy and efficiency.
</p>

            <div className="flex flex-wrap gap-4">
              <Button 
                variant="primary" 
                size="lg"
                icon={<ArrowRight size={20} />}
                onClick={() => {
                  document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-blue-900 hover:bg-blue-50"
              >
                Learn More
              </Button>
              <Link to="/report">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-transparent text-white border-white hover:bg-white/10"
                  style={{ color: '#171717' }}
                >
                  View Report
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="section bg-white">
        <div className="container">
          <SectionHeader
            title="Project Overview"
            subtitle="Our research focuses on improving spam detection accuracy through feature selection and Random Forest classification."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">The Challenge</h3>
              <p className="mb-4" align="justify">
                Spam emails represent a significant security threat and productivity drain. Traditional spam filters often produce false positives or miss sophisticated spam attempts.
              </p>
              <p className="mb-4" align="justify">
                Our project addresses these challenges through advanced machine learning techniques, specifically using Random Forest classification algorithms combined with effective feature selection.
              </p>
              <p align="justify">
                By identifying the most relevant features from email content, we've created a more accurate and efficient spam detection system with improved performance metrics.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Email spam detection" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Sections */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeader
            title="Explore Our Project"
            subtitle="Navigate through the key components of our research project"
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/dataset" className="card p-6 hover:shadow-xl transition-all hover:bg-blue-50">
              <div className="text-blue-600 mb-4">
                <Database size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Dataset</h3>
              <p className="text-gray-700 mb-4">
                Explore the dataset used in our spam detection research, including sample emails and feature extraction.
              </p>
              <div className="text-blue-600 flex items-center font-medium">
                View Dataset <ArrowRight size={16} className="ml-1" />
              </div>
            </Link>
            
            <Link to="/methodology" className="card p-6 hover:shadow-xl transition-all hover:bg-blue-50">
              <div className="text-blue-600 mb-4">
                <Flask size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Methodology</h3>
              <p className="text-gray-700 mb-4">
                Learn about our approach, including data preprocessing, feature selection, and Random Forest implementation.
              </p>
              <div className="text-blue-600 flex items-center font-medium">
                View Methodology <ArrowRight size={16} className="ml-1" />
              </div>
            </Link>
            
            <Link to="/results" className="card p-6 hover:shadow-xl transition-all hover:bg-blue-50">
              <div className="text-blue-600 mb-4">
                <BarChart2 size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Results</h3>
              <p className="text-gray-700 mb-4">
                Review our findings, accuracy metrics, and performance comparisons with other classification methods.
              </p>
              <div className="text-blue-600 flex items-center font-medium">
                View Results <ArrowRight size={16} className="ml-1" />
              </div>
            </Link>
            
            <Link to="/team" className="card p-6 hover:shadow-xl transition-all hover:bg-blue-50">
              <div className="text-blue-600 mb-4">
                <Users size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Team</h3>
              <p className="text-gray-700 mb-4">
                Meet the researchers and contributors behind this spam detection project.
              </p>
              <div className="text-blue-600 flex items-center font-medium">
                Meet the Team <ArrowRight size={16} className="ml-1" />
              </div>
            </Link>
            
            <Link to="/report" className="card p-6 hover:shadow-xl transition-all hover:bg-blue-50">
              <div className="text-blue-600 mb-4">
                <FileText size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Full Report</h3>
              <p className="text-gray-700 mb-4">
                Download or view the complete academic report with detailed analysis and findings.
              </p>
              <div className="text-blue-600 flex items-center font-medium">
                View Report <ArrowRight size={16} className="ml-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;