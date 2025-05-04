import React from 'react';
import { RectangleVertical as CleaningServices, Split as SplitScreen, Trees as TreeStructure, Sparkles } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ProcessStep from '../components/ProcessStep';
import CodeBlock from '../components/CodeBlock';

// Sample Python code snippets
const dataCleaningCode = `import pandas as pd
import re
import nltk
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer

# Load the dataset
emails = pd.read_csv('spam_ham_dataset.csv')

# Function to clean email text
def clean_text(text):
    # Convert to lowercase
    text = text.lower()
    
    # Remove HTML tags
    text = re.sub('<.*?>', '', text)
    
    # Remove URLs
    text = re.sub('https?://\\S+|www\\.\\S+', '', text)
    
    # Remove punctuation and numbers
    text = re.sub('[^\\w\\s]', '', text)
    text = re.sub('\\d+', '', text)
    
    # Remove stopwords
    stop_words = set(stopwords.words('english'))
    tokens = text.split()
    tokens = [word for word in tokens if word not in stop_words]
    
    # Stemming
    stemmer = PorterStemmer()
    tokens = [stemmer.stem(word) for word in tokens]
    
    return ' '.join(tokens)

# Apply cleaning to email content
emails['cleaned_content'] = emails['content'].apply(clean_text)`;

const featureExtractionCode = `from sklearn.feature_extraction.text import TfidfVectorizer

# Create TF-IDF vectorizer
tfidf = TfidfVectorizer(max_features=5000)

# Transform the cleaned email content to TF-IDF features
X = tfidf.fit_transform(emails['cleaned_content'])
y = emails['label']  # 1 for spam, 0 for ham

# Get feature names
feature_names = tfidf.get_feature_names_out()

# Preview the features
print(f"Number of features extracted: {len(feature_names)}")
print("Sample features:", feature_names[:10])`;

const randomForestCode = `from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

# Split the data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

# Train a Random Forest classifier
rf_model = RandomForestClassifier(
    n_estimators=100, 
    max_depth=20,
    min_samples_split=5,
    random_state=42
)

# Fit the model
rf_model.fit(X_train, y_train)

# Make predictions
y_pred = rf_model.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy:.4f}")
print("\\nClassification Report:")
print(classification_report(y_test, y_pred))`;

const featureSelectionCode = `from sklearn.feature_selection import SelectFromModel

# Get feature importances
importances = rf_model.feature_importances_

# Select the most important features
sfm = SelectFromModel(rf_model, threshold=0.01)
X_train_selected = sfm.fit_transform(X_train, y_train)
X_test_selected = sfm.transform(X_test)

# Get the selected feature indices
selected_indices = sfm.get_support(indices=True)
selected_features = [feature_names[i] for i in selected_indices]

print(f"Number of selected features: {len(selected_features)}")
print("Top 10 selected features:", selected_features[:10])

# Train new model with selected features
rf_selected = RandomForestClassifier(
    n_estimators=100, 
    max_depth=20, 
    min_samples_split=5,
    random_state=42
)
rf_selected.fit(X_train_selected, y_train)

# Evaluate the model with selected features
y_selected_pred = rf_selected.predict(X_test_selected)
selected_accuracy = accuracy_score(y_test, y_selected_pred)
print(f"\\nAccuracy with selected features: {selected_accuracy:.4f}")`;

const MethodologyPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl font-bold mb-4 text-white">Methodology</h1>
            <p className="text-xl text-indigo-100 mb-6">
              An in-depth look at our approach to spam detection using Random Forest and feature selection
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            title="Our Approach"
            subtitle="We used Python and Jupyter Notebook for implementing our spam detection pipeline"
          />
          
          <div className="mb-12">
            <p className="mb-4">
              Our methodology consists of a multi-stage pipeline that processes raw email data, extracts relevant features,
              applies machine learning algorithms, and optimizes performance through feature selection.
            </p>
            <p>
              The primary focus of our research was to enhance spam detection accuracy by identifying and selecting the most
              informative features while using Random Forest as our classification algorithm of choice due to its robustness
              and interpretability.
            </p>
          </div>
          
          {/* Process Steps */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-blue-900">Process Overview</h3>
            
            <ProcessStep 
              number={1}
              title="Data Cleaning & Preprocessing"
              description="Converting text to lowercase, removing HTML tags, URLs, punctuation, numbers, and stopwords, then applying stemming."
              icon={<CleaningServices size={20} />}
            />
            
            <ProcessStep 
              number={2}
              title="Feature Extraction"
              description="Using TF-IDF vectorization to convert the cleaned text into numerical features that represent the importance of words."
              icon={<SplitScreen size={20} />}
            />
            
            <ProcessStep 
              number={3}
              title="Random Forest Classification"
              description="Training a Random Forest model on the extracted features to classify emails as spam or legitimate."
              icon={<TreeStructure size={20} />}
            />
            
            <ProcessStep 
              number={4}
              title="Feature Selection"
              description="Applying feature importance analysis to identify and select the most relevant features for improved performance."
              icon={<Sparkles size={20} />}
            />
          </div>
        </div>
      </section>
      
      {/* Detailed Implementation */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeader
            title="Implementation Details"
            subtitle="Code snippets and explanations of our implementation"
          />
          
          <div className="space-y-12">
            {/* Data Cleaning */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">1. Data Cleaning & Preprocessing</h3>
              <p className="mb-4">
                Email data often contains various elements like HTML tags, special characters, and formatting that can create noise
                for our models. Our preprocessing pipeline cleans this data and prepares it for feature extraction.
              </p>
              <CodeBlock code={dataCleaningCode} title="data_cleaning.py" />
            </div>
            
            {/* Feature Extraction */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">2. Feature Extraction</h3>
              <p className="mb-4">
                We used Term Frequency-Inverse Document Frequency (TF-IDF) vectorization to convert the cleaned email text into
                numerical features. This technique captures the importance of words in emails relative to the entire corpus.
              </p>
              <CodeBlock code={featureExtractionCode} title="feature_extraction.py" />
            </div>
            
            {/* Random Forest */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">3. Random Forest Classification</h3>
              <p className="mb-4">
                Random Forest was selected as our primary classifier due to its ability to handle high-dimensional data,
                resistance to overfitting, and capability to provide feature importance insights.
              </p>
              <CodeBlock code={randomForestCode} title="random_forest_classifier.py" />
            </div>
            
            {/* Feature Selection */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">4. Feature Selection</h3>
              <p className="mb-4">
                To enhance our model's performance and interpretability, we applied feature importance analysis to identify
                the most relevant features for spam detection, reducing dimensionality while maintaining accuracy.
              </p>
              <CodeBlock code={featureSelectionCode} title="feature_selection.py" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Innovations */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            title="Key Innovations"
            subtitle="What sets our approach apart from traditional spam detection methods"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Optimized Feature Selection</h3>
              <p className="text-gray-700">
                We developed a novel approach to feature selection that identifies not just individual important features,
                but also considers the interactions between features to maximize detection accuracy while minimizing false positives.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Hyperparameter Optimization</h3>
              <p className="text-gray-700">
                Using grid search with cross-validation, we systematically identified the optimal Random Forest parameters
                that provide the best balance between precision and recall for spam detection.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Enhanced Text Processing</h3>
              <p className="text-gray-700">
                Our preprocessing pipeline includes specialized techniques for handling email-specific elements like
                headers, signatures, and forwarded content, resulting in cleaner and more informative features.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Ensemble Approach</h3>
              <p className="text-gray-700">
                While Random Forest is itself an ensemble method, we experimented with combining its predictions with
                other classifiers like Gradient Boosting to further enhance detection capabilities for certain spam types.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MethodologyPage;