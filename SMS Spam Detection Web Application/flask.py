from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load your trained model (assuming it's saved as 'spam_model.pkl')
model = joblib.load('spam_model.pkl')

@app.route('/classify', methods=['POST'])
def classify():
    data = request.json
    message = data['message']
    
    # Preprocess message and make prediction
    prediction = model.predict([message])[0]
    
    result = "Spam" if prediction == 1 else "Ham"
    
    return jsonify(result=result)

if __name__ == '__main__':
    app.run(debug=True)
ModelTraining(Python):
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
import joblib

# Load dataset
data = pd.read_csv('spam.csv', encoding='latin-1')
X = data['message']
y = data['label'].map({'ham': 0, 'spam': 1})

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Vectorize text data
vectorizer = CountVectorizer()
X_train_vectorized = vectorizer.fit_transform(X_train)

# Train model
model = MultinomialNB()
model.fit(X_train_vectorized, y_train)

# Save model and vectorizer for later use
joblib.dump(model, 'spam_model.pkl')
joblib.dump(vectorizer, 'vectorizer.pkl')