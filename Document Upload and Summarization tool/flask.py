from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/summarize', methods=['POST'])
def summarize():
    file = request.files['file']
    
    # Here you would send the file to an external summarization API
    # For example purposes, let's assume we have a dummy endpoint:
    
    api_url = 'https://api.example.com/summarize'  # Replace with actual API endpoint
    files = {'file': file.read()}
    
    response = requests.post(api_url, files=files)
    
    if response.status_code == 200:
        summary = response.json().get('summary')
        return jsonify(summary=summary)
    
    return jsonify(summary='Error processing document'), 500

if __name__ == '__main__':
    app.run(debug=True)