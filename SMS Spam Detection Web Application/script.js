document.getElementById('smsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const smsMessage = document.getElementById('smsInput').value;

    // Send the SMS message to the backend for classification
    fetch('/classify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: smsMessage })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('classification').innerText = data.result;
        document.getElementById('result').style.display = 'block';
    });
});