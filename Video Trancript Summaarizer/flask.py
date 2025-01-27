from flask import Flask, request, jsonify
import requests
import os
from moviepy.editor import VideoFileClip
import speech_recognition as sr

app = Flask(__name__)

@app.route('/summarize', methods=['POST'])
def summarize():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400
    
    file = request.files['file']
    
    # Save the uploaded video file temporarily
    video_path = f'temp_{file.filename}'
    file.save(video_path)

    # Extract audio from video
    audio_path = 'temp_audio.wav'
    
    with VideoFileClip(video_path) as video:
        video.audio.write_audiofile(audio_path)

    # Transcribe audio to text using SpeechRecognition library
    recognizer = sr.Recognizer()
    
    with sr.AudioFile(audio_path) as source:
        audio_data = recognizer.record(source)
        transcript = recognizer.recognize_google(audio_data)

    # Here you would send the transcript to an external summarization API
    api_url = 'https://api.example.com/summarize'  # Replace with actual API endpoint
    
    response = requests.post(api_url, json={'text': transcript})
    
    if response.status_code == 200:
        summary = response.json().get('summary')
        os.remove(video_path)   # Clean up temporary files
        os.remove(audio_path)
        return jsonify(summary=summary)
    
    os.remove(video_path)   # Clean up temporary files
    os.remove(audio_path)
    
    return jsonify({'error': 'Error processing transcript'}), 500

if __name__ == '__main__':
    app.run(debug=True)