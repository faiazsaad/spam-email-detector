import React from 'react';
import { Download, FileText, ExternalLink, BookOpen, List } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

const ReportPage: React.FC = () => {
  // Sample table of contents
  const tableOfContents = [
    { title: "1. Introduction", page: 1 },
    { title: "2. Literature Review", page: 3 },
    { title: "3. Methodology", page: 7 },
    { title: "3.1. Data Collection & Preprocessing", page: 8 },
    { title: "3.2. Feature Extraction", page: 10 },
    { title: "3.3. Random Forest Implementation", page: 12 },
    { title: "3.4. Feature Selection", page: 15 },
    { title: "4. Results", page: 18 },
    { title: "5. Discussion", page: 22 },
    { title: "6. Conclusion", page: 26 },
    { title: "7. References", page: 28 },
    { title: "8. Appendix", page: 30 },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl font-bold mb-4 text-white">Project Report</h1>
            <p className="text-xl text-gray-300 mb-6">
              Enhanced Spam Detection Using Random Forest and Feature Selection
            </p>
            <a 
  href="https://drive.google.com/file/d/1jZ8z0F0vHbRS8eUdTxwAntsUeHJQAz-4/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button 
    variant="primary" 
    size="lg"
    className="bg-white text-gray-900 hover:bg-gray-100"
    icon={<Download size={18} />}
  >
    Download Full Report
  </Button>
</a>
          </div>
        </div>
      </section>

      {/* Report Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeader
                title="Report Summary"
                subtitle="A brief overview of our comprehensive research paper"
              />
              
              <div className="prose max-w-none text-gray-700">
                <p className="lead text-lg mb-4" align="justify">
                  This research focuses on enhancing spam detection capabilities through the application of
                  Random Forest classification and strategic feature selection techniques. By identifying and
                  prioritizing the most informative features from email content, we have developed a more
                  accurate and efficient spam detection model.
                </p>
                
                <p className="mb-4" align="justify">
                  Our approach addresses several key challenges in spam detection, including the need for improved
                  accuracy, reduced false positives, and computational efficiency. Through careful feature
                  engineering and model optimization, we demonstrate significant improvements over baseline
                  methods.
                </p>
                
                <p className="mb-4" align="justify">
                  The report details our methodology, from initial data preprocessing to feature extraction and
                  selection, followed by comprehensive performance evaluation. We present extensive comparative
                  analyses with alternative classification methods, highlighting the superior performance of our
                  optimized Random Forest approach.
                </p>
                
                <p align="justify">
                  Key findings include a 96% accuracy rate, a 3.8% false positive rate, and a 42% reduction in
                  processing time compared to models using all available features. These results demonstrate the
                  effectiveness of our feature selection approach in creating a more efficient and accurate spam
                  detection system.
                </p>
              </div>
              
              {/* Key Sections */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6 text-blue-900">Report Highlights</h3>
                
                <div className="space-y-6">
                  <div className="card p-6">
                    <div className="flex items-start">
                      <div className="text-blue-600 mr-4">
                        <BookOpen size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Introduction & Background</h4>
                        <p className="text-gray-700" align="justify">
                          Comprehensive overview of the spam detection landscape, challenges in current approaches,
                          and the motivation behind our research. Includes analysis of why Random Forest is suitable
                          for this classification task.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card p-6">
                    <div className="flex items-start">
                      <div className="text-blue-600 mr-4">
                        <FileText size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Methodology & Implementation</h4>
                        <p className="text-gray-700" align="justify">
                          Detailed explanation of our approach, including data preprocessing, feature extraction,
                          Random Forest implementation, and our novel feature selection technique. Includes code
                          samples and parameter optimization.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card p-6">
                    <div className="flex items-start">
                      <div className="text-blue-600 mr-4">
                        <ExternalLink size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Results & Analysis</h4>
                        <p className="text-gray-700" align="justify">
                          Comprehensive performance analysis including accuracy, precision, recall, F1 score, and
                          ROC curves. Comparative study with alternative classification approaches and detailed
                          analysis of error cases.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            
<div className="lg:col-span-1 flex flex-col items-center justify-start">
  <a 
  href="https://drive.google.com/file/d/1jZ8z0F0vHbRS8eUdTxwAntsUeHJQAz-4/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full"
>
  <Button 
    variant="primary" 
    icon={<Download size={16} />}
    fullWidth
  >
    Download Report
  </Button>
</a>
</div>

          </div>
        </div>
      </section>
      
      {/* Abstract Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              title="Abstract"
              subtitle="From the project report"
              centered
            />
            
            <div className="card p-8">
              <p className="italic text-gray-700 mb-6" align="justify">
                Spam emails pose a signifi cant threat to digital communication, ranging from unsolicited promotions to malicious phishing attacks. This project aims to develop an enhanced spam detection system using machine learning techniques, focusing on improving accuracy and computational effi ciency. The primary objectives include implementing a Random Forest classifi er, integrating Recursive Feature Elimination (RFE) for feature selection, and comparing its performance with Gradient Boosting. Additionally, hyperparameter tuning using Grid Search Cross-Validation (CV) was employed to optimize model performance.
              </p>
              
              <p className="italic text-gray-700 mb-6" align="justify">
                The methodology involves preprocessing email text by removing punctuation, converting text to lowercase, and extracting features using Term Frequency-Inverse Document Frequency (TF-IDF). Custom features such as the presence of exclamation marks, dollar amounts, and urgent keywords were engineered to improve detection capabilities. RFE was applied to eliminate irrelevant features, enhancing model effi ciency. Both Random Forest and Gradient Boosting models were trained and evaluated using metrics such as accuracy, precision, recall, and F1-score. Hyperparameter tuning was performed to achieve optimal performance.
              </p>
              
              <p className="italic text-gray-700" align="justify">
                Key results indicate that the Random Forest model, combined with RFE and custom features, achieved superior performance with an accuracy of over 98%. Gradient Boosting also performed well but required more computational resources. The inclusion of custom features and RFE signifi cantly improved the model's ability to detect subtle spam patterns, reducing false positives and false negatives. The project concludes that ensemble learning techniques, combined with advanced feature engineering and selection, provide a robust solution for spam detection, capable of adapting to evolving spam tactics. Future work includes scaling the model for real-time applications and exploring deep learning techniques for further improvements.
              </p>
            </div>            
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReportPage;