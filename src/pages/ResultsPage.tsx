import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { BarChart2, PieChart as PieChartIcon, CheckCircle, XCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import MetricCard from '../components/MetricCard';

// Performance metrics data
const performanceData = [
  {
    name: 'Random Forest',
    accuracy: 0.96,
    precision: 0.94,
    recall: 0.93,
    f1Score: 0.93,
    color: '#3b82f6',
  },
  {
    name: 'Gradient Boosting',
    accuracy: 0.94,
    precision: 0.92,
    recall: 0.90,
    f1Score: 0.91,
    color: '#10b981',
  },
  {
    name: 'Logistic Regression',
    accuracy: 0.89,
    precision: 0.87,
    recall: 0.85,
    f1Score: 0.86,
    color: '#f59e0b',
  },
  {
    name: 'Naive Bayes',
    accuracy: 0.86,
    precision: 0.83,
    recall: 0.88,
    f1Score: 0.85,
    color: '#6366f1',
  },
];

// Feature importance data
const featureImportanceData = [
  { name: 'free', value: 8.2 },
  { name: 'offer', value: 7.5 },
  { name: 'money', value: 6.9 },
  { name: 'discount', value: 6.2 },
  { name: 'click', value: 5.8 },
  { name: 'link', value: 5.1 },
  { name: 'limited', value: 4.7 },
  { name: 'urgent', value: 4.3 },
  { name: 'win', value: 3.8 },
  { name: 'prize', value: 3.5 },
];

// Confusion matrix data
const confusionMatrixData = [
  { name: 'Actual Ham', 'True Negative': 820, 'False Positive': 32 },
  { name: 'Actual Spam', 'False Negative': 18, 'True Positive': 240 },
];

// PieChart data
const classDistributionData = [
  { name: 'Correctly Classified', value: 1060, color: '#3b82f6' },
  { name: 'Misclassified', value: 50, color: '#ef4444' },
];

const COLORS = ['#3b82f6', '#ef4444'];

const ResultsPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl font-bold mb-4 text-white">Results & Findings</h1>
            <p className="text-xl text-blue-100 mb-6">
              Detailed performance metrics and insights from our spam detection research
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            title="Performance Metrics"
            subtitle="Our Random Forest model achieved excellent results across key metrics"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <MetricCard 
              title="Accuracy" 
              value="96%" 
              icon={<BarChart2 size={24} />}
              description="Overall correct classifications" 
            />
            <MetricCard 
              title="Precision" 
              value="94%" 
              icon={<CheckCircle size={24} />}
              description="True positives / predicted positives" 
            />
            <MetricCard 
              title="Recall" 
              value="93%" 
              icon={<XCircle size={24} />}
              description="True positives / actual positives" 
            />
            <MetricCard 
              title="F1 Score" 
              value="93%" 
              icon={<PieChartIcon size={24} />}
              description="Harmonic mean of precision and recall" 
            />
          </div>
          
          {/* Performance Comparison Chart */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-blue-900">Comparison with Other Models</h3>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={performanceData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0.7, 1]} />
                  <Tooltip formatter={(value) => `${(value * 100).toFixed(1)}%`} />
                  <Legend />
                  <Bar dataKey="accuracy" name="Accuracy" fill="#3b82f6" />
                  <Bar dataKey="precision" name="Precision" fill="#10b981" />
                  <Bar dataKey="recall" name="Recall" fill="#f59e0b" />
                  <Bar dataKey="f1Score" name="F1 Score" fill="#6366f1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features and Confusion Matrix */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Top Features */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-900">Top Important Features</h3>
              <p className="mb-6 text-gray-700">
                Our feature selection process identified these key words and patterns as most indicative of spam emails.
                The chart shows relative importance of each feature in the classification decision.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    layout="vertical"
                    data={featureImportanceData}
                    margin={{ top: 20, right: 30, left: 60, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Bar dataKey="value" name="Importance" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Confusion Matrix */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-900">Classification Results</h3>
              <p className="mb-6 text-gray-700">
                The confusion matrix and classification distribution show our model's prediction accuracy.
                The pie chart represents the overall success rate of our classification approach.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-center mb-2 font-medium">Confusion Matrix</p>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart
                      data={confusionMatrixData}
                      stackOffset="expand"
                      margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
                    >
                      <XAxis dataKey="name" />
                      <YAxis tickFormatter={(value) => `${(value * 100).toFixed(0)}%`} />
                      <Tooltip formatter={(value) => value} />
                      <Legend />
                      <Bar dataKey="True Negative" stackId="a" fill="#10b981" />
                      <Bar dataKey="False Positive" stackId="a" fill="#f59e0b" />
                      <Bar dataKey="False Negative" stackId="a" fill="#f59e0b" />
                      <Bar dataKey="True Positive" stackId="a" fill="#10b981" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-center mb-2 font-medium">Classification Distribution</p>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={classDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {classDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => value} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Findings */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            title="Key Findings"
            subtitle="Important insights from our research"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Feature Selection Impact</h3>
              <p className="text-gray-700 mb-4">
                Reducing the feature set from 78 to 35 most important features resulted in a 3% improvement in accuracy and 
                a 42% reduction in processing time, demonstrating the effectiveness of our feature selection approach.
              </p>
              <div className="flex justify-between text-sm">
                <div>
                  <p className="font-medium">Before</p>
                  <p className="text-gray-600">78 features</p>
                  <p className="text-gray-600">93% accuracy</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">After</p>
                  <p className="text-gray-600">35 features</p>
                  <p className="text-green-600 font-medium">96% accuracy</p>
                </div>
              </div>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Model Comparison</h3>
              <p className="text-gray-700 mb-4">
                Random Forest consistently outperformed other models including Gradient Boosting, SVM, and Naive Bayes in both 
                accuracy and false positive rate, particularly when using our optimized feature set.
              </p>
              <ul className="text-sm space-y-1 text-gray-700">
                <li className="flex justify-between">
                  <span>Random Forest:</span>
                  <span className="font-medium text-blue-600">96% accuracy</span>
                </li>
                <li className="flex justify-between">
                  <span>Gradient Boosting:</span>
                  <span>94% accuracy</span>
                </li>
                <li className="flex justify-between">
                  <span>SVM:</span>
                  <span>91% accuracy</span>
                </li>
                <li className="flex justify-between">
                  <span>Naive Bayes:</span>
                  <span>86% accuracy</span>
                </li>
              </ul>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">False Positive Analysis</h3>
              <p className="text-gray-700 mb-4">
                Our approach achieved a false positive rate of just 3.8%, significantly lower than baseline methods (8-12%), 
                reducing the risk of legitimate emails being incorrectly classified as spam.
              </p>
              <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '96.2%' }}></div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-600">
                <span>Correctly classified: 96.2%</span>
                <span>False positives: 3.8%</span>
              </div>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Linguistic Patterns</h3>
              <p className="text-gray-700 mb-4">
                We identified specific linguistic patterns highly correlated with spam, including unusual punctuation, 
                overuse of capitalization, and specific word combinations that signal promotional or misleading content.
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-red-50 p-2 rounded text-red-700">FREE!!! LIMITED OFFER!!!</div>
                <div className="bg-red-50 p-2 rounded text-red-700">CLICK HERE NOW!!!</div>
                <div className="bg-red-50 p-2 rounded text-red-700">$$$ MAKE MONEY FAST $$$</div>
                <div className="bg-red-50 p-2 rounded text-red-700">URGENT: Your account...</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResultsPage;