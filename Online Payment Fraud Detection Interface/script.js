document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const transactionId = document.getElementById('transactionId').value;
    const amount = parseFloat(document.getElementById('transactionAmount').value);
    const type = document.getElementById('transactionType').value;

    // Add new report to the table
    const tableBody = document.querySelector('#reportTable tbody');
    
    const status = detectFraud(amount, type);
    
    const row = document.createElement('tr');
    row.innerHTML = `<td>${transactionId}</td><td>$${amount.toFixed(2)}</td><td>${type}</td><td>${status}</td>`;
    
    tableBody.appendChild(row);

    // Clear form inputs
    this.reset();
});

function detectFraud(amount, type) {
    const threshold = 500; // Set threshold for fraud detection based on amount
    if (amount > threshold && type === 'purchase') {
        return 'Fraudulent';
    }
    
    return 'Legitimate';
}