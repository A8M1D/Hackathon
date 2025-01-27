document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Simulated user login (in a real application, this would involve server-side authentication)
    const email = document.getElementById('email').value;
    
    // Display email container after login
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('emailContainer').style.display = 'block';

    // Load simulated emails (in a real application, this would fetch from a server)
    loadEmails(email);
});

function loadEmails(userEmail) {
    const inboxEmails = [
        { sender: 'friend@example.com', subject: 'Hey there!' },
        { sender: 'spam@example.com', subject: 'Congratulations! You won!' }
    ];

    const inboxTableBody = document.querySelector('#inboxTable tbody');
    const spamTableBody = document.querySelector('#spamTable tbody');

    inboxEmails.forEach(email => {
        if (isSpam(email)) {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${email.sender}</td><td>${email.subject}</td><td><button onclick="markAsNotSpam('${email.sender}', '${email.subject}')">Not Spam</button></td>`;
            spamTableBody.appendChild(row);
        } else {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${email.sender}</td><td>${email.subject}</td><td><button onclick="markAsSpam('${email.sender}', '${email.subject}')">Spam</button></td>`;
            inboxTableBody.appendChild(row);
        }
    });
}

function isSpam(email) {
    // Simple rule-based detection (can be replaced with machine learning model)
    return email.subject.includes('Congratulations');
}

function markAsSpam(sender, subject) {
    alert(`Marked ${subject} from ${sender} as spam.`);
}

function markAsNotSpam(sender, subject) {
    alert(`Marked ${subject} from ${sender} as not spam.`);
}

document.getElementById('logoutButton').addEventListener('click', function() {
    // Reset UI for logout
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('emailContainer').style.display = 'none';
});