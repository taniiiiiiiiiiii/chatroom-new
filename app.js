// DOM Elements
const loginPage = document.getElementById('loginPage');
const chatroomPage = document.getElementById('chatroomPage');
const usernameInput = document.getElementById('usernameInput');
const usernameDisplay = document.getElementById('usernameDisplay');
const loginButton = document.getElementById('loginButton');
const sendMessageButton = document.getElementById('sendMessageButton');
const messageInput = document.getElementById('messageInput');
const messages = document.getElementById('messages');
const logoutButton = document.getElementById('logoutButton');

// Global variables
let username = '';

// Show Chatroom after login
function showChatroom() {
    usernameDisplay.textContent = username;
    loginPage.style.display = 'none';
    chatroomPage.style.display = 'block';
}

// Show Login page
function showLoginPage() {
    loginPage.style.display = 'block';
    chatroomPage.style.display = 'none';
}

// Send message to the chat
function sendMessage() {
    const message = messageInput.value.trim();
    if (message) {
        const messageElement = document.createElement('p');
        messageElement.textContent = `${username}: ${message}`;
        messages.appendChild(messageElement);
        messageInput.value = ''; // Clear the input after sending
        messages.scrollTop = messages.scrollHeight; // Auto-scroll to the bottom
    }
}

// Event Listeners
loginButton.addEventListener('click', () => {
    username = usernameInput.value.trim();
    if (username) {
        showChatroom();
    } else {
        alert('Please enter a valid username.');
    }
});

sendMessageButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

logoutButton.addEventListener('click', () => {
    username = '';
    showLoginPage();
});

// Initially show the login page
showLoginPage();
