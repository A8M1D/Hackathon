document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    const formData = new FormData();
    formData.append('file', file);

    // Send the file to the backend for transcription and summarization
    fetch('/summarize', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('summaryOutput').innerText = data.summary; // Adjust based on API response
    })
    .catch(error => console.error('Error:', error));
});