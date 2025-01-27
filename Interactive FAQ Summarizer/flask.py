from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# Sample FAQ data (in practice, this could be loaded from a database)
faqs = {
    "What is your return policy?": "You can return items within 30 days of purchase.",
    "How do I track my order?": "You can track your order using the tracking link sent to your email.",
}

@app.route('/summarize', methods=['POST'])
def summarize():
    data = request.json
    question = data['question']

    # Simple keyword matching for demonstration purposes
    answer = "I'm sorry, I don't have an answer for that."
    
    for q, a in faqs.items():
        if question.lower() in q.lower():
            answer = a
            break

    # You could integrate with an external summarization API here if needed

    return jsonify(answer=answer)

if __name__ == '__main__':
    app.run(debug=True)