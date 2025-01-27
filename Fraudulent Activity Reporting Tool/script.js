document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const reporterName = document.getElementById('reporterName').value;
    const reportDetails = document.getElementById('reportDetails').value;

    // Add new report to the table
    const tableBody = document.querySelector('#reportTable tbody');
    
    const row = document.createElement('tr');
    row.innerHTML = `<td>${reporterName}</td><td>${reportDetails}</td>`;
    
    tableBody.appendChild(row);

    // Clear form inputs
    this.reset();
});