document.getElementById('generateTransactions').addEventListener('click', generateTransactions);

function generateTransactions() {
    const tableBody = document.querySelector('#transactionTable tbody');
    tableBody.innerHTML = ''; // Clear previous transactions

    for (let i = 0; i < 10; i++) { // Generate 10 transactions
        const transactionId = i + 1;
        const amount = Math.floor(Math.random() * 1000) + 1; // Random amount between 1 and 1000
        const status = detectFraud(amount);
        
        const row = document.createElement('tr');
        row.innerHTML = `<td>${transactionId}</td><td>$${amount}</td><td>${status}</td>`;
        tableBody.appendChild(row);
    }
}

function detectFraud(amount) {
    const threshold = 800; // Set threshold for fraud detection
    return amount > threshold ? 'Fraudulent' : 'Legitimate';
}