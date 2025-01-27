document.getElementById('faqForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const question = document.getElementById('questionInput').value;

    // Send the question to the backend for summarization
    fetch('/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('answerOutput').innerText = data.answer; // Adjust based on API response
    })
    .catch(error => console.error('Error:', error));
});