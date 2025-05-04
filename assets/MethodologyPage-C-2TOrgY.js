import{c as i,j as e}from"./index-iIN_6X4m.js";import{S as o}from"./SectionHeader-C1fVGxcs.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=i("RectangleVertical",[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=i("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=i("Split",[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M8 3H3v5",key:"15dfkv"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3",key:"1qrqzj"}],["path",{d:"m15 9 6-6",key:"ko1vev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=i("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"yh07w9"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]),s=({number:r,title:n,description:t,icon:c})=>e.jsxs("div",{className:"flex items-start mb-8",children:[e.jsx("div",{className:"flex-shrink-0 mr-4",children:e.jsx("div",{className:"flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white text-xl font-bold",children:c||r})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 text-blue-900",children:n}),e.jsx("p",{className:"text-gray-700",children:t})]})]}),a=({code:r,language:n="python",title:t})=>e.jsxs("div",{className:"rounded-lg overflow-hidden shadow-md mb-6 bg-gray-900 text-white",children:[t&&e.jsx("div",{className:"px-4 py-2 bg-gray-800 text-gray-200 font-mono text-sm border-b border-gray-700",children:t}),e.jsx("pre",{className:"p-4 overflow-x-auto",children:e.jsx("code",{className:`language-${n}`,children:r})})]}),h=`import pandas as pd
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
emails['cleaned_content'] = emails['content'].apply(clean_text)`,f=`from sklearn.feature_extraction.text import TfidfVectorizer

# Create TF-IDF vectorizer
tfidf = TfidfVectorizer(max_features=5000)

# Transform the cleaned email content to TF-IDF features
X = tfidf.fit_transform(emails['cleaned_content'])
y = emails['label']  # 1 for spam, 0 for ham

# Get feature names
feature_names = tfidf.get_feature_names_out()

# Preview the features
print(f"Number of features extracted: {len(feature_names)}")
print("Sample features:", feature_names[:10])`,x=`from sklearn.model_selection import train_test_split
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
print(classification_report(y_test, y_pred))`,u=`from sklearn.feature_selection import SelectFromModel

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
print(f"\\nAccuracy with selected features: {selected_accuracy:.4f}")`,b=()=>e.jsxs("div",{className:"pt-20",children:[e.jsx("section",{className:"bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-16",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"max-w-3xl mx-auto text-center animate-fade-in",children:[e.jsx("h1",{className:"text-4xl font-bold mb-4 text-white",children:"Methodology"}),e.jsx("p",{className:"text-xl text-indigo-100 mb-6",children:"An in-depth look at our approach to spam detection using Random Forest and feature selection"})]})})}),e.jsx("section",{className:"section bg-white",children:e.jsxs("div",{className:"container",children:[e.jsx(o,{title:"Our Approach",subtitle:"We used Python and Jupyter Notebook for implementing our spam detection pipeline"}),e.jsxs("div",{className:"mb-12",children:[e.jsx("p",{className:"mb-4",children:"Our methodology consists of a multi-stage pipeline that processes raw email data, extracts relevant features, applies machine learning algorithms, and optimizes performance through feature selection."}),e.jsx("p",{children:"The primary focus of our research was to enhance spam detection accuracy by identifying and selecting the most informative features while using Random Forest as our classification algorithm of choice due to its robustness and interpretability."})]}),e.jsxs("div",{className:"mb-12",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-6 text-blue-900",children:"Process Overview"}),e.jsx(s,{number:1,title:"Data Cleaning & Preprocessing",description:"Converting text to lowercase, removing HTML tags, URLs, punctuation, numbers, and stopwords, then applying stemming.",icon:e.jsx(l,{size:20})}),e.jsx(s,{number:2,title:"Feature Extraction",description:"Using TF-IDF vectorization to convert the cleaned text into numerical features that represent the importance of words.",icon:e.jsx(m,{size:20})}),e.jsx(s,{number:3,title:"Random Forest Classification",description:"Training a Random Forest model on the extracted features to classify emails as spam or legitimate.",icon:e.jsx(p,{size:20})}),e.jsx(s,{number:4,title:"Feature Selection",description:"Applying feature importance analysis to identify and select the most relevant features for improved performance.",icon:e.jsx(d,{size:20})})]})]})}),e.jsx("section",{className:"section bg-gray-50",children:e.jsxs("div",{className:"container",children:[e.jsx(o,{title:"Implementation Details",subtitle:"Code snippets and explanations of our implementation"}),e.jsxs("div",{className:"space-y-12",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-semibold mb-4 text-blue-900",children:"1. Data Cleaning & Preprocessing"}),e.jsx("p",{className:"mb-4",children:"Email data often contains various elements like HTML tags, special characters, and formatting that can create noise for our models. Our preprocessing pipeline cleans this data and prepares it for feature extraction."}),e.jsx(a,{code:h,title:"data_cleaning.py"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-semibold mb-4 text-blue-900",children:"2. Feature Extraction"}),e.jsx("p",{className:"mb-4",children:"We used Term Frequency-Inverse Document Frequency (TF-IDF) vectorization to convert the cleaned email text into numerical features. This technique captures the importance of words in emails relative to the entire corpus."}),e.jsx(a,{code:f,title:"feature_extraction.py"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-semibold mb-4 text-blue-900",children:"3. Random Forest Classification"}),e.jsx("p",{className:"mb-4",children:"Random Forest was selected as our primary classifier due to its ability to handle high-dimensional data, resistance to overfitting, and capability to provide feature importance insights."}),e.jsx(a,{code:x,title:"random_forest_classifier.py"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-semibold mb-4 text-blue-900",children:"4. Feature Selection"}),e.jsx("p",{className:"mb-4",children:"To enhance our model's performance and interpretability, we applied feature importance analysis to identify the most relevant features for spam detection, reducing dimensionality while maintaining accuracy."}),e.jsx(a,{code:u,title:"feature_selection.py"})]})]})]})}),e.jsx("section",{className:"section bg-white",children:e.jsxs("div",{className:"container",children:[e.jsx(o,{title:"Key Innovations",subtitle:"What sets our approach apart from traditional spam detection methods"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"card p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-blue-900",children:"Optimized Feature Selection"}),e.jsx("p",{className:"text-gray-700",children:"We developed a novel approach to feature selection that identifies not just individual important features, but also considers the interactions between features to maximize detection accuracy while minimizing false positives."})]}),e.jsxs("div",{className:"card p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-blue-900",children:"Hyperparameter Optimization"}),e.jsx("p",{className:"text-gray-700",children:"Using grid search with cross-validation, we systematically identified the optimal Random Forest parameters that provide the best balance between precision and recall for spam detection."})]}),e.jsxs("div",{className:"card p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-blue-900",children:"Enhanced Text Processing"}),e.jsx("p",{className:"text-gray-700",children:"Our preprocessing pipeline includes specialized techniques for handling email-specific elements like headers, signatures, and forwarded content, resulting in cleaner and more informative features."})]}),e.jsxs("div",{className:"card p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-blue-900",children:"Ensemble Approach"}),e.jsx("p",{className:"text-gray-700",children:"While Random Forest is itself an ensemble method, we experimented with combining its predictions with other classifiers like Gradient Boosting to further enhance detection capabilities for certain spam types."})]})]})]})})]});export{b as default};
