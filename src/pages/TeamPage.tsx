import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import TeamMemberCard from '../components/TeamMemberCard';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Faiaz Riasat Saad',
      role: '200021204',
      image: "https://i.ibb.co.com/Dg5fH0Mw/7e44b2b6-e65a-47cc-87d9-a46aa475cc22-Copy.jpg", 
      links: {
        github: 'https://github.com/faiazsaad',
        linkedin: 'https://www.linkedin.com/in/faiazsaad/',
        email: 'saadfaiaz35@gmail.com',
      },
    },
    {
      name: 'Mayesha Aanan Prapti',
      role: '200021224',
      image: "https://i.ibb.co.com/QvN26FGQ/93337aaf-9679-4681-beb6-2c809a2ebb35.jpg",
      links: {
        github: 'https://github.com/',
        linkedin: 'https://www.linkedin.com/',
        email: 'mayeshaaanan@iut-dhaka.edu',
      },
    },
    {
      name: 'Md. Firoz Hossain',
      role: '200021225',
      image: "https://i.ibb.co.com/Myg7Y1WQ/494358579-1020341073399091-8223098564434863675-n.jpg",
      links: {
        github: 'https://github.com/Mohammad-Firoz',
        linkedin: 'https://www.linkedin.com/in/md-firoz-hossain-9839b8256/',
        email: 'firozhossain@iut-dhaka.edu',
      },
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-800 text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl font-bold mb-4 text-white">Meet the Team</h1>
            <p className="text-xl text-indigo-100 mb-6">
              The researchers behind the enhanced spam detection project
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            title="Our Team"
            subtitle="Meet the talented individuals who contributed to this research project"
            centered
          />
          
          <div className="flex flex-col items-center space-y-8">
  {/* Top Center Card */}
  <div className="w-64">
    <TeamMemberCard
      name={teamMembers[0].name}
      role={teamMembers[0].role}
      image={teamMembers[0].image}
      links={teamMembers[0].links}
    />
  </div>

  {/* Bottom Row: Two Cards Side by Side */}
  <div className="flex flex-col sm:flex-row gap-8">
    <div className="w-64">
      <TeamMemberCard
        name={teamMembers[1].name}
        role={teamMembers[1].role}
        image={teamMembers[1].image}
        links={teamMembers[1].links}
      />
    </div>
    <div className="w-64">
      <TeamMemberCard
        name={teamMembers[2].name}
        role={teamMembers[2].role}
        image={teamMembers[2].image}
        links={teamMembers[2].links}
      />
    </div>
  </div>
</div>

        </div>
      </section>
      
      {/* Team Contribution */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeader
            title="Project Summary"
            subtitle="A concise overview of the project's objectives, methods, and achievements"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Research & Analysis</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-2"></span>
                  <span>Literature review and analysis of existing spam detection techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-2"></span>
                  <span>Comparative analysis of machine learning algorithms for classification tasks</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-2"></span>
                  <span>Statistical analysis of results and performance metrics</span>
                </li>
              </ul>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Data & Implementation</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-2"></span>
                  <span>Dataset collection, cleaning, and preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-2"></span>
                  <span>Feature extraction and selection implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-2"></span>
                  <span>Model training, optimization, and evaluation</span>
                </li>
              </ul>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Documentation & Presentation</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-2"></span>
                  <span>Project report and documentation writing</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-2"></span>
                  <span>Visualization of results and findings</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-2"></span>
                  <span>Website design and development</span>
                </li>
              </ul>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Project Management</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-2"></span>
                  <span>Task coordination and timeline management</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-2"></span>
                  <span>Research direction and milestone tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-2"></span>
                  <span>Coordination with faculty advisors</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Skills */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            title="Our Skills"
            subtitle="Technologies and tools used in our research project"
            centered
          />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-16 h-16 mx-auto mb-2" />
              <p className="font-medium">Python</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" alt="Jupyter" className="w-16 h-16 mx-auto mb-2" />
              <p className="font-medium">Jupyter</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="NumPy" className="w-16 h-16 mx-auto mb-2" />
              <p className="font-medium">NumPy</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" className="w-16 h-16 mx-auto mb-2" />
              <p className="font-medium">Pandas</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="scikit-learn" className="w-16 h-16 mx-auto mb-2" />
              <p className="font-medium">scikit-learn</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" alt="Matplotlib" className="w-16 h-16 mx-auto mb-2" />
              <p className="font-medium">Matplotlib</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-blue-900">Get in Touch</h2>
            <p className="text-lg text-gray-700 mb-8">
              Have questions about our research or interested in collaboration? Feel free to reach out to our team.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:faiazriasat@iut-dhaka.edu" className="text-gray-700 hover:text-blue-600 transition-colors">
                <Mail size={28} />
              </a>
              <a href="https://github.com/faiazsaad" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/faiazsaad/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;