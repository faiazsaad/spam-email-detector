import React from 'react';
import { Download, Database, Mail, AlertTriangle, CheckCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import DataTable from '../components/DataTable';

// Sample dataset for display purposes
const sampleDataset = [
  ["1", "Special offer just for you!", "Get 50% off your next purchase...", "1"],
  ["2", "Team meeting notes", "Here are the notes from yesterday's team meeting...", "0"],
  ["3", "URGENT: Your account will be suspended", "Your account will be suspended unless you verify...", "1"],
  ["4", "Quarterly report - Q1 2025", "Please find attached the quarterly financial report...", "0"],
  ["5", "You've won a free iPhone!", "Congratulations! You've been selected as a winner...", "1"],
  ["6", "Project deadline reminder", "This is a reminder that the project deadline is...", "0"],
  ["7", "Verify your email address", "Please click the link below to verify your email...", "0"],
  ["8", "FREE - Enlarge your business profits", "Try our amazing new product that will increase...", "1"],
];

// Column headers for the dataset table
const datasetHeaders = ["ID", "Subject", "Content (Preview)", "Label (1=Spam, 0=Ham)"];

const DatasetPage: React.FC = () => {
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in">
              <h1 className="text-4xl font-bold mb-4 text-white">About the Dataset</h1>
              <p className="text-xl text-blue-100 mb-6">
                Explore the email corpus used in our spam detection research
              </p>
              <a
  href="https://drive.google.com/file/d/1q2LYVeow9Uvvry-l47m0XJwS6qmwy5sf/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button 
    variant="primary" 
    className="bg-white text-blue-800 hover:bg-blue-50"
    icon={<Download size={16} />}
  >
    Download Dataset
  </Button>
</a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center">
                <Database size={100} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dataset Description */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            title="Dataset Description"
            subtitle="Understanding the data behind our spam detection model"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Overview</h3>
              <p className="mb-4">
                Our dataset consists of a large collection of labeled emails classified as either spam or ham (legitimate). 
                This corpus was carefully constructed to include diverse examples of both categories, ensuring our model 
                could learn to identify various spam patterns.
              </p>
              <p>
                The dataset contains thousands of emails with complete headers, subjects, and body content, providing 
                rich features for our machine learning algorithm to analyze patterns and make accurate predictions.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Dataset Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Total Emails</p>
                  <p className="text-2xl font-bold text-blue-800">5,728</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Spam Emails</p>
                  <p className="text-2xl font-bold text-red-600">1,368</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Ham Emails</p>
                  <p className="text-2xl font-bold text-green-600">4,360</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Features Extracted</p>
                  <p className="text-2xl font-bold text-blue-800">78</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features Section */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Key Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card p-4">
                <div className="flex items-start">
                  <div className="mr-3 text-blue-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Metadata</h4>
                    <p className="text-gray-700 text-sm">
                      Headers, routing information, sending server details, timestamps
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card p-4">
                <div className="flex items-start">
                  <div className="mr-3 text-red-600">
                    <AlertTriangle size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Spam Indicators</h4>
                    <p className="text-gray-700 text-sm">
                      Common spam phrases, suspicious URLs, excessive capitalization
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card p-4">
                <div className="flex items-start">
                  <div className="mr-3 text-green-600">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Legitimate Patterns</h4>
                    <p className="text-gray-700 text-sm">
                      Professional language, expected sender domains, consistent formatting
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sample Data Table */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Sample Data</h3>
            <DataTable 
              headers={datasetHeaders} 
              data={sampleDataset} 
              caption="Preview of the first 8 rows in our dataset"
            />
            <div className="text-center mt-8">
              <a
  href="https://drive.google.com/file/d/1q2LYVeow9Uvvry-l47m0XJwS6qmwy5sf/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button 
    variant="outline" 
    icon={<Download size={16} />}
  >
    Download Complete Dataset
  </Button>
</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DatasetPage;