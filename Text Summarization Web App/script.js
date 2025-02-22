document.getElementById('summarizeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const text = document.getElementById('inputText').value;

    fetch('/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('summaryOutput').innerText = data.summary;
    });
});